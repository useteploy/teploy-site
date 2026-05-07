---
order: 3
title: Scaling
description: Scale your infrastructure horizontally and vertically.
---

## Vertical scaling

Upgrade your server size:

1. Go to **Server → Settings → Resize**
2. Select new size
3. Confirm resize

Resizing requires a brief reboot (~2 minutes).

## Horizontal scaling

Add more servers to handle traffic:

1. Create additional servers
2. Deploy your app to multiple servers
3. Configure load balancing (via DNS round-robin, or Cloudflare if connected)

## App resource limits

Set resource limits per app:

```json
{
  "resources": {
    "memory": "512m",
    "cpus": "0.5"
  }
}
```

## Auto-scaling

Coming soon: Automatic horizontal scaling based on metrics.
