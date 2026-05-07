---
order: 2
title: API Reference
description: Teploy Router API documentation -- one API for all your infrastructure providers.
---

The Teploy Router API provides a unified REST API for managing infrastructure across multiple providers. One API key, one endpoint, access to all providers.

## Base URL

```
https://api.teploy.io/v1
```

## Authentication

All requests require two headers:

```
Authorization: Bearer tp_live_xxxxxxxxxxxxxxxxxxxxx
X-Organization-Id: org_xxxxxxxxxxxxxxxxxxxxx
```

API keys are created in the Platform dashboard under **Settings > API Keys**. Keys follow the format `tp_live_` for production and `tp_test_` for sandbox.

## Rate limits

- 100 requests per minute per API key
- Sliding window rate limiting
- `429 Too Many Requests` response when exceeded
- `X-RateLimit-Remaining` and `X-RateLimit-Reset` headers on every response

## Endpoints

### Servers

Provision and manage VPS instances across Vultr, DigitalOcean, Hetzner, Linode, and OVH.

```
GET    /v1/servers              List all servers
POST   /v1/servers              Create a server
GET    /v1/servers/:id          Get server details
DELETE /v1/servers/:id          Delete a server
GET    /v1/servers/:id/metrics  Get server metrics (CPU, RAM, disk, bandwidth)
POST   /v1/servers/:id/reboot   Reboot a server
```

#### Create a server

```bash
curl -X POST https://api.teploy.io/v1/servers \
  -H "Authorization: Bearer tp_live_xxx" \
  -H "X-Organization-Id: org_xxx" \
  -H "Content-Type: application/json" \
  -d '{
    "provider": "vultr",
    "region": "ewr",
    "size": "vc2-1c-1gb",
    "label": "production-web-1"
  }'
```

Response:

```json
{
  "id": "srv_abc123",
  "provider": "vultr",
  "region": "ewr",
  "size": "vc2-1c-1gb",
  "ip": "203.0.113.10",
  "status": "provisioning",
  "created_at": "2026-03-20T12:00:00Z"
}
```

### DNS

Manage DNS records via Cloudflare.

```
GET    /v1/dns/zones            List DNS zones
GET    /v1/dns/zones/:id        Get zone details
GET    /v1/dns/records           List DNS records (query: zone_id)
POST   /v1/dns/records           Create a DNS record
PUT    /v1/dns/records/:id       Update a DNS record
DELETE /v1/dns/records/:id       Delete a DNS record
```

#### Create a DNS record

```bash
curl -X POST https://api.teploy.io/v1/dns/records \
  -H "Authorization: Bearer tp_live_xxx" \
  -H "X-Organization-Id: org_xxx" \
  -H "Content-Type: application/json" \
  -d '{
    "zone_id": "zone_abc123",
    "type": "A",
    "name": "app",
    "content": "203.0.113.10",
    "proxied": true
  }'
```

### Domains

Register and manage domains via NameSilo.

```
GET    /v1/domains              List registered domains
POST   /v1/domains              Register a domain
GET    /v1/domains/:id          Get domain details
GET    /v1/domains/check        Check domain availability (query: domain)
POST   /v1/domains/:id/renew    Renew a domain
```

### Emails

Send emails via SES.

```
POST   /v1/emails/send          Send an email
GET    /v1/emails               List sent emails
GET    /v1/emails/:id           Get email details and delivery status
GET    /v1/emails/analytics     Get delivery analytics (rates, bounces, opens)
```

#### Send an email

```bash
curl -X POST https://api.teploy.io/v1/emails/send \
  -H "Authorization: Bearer tp_live_xxx" \
  -H "X-Organization-Id: org_xxx" \
  -H "Content-Type: application/json" \
  -d '{
    "from": "hello@myapp.com",
    "to": "user@example.com",
    "subject": "Welcome",
    "html": "<h1>Welcome to MyApp</h1>"
  }'
```

### SMS

Send SMS messages via Telnyx.

```
POST   /v1/sms/send             Send an SMS
GET    /v1/sms                  List sent messages
GET    /v1/sms/:id              Get message details and delivery status
GET    /v1/sms/numbers          List provisioned phone numbers
POST   /v1/sms/numbers          Provision a phone number
```

### Storage

Manage S3-compatible object storage across AWS S3, Cloudflare R2, Backblaze B2, Wasabi, and MinIO.

```
GET    /v1/storage/buckets       List buckets
POST   /v1/storage/buckets       Create a bucket
DELETE /v1/storage/buckets/:id   Delete a bucket
POST   /v1/storage/presign       Generate a presigned upload/download URL
```

### Providers

Manage provider credentials stored in the Platform.

```
GET    /v1/providers             List connected providers
POST   /v1/providers             Add provider credentials
DELETE /v1/providers/:id         Remove provider credentials
GET    /v1/providers/:id/test    Test provider connectivity
```

## Error format

All errors follow a consistent format:

```json
{
  "error": {
    "code": "not_found",
    "message": "Server not found",
    "status": 404
  }
}
```

Common error codes:

| Code | Status | Description |
|------|--------|-------------|
| `unauthorized` | 401 | Invalid or missing API key |
| `forbidden` | 403 | API key lacks permission for this action |
| `not_found` | 404 | Resource does not exist |
| `rate_limited` | 429 | Too many requests |
| `validation_error` | 422 | Invalid request body |
| `provider_error` | 502 | Upstream provider returned an error |

## Platform tRPC API

The Platform dashboard uses tRPC internally. For programmatic access to Platform features not covered by the Router REST API, use the tRPC client:

```typescript
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@teploy/api';

const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'https://app.teploy.io/api/trpc',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }),
  ],
});
```

The REST Router API is recommended for most use cases. The tRPC API is available for advanced integrations.
