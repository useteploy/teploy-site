---
order: 3
title: Environment Variables
description: Configure environment variables for your apps.
---

Environment variables let you configure your apps without changing code.

## Setting variables

### Dashboard

1. Go to **App → Settings → Environment**
2. Add key-value pairs
3. Click **Save**
4. Redeploy for changes to take effect

### CLI

```bash
teploy env set DATABASE_URL=postgres://...
teploy env set API_KEY=secret123
```

### File upload

Upload a `.env` file:

```bash
teploy env import .env.production
```

## Build vs runtime

| Type | Available during | Use for |
|------|------------------|---------|
| Build | Build only | API keys for build tools |
| Runtime | App execution | Database URLs, secrets |
| Both | Build + runtime | Shared config |

Set type in dashboard or with `--build` / `--runtime` flags.

## System variables

These are automatically set:

| Variable | Description |
|----------|-------------|
| `PORT` | Port your app should listen on |
| `NODE_ENV` | `production` |
| `TEPLOY_APP_NAME` | App name |
| `TEPLOY_DEPLOYMENT_ID` | Current deployment ID |

## Secrets

Sensitive values are encrypted at rest and masked in logs.

Mark as secret in dashboard or:

```bash
teploy env set --secret API_KEY=secret123
```

## Variable expansion

Reference other variables:

```bash
DATABASE_HOST=db.example.com
DATABASE_URL=postgres://user:pass@${DATABASE_HOST}/mydb
```

## Per-environment variables

Use prefixes for different environments:

```
PRODUCTION_DATABASE_URL=...
STAGING_DATABASE_URL=...
```

Or use separate apps for each environment.
