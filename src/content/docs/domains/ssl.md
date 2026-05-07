---
order: 3
title: SSL Certificates
description: Automatic SSL for all your domains.
---

Every domain gets free SSL certificates automatically via Let's Encrypt.

## How it works

1. You add a domain
2. Point your DNS to your VPS IP
3. Teploy's agent requests a Let's Encrypt certificate
4. Certificate is issued within seconds
5. Auto-renewed every 60 days

No configuration needed. No external accounts required.

## Certificate status

Check certificate status in **App → Settings → Domains**.

Statuses:
- **Active** — Certificate valid and serving traffic
- **Pending** — Waiting for DNS propagation or certificate issuance
- **Error** — Check DNS configuration

## Troubleshooting

### Certificate pending

DNS propagation can take up to 24 hours. Usually resolves in minutes.

### Certificate error

1. Verify your A record points to your VPS IP address
2. Ensure port 80 is accessible (required for Let's Encrypt verification)
3. Check that no other service is using port 80/443
4. Contact support if issue persists

## Optional: Cloudflare SSL

If you connect Cloudflare for CDN, you can choose their SSL modes instead:

| Mode | Description |
|------|-------------|
| Full (Strict) | End-to-end encryption with valid origin cert |
| Full | Encrypts to origin (accepts self-signed) |
| Flexible | Only encrypts to Cloudflare edge |

See [Cloudflare Setup](/domains/cloudflare) for details.
