---
order: 4
title: Static Sites
description: Deploy static sites with the teploy CLI and Caddy serving.
---

Static sites are built as Docker containers and served through Caddy on your server with automatic HTTPS.

## Basic static deploy

Create a `Dockerfile` for your static site:

```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM caddy:alpine
COPY --from=build /app/dist /srv
```

Then configure `teploy.yml`:

```yaml
app: mysite
domain: mysite.com
server: production
port: 80
```

Deploy:

```bash
teploy deploy
```

Your static site is live at `https://mysite.com` with auto-provisioned SSL.

## Supported generators

Any static site generator works. Build it in a Dockerfile and serve the output with Caddy, Nginx, or any other static file server.

Common generators:

- Astro (`dist/`)
- Next.js static export (`out/`)
- Vite / React / Vue (`dist/`)
- Hugo (`public/`)
- Jekyll (`_site/`)
- Eleventy (`_site/`)
- Plain HTML/CSS/JS

## Custom Caddyfile

For advanced routing, add a `Caddyfile` to your project:

```
:80 {
    root * /srv
    file_server

    header /assets/* Cache-Control "public, max-age=31536000, immutable"

    handle_errors {
        rewrite * /404.html
        file_server
    }
}
```

Include it in your Dockerfile:

```dockerfile
FROM caddy:alpine
COPY dist /srv
COPY Caddyfile /etc/caddy/Caddyfile
```

## SPA routing

For single-page applications that handle routing client-side, use `try_files`:

```
:80 {
    root * /srv
    try_files {path} /index.html
    file_server
}
```

## Caching

Caddy serves static assets with proper cache headers by default. For hashed assets (files with content hashes in filenames), set long-lived cache headers in your Caddyfile:

```
header /assets/* Cache-Control "public, max-age=31536000, immutable"
```

## Asset bridging

For zero-downtime static asset serving (where old assets need to remain available during deploy transitions), configure asset bridging in `teploy.yml`:

```yaml
app: mysite
domain: mysite.com
server: production

assets:
  path: /srv/assets
  keep_days: 7
```

This keeps old asset files on the server for 7 days after a deploy, preventing 404s for users still loading old HTML pages.

## Optional: CDN via Cloudflare

For global edge caching, put Cloudflare in front of your server:

1. Add your domain to Cloudflare
2. Point to your VPS IP with proxy enabled (orange cloud)
3. Static assets are cached at 300+ edge locations

See [Cloudflare Setup](/docs/domains/cloudflare) for details.
