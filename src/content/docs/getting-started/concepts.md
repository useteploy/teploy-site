---
order: 3
title: Core Concepts
description: Understand the key concepts behind Teploy — state files, zero-downtime deploys, accessories, and how the tools fit together.
---

## The tools

Teploy is a small set of self-hosted tools that share a state-file convention:

- **teploy CLI** — the deployment engine. SSH into servers and run zero-downtime Docker deploys.
- **teploy Dash** — a web UI that reads the CLI's state files. Runs embedded (`teploy ui`) or standalone on your server.
- **teploy Observe** — self-hosted analytics, APM, and error tracking. One binary, your data.
- **trmnl** — a curated terminal IDE config bundle.

You can use any of these on their own. They're designed to compose, not lock you in.

## Architecture

```
Your machine                         Your server(s)
  teploy CLI  ──── SSH ────────────►  Docker containers
                                      Caddy (reverse proxy + HTTPS)
                                      State files (/deployments/)
                                      teploy Dash (optional, --serve)
                                      teploy Observe (optional)
```

No management server, no agent, no hosted service. The CLI and Dash both read and write the same state files on the server.

## Config files

### teploy.yml

The app config lives in your project root. Minimum required fields:

```yaml
app: myapp
domain: myapp.com
server: production
```

Full example with all options:

```yaml
app: myapp
domain: myapp.com
server: production
port: 3000
platform: linux/amd64
build_local: false
stop_timeout: 10

hooks:
  pre_deploy: "npm run migrate"
  post_deploy: "npm run seed"

volumes:
  uploads: /app/uploads

processes:
  web: "npm start"
  worker: "npm run worker"

accessories:
  postgres:
    image: postgres:16
    port: 5432
    env:
      POSTGRES_PASSWORD: secret
    volumes:
      data: /var/lib/postgresql/data

notifications:
  channels:
    - type: slack
      url: https://hooks.slack.com/services/xxx
      events: [deploy, rollback]
    - type: webhook
      url: https://example.com/webhook
```

Teploy also supports TOML format (`teploy.toml`). Config format is auto-detected by file extension.

### Destination overlays

Use destination overlays for environment-specific config:

```bash
teploy deploy -d staging
```

This merges `teploy.staging.yml` on top of `teploy.yml`, letting you override the server, domain, or any other setting per environment.

### servers.yml

Server connection details live at `~/.teploy/servers.yml`:

```yaml
production:
  host: 203.0.113.10
  user: root
  role: app

staging:
  host: 203.0.113.20
  user: deploy

loadbalancer:
  host: 203.0.113.30
  role: lb
```

Manage this file with `teploy server add`, `teploy server remove`, and `teploy server list`.

## State files

Deploy state is stored as files on the server under `/deployments/{app}/`. This includes the current and previous version hashes, port mappings, and lock state.

The CLI, UI, and webhook listener all read and write the same state files. There is no database to go out of sync. This is the key difference from tools like Dokploy and Coolify, where UI state and actual server state can diverge.

## Zero-downtime deploys

Every deploy follows this sequence:

1. Build the Docker image (on your machine or on the server)
2. Start the new container on a fresh port
3. Run health checks against the new container
4. Update Caddy to route traffic to the new container
5. Stop the old container (after a configurable grace period)
6. Write state to the deploy log

If health checks fail, the old container keeps serving traffic. The deploy is marked as failed.

## Caddy proxy

Teploy uses [Caddy](https://caddyserver.com) as the reverse proxy. Caddy provides:

- **Automatic HTTPS** via Let's Encrypt (no manual certificate setup)
- **Reverse proxy routing** to app containers by port
- **Load balancing** across multiple upstream servers
- **Maintenance mode** (503 page when enabled)

Caddy runs as a Docker container on the `teploy` network. The CLI manages Caddy's configuration through its admin API (port 2019, bound to localhost only).

## Accessories

Accessories are stateful services that run alongside your app: databases, caches, queues. They are defined in `teploy.yml` and managed with the `teploy accessory` command.

```yaml
accessories:
  postgres:
    image: postgres:16
    port: 5432
    env:
      POSTGRES_PASSWORD: secret
    volumes:
      data: /var/lib/postgresql/data

  redis:
    image: redis:7
    port: 6379
```

Accessories are started automatically on deploy. Their connection details are injected as environment variables into your app container.

## Multi-server deploys

For apps that need to run on multiple servers:

```yaml
app: myapp
domain: myapp.com
servers:
  - web1
  - web2
  - web3
parallel: 3
```

`teploy deploy` deploys to all servers in parallel and updates the load balancer's upstream list.

## Preview environments

Deploy any branch to a temporary preview URL:

```bash
teploy preview deploy feature-branch --ttl 72h
```

The preview gets its own container, subdomain, and SSL certificate. It auto-expires after the TTL.

## Templates

Deploy common applications from the community template catalog:

```bash
teploy template list
teploy template deploy wordpress --domain blog.example.com
```

Templates generate a pre-configured `teploy.yml` with accessories and environment variables.

## Next steps

- [Deploy from Docker](/docs/deploying/docker) — Dockerfile and image-based deploys
- [Deploy from GitHub](/docs/deploying/github) — Webhook-triggered auto-deploys
- [CLI Reference](/docs/reference/cli) — All 50+ commands
