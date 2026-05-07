---
title: "Deploy PostgreSQL, Redis, and MongoDB on Your VPS"
description: "A comprehensive guide to deploying and managing databases alongside your applications. Learn backup strategies, connection pooling, and security best practices."
publishedAt: 2026-01-03
author:
  name: "Teploy Team"
  twitter: "teploy"
category: "Guides"
tags:
  - database
  - postgresql
  - redis
  - mongodb
---

Most applications need a database. In this guide, we'll cover deploying PostgreSQL, Redis, and MongoDB on your Teploy-managed server, along with best practices for production use.

## Why Self-Host Your Database?

Managed database services are convenient, but they're also expensive. Compare the costs:

| Database | Managed Service | Self-Hosted on VPS |
|----------|-----------------|-------------------|
| PostgreSQL (2GB) | $15-50/month | ~$2-3/month |
| Redis (1GB) | $10-25/month | ~$1-2/month |
| MongoDB (2GB) | $25-60/month | ~$2-3/month |

With Teploy, you can run databases on the same server as your application or on a dedicated database server—your choice.

## Deploying PostgreSQL

PostgreSQL is the most popular open-source relational database. Here's how to deploy it with Teploy.

### One-Click Setup

1. Go to your project → **Services** → **Add Service**
2. Select **PostgreSQL**
3. Configure:
   - **Version**: 15 (recommended) or 16
   - **Database name**: your_app_db
   - **Username**: your_app_user
4. Click **Deploy**

Teploy handles the rest: creating the container, setting up persistent storage, and generating a secure password.

### Connection Details

After deployment, you'll get connection details:

```
Host: postgres-yourservice
Port: 5432
Database: your_app_db
Username: your_app_user
Password: [generated]
```

The internal hostname (`postgres-yourservice`) is only accessible from your other containers on the same server.

### Configuration Tuning

For production, you'll want to tune PostgreSQL. Teploy exposes common settings:

```
# Memory settings (adjust based on your server)
shared_buffers = 256MB
effective_cache_size = 768MB
work_mem = 16MB

# Connection settings
max_connections = 100
```

Access these in **Services** → **PostgreSQL** → **Configuration**.

### Backup Strategy

Teploy automatically configures daily backups. You can also:

- **Manual backup**: Click "Backup Now" anytime
- **Download backup**: Export for local storage
- **Configure retention**: Keep backups for 7-30 days
- **External storage**: Send backups to S3 or R2

## Deploying Redis

Redis is perfect for caching, sessions, and queues. Here's how to set it up.

### Quick Setup

1. **Services** → **Add Service** → **Redis**
2. Configure:
   - **Version**: 7 (latest stable)
   - **Max memory**: 256MB (adjust as needed)
   - **Persistence**: AOF (recommended for durability)
3. Click **Deploy**

### Memory Management

Redis is an in-memory store. Configure eviction policies based on your use case:

```
# For caching (evict least recently used)
maxmemory-policy allkeys-lru

# For sessions (never evict)
maxmemory-policy noeviction
```

### Common Use Cases

**Session Storage**

```javascript
// Express.js with connect-redis
import RedisStore from 'connect-redis';
import session from 'express-session';
import { createClient } from 'redis';

const redisClient = createClient({
  url: process.env.REDIS_URL
});

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
```

**Caching**

```javascript
// Cache API responses
async function getCachedData(key, fetchFn, ttl = 3600) {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);

  const data = await fetchFn();
  await redis.setex(key, ttl, JSON.stringify(data));
  return data;
}
```

**Job Queues**

```javascript
// With BullMQ
import { Queue, Worker } from 'bullmq';

const emailQueue = new Queue('emails', {
  connection: { url: process.env.REDIS_URL }
});

// Add jobs
await emailQueue.add('welcome', { userId: 123 });

// Process jobs
const worker = new Worker('emails', async (job) => {
  await sendEmail(job.data.userId);
});
```

## Deploying MongoDB

For document-oriented data, MongoDB is a solid choice.

### Setup

