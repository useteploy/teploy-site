---
title: "Monorepo Deployment Strategies with Teploy"
description: "Managing a Turborepo or Nx workspace? Learn how to deploy specific apps from a monorepo to different Teploy services seamlessly."
publishedAt: 2026-01-20
author:
  name: "Teploy Engineering"
  twitter: "teploy"
category: "Tutorials"
tags:
  - monorepo
  - turborepo
  - nx
  - deployment
---

Monorepos are the standard for modern development. Tools like **Turborepo**, **Nx**, and **pnpm workspaces** make sharing code between Backend, Frontend, and UI Libraries easy.

But deploying them can be tricky. "How do I tell the server to only deploy the `web` app and not the `docs` app?"

Teploy handles this natively.

## The Setup

Assume a structure:
```
/apps
  /web       (Next.js)
  /api       (Express)
  /worker    (Node)
/packages
  /ui
  /database
```

## Strategy 1: Root Directory Context

When creating a service in Teploy, you can specify two key paths:
1. **Root Directory**: The base of the repo (where `pnpm-lock.yaml` lives).
2. **Docker Context**: Usually the root, so it can access shared packages.

BUT, to build a *specific* app, you usually need a specific "Build Command" or Dockerfile.

## Strategy 2: Nixpacks Configuration

Teploy uses Nixpacks. You can influence the build via environment variables.

To deploy `apps/web`:
- Set **Base Directory** in Teploy to `.` (Root).
- Set an environment variable: `NIXPACKS_APP_DIR=apps/web`.

Nixpacks will now look straight into that folder, detect Next.js/React, but because the context is the root, it can still resolve local workspace dependencies (like `../../packages/ui`).

## Strategy 3: Custom Dockerfile

For maximum control, create `apps/web/Dockerfile`.
In Teploy, point the **Dockerfile Path** to `apps/web/Dockerfile`.
Important: Set the **Build Context** to the *Project Root* (`.`), so the Dockerfile allows `COPY packages/ packages/`.

## Shared Resources

In a monorepo, you often want your API and Worker to share the *same* database environment variables.
In Teploy, you can create a **Project** (e.g., "My SaaS"). Within that project, variables can be shared across multiple services.

## Conclusion

You don't need a complex CI/CD pipeline (GitHub Actions -> Build -> Push Registry -> Pull) to handle monorepos. Teploy's native build context awareness allows you to connect a massive monorepo and spin up 5 different microservices from it in parallel, all building on your own server.
