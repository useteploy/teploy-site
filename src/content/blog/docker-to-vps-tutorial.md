---
title: "Deploy Any Docker App to a VPS with Teploy"
description: "Learn how to deploy custom Docker applications to your own VPS using Teploy. Perfect for APIs, background workers, and apps that need full control."
publishedAt: 2026-01-05
author:
  name: "Teploy Team"
  twitter: "teploy"
category: "Tutorials"
tags:
  - docker
  - tutorial
  - deployment
  - containers
---

While Teploy automatically detects and builds most applications using Nixpacks, sometimes you need full control. Maybe you're running a custom runtime, have specific system dependencies, or need a multi-stage build process.

That's where Docker comes in. In this tutorial, we'll walk through deploying a custom Docker application to your VPS with Teploy.

## What We'll Build

We'll deploy a FastAPI application with:
- A custom Dockerfile
- PostgreSQL database connection
- Background task processing with Celery
- Redis for task queue

This represents a typical production Python application with multiple components.

## Prerequisites

Before starting, make sure you have:

- A Teploy account (coming soon)
- A provisioned server (see [our getting started guide](/docs/getting-started/quick-start))
- A GitHub repository with your application
- Basic Docker knowledge

## Project Structure

Here's our example project structure:

```
myapp/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── models.py
│   ├── tasks.py
│   └── database.py
├── Dockerfile
├── docker-compose.yml (for local dev)
├── requirements.txt
└── .env.example
```

## Writing a Production Dockerfile

A good production Dockerfile should be:
- **Small**: Use multi-stage builds to reduce image size
- **Secure**: Run as non-root user
- **Cacheable**: Order layers by change frequency

Here's our optimized Dockerfile:

```dockerfile
# Build stage
FROM python:3.11-slim as builder

WORKDIR /app

# Install build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /app/wheels -r requirements.txt

# Production stage
FROM python:3.11-slim

WORKDIR /app

# Install runtime dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq5 \
    && rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN addgroup --system --gid 1001 appgroup && \
    adduser --system --uid 1001 --gid 1001 appuser

# Copy wheels from builder
COPY --from=builder /app/wheels /wheels
RUN pip install --no-cache /wheels/*

# Copy application
COPY app/ ./app/

# Set ownership
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Environment variables
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Expose port
EXPOSE 8000

# Run the application
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Key Points

1. **Multi-stage build**: We compile wheels in the builder stage, then copy only the built packages to the production image. This dramatically reduces image size.

2. **Non-root user**: Running as root in containers is a security risk. Always create and use a non-root user.

3. **Layer ordering**: Static files (apt packages, pip dependencies) come before application code. This maximizes Docker's cache efficiency.

4. **Minimal base image**: `python:3.11-slim` is much smaller than the full Python image.

## Creating the Project in Teploy

1. Go to **Projects** → **New Project**
2. Select **GitHub** and choose your repository
3. Teploy will detect your Dockerfile automatically
4. Configure the project:
   - **Name**: `myapp-api`
   - **Branch**: `main`
   - **Server**: Your provisioned server

### Build Settings

When Teploy detects a Dockerfile, it uses it automatically. You can verify or customize in **Settings** → **Build**:

```
Build Type: Dockerfile
Dockerfile Path: ./Dockerfile
Build Context: .
```

## Configuring Environment Variables

Your app needs database and Redis connections. In **Settings** → **Environment**, add:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/myapp
REDIS_URL=redis://localhost:6379/0
SECRET_KEY=your-secret-key-here
ENVIRONMENT=production
```

> **Security note**: Values marked as secrets are encrypted at rest and never displayed after initial entry.

## Deploying the Database

Before deploying our app, we need a PostgreSQL database.

1. Go to your project → **Services** → **Add Service**
2. Select **PostgreSQL**
3. Configure:
   - **Version**: 15
   - **Database name**: myapp
   - **Username**: myapp_user
4. Click **Deploy**

Teploy deploys PostgreSQL as a Docker container on your server. The connection URL is automatically available to your app.

### Internal Networking

Databases deployed through Teploy are accessible via Docker's internal network:

```
postgresql://myapp_user:generated_password@postgres-myapp:5432/myapp
```

This URL isn't exposed to the internet—only containers on the same server can reach it.

## Deploying Redis

For our Celery task queue, we need Redis:

1. Go to **Services** → **Add Service**
2. Select **Redis**
3. Configure:
   - **Version**: 7
   - **Persistence**: Enabled (optional, for task durability)
4. Click **Deploy**

Internal URL: `redis://redis-myapp:6379/0`

## Deploying the Main Application

With services ready, deploy your app:

1. Go to your project dashboard
2. Click **Deploy**
3. Watch the build logs