1. **Services** → **Add Service** → **MongoDB**
2. Configure:
   - **Version**: 7
   - **Database name**: your_app
   - **Auth**: Enabled (always use authentication)
3. Click **Deploy**

### Connection String

```
mongodb://user:password@mongodb-yourservice:27017/your_app
```

### Indexing Best Practices

MongoDB performance depends heavily on proper indexing:

```javascript
// Create indexes for common queries
db.users.createIndex({ email: 1 }, { unique: true });
db.posts.createIndex({ author: 1, createdAt: -1 });
db.posts.createIndex({ tags: 1 });
```

## Connection Pooling

Database connections are expensive. Use connection pooling for better performance.

### PostgreSQL Pooling with PgBouncer

Teploy optionally deploys PgBouncer alongside PostgreSQL:

```
# PgBouncer settings
pool_mode = transaction
max_client_conn = 1000
default_pool_size = 20
```

Your app connects to PgBouncer (port 6432) instead of PostgreSQL directly.

### Application-Level Pooling

Most ORMs handle pooling automatically:

```javascript
// Prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Connection pool is managed automatically
```

```python
# SQLAlchemy
engine = create_engine(
    DATABASE_URL,
    pool_size=10,
    max_overflow=20,
    pool_pre_ping=True
)
```

## Security Best Practices

### Network Isolation

By default, Teploy databases are only accessible from within your server's Docker network. They're not exposed to the internet.

If you need external access (for development tools):
1. Enable "External Access" in database settings
2. Teploy creates an encrypted tunnel
3. Access via a secure, time-limited URL

### Credential Management

- **Never commit credentials** to git
- **Use environment variables** for connection strings
- **Rotate passwords** periodically
- **Use strong passwords** (Teploy generates 32-character passwords by default)

### Encryption

- **In transit**: All connections use TLS
- **At rest**: Enable volume encryption in server settings

## Monitoring

### Built-in Metrics

Teploy collects database metrics automatically:

- **PostgreSQL**: Connections, queries/sec, cache hit ratio, disk usage
- **Redis**: Memory usage, commands/sec, connected clients
- **MongoDB**: Operations/sec, document counts, index usage

View these in your dashboard under **Services** → **[Database]** → **Metrics**.

### Alerting

Set up alerts for:
- High CPU usage (>80%)
- Low disk space (<20%)
- High connection count
- Replication lag (if using replicas)

## Scaling Databases

### Vertical Scaling

The simplest approach: upgrade your server.

1. Go to **Servers** → **[Your Server]** → **Resize**
2. Select a larger plan
3. Teploy handles the migration with minimal downtime

### Read Replicas

For read-heavy workloads, add read replicas:

1. **Services** → **PostgreSQL** → **Add Replica**
2. Configure replica location
3. Update your app to use read replica for queries

```javascript
// Prisma with read replicas
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

// For read-only queries
const readPrisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_REPLICA_URL,
    },
  },
});
```

## Migration from Managed Services

Moving from a managed database? Here's the process:

### 1. Export Your Data

```bash
# PostgreSQL
pg_dump -h old-host -U user -d dbname > backup.sql

# MongoDB
mongodump --uri="mongodb://old-host/dbname" --out=backup/
```

### 2. Create Database on Teploy

Follow the setup steps above.

### 3. Import Data

```bash
# PostgreSQL
psql -h localhost -U user -d dbname < backup.sql

# MongoDB
mongorestore --uri="mongodb://new-host/dbname" backup/
```

### 4. Update Connection Strings

Update your application's environment variables to point to the new database.

### 5. Verify and Switch

Test thoroughly, then switch traffic.

## Conclusion

Self-hosting databases saves significant money without sacrificing reliability. Teploy makes it as easy as managed services while keeping costs at VPS-level pricing.

Key takeaways:
- Use connection pooling for better performance
- Enable automated backups
- Keep databases on internal networks
- Monitor metrics and set up alerts

---

*Need help with database deployment? [Contact us](/contact) or check the [documentation](/docs/deploying/databases).*
