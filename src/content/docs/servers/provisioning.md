---
order: 1
title: Provisioning Servers
description: Spin up new servers in seconds.
---

Provision VPS servers from multiple providers through Teploy.

## Supported providers

| Provider | Starting at | Regions |
|----------|-------------|---------|
| Vultr | $5/mo | 25+ |
| Hetzner | $4/mo | 5 |
| DigitalOcean | $6/mo | 15+ |
| Linode | $5/mo | 11 |

## Create a server

1. Click **New Server** in your dashboard
2. Select a provider
3. Choose a region (pick closest to your users)
4. Select a size:
   - **$5/mo** — 1 vCPU, 1GB RAM, 25GB SSD
   - **$20/mo** — 2 vCPU, 4GB RAM, 80GB SSD
   - **$50/mo** — 4 vCPU, 8GB RAM, 160GB SSD
5. Click **Create**

Provisioning takes ~60 seconds.

## What's installed

Every server comes pre-configured with:

- Docker & Docker Compose
- Teploy Agent
- Automatic security updates
- Firewall (only 80, 443 open)
- Fail2ban

## SSH access

You can SSH into your servers anytime:

```bash
ssh root@your-server-ip
```

Add your SSH key in **Settings → SSH Keys**.
