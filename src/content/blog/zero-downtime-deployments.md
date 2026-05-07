---
title: "How Zero-Downtime Deployments Work in Teploy"
description: "Learn how Teploy achieves zero-downtime deployments using blue-green deployment, health checks, and automatic rollbacks. Never show users an error page again."
publishedAt: 2025-12-28
author:
  name: "Teploy Team"
  twitter: "teploy"
category: "Engineering"
tags:
  - deployment
  - devops
  - reliability
  - engineering
---

Nobody wants their users to see an error page during deployments. Yet many teams still accept brief outages as "just how deployments work."

At Teploy, we've built zero-downtime deployments into the core of our platform. In this post, we'll explain how it works and how you can ensure your deployments never interrupt your users.

## The Problem with Traditional Deployments

Traditional deployment looks like this:

1. Stop the old application
2. Deploy the new version
3. Start the new application
4. Hope it works

The gap between steps 1 and 3 is downtime. Even if it's just 10 seconds, that's 10 seconds of failed requests, angry users, and lost revenue.

```
Timeline:
─────────────────────────────────────────────────────►
Old Version ────────┐
                    │ ← DOWNTIME (10-60 seconds)
                    └────── New Version ────────────►
                    ↑
                    Users see errors here
```

## Blue-Green Deployment

Teploy uses blue-green deployment to eliminate this gap. Here's how it works:

### The Concept

Instead of replacing your application in place, we run both versions simultaneously:

- **Blue**: The current production version (serving traffic)
- **Green**: The new version (starting up)

Traffic switches only after the new version is verified healthy.

```
Timeline:
─────────────────────────────────────────────────────►
Blue (old) ─────────────────────────┐
                                    │ ← Instant switch
Green (new) ───────────[health]─────┴────────────────►
            ↑                       ↑
            Starting up             Traffic switched
            (no traffic yet)        (zero downtime)
```

### Step by Step

1. **Build**: Teploy builds your new code into a Docker image
2. **Pull**: The agent pulls the new image to your server
3. **Start**: A new container (green) starts alongside the old one (blue)
4. **Health Check**: Teploy verifies the new container is healthy
5. **Switch**: Traefik routes traffic to the new container
6. **Cleanup**: The old container is stopped and removed

The key insight: users are never routed to an unhealthy container.

## Health Checks: The Critical Component

Health checks are what make zero-downtime deployments possible. Without them, you'd switch traffic to a container that might not be ready.

### Configuring Health Checks

In Teploy, configure your health check endpoint:

```
Path: /api/health
Interval: 5s
Timeout: 10s
Retries: 3
Start Period: 30s
```

**Settings explained:**
- **Path**: The endpoint to check (should return 200 OK)
- **Interval**: How often to check
- **Timeout**: How long to wait for a response
- **Retries**: Failed checks before marking unhealthy
- **Start Period**: Grace period for slow-starting apps

### Writing a Good Health Check

A health check should verify your app can serve requests:

```javascript
// Express.js
app.get('/api/health', async (req, res) => {
  try {
    // Check database connection
    await db.query('SELECT 1');

    // Check Redis connection
    await redis.ping();

    res.status(200).json({ status: 'healthy' });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      error: error.message
    });
  }
});
```

**What to check:**
- Database connectivity
- Cache connectivity (Redis, Memcached)
- Critical external services (if fast to check)

**What NOT to check:**
- Slow external APIs (adds latency)
- Non-critical services (prevents deployment)
- Business logic (health checks should be simple)

### Health Check Anti-Patterns

**Too Simple**

```javascript
// Bad: Always returns 200, even if app is broken
app.get('/health', (req, res) => res.send('OK'));
```

**Too Complex**

```javascript
// Bad: Checks everything, takes 30 seconds
app.get('/health', async (req, res) => {
  await checkDatabase();
  await checkRedis();
  await checkStripe();
  await checkSendgrid();
  await checkS3();
  await runBusinessLogicTests();
  // ... 20 more checks
});
```

**Just Right**

```javascript
// Good: Checks critical dependencies, fast response
app.get('/health', async (req, res) => {
  const dbOk = await db.query('SELECT 1').catch(() => false);
  const redisOk = await redis.ping().catch(() => false);

  if (dbOk && redisOk) {
    res.status(200).json({ status: 'healthy' });
  } else {
    res.status(503).json({ status: 'unhealthy', db: dbOk, redis: redisOk });
  }
});
```

## Automatic Rollbacks

What happens if your new version is broken? Teploy automatically rolls back.

### How Rollback Works

