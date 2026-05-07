---
order: 1
title: Custom Domains
description: Add your own domain to your apps.
---

Every app gets a free `*.teploy.app` subdomain. Add custom domains for production.

## Add a domain

1. Go to **App → Settings → Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `myapp.com`)
4. Configure DNS as shown below
5. SSL certificate is provisioned automatically

## DNS configuration

Point your domain to your VPS IP address:

```
Type: A
Name: @
Value: [Your VPS IP address]

Type: A (or CNAME)
Name: www
Value: [Your VPS IP address] (or @)
```

Find your VPS IP in **Server → Overview**.

### DNS propagation

After updating DNS, propagation typically takes 1-30 minutes. SSL certificate is issued automatically once DNS resolves.

## Wildcard domains

Support for `*.myapp.com`:

1. Add `*.myapp.com` as a domain
2. Configure wildcard DNS record:
   ```
   Type: A
   Name: *
   Value: [Your VPS IP address]
   ```
3. Handle routing in your app

Wildcard SSL certificates are supported via Let's Encrypt DNS challenge.

## Multiple domains

Add unlimited domains to any app. All domains point to the same deployment.

Common setups:
- `myapp.com` + `www.myapp.com`
- `app.mycompany.com` (subdomain of main site)
- Multiple brands pointing to one app

## Optional: Cloudflare

If you want CDN and DDoS protection, you can route traffic through Cloudflare:

1. Add your domain to Cloudflare
2. Point Cloudflare to your VPS IP
3. Enable proxy (orange cloud)

See [Cloudflare Setup](/domains/cloudflare) for details.
