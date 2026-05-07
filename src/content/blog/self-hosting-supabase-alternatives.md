---
title: "Self-Hosting Supabase Alternatives: PocketBase & Appwrite"
description: "Love Supabase but want full control? Explore self-hosting PocketBase or Appwrite on Teploy for a complete Backend-as-a-Service experience on your own terms."
publishedAt: 2026-01-20
author:
  name: "Teploy Team"
  twitter: "teploy"
category: "Guides"
tags:
  - database
  - supabase
  - pocketbase
  - appwrite
---

Supabase is an incredible open-source Firebase alternative. However, managing the full self-hosted Supabase stack (which involves ~15 Docker containers including Kong, GoTrue, PostgREST, Realtime, etc.) is notoriously heavy. It requires a large server.

If you want the "Backend-as-a-Service" (BaaS) experience—auth, database, file storage, realtime—on a budget, there are lighter alternatives that run beautifully on Teploy.

## Option 1: PocketBase

**PocketBase** is a single-file backend built in Go. It includes:
- Realtime database (SQLite embedded)
- Authentication
- File storage
- Admin dashboard

### Why run it on Teploy?
Because it's a single binary/container, it runs incredibly fast on even the smallest $4 VPS.
**Deployment**: Just use the official `pocketbase/pocketbase` Docker image in your Teploy config. You get a production-ready backend in 30 seconds.

**Cost**: ~$5/mo total vs Supabase Pro ($25/mo).

## Option 2: Appwrite

**Appwrite** is a robust, full-featured enterprise alternative to Firebase. It's heavier than PocketBase but scales further.
It includes:
- Cloud Functions
- Complex permissions
- Multiple databases support

Deploying Appwrite on Teploy involves a simple Docker Compose file. Since you own the VPS, you don't hit "Function Execution Limits" or "Monthly Active User" limits. You are limited only by CPU/RAM.

## Option 3: Direct Postgres + Hasura

If you just want "Instant GraphQL on Postgres", deploying **Hasura** alongside a Teploy-managed Postgres database gives you that instant API feel.

## When to stick with Managed Supabase?
- You need specifically Postgres extensions (pgvector) fully managed.
- You don't want to handle *any* update maintenance.

## When to Self-Host on Teploy?
- **Data Sovereignty**: You need data to stay in a specific region (e.g., Germany) on a specific provider (Hetzner).
- **Cost**: You have high bandwidth/storage needs that would trigger overages on managed plans.
- **Offline Dev**: You want your production stack to look exactly like your local Docker stack.

Teploy gives you the freedom to choose. You aren't locked into one BaaS provider's pricing tier.
