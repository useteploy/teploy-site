---
title: "When and How to Scale Your Application on Teploy"
description: "A practical guide to scaling web applications. Learn when to scale up vs out, optimize before scaling, and handle traffic spikes without breaking the bank."
publishedAt: 2025-12-25
author:
  name: "Teploy Team"
  twitter: "teploy"
category: "Guides"
tags:
  - scaling
  - performance
  - optimization
  - infrastructure
---

Your app is getting popular. Response times are creeping up. Users are complaining. It's time to scale—but how?

In this guide, we'll cover practical strategies for scaling your application, from quick optimizations to multi-server architectures.

## Before You Scale: Optimize

Scaling costs money. Before throwing hardware at the problem, make sure you're using your current resources efficiently.

### Find the Bottleneck

Use monitoring to identify what's actually slow:

1. **Check Teploy metrics**: CPU, memory, network, disk I/O
2. **Profile your application**: Where is time being spent?
3. **Analyze database queries**: Are there slow queries?

Common bottlenecks:
- **CPU-bound**: Complex calculations, image processing, encryption
- **Memory-bound**: Large data structures, memory leaks
- **I/O-bound**: Database queries, external API calls, file operations
- **Network-bound**: Large payloads, many external requests

### Quick Wins

Often, optimization provides more value than scaling:

**Database indexing**

```sql
-- Before: Full table scan (slow)
SELECT * FROM orders WHERE user_id = 123;

-- After: Index lookup (fast)
CREATE INDEX idx_orders_user_id ON orders(user_id);
```

**Caching**

```javascript
// Cache expensive computations
const cache = new Map();

function getExpensiveData(key) {
  if (cache.has(key)) {
    return cache.get(key);
  }

  const data = computeExpensiveData(key);
  cache.set(key, data);
  return data;
}
```

**Query optimization**

```javascript
// Bad: N+1 queries
const users = await User.findAll();
for (const user of users) {
  const posts = await Post.findAll({ where: { userId: user.id } });
}

// Good: Single query with join
const users = await User.findAll({
  include: [{ model: Post }]
});
```

**Response compression**

Enable gzip compression for API responses. Most frameworks handle this automatically:

```javascript
// Express.js
import compression from 'compression';
app.use(compression());
```

## Vertical Scaling (Scale Up)

The simplest scaling strategy: get a bigger server.

### When to Scale Up

- CPU consistently above 70%
- Memory usage above 80%
- Response times increasing under load
- You haven't optimized yet (do that first)

### How to Scale Up in Teploy

1. Go to **Servers** → **[Your Server]**
2. Click **Resize**
3. Select a larger plan
4. Confirm the resize

Teploy handles the migration with minimal downtime (usually under 5 minutes).

### Server Size Recommendations

| Traffic Level | Recommended Size | Approximate Cost |
|--------------|------------------|------------------|
| < 50k views/month | 1 vCPU, 1GB RAM | $5/month |
| 50k-200k views/month | 1 vCPU, 2GB RAM | $10/month |
| 200k-500k views/month | 2 vCPU, 4GB RAM | $20/month |
| 500k-1M views/month | 4 vCPU, 8GB RAM | $40/month |
| 1M+ views/month | 8 vCPU, 16GB RAM | $80/month |

These are rough guidelines. Your mileage varies based on app complexity.

### Limits of Vertical Scaling

At some point, bigger servers don't help:
- Single points of failure
- Diminishing returns on cost
- Database bottlenecks don't benefit from app server CPU
- Provider limits (largest servers max out around 64 vCPU)

When you hit these limits, it's time to scale horizontally.

## Horizontal Scaling (Scale Out)

Add more servers instead of bigger ones.

### When to Scale Out

- You need high availability (redundancy)
- You've maxed out vertical scaling
- You need geographic distribution
- Your workload is easily parallelized

### Architecture for Horizontal Scaling

```
                    ┌─────────────────┐
                    │   Load Balancer │
                    │   (Cloudflare)  │
                    └────────┬────────┘
                             │
            ┌────────────────┼────────────────┐
            │                │                │
            ▼                ▼                ▼
     ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
     │  Server 1   │  │  Server 2   │  │  Server 3   │
     │  (App)      │  │  (App)      │  │  (App)      │
     └──────┬──────┘  └──────┬──────┘  └──────┬──────┘
            │                │                │
            └────────────────┼────────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │    Database     │
                    │    Server       │
                    └─────────────────┘
```

### Requirements for Horizontal Scaling

Your app must be **stateless**:

**Bad: Stateful**
```javascript
// Session stored in memory (breaks with multiple servers)
const sessions = {};
app.use((req, res, next) => {
  req.session = sessions[req.cookies.sessionId];
  next();
});
```

**Good: Stateless**
```javascript
// Session stored in Redis (works with multiple servers)
import RedisStore from 'connect-redis';
app.use(session({
  store: new RedisStore({ client: redisClient }),
  // ...
}));
```