1. New container starts
2. Health checks fail (after retries)
3. Teploy marks deployment as failed
4. Old container keeps running
5. New container is removed
6. You're notified of the failure

Your users never saw the broken version.

```
Timeline:
─────────────────────────────────────────────────────►
Blue (old) ───────────────────────────────────────────► (keeps running)
Green (new) ───────[health ✗][health ✗][health ✗]──X
                   ↑                               ↑
                   Health checks failing           Rolled back
                   (traffic never switched)
```

### Manual Rollback

Sometimes issues appear after health checks pass. For these cases:

1. Go to **Project** → **Deployments**
2. Find a previous successful deployment
3. Click **Rollback**

Teploy redeploys the old version using the same zero-downtime process.

## Graceful Shutdown

The old container doesn't just get killed. Teploy handles graceful shutdown:

1. **SIGTERM** sent to old container
2. Container has 30 seconds to finish in-flight requests
3. If still running, **SIGKILL** terminates it

### Handling SIGTERM in Your App

```javascript
// Node.js
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');

  server.close(() => {
    console.log('HTTP server closed');

    // Close database connections
    db.end(() => {
      console.log('Database connections closed');
      process.exit(0);
    });
  });

  // Force exit after timeout
  setTimeout(() => {
    console.error('Forced shutdown after timeout');
    process.exit(1);
  }, 25000);
});
```

```python
# Python with uvicorn
import signal
import sys

def handle_sigterm(signum, frame):
    print("SIGTERM received, shutting down")
    sys.exit(0)

signal.signal(signal.SIGTERM, handle_sigterm)
```

## Database Migrations

Database migrations are tricky with zero-downtime deployments. The old and new versions run simultaneously during the transition.

### The Problem

```
Timeline:
─────────────────────────────────────────────────────►
Old code (expects old schema) ────────┐
New code (expects new schema) ────────┴─────────────►
                                      ↑
                                      Both running here
```

If your migration changes the schema incompatibly, one version will break.

### The Solution: Expand-Contract Pattern

**Phase 1: Expand** (backward compatible)
- Add new columns (nullable)
- Add new tables
- Don't remove or rename anything

**Phase 2: Migrate**
- Deploy code that uses new schema
- Backfill data if needed

**Phase 3: Contract** (cleanup)
- Remove old columns
- Remove old tables

### Example: Renaming a Column

**Wrong** (causes downtime):
```sql
ALTER TABLE users RENAME COLUMN name TO full_name;
```

**Right** (zero downtime):

```sql
-- Phase 1: Add new column
ALTER TABLE users ADD COLUMN full_name VARCHAR(255);
UPDATE users SET full_name = name;

-- Phase 2: Deploy code using full_name

-- Phase 3: Remove old column (after all old code is gone)
ALTER TABLE users DROP COLUMN name;
```

## Connection Draining

When switching traffic, existing connections need to complete. Teploy's Traefik configuration handles this:

1. Stop sending NEW requests to old container
2. Wait for EXISTING requests to complete (up to 30s)
3. Then remove old container from rotation

This prevents request failures during the switch.

## Monitoring Deployments

### Real-Time Logs

Watch deployment progress:

```
[12:00:00] Starting deployment abc123
[12:00:05] Building image...
[12:00:45] Image built successfully
[12:00:46] Pulling image on server...
[12:00:52] Starting new container...
[12:00:55] Running health checks...
[12:01:00] Health check passed (1/3)
[12:01:05] Health check passed (2/3)
[12:01:10] Health check passed (3/3)
[12:01:10] Switching traffic to new container
[12:01:11] Stopping old container
[12:01:15] Deployment complete
```

### Deployment Metrics

Track deployment health over time:
- **Success rate**: % of deployments that succeed
- **Rollback rate**: % that needed rollback
- **Deploy duration**: Time from push to live
- **Health check duration**: Time to pass health checks

## Best Practices Checklist

For zero-downtime deployments:

- [ ] Health check endpoint that verifies dependencies
- [ ] Graceful shutdown handling (SIGTERM)
- [ ] Database migrations are backward compatible
- [ ] No in-memory state that can't be lost
- [ ] Stateless application design
- [ ] Reasonable health check timeouts
- [ ] Monitoring and alerting configured

## Conclusion

Zero-downtime deployments aren't magic—they're a combination of:
1. Running old and new versions simultaneously
2. Health checks that verify readiness
3. Automatic rollback on failure
4. Graceful shutdown of old containers

Teploy handles all of this automatically. You push code, and your users never notice the deployment.

---

*Questions about deployment strategies? [Contact us](/contact) or check the [documentation](/docs).*
