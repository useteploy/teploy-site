---
order: 1
title: CLI Reference
description: Complete reference for all teploy CLI commands.
---

The teploy CLI is a single Go binary that deploys Docker containers to any server via SSH. Install with `brew install teploy`.

## Global flags

These flags apply to all commands:

```
--host    Server host (overrides servers.yml)
--user    SSH user (default: root)
--key     Path to SSH private key
--json    Output in JSON format
```

## Commands

### Core

| Command | Description |
|---------|-------------|
| `teploy init` | Generate a `teploy.yml` config for the current project. Auto-detects docker-compose files and project settings. Use `--toml` for TOML format, `--force` to overwrite. |
| `teploy deploy [server]` | Deploy the app to a server. Builds, ships, starts with health checking, routes traffic via Caddy, stops old container. Zero downtime. |
| `teploy rollback` | Roll back to the previous deploy. Starts old containers, health checks, switches traffic, stops current containers. |
| `teploy setup <host>` | Provision a server for teploy. Installs Docker, configures firewall, starts Caddy, adds server to `servers.yml`. |
| `teploy validate` | Check config and server readiness. Validates `teploy.yml`, SSH connectivity, Docker, build prerequisites, and DNS. |

### Deploy flags

```
teploy deploy [server]
  --image           Docker image to deploy (skips build)
  --version         Version identifier (default: git short hash)
  --skip-dns-check  Skip DNS validation (for proxied domains like Cloudflare)
  --parallel        Max concurrent deploys for multi-server (default: from teploy.yml or 1)
  -d, --destination Destination overlay (e.g. staging merges teploy.staging.yml)
```

### App lifecycle

| Command | Description |
|---------|-------------|
| `teploy start` | Start all stopped containers for the app. |
| `teploy stop` | Stop all containers for the app. |
| `teploy restart` | Restart all containers for the app. |
| `teploy status` | Show what is running for the app -- containers, versions, ports. |
| `teploy stats` | Show CPU/RAM usage per container. |
| `teploy health` | Run a health check on the running app. |
| `teploy logs` | Tail container logs. Use `--process` to select process type, `--lines` for history count. |
| `teploy log` | Show deploy history -- deploys, rollbacks, restarts, failures. Use `--last N` to limit entries. |

### Scaling

| Command | Description |
|---------|-------------|
| `teploy scale <count>` | Deploy the app to N app-role servers and update the load balancer. Use `--parallel` for concurrent deploys. |
| `teploy lock` | Freeze deploys for the app. Use `-m` to add a reason. All deploys are blocked until `teploy unlock`. |
| `teploy unlock` | Release the deploy lock. |
| `teploy maintenance on` | Enable maintenance mode. Returns 503 to all visitors. |
| `teploy maintenance off` | Disable maintenance mode. Restore normal traffic. |

### Environment variables

| Command | Description |
|---------|-------------|
| `teploy env set KEY=value [...]` | Set one or more environment variables. |
| `teploy env get KEY` | Get the value of an environment variable. |
| `teploy env list` | List all environment variables. Use `--reveal` to show values. |
| `teploy env unset KEY` | Remove an environment variable. |

### Secrets

| Command | Description |
|---------|-------------|
| `teploy secret set KEY=value [...]` | Set one or more encrypted secrets. |
| `teploy secret get KEY` | Decrypt and display a secret. |
| `teploy secret list` | List all secret keys (values masked). |
| `teploy secret rotate KEY` | Generate a new random value for a secret. |

### Accessories

| Command | Description |
|---------|-------------|
| `teploy accessory list` | List accessory containers. Alias: `teploy acc list`. |
| `teploy accessory start <name>` | Start a stopped accessory container. |
| `teploy accessory stop <name>` | Stop an accessory container. |
| `teploy accessory logs <name>` | Show accessory container logs. Use `--lines` for history count. |
| `teploy accessory upgrade <name> <image>` | Upgrade an accessory to a new image. |
| `teploy accessory backup <name>` | Back up an accessory with a database-aware dump. Requires `--bucket`. Use `--schedule` for automated backups. |
| `teploy accessory restore <name> <date>` | Restore an accessory from a backup. Requires `--bucket`. |

### Backups

| Command | Description |
|---------|-------------|
| `teploy backup create` | Create a volume backup. Requires `--bucket`. |
| `teploy backup list` | List available backups. Requires `--bucket`. |
| `teploy backup restore <date>` | Restore a volume backup. Requires `--bucket`. |
| `teploy backup schedule <cron>` | Set up automated backups on a cron schedule. Requires `--bucket`. |

### Auto-deploy

| Command | Description |
|---------|-------------|
| `teploy autodeploy setup` | Set up webhook auto-deploy. Use `--branch` (default: main) and `--secret` for HMAC validation. |
| `teploy autodeploy status` | Check auto-deploy status. |
| `teploy autodeploy remove` | Remove auto-deploy webhook. |

### Preview environments

| Command | Description |
|---------|-------------|
| `teploy preview deploy <branch>` | Deploy a branch preview. Use `--ttl` for auto-expiry (default: 72h). |
| `teploy preview list` | List active previews. |
| `teploy preview destroy <branch>` | Tear down a preview environment. |
| `teploy preview prune` | Remove expired previews. |

### Templates

| Command | Description |
|---------|-------------|
| `teploy template list` | List available community templates. |
| `teploy template info <name>` | Show template details. |
| `teploy template deploy <name>` | Deploy from a template. Requires `--domain`. Writes a `teploy.yml` to the current directory. |

### Servers

| Command | Description |
|---------|-------------|
| `teploy server add <name> <host>` | Add a server to `~/.teploy/servers.yml`. Use `--role` (app or lb) and `--user`. |
| `teploy server remove <name>` | Remove a server from `servers.yml`. |
| `teploy server list` | List all configured servers. |

### Registries

| Command | Description |
|---------|-------------|
| `teploy registry login <registry>` | Store registry credentials on the server. Supports `--username`, `--password`, or `--token` (stdin). |
| `teploy registry list` | Show registries with stored credentials. |
| `teploy registry remove <registry>` | Remove registry credentials from the server. |

### Networking

| Command | Description |
|---------|-------------|
| `teploy network setup` | Install VPN on all servers and join mesh. Supports Tailscale and WireGuard. |
| `teploy network status` | Show mesh connectivity between servers. |

### Remote execution

| Command | Description |
|---------|-------------|
| `teploy exec <server> <command>` | Run a command on a remote server via SSH. |

### UI

| Command | Description |
|---------|-------------|
| `teploy ui` | Launch the embedded web dashboard. Use `--port` (default: 3456) and `--no-open` to skip browser. |

### Utilities

| Command | Description |
|---------|-------------|
| `teploy version` | Show teploy version. |
| `teploy update` | Update teploy to the latest version. Downloads from GitHub releases. Use `--force` to reinstall. |
