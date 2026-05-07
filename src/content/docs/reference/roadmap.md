---
order: 5
title: Roadmap
description: Current product status and upcoming features for the Teploy ecosystem.
---

## Current Status (March 2026)

| Product | Status |
|---------|--------|
| **teploy CLI** | Production-ready. 29k lines Go, 50+ commands, shipping via GitHub releases and Homebrew. |
| **teploy UI** | Built. Runs embedded (`teploy ui`) for local access or standalone on your server with uptime monitoring, HTTP/TCP checks, and alerting. |
| **teploy trmnl** | Terminal IDE v0.1.0 shipped. Installable via Homebrew (macOS) and shell script (Linux/WSL). Neovim + Zellij + 50+ tools. |
| **teploy Observe** | Not yet started. Will provide analytics, APM, and error tracking. |
| **teploy Router** | Not yet started. Will expose Platform provider integrations as a public REST API. |
| **Teploy Platform** | Refactored and compiles clean. 28 dashboard pages, 28 tRPC routers, 51 Prisma models, zero type errors. |
| **Teploy Send** | Built. 12 routers, 10 pages. Email via SES, SMS/voice via Telnyx, templates, delivery analytics. |
| **MoR Billing** | Built. 10 routers, 5 pages. Stripe Connect sync, jurisdiction tracking, threshold alerts, filing management. |

## Shipped

### teploy CLI
- Zero-downtime deploys with automatic rollback
- Local and server builds (Dockerfile and Nixpacks auto-detection)
- Caddy auto-HTTPS, routing, and load balancing
- Multi-server parallel deploys with load balancer updates
- Accessories (Postgres, Redis, MySQL, MongoDB, any Docker image)
- S3 backups with cron scheduling and database-aware dumps
- Preview environments with auto-expiry
- Auto-deploy via webhooks (GitHub, GitLab, Bitbucket)
- Community template catalog
- Environment variables and encrypted secrets
- Docker registry credential management
- Tailscale and WireGuard VPN mesh
- Maintenance mode and deploy locking
- Remote exec, logs, status, stats, health checks
- YAML/TOML config with destination overlays
- Embedded lightweight web UI
- Self-update from GitHub releases

### Teploy Platform
- Multi-cloud VPS provisioning (Vultr, DigitalOcean, Hetzner, Linode, OVH)
- Auto-install teploy CLI and UI on provisioned servers
- CDN management (Cloudflare, Bunny)
- Domain registration and DNS management (NameSilo, Cloudflare)
- Object storage (S3, R2, B2, Wasabi, MinIO)
- SSH key management
- Multi-tenant organizations with RBAC (Owner/Admin/Member/Viewer)
- Authentication (email/password, GitHub OAuth, Google OAuth, 2FA)
- API key management and audit logs
- Notification channels (Slack, Discord, Telegram, Email, Webhook)

### Teploy Send
- Email sending via SES with delivery analytics
- SMS and voice via Telnyx
- Reusable templates with variable substitution
- Email domain verification (DKIM, SPF, DMARC)
- Phone number provisioning
- Suppression lists (bounce/unsubscribe)
- Webhook delivery tracking

### MoR Billing
- Stripe Connect (Standard) integration -- user's own Stripe account
- Transaction sync and revenue tracking per jurisdiction
- Threshold alerts at 70/80/90/100% of filing thresholds
- Filing management (DRAFT to FILED to ACCEPTED)
- Multi-entity support
- Compliance dashboard

## Near-term

- Wire SES and Telnyx send mutations to dispatch messages end-to-end
- Runtime test all Platform pages with live database
- Marketing site and docs rewrite for the new ecosystem
- Stripe webhook handler for real-time transaction sync

## Medium-term

- **teploy UI (standalone)** -- self-hosted persistent UI with uptime monitoring, status pages, and multi-server fleet overview
- **teploy Router** -- public REST API layer over Platform provider integrations
- **teploy trmnl v0.2** -- teploy CLI integration, additional language profiling tools, .deb/.rpm packages
- **IDE extensions** -- VS Code and Neovim extensions for deploy, logs, and env vars
- SSO/SAML integration for enterprise teams
- AWS and Google Cloud VPS provider support

## Long-term

- **teploy Observe** -- analytics, APM, and error tracking (self-hosted free, managed paid)
- Database branching for testing
- SOC 2 Type II certification
- Data residency options (US, EU, APAC)

## Request a Feature

Have a feature request? [Contact us](/contact) to let us know.
