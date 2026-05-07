---
title: "Environment Variables Best Practices for Production Apps"
description: "Learn how to manage secrets, API keys, and configuration across environments. Covers security, organization, and common pitfalls to avoid."
publishedAt: 2026-01-01
author:
  name: "Teploy Team"
  twitter: "teploy"
category: "Guides"
tags:
  - security
  - configuration
  - best-practices
  - secrets
---

Environment variables are the standard way to configure applications across different environments. But managing them poorly can lead to security breaches, deployment failures, and debugging nightmares.

In this guide, we'll cover best practices for managing environment variables in production applications.

## Why Environment Variables?

Environment variables solve the "configuration problem"—your app needs different settings in development, staging, and production, but you don't want to hardcode them.

Benefits:
- **Security**: Secrets stay out of your codebase
- **Flexibility**: Change config without redeploying
- **Portability**: Same code runs anywhere
- **12-Factor compliance**: Industry standard approach

## Anatomy of Good Environment Variables

### Naming Conventions

Use clear, consistent naming:

```
# Good: Clear, namespaced, uppercase
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
STRIPE_SECRET_KEY=sk_live_...
SENDGRID_API_KEY=SG....

# Bad: Vague, inconsistent
db=postgresql://...
redisUrl=redis://...
stripe_key=sk_live_...
```

**Best practices:**
- Use SCREAMING_SNAKE_CASE
- Prefix with service name (STRIPE_, AWS_, SENDGRID_)
- Be descriptive (SECRET_KEY vs KEY)
- Use consistent patterns (_URL, _KEY, _SECRET)

### Categories of Variables

Organize variables by type:

```
# ─── App Configuration ───
NODE_ENV=production
PORT=3000
LOG_LEVEL=info

# ─── Database ───
DATABASE_URL=postgresql://...
DATABASE_POOL_SIZE=10

# ─── External Services ───
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
SENDGRID_API_KEY=SG....

# ─── Feature Flags ───
FEATURE_NEW_CHECKOUT=true
FEATURE_BETA_DASHBOARD=false

# ─── URLs ───
APP_URL=https://myapp.com
API_URL=https://api.myapp.com
```

## Secrets vs Configuration

Not all environment variables are secrets. Distinguish between them:

### Secrets (sensitive)
- API keys
- Database passwords
- Encryption keys
- OAuth client secrets
- Webhook secrets

### Configuration (non-sensitive)
- Feature flags
- Log levels
- Port numbers
- Environment name
- Public URLs

**Why it matters**: Secrets need encryption, rotation policies, and access controls. Configuration just needs version control.

## Managing Variables in Teploy

### Adding Variables

1. Go to **Project** → **Settings** → **Environment**
2. Click **Add Variable**
3. Enter key and value
4. Mark sensitive values as **Secret**

Secrets are:
- Encrypted at rest
- Hidden after initial entry
- Not visible in logs
- Masked in the dashboard

### Bulk Import

For migrating from another platform:

```
# .env format supported
DATABASE_URL=postgresql://user:pass@host:5432/db
REDIS_URL=redis://host:6379
API_KEY=your_api_key
```

Paste directly or upload a file.

### Environment Inheritance

Teploy supports variable inheritance for multiple environments:

```
# Base (inherited by all)
LOG_LEVEL=info
APP_NAME=MyApp

# Production (overrides base)
NODE_ENV=production
DATABASE_URL=postgresql://prod-db/...

# Staging (overrides base)
NODE_ENV=staging
DATABASE_URL=postgresql://staging-db/...
```

## Security Best Practices

### Never Commit Secrets

Add `.env` files to `.gitignore`:

```text
# .gitignore
.env
.env.local
.env.*.local
*.pem
*.key
```

Use `.env.example` to document required variables:

```
# .env.example (committed to git)
DATABASE_URL=postgresql://user:password@localhost:5432/myapp
REDIS_URL=redis://localhost:6379
STRIPE_SECRET_KEY=sk_test_...
```

### Rotate Secrets Regularly

Set rotation schedules:
- **API keys**: Every 90 days
- **Database passwords**: Every 180 days
- **Encryption keys**: Annually (with re-encryption)

