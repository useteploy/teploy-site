---
order: 5
title: Roadmap
description: Current product status and upcoming features for Teploy.
---

## Current Status

| Product | Status |
|---------|--------|
| **teploy CLI** | Production-ready. ~29k lines Go, 50+ commands, shipping via GitHub releases and Homebrew. |
| **teploy Dash** | Embedded mode built (`teploy ui`). Standalone mode with uptime monitoring is in progress. |
| **teploy Observe** | In progress. Will provide self-hosted analytics, APM, error tracking, and session replay in one binary. |
| **trmnl** | v0.1.0 shipped. Installable via Homebrew (macOS) and shell script (Linux/WSL). Neovim + Zellij + 50+ tools. |

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
- Embedded web UI (`teploy ui`)
- Self-update from GitHub releases

### trmnl
- Neovim with 50+ language servers (Kickstart-based)
- Zellij multiplexer with custom keybinds
- Lazygit, Yazi, Starship integrations
- Modern CLI tools bundled (bat, eza, delta, fzf, ripgrep, fd, zoxide, etc.)
- Tokyo Night theme across the stack
- One-command install on macOS, Linux, WSL

## Near-term

- **teploy Dash (standalone)** — persistent self-hosted UI with uptime monitoring, status pages, and multi-server fleet overview
- **teploy Observe** — first cut of the unified analytics + APM + error tracking binary
- **trmnl v0.2** — teploy CLI integration, additional language profiling tools, `.deb`/`.rpm` packages

## Longer-term

- IDE extensions (VS Code, Neovim) for deploy, logs, and env vars
- Additional VPS provider integrations referenced from the CLI templates catalog
- More documentation: deployment recipes, runbooks, troubleshooting playbooks

## Request a Feature

Have a feature request? [Contact us](/contact) to let us know.
