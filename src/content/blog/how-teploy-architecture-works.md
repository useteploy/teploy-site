---
title: "How Teploy Works: A Technical Deep-Dive Into Our Architecture"
description: "An engineering deep-dive into Teploy's architecture: the control plane, deployment agents, zero-downtime deploys, and how we manage multi-tenant VPS infrastructure."
publishedAt: 2026-01-08
author:
  name: "Teploy Team"
  twitter: "teploy"
category: "Engineering"
tags:
  - architecture
  - engineering
  - infrastructure
  - deployment
---

We often get asked how Teploy works under the hood. How do we deploy your code to servers you control? How do we manage SSL certificates automatically? How do we ensure zero-downtime deployments?

In this post, we'll pull back the curtain and explain the technical architecture that powers Teploy. Whether you're curious, evaluating security implications, or just interested in systems design, this is for you.

## High-Level Architecture

Teploy consists of three main components:

```
┌─────────────────────────────────────────────────────────┐
│               TEPLOY CONTROL PLANE                      │
│              (Hosted Multi-tenant SaaS)                 │
├─────────────────────────────────────────────────────────┤
│  Dashboard │ API │ Build Orchestrator │ Certificate Mgr │
└─────────────────────────────────────────────────────────┘
                            │
                            │ WebSocket (TLS)
                            │
          ┌─────────────────┴─────────────────┐
          ▼                                   ▼
   ┌─────────────┐                     ┌─────────────┐
   │  Server 1   │                     │  Server 2   │
   │  (Agent)    │                     │  (Agent)    │
   │  ┌───────┐  │                     │  ┌───────┐  │
   │  │Docker │  │                     │  │Docker │  │
   │  │Traefik│  │                     │  │Traefik│  │
   │  └───────┘  │                     │  └───────┘  │
   └─────────────┘                     └─────────────┘
```

Let's break down each component.

## The Control Plane

The control plane is Teploy's hosted infrastructure. It's a multi-tenant SaaS application that handles:

- **User authentication and authorization**
- **Project and server management**
- **Build orchestration and scheduling**
- **SSL certificate management**
- **Webhook processing from GitHub**
- **Agent coordination and health monitoring**

### Tech Stack

Our control plane is built with:

- **TypeScript** throughout
- **Node.js** with Fastify for the API
- **React** for the dashboard
- **PostgreSQL** for persistent storage
- **Redis** for caching and pub/sub
- **tRPC** for type-safe API communication

### Multi-Tenancy

Every request is scoped to an organization. We enforce tenant isolation at multiple levels:

1. **Database**: All queries include `organization_id` in their WHERE clauses
2. **API**: Middleware validates that the authenticated user has access to the requested resource
3. **Agents**: Agent tokens are scoped to specific servers, which are owned by specific organizations

## The Agent

The agent is a lightweight daemon that runs on your servers. It's the bridge between the control plane and your infrastructure.

### Installation

When you provision a server through Teploy, here's what happens:

1. Teploy calls your VPS provider's API to create a server
2. We inject a cloud-init script that:
   - Installs Docker
   - Installs the Teploy agent
   - Configures Traefik as a reverse proxy
   - Sets up automatic security updates

The entire process takes 2-3 minutes for most providers.

### Agent Responsibilities

The agent handles:

- **Deployment execution**: Pulling images, running containers
- **Log streaming**: Real-time logs sent to the control plane
- **Metrics collection**: CPU, memory, network stats
- **Health checks**: Container and service health
- **SSL certificate storage**: Certs provisioned by the control plane

### Communication Protocol

Agents connect to the control plane via WebSocket over TLS. The connection is:

- **Outbound-only**: Agents initiate the connection, not the control plane
- **Authenticated**: Each agent has a unique token tied to its server
- **Heartbeat-monitored**: The control plane tracks agent health

Commands flow from control plane → agent. Results flow from agent → control plane.

```typescript
// Example command structure
interface AgentCommand {
  id: string;
  type: 'deploy' | 'restart' | 'logs' | 'exec';
  payload: Record<string, unknown>;
  timestamp: number;
}

// Example response
interface AgentResponse {
  commandId: string;
  status: 'success' | 'error';
  data?: unknown;
  error?: string;
}
```

### Security Considerations

We designed the agent with security in mind:

- **No inbound ports required**: The agent connects outbound; you don't need to open ports for management
- **Minimal privileges**: The agent runs as a non-root user with access only to Docker
- **No code access**: Build artifacts (Docker images) are pulled from our registry, but your source code never leaves your server during deployment
- **Token rotation**: Agent tokens can be rotated without server recreation

## The Deployment Pipeline

When you push code to GitHub, here's the complete flow:

### 1. Webhook Reception

GitHub sends a webhook to our API:

```json
{
  "ref": "refs/heads/main",
  "repository": {
    "full_name": "user/repo"
  },
  "head_commit": {
    "id": "abc123..."
  }
}
```

### 2. Build Orchestration

The control plane:

1. Matches the webhook to a project
2. Creates a new deployment record
3. Clones the repository (shallow clone for speed)
4. Detects the framework/runtime
5. Initiates the build

### 3. Build Execution

Builds run in isolated Docker containers on our build infrastructure:

```dockerfile
# Simplified build container
FROM nixpacks:latest
COPY . /app
RUN nixpacks build /app --name myapp
```

