---
order: 3
title: Databases
description: Deploy and manage databases as CLI accessories alongside your apps.
---

Databases and other stateful services run as **accessories** alongside your app. Define them in `teploy.yml` and manage them with `teploy accessory`.

## Define accessories

Add an `accessories` block to your `teploy.yml`:

```yaml
app: myapp
domain: myapp.com
server: production

accessories:
  postgres:
    image: postgres:16
    port: 5432
    env:
      POSTGRES_PASSWORD: "${SECRET_DB_PASSWORD}"
    volumes:
      data: /var/lib/postgresql/data
```

When you run `teploy deploy`, the CLI ensures all defined accessories are running before deploying your app. Connection details are automatically injected as environment variables.

## Supported databases

Any Docker image works as an accessory. Common examples:

```yaml
accessories:
  # PostgreSQL
  postgres:
    image: postgres:16
    port: 5432
    env:
      POSTGRES_PASSWORD: secret
    volumes:
      data: /var/lib/postgresql/data

  # MySQL
  mysql:
    image: mysql:8
    port: 3306
    env:
      MYSQL_ROOT_PASSWORD: secret
    volumes:
      data: /var/lib/mysql

  # Redis
  redis:
    image: redis:7
    port: 6379
    volumes:
      data: /data

  # MongoDB
  mongo:
    image: mongo:7
    port: 27017
    env:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: secret
    volumes:
      data: /data/db
```

## Managing accessories

### List running accessories

```bash
teploy accessory list
```

### Start and stop

```bash
teploy accessory stop postgres
teploy accessory start postgres
```

### View logs

```bash
teploy accessory logs postgres
teploy accessory logs postgres --lines 100
```

### Upgrade to a new version

```bash
teploy accessory upgrade postgres postgres:17
```

This pulls the new image, stops the old container, and starts a new one with the same volumes.

## Backups

### On-demand backup

Back up an accessory to S3 with a database-aware dump (not just a volume snapshot):

```bash
teploy accessory backup postgres --bucket my-backups --region us-east-1
```

For PostgreSQL, this runs `pg_dump`. For MySQL, it runs `mysqldump`. For other images, it backs up volumes.

### Scheduled backups

```bash
teploy accessory backup postgres --bucket my-backups --schedule "0 3 * * *"
```

This creates a cron job on the server that runs the backup daily at 3 AM.

### Restore from backup

```bash
teploy accessory restore postgres 2026-03-15 --bucket my-backups
```

This stops the accessory, restores the backup, and restarts it.

## Volume backups

For app-level volume backups (not database-aware):

```bash
teploy backup create --bucket my-backups
teploy backup list --bucket my-backups
teploy backup restore 2026-03-15 --bucket my-backups
teploy backup schedule "0 4 * * *" --bucket my-backups
```

## Backup storage

Use any S3-compatible storage:

| Provider | Endpoint | Pricing |
|----------|----------|---------|
| AWS S3 | Default | $0.023/GB |
| Cloudflare R2 | Custom | $0.015/GB, no egress fees |
| Backblaze B2 | Custom | $0.005/GB |
| Wasabi | Custom | $0.007/GB, no egress fees |
| MinIO | Self-hosted | Free |

See [Recommended Services](/docs/reference/recommendations#object-storage) for setup details.

## Connection strings

When accessories are running, the CLI injects connection environment variables into your app container. Reference them in your application code:

```bash
# Injected automatically based on accessory name and type
DATABASE_URL=postgresql://postgres:secret@myapp-postgres:5432/postgres
REDIS_URL=redis://myapp-redis:6379
```

You can also set connection strings manually:

```bash
teploy env set DATABASE_URL=postgresql://user:pass@myapp-postgres:5432/mydb
```
