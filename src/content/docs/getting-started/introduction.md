---
order: 1
title: Introduction
description: Learn what Teploy is and how the ecosystem fits together.
---

Teploy is a modular deployment, infrastructure, and developer tools ecosystem. Free self-hosted tools for deploying and coding. A paid managed platform for infrastructure at scale.

## The Ecosystem

```
FREE (self-hosted)                  PAID (managed)
------------------                  --------------

teploy CLI                          Teploy Platform
teploy UI                             VPS provisioning
teploy trmnl                          CDN (Cloudflare)
teploy Observe (self-hosted)           Domains (registration + DNS)
                                       Object storage (S3-compatible)
                                       Teploy Send (email + SMS)
                                       Teploy Router (unified API)
                                       Managed Observe
                                       MoR billing / tax tracking
```

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

Install with `brew install teploy` or download the binary from GitHub releases.

### teploy UI

A web dashboard for the CLI. Runs embedded (`teploy ui`) for a quick local view, or standalone on your server for always-on access. Same dashboard either way.

Standalone mode adds uptime monitoring with HTTP/TCP health checks, alerting, and check history (Uptime Kuma-style, built in). Reads the same state files the CLI writes -- one source of truth, no desync.

### teploy trmnl

A curated terminal development environment. Neovim, Zellij, Lazygit, and 50+ tools pre-configured with Tokyo Night theming. Includes CodeCompanion (Claude API) for AI assistance.

Install with `brew install useteploy/tap/trmnl` (macOS) or via shell script (Linux/WSL). See [trmnl page](/trmnl) for details.

### teploy Observe

All-in-one observability: web analytics, APM, and error tracking in a single tool. Self-hosted is free. Managed Observe is available through the Platform.

### Teploy Platform

Managed infrastructure for teams that want to stop provisioning servers manually.

- **VPS provisioning** across Vultr, DigitalOcean, Hetzner, Linode, and OVH
- **CDN management** via Cloudflare and Bunny
- **Domain registration** and DNS management via NameSilo and Cloudflare
- **Object storage** (S3-compatible: AWS S3, Cloudflare R2, MinIO, Wasabi, Backblaze B2)
- **Auto-install** of teploy CLI and UI on provisioned servers

### Teploy Send

Email and SMS communications built into the Platform.

- Email sending via SES with delivery analytics
- SMS and voice via Telnyx
- Reusable templates with variable substitution
- Email domain verification (DKIM, SPF, DMARC)
- Phone number provisioning
- Suppression lists and webhook tracking

### Teploy Router

One API for all your infrastructure. Like OpenRouter but for infrastructure APIs. One API key, one endpoint, access to all providers.

```
api.teploy.io/v1/
  /servers       Vultr, Hetzner, DO, Linode, OVH
  /dns           Cloudflare
  /domains       NameSilo
  /storage       S3, R2, B2, MinIO
  /email         SES
  /sms           Telnyx
  /cdn           Cloudflare, Bunny
```

### MoR Billing

Merchant of Record tax compliance built into the Platform. Connect your own Stripe account (no payment middleman), track revenue per jurisdiction, get threshold alerts, and manage filings.

## How They Connect

1. Install the **teploy CLI** and deploy an app in 3 lines of config
2. Install **teploy trmnl** for a pre-configured terminal IDE
3. Run **teploy UI** for a dashboard and uptime monitoring
4. Add **teploy Observe** for analytics, APM, and error tracking
5. Outgrow self-hosting and sign up for **Teploy Platform** to provision VPS, use Router API, add Send for communications, and use MoR billing for tax compliance

## Pricing

| Tier | Price | Includes |
|------|-------|----------|
| Free | $0 | CLI, self-hosted UI, trmnl, self-hosted Observe, up to 2 managed servers |
| Pro | $20/mo | Unlimited servers, 10 team members, CDN, domains, 5k SMS / 50k emails, Router API |
| Business | $50/mo | Unlimited everything, managed Observe, SSO, audit logs, SLA |
| Enterprise | Custom | SOC2, dedicated support, volume discounts |

## Next steps

- [Quick Start](/getting-started/quick-start) -- Deploy your first app
- [Core Concepts](/getting-started/concepts) -- Understand how Teploy works