We use [Nixpacks](https://nixpacks.com) for automatic build detection—the same technology Railway uses. Nixpacks examines your codebase and generates an optimized Dockerfile automatically.

For custom needs, you can provide your own Dockerfile.

### 4. Image Push

Once built, the image is pushed to our private registry:

```
registry.teploy.io/org-123/project-456:commit-abc123
```

Images are:
- Scoped to your organization
- Retained for 30 days (for rollbacks)
- Automatically cleaned up after retention period

### 5. Deployment Command

The control plane sends a deploy command to the agent:

```json
{
  "type": "deploy",
  "payload": {
    "image": "registry.teploy.io/org-123/project-456:abc123",
    "env": { "DATABASE_URL": "..." },
    "ports": [3000],
    "healthCheck": "/api/health"
  }
}
```

### 6. Zero-Downtime Deploy

The agent executes a blue-green deployment:

1. **Pull** the new image
2. **Start** the new container (green)
3. **Health check** the new container
4. **Update** Traefik routing to point to green
5. **Stop** the old container (blue)
6. **Report** success/failure to control plane

If the health check fails, we automatically rollback—the old container keeps running, and we report the failure.

```
Timeline:
────────────────────────────────────────────────────►

[Blue Running] ─────────────────────────► [Blue Stops]
                [Green Starting] ─► [Green Running] ──►
                                    ▲
                                    │ Traffic switches here
                                    │ (zero downtime)
```

## Traefik: The Reverse Proxy

Every Teploy-managed server runs [Traefik](https://traefik.io/) as its reverse proxy. Traefik handles:

- **Routing**: Directing requests to the right container
- **SSL termination**: Managing Let's Encrypt certificates
- **Load balancing**: If you run multiple instances
- **Health checks**: Container health monitoring

### Dynamic Configuration

Traefik uses Docker labels for configuration. When we deploy your app, we add labels like:

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.myapp.rule=Host(`myapp.com`)"
  - "traefik.http.routers.myapp.tls=true"
  - "traefik.http.routers.myapp.tls.certresolver=letsencrypt"
  - "traefik.http.services.myapp.loadbalancer.server.port=3000"
```

This means routing updates are automatic—no config files to edit or services to restart.

## SSL Certificate Management

SSL certificates are provisioned automatically via Let's Encrypt. Here's how:

1. You add a domain to your project
2. The control plane verifies you own the domain (DNS check)
3. We configure Traefik to request a certificate
4. Traefik handles the ACME challenge with Let's Encrypt
5. Certificate is stored and auto-renewed

### Cloudflare Integration

If you enable Cloudflare integration, we can:

- Automatically configure DNS records
- Use Cloudflare's proxy for DDoS protection
- Handle SSL termination at Cloudflare's edge

This is optional but recommended for production workloads.

## Database Deployment

When you create a database through Teploy, we deploy it as a Docker container on your server:

```yaml
services:
  postgres:
    image: postgres:15
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: [generated]
```

### Backups

Database backups are:
- Automated daily (configurable)
- Stored in your connected object storage (S3, R2, etc.)
- Retained for 7 days by default
- Restorable with one click

### Connections

Your apps connect to databases via internal Docker networking. The database isn't exposed to the internet—only your containers can reach it.

## Scaling and High Availability

Currently, Teploy focuses on single-server deployments. This covers 90%+ of use cases—a properly configured VPS can handle hundreds of thousands of requests per day.

### What's Coming

We're building support for:

- **Multi-server deployments**: Deploy the same project to multiple servers with load balancing
- **Kubernetes clusters**: For teams that need orchestration
- **Managed database clusters**: For high-availability database needs

### Current Scaling Options

For now, scaling up is straightforward:
1. Resize your server through Teploy
2. Your VPS provider handles the underlying upgrade
3. Your containers restart on the larger machine

Vertical scaling gets you surprisingly far. A $40/month server with 8 vCPU and 16GB RAM can handle most production workloads.

## Observability

### Logging

Logs are streamed in real-time from your containers to the Teploy dashboard. We use Docker's logging driver with a forwarder that sends logs over the WebSocket connection.

Logs are:
- Retained for 7 days
- Searchable by timestamp and content
- Downloadable for offline analysis

### Metrics

The agent collects metrics every 30 seconds:
- CPU utilization
- Memory usage
- Network I/O
- Disk usage
- Container health status

These are displayed in the dashboard with historical graphs.

## What We Learned Building This

Building Teploy taught us several lessons:

### 1. Simplicity Wins

We initially over-engineered many components. The simpler version—with fewer features but more reliability—always won.

### 2. WebSocket Complexity

Maintaining persistent WebSocket connections across thousands of servers is challenging. We handle reconnection, buffering, and state synchronization carefully.

### 3. Build Isolation Is Critical

Builds must be isolated. A malicious or buggy build shouldn't affect other users. We use separate build containers with strict resource limits.

### 4. Provider APIs Are Inconsistent

Every VPS provider has a different API. Our provider abstraction layer handles these differences, but it required significant testing.

## Open Source Roots

Teploy stands on the shoulders of giants. Our architecture draws inspiration from:

- **[Dokploy](https://github.com/Dokploy/dokploy)**: Deployment pipeline patterns
- **[Coolify](https://github.com/coollabsio/coolify)**: UI patterns and database provisioning
- **Nixpacks**: Build detection and optimization

We're grateful to these projects and contribute back when we can.

## Questions?

Curious about something we didn't cover? We're happy to go deeper on any topic. [Contact us](/contact).

---

*Building something interesting? We'd love to hear how you're using Teploy. [Contact us](/contact) to share your story.*
