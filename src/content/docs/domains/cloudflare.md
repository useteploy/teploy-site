---
order: 2
title: Cloudflare Setup
description: Optional CDN and security integration.
---

Cloudflare integration is **optional**. Your apps work without it — SSL is provided automatically via Let's Encrypt. Add Cloudflare if you want CDN, DDoS protection, or other edge features.

## Why add Cloudflare?

Benefits of connecting your Cloudflare account:

- **Global CDN** — Cache static assets at 300+ edge locations
- **DDoS protection** — Enterprise-grade traffic filtering
- **Web Application Firewall** — Block common attacks
- **Analytics** — Traffic insights and threat intelligence

## Connect Cloudflare

1. Create a free Cloudflare account at [cloudflare.com](https://cloudflare.com)
2. Add your domain to Cloudflare and update nameservers
3. In Teploy, go to **Settings → Integrations**
4. Click **Connect Cloudflare**
5. Enter your Cloudflare API token
6. Select zones to manage

## What Teploy configures

When you enable Cloudflare for a domain:

- Creates/updates DNS records automatically
- Sets SSL mode to Full (Strict)
- Enables proxy (orange cloud)
- Applies recommended caching rules

## SSL with Cloudflare

If using Cloudflare, SSL works differently:

| Mode | Description |
|------|-------------|
| Full (Strict) | Cloudflare verifies your origin certificate (recommended) |
| Full | Encrypts to origin, accepts self-signed |
| Flexible | Only encrypts browser to Cloudflare |

Your Let's Encrypt certificate still works as the origin certificate.

## CDN & Caching

Default caching rules when Cloudflare is enabled:

| Content | TTL |
|---------|-----|
| HTML | No cache |
| Static assets | 1 year |
| API responses | No cache |

Customize in **App → Settings → Caching** or directly in Cloudflare dashboard.

## Advanced features

These require a Cloudflare account and may have additional costs:

### Argo Smart Routing

Routes traffic through Cloudflare's optimized network. ~30% latency reduction. Billed per GB through Cloudflare.

### Cloudflare Tunnels

Connect servers without exposing public ports. Good for internal tools or restrictive networks.

### Cloudflare Access

Zero-trust authentication for internal apps. Supports SSO providers.

### R2 Storage

S3-compatible object storage with zero egress fees. $0.015/GB storage.

## Without Cloudflare

If you don't connect Cloudflare:

- SSL is handled by Let's Encrypt (automatic)
- Traffic goes directly to your VPS
- No CDN caching (but still fast for most use cases)
- Basic DDoS protection from your VPS provider

For most apps, this is perfectly fine. Add Cloudflare later when you need CDN or advanced security.