Teploy will:
1. Clone your repository
2. Build using your Dockerfile
3. Push to our registry
4. Deploy with zero downtime

## Adding a Celery Worker

Most production apps need background workers. Let's add one for Celery.

1. Go to your project → **Services** → **Add Service**
2. Select **Custom Container**
3. Configure:
   - **Name**: celery-worker
   - **Image**: Uses same image as main app
   - **Command override**:

```bash
celery -A app.tasks worker --loglevel=info
```

The worker shares the same codebase and environment variables as your main app but runs a different command.

### Multiple Workers

For production, you might want specialized workers:

```yaml
# High-priority worker
Command: celery -A app.tasks worker -Q high_priority --loglevel=info

# Default worker (with concurrency)
Command: celery -A app.tasks worker -Q default --concurrency=4 --loglevel=info
```

Add each as a separate service in Teploy.

## Adding a Celery Beat Scheduler

For periodic tasks (cron jobs), add Celery Beat:

1. **Services** → **Add Service** → **Custom Container**
2. Configure:
   - **Name**: celery-beat
   - **Command**:

```bash
celery -A app.tasks beat --loglevel=info
```

> **Important**: Only run ONE beat scheduler instance. Multiple beats will duplicate scheduled tasks.

## Health Checks

Teploy automatically checks if your container is healthy. For more control, add a health check endpoint:

```python
# app/main.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
async def health_check():
    # Optionally check database connection
    return {"status": "healthy"}
```

In **Settings** → **Health Check**:

```
Path: /health
Interval: 30s
Timeout: 10s
Retries: 3
```

If the health check fails after deployment, Teploy automatically rolls back.

## Custom Domains and SSL

Add your domain in **Settings** → **Domains**:

1. Click **Add Domain**
2. Enter `api.yourdomain.com`
3. Configure DNS:
   ```
   Type: A
   Name: api
   Value: [Your server IP]
   ```
4. SSL is provisioned automatically via Let's Encrypt

## Persistent Volumes

If your app needs persistent storage (file uploads, for example), configure volumes:

1. **Settings** → **Volumes**
2. Click **Add Volume**
3. Configure:
   - **Name**: uploads
   - **Mount path**: /app/uploads
   - **Size**: 10GB

Volumes persist across deployments and container restarts.

## Docker Compose for Local Development

While Teploy handles production, you'll want Docker Compose for local development:

```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://myapp:myapp@postgres:5432/myapp
      - REDIS_URL=redis://redis:6379/0
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: myapp
      POSTGRES_PASSWORD: myapp
      POSTGRES_DB: myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7

  celery:
    build: .
    command: celery -A app.tasks worker --loglevel=info
    environment:
      - DATABASE_URL=postgresql://myapp:myapp@postgres:5432/myapp
      - REDIS_URL=redis://redis:6379/0
    depends_on:
      - postgres
      - redis

volumes:
  postgres_data:
```

Run locally with:

```bash
docker-compose up --build
```

## Debugging Deployments

If your deployment fails, check:

### Build Logs

The build logs show exactly what happened:

```
Building...
Step 1/15: FROM python:3.11-slim as builder
Step 2/15: WORKDIR /app
...
ERROR: pip install failed
```

### Container Logs

After deployment, check runtime logs:

```
2024-01-15 10:30:45 INFO: Application startup complete
2024-01-15 10:30:46 ERROR: Database connection refused
```

Common issues:
- **Port mismatch**: Ensure your app listens on the port Teploy expects (default 8000 for Python)
- **Environment variables**: Missing or incorrect env vars
- **Database connections**: Check the connection URL format

## Optimizing Build Time

Long builds slow down your iteration. Here are optimization tips:

### 1. Use .dockerignore

```
# .dockerignore
.git
.env
__pycache__
*.pyc
.pytest_cache
venv/
node_modules/
```

### 2. Cache pip downloads

```dockerfile
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install -r requirements.txt
```

### 3. Order layers strategically

Put rarely-changing layers first (system deps), frequently-changing layers last (app code).

## Conclusion

You've deployed a production-ready Docker application with:
- A FastAPI API server
- PostgreSQL database
- Redis cache
- Celery workers for background tasks
- Custom domain with SSL
- Health checks and monitoring

All running on your own VPS, managed through Teploy's dashboard.

The total cost? Your VPS (as low as $5/month) + database storage. Compare that to managed solutions that charge per-request or per-GB.

## Next Steps

- **[Set up preview environments](/docs/features/previews)** for pull request testing
- **[Configure auto-scaling](/docs/servers/scaling)** for traffic spikes
- **[Add monitoring](/docs/monitoring)** with Grafana integration

---

*Questions about Docker deployments? Ask in our [contact us](/contact) or check the [documentation](/docs).*
