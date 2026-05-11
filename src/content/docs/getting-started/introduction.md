---
order: 1
title: Introduction
description: Learn what Teploy is and how the ecosystem fits together.
---

Teploy is a small set of free, open source tools for deploying, monitoring, and operating self-hosted apps. Everything runs on your own infrastructure. No accounts, no usage limits, no telemetry.

## The Ecosystem

```
teploy CLI       Zero-downtime Docker deploys via SSH
teploy Dash      Web UI for deploys, logs, and uptime monitoring
teploy Observe   Analytics, APM, and error tracking — one binary
trmnl            Curated terminal IDE (Neovim, Zellij, Lazygit, ...)
```

All four ship as standalone binaries or installers. Pick the ones you want; skip the rest.

## Products

### teploy CLI

Single Go binary. Zero-downtime Docker deploys to any server via SSH. No management server, no hosted dependencies.

- Zero-downtime deploys with automatic rollback
- Local and server builds (Dockerfile or Nixpacks auto-detection)
- Caddy auto-HTTPS, routing, and load balancing
- Multi-server parallel deploys
- Accessories (Postgres, Redis, MySQL alongside your app)
- S3 backups with cron scheduling and database-aware dumps
- Preview environments with auto-expiry
- Auto-deploy via webhooks
- Environment variables and encrypted secrets
- YAML/TOML config with destination overlays

Install with `brew install useteploy/tap/teploy` or download the binary from GitHub releases.

### teploy Dash

A web dashboard for the CLI. Runs embedded (`teploy ui`) for a quick local view, or standalone on your server for always-on access. Same dashboard either way.

Standalone mode adds uptime monitoring with HTTP/TCP health checks, alerting, and check history. Reads the same state files the CLI writes — one source of truth, no desync.

### teploy Observe

All-in-one observability in a single self-hosted binary. Web analytics, APM, error tracking, and session replay. Your data on your server, no per-seat pricing, no data caps. Privacy-first by default.

### trmnl

A curated terminal development environment. Neovim, Zellij, Lazygit, Yazi, and 50+ tools pre-configured with Tokyo Night theming.

Install with `brew install useteploy/tap/trmnl` (macOS) or via shell script (Linux/WSL). See the [trmnl page](/trmnl) for details.

## How They Connect

1. Install the **teploy CLI** and deploy an app in 3 lines of config
2. Run **teploy Dash** for a web view and uptime monitoring on top of the CLI
3. Add **teploy Observe** for analytics, APM, and error tracking
4. Install **trmnl** for a pre-configured terminal IDE on your dev machine

## Pricing

Every Teploy tool is free and open source. You pay for the server you run it on. There is no Teploy account, no signup, no usage tracking. See the [pricing page](/pricing) for the full story.

## Next steps

- [Quick Start](/docs/getting-started/quick-start) — Deploy your first app
- [Core Concepts](/docs/getting-started/concepts) — Understand how Teploy works
