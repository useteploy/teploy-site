---
order: 2
title: Quick Start
description: Deploy your first app in under 5 minutes with the teploy CLI.
---

Get your first app deployed in under 5 minutes using the teploy CLI.

## Prerequisites

- A server with SSH access (any VPS or bare metal running Linux)
- A domain name pointing to your server's IP

## 1. Install the CLI

```bash
brew install teploy
```

Or download the binary directly from [GitHub releases](https://github.com/teploy/teploy/releases).

## 2. Prepare your server

Point the CLI at a fresh server and it will install Docker, configure the firewall, and start Caddy:

```bash
teploy setup 203.0.113.10 --name production
```

This adds the server to `~/.teploy/servers.yml` and provisions it for deployments.

## 3. Initialize your project

From your project directory:

```bash
teploy init
```

This generates a `teploy.yml` config file. For a typical web app, it looks like this:

```yaml
app: myapp
domain: myapp.com
server: production
```

That is the minimum config. Three lines.

## 4. Deploy

```bash
teploy deploy
```

Teploy detects your Dockerfile (or uses Nixpacks if none exists), builds the image, ships it to your server, starts the container with health checking, routes traffic through Caddy with auto-HTTPS, and stops the old container. Zero downtime.

## 5. Verify

```bash
teploy status
```

Your app is live at `https://myapp.com` with an auto-provisioned SSL certificate.

## Add a database

Define accessories in `teploy.yml`:

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

The next deploy automatically starts Postgres and injects `DATABASE_URL` into your app's environment.

## Set environment variables

```bash
teploy env set NODE_ENV=production API_KEY=sk_live_xxx
```

## Set up auto-deploy

```bash
teploy autodeploy setup --branch main
```

This installs a webhook listener on your server. Add the webhook URL to your GitHub repo settings, and every push to `main` triggers a deploy.

## Optional: Sign up for Teploy Platform

If you want managed VPS provisioning, CDN, domain registration, email/SMS, or tax compliance tooling, sign up at [app.teploy.io](https://app.teploy.io). The Platform provisions servers with the CLI pre-installed.

## Next steps

- [Core Concepts](/getting-started/concepts) -- CLI vs Platform, state files, how it all works
- [Docker deploys](/deploying/docker) -- Dockerfile, local vs server builds
- [Databases](/deploying/databases) -- PostgreSQL, MySQL, Redis as accessories
- [Environment variables](/reference/env-vars) -- Managing config per app
- [Custom domains](/domains/custom) -- Point your domain to your app