Teploy tracks secret age and can remind you when rotation is due.

### Use Secret References

Instead of copying secrets between services, reference them:

```
# In Teploy, reference another service's secret
DATABASE_URL=${postgres-main.DATABASE_URL}
```

When the source changes, references update automatically.

### Audit Access

Track who accessed what:
- Teploy logs all secret access
- View audit trail in **Settings** → **Security** → **Audit Log**
- Set up alerts for unusual access patterns

## Common Patterns

### Database URLs

Always use connection strings:

```
# PostgreSQL
DATABASE_URL=postgresql://user:pass@host:5432/dbname?sslmode=require

# MySQL
DATABASE_URL=mysql://user:pass@host:3306/dbname

# MongoDB
MONGODB_URI=mongodb://user:pass@host:27017/dbname
```

### API Keys with Environments

Many services have test/live keys:

```
# Development
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...

# Production
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
```

### Feature Flags

Use boolean strings:

```
FEATURE_NEW_CHECKOUT=true
FEATURE_DARK_MODE=false
FEATURE_BETA_API=true
```

Parse them properly:

```javascript
// JavaScript
const featureEnabled = process.env.FEATURE_NEW_CHECKOUT === 'true';

// Python
feature_enabled = os.environ.get('FEATURE_NEW_CHECKOUT') == 'true'
```

### URLs and Endpoints

Include protocol and trailing slash policy:

```
# Consistent: no trailing slash
APP_URL=https://myapp.com
API_URL=https://api.myapp.com
CDN_URL=https://cdn.myapp.com

# Or consistent: with trailing slash
APP_URL=https://myapp.com/
API_URL=https://api.myapp.com/
```

## Framework-Specific Tips

### Next.js

Next.js has special prefixes:

```
# Server-side only (secure)
DATABASE_URL=postgresql://...
API_SECRET=...

# Exposed to browser (prefix with NEXT_PUBLIC_)
NEXT_PUBLIC_APP_URL=https://myapp.com
NEXT_PUBLIC_STRIPE_KEY=pk_live_...
```

**Warning**: Never put secrets in `NEXT_PUBLIC_` variables!

### Node.js

Use `dotenv` for local development:

```javascript
// Only in development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
```

### Python

Use `python-dotenv`:

```python
from dotenv import load_dotenv
import os

load_dotenv()  # Load .env file in development

database_url = os.environ['DATABASE_URL']
```

### Go

Use `godotenv` or read directly:

```go
import "os"

func main() {
    dbURL := os.Getenv("DATABASE_URL")
    if dbURL == "" {
        log.Fatal("DATABASE_URL is required")
    }
}
```

## Debugging Tips

### Missing Variables

Always validate required variables at startup:

```javascript
// Node.js
const required = ['DATABASE_URL', 'REDIS_URL', 'API_KEY'];
for (const key of required) {
  if (!process.env[key]) {
    console.error(`Missing required env var: ${key}`);
    process.exit(1);
  }
}
```

### Wrong Environment

Log the environment on startup:

```javascript
console.log(`Starting in ${process.env.NODE_ENV} mode`);
console.log(`Database: ${process.env.DATABASE_URL?.split('@')[1]}`); // Log host only
```

### Variable Not Updating

After changing variables in Teploy:
1. **Redeploy** your application
2. Environment variables are injected at container start
3. Changes require a new deployment

## Migrating from Other Platforms

### From Vercel

Export your variables:

```bash
vercel env pull .env.production
```

Then import to Teploy via the dashboard.

### From Heroku

```bash
heroku config -a your-app --shell > .env.production
```

### From Railway

Export from Railway's dashboard as JSON, then convert to `.env` format.

## Checklist

Before going to production:

- [ ] All secrets marked as sensitive in Teploy
- [ ] `.env` files in `.gitignore`
- [ ] `.env.example` committed with placeholder values
- [ ] Required variables validated at app startup
- [ ] No secrets in `NEXT_PUBLIC_` or similar client-exposed prefixes
- [ ] Rotation schedule documented
- [ ] Team members have appropriate access levels

---

*Questions about environment variable management? [Contact us](/contact) or read the [documentation](/docs/reference/env-vars).*