**Stateless checklist:**
- [ ] Sessions in Redis or database
- [ ] File uploads to S3/R2, not local disk
- [ ] No in-memory caches (use Redis)
- [ ] No local job queues (use Redis-backed queue)

### Setting Up Multiple Servers in Teploy

1. **Provision additional servers**
   - Same region for low latency
   - Different availability zones for redundancy

2. **Deploy your app to all servers**
   - Teploy can deploy to multiple servers simultaneously
   - Go to **Project** → **Settings** → **Deployment Targets**

3. **Configure load balancing**
   - Use Cloudflare Load Balancing
   - Or set up HAProxy on a dedicated server

4. **Use shared database**
   - Deploy database on a dedicated server
   - Or use managed database (if cost isn't a concern)

## Database Scaling

Often, the database is the bottleneck, not your app servers.

### Read Replicas

For read-heavy workloads, add read replicas:

```
┌──────────────┐
│   Primary    │ ← All writes go here
│   Database   │
└──────┬───────┘
       │ Replication
       │
┌──────┴───────┐
│              │
▼              ▼
┌──────────────┐  ┌──────────────┐
│   Replica 1  │  │   Replica 2  │ ← Reads distributed here
└──────────────┘  └──────────────┘
```

Configure your app to use replicas:

```javascript
// Prisma with read replicas
const prisma = new PrismaClient();
const readPrisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_REPLICA_URL } }
});

// Use readPrisma for SELECT queries
const users = await readPrisma.user.findMany();

// Use prisma for writes
await prisma.user.create({ data: { ... } });
```

### Connection Pooling

Use PgBouncer to handle more connections:

```
Without pooling:
App → 100 connections → Database (overwhelmed)

With pooling:
App → 100 connections → PgBouncer → 20 connections → Database (happy)
```

Teploy can deploy PgBouncer alongside PostgreSQL automatically.

### Caching Layer

Add Redis between your app and database:

```javascript
async function getUser(id) {
  // Check cache first
  const cached = await redis.get(`user:${id}`);
  if (cached) return JSON.parse(cached);

  // Cache miss: query database
  const user = await db.user.findUnique({ where: { id } });

  // Store in cache for next time
  await redis.setex(`user:${id}`, 3600, JSON.stringify(user));

  return user;
}
```

Cache hit rates of 80-90% dramatically reduce database load.

## Handling Traffic Spikes

Sometimes traffic spikes are unpredictable. Here's how to handle them.

### Auto-Scaling (Coming Soon)

Teploy is building auto-scaling that:
- Monitors CPU/memory usage
- Automatically provisions new servers during spikes
- Scales down when traffic normalizes
- Works with your budget constraints

### Manual Preparation

For predictable spikes (product launches, sales):

1. **Scale up beforehand**
   - Resize servers the day before
   - Add extra servers temporarily

2. **Pre-warm caches**
   - Run queries to populate Redis
   - Pre-build expensive computations

3. **Enable CDN caching**
   - Cache static assets at edge
   - Cache API responses where possible

4. **Optimize database**
   - Analyze and vacuum PostgreSQL
   - Check slow query log

### Rate Limiting

Protect your app from abuse:

```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: 'Too many requests, please try again later'
});

app.use('/api/', limiter);
```

## Cost-Effective Scaling

Scaling doesn't have to break the bank.

### Right-Size Your Servers

Don't over-provision. Use monitoring to find the right size:
- **CPU**: Average should be 40-60%
- **Memory**: Should have 20-30% headroom
- **Disk**: Should have 30%+ free space

### Use Spot/Preemptible Instances

For non-critical workloads, use cheaper instance types:
- Background job processing
- Development/staging environments
- Batch processing

### Geographic Optimization

Deploy in the region closest to your users:
- Reduces latency
- Often reduces bandwidth costs
- Better user experience

## Monitoring at Scale

As you scale, monitoring becomes critical.

### Key Metrics

Track these across all servers:
- **Response time** (p50, p95, p99)
- **Error rate**
- **Request rate**
- **CPU/memory per server**
- **Database connection count**
- **Cache hit rate**

### Alerting

Set up alerts for:
- Response time > 500ms (p95)
- Error rate > 1%
- CPU > 80% for 5 minutes
- Memory > 90%
- Disk > 85%

## Scaling Checklist

Before scaling:
- [ ] Profiled application to find bottlenecks
- [ ] Optimized database queries and added indexes
- [ ] Implemented caching where appropriate
- [ ] Enabled compression
- [ ] Made application stateless

When scaling vertically:
- [ ] Reviewed current resource usage
- [ ] Selected appropriate server size
- [ ] Scheduled resize during low traffic

When scaling horizontally:
- [ ] Sessions stored externally (Redis)
- [ ] File uploads to object storage
- [ ] Load balancer configured
- [ ] Health checks working
- [ ] Database connection pooling enabled

---

*Need help scaling your application? [Contact us](/contact) or check the [documentation](/docs/servers/scaling).*
