---
title: "How to Deploy a Next.js App to Your Own VPS with Teploy"
description: "A step-by-step guide to deploying your Next.js application to a VPS using Teploy. Get Vercel-like simplicity at a fraction of the cost."
publishedAt: 2026-01-12
author:
  name: "Teploy Team"
  twitter: "teploy"
category: "Tutorials"
tags:
  - nextjs
  - tutorial
  - deployment
  - vps
---

Next.js is an incredible framework, but deploying it outside of Vercel can feel intimidating. In this tutorial, we'll walk through deploying a Next.js app to your own VPS using Teploy—with automatic builds, SSL, and zero-downtime deployments.

By the end of this guide, you'll have a production-ready Next.js app running on a server you control, for as little as $5/month.

## Prerequisites

Before we begin, make sure you have:

- A Teploy account (coming soon)
- A Next.js project in a GitHub repository
- An account with a supported VPS provider (Vultr, Hetzner, DigitalOcean, or Linode)

## Step 1: Connect Your VPS Provider

First, we need to connect Teploy to your VPS provider so it can provision servers on your behalf.

1. Log in to your Teploy dashboard
2. Navigate to **Settings → Providers**
3. Click **Add Provider**
4. Select your provider (we'll use Vultr in this example)
5. Enter your API key

### Getting Your Vultr API Key

1. Log in to your Vultr account
2. Go to **Account → API**
3. Click **Enable API**
4. Copy your API key

> **Note**: Your API key is encrypted and stored securely. Teploy never exposes it in the UI after initial setup.

## Step 2: Provision a Server

Now let's spin up a server to host your application.

1. Go to **Servers** in your Teploy dashboard
2. Click **New Server**
3. Configure your server:
   - **Name**: `nextjs-production`
   - **Provider**: Vultr
   - **Region**: Choose one close to your users
   - **Size**: Start with the smallest ($5/mo)—you can resize later
4. Click **Provision**

Teploy will create the server and install everything needed: Docker, our deployment agent, and Traefik for routing. This typically takes 2-3 minutes.

### Server Requirements

For a Next.js app, we recommend:

| Traffic Level | Server Size | Estimated Cost |
|--------------|-------------|----------------|
| < 10k pageviews/mo | 1 vCPU, 1GB RAM | $5/mo |
| 10k-100k pageviews/mo | 1 vCPU, 2GB RAM | $10/mo |
| 100k-500k pageviews/mo | 2 vCPU, 4GB RAM | $20/mo |

You can always start small and scale up. Teploy makes resizing seamless.

## Step 3: Create Your Project

With your server ready, let's connect your Next.js repository.

1. Go to **Projects** in your dashboard
2. Click **New Project**
3. Select **GitHub** as your source
4. Authorize Teploy to access your repositories (if you haven't already)
5. Choose your Next.js repository
6. Configure the project:
   - **Name**: Your project name
   - **Branch**: `main` (or your production branch)
   - **Server**: Select the server you just provisioned

### Build Configuration

Teploy automatically detects Next.js projects and configures the build. You'll see these defaults:

```yaml
Build Command: npm run build
Start Command: npm start
Node Version: 18 (or detected from package.json)
```

For most Next.js apps, these defaults work perfectly. If you need to customize, you can override them in the project settings.

## Step 4: Environment Variables

Most Next.js apps need environment variables. Add them in the **Environment** tab:

1. Click **Add Variable**
2. Enter your key-value pairs
3. Mark sensitive values as **Secret** (they'll be encrypted)

Common variables you might need:

```bash
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://yourdomain.com
```

Environment variables are securely injected at build time and runtime.

## Step 5: Deploy

Everything is configured. Time to deploy!

1. Click **Deploy** to trigger your first deployment
2. Watch the build logs in real-time

Teploy will:
1. Clone your repository
2. Install dependencies (`npm install`)
3. Build your app (`npm run build`)
4. Create a Docker image
5. Deploy with zero downtime

Your first deployment might take 3-5 minutes as dependencies are cached. Subsequent deployments are much faster (typically under 2 minutes).

## Step 6: Set Up Your Domain

Your app is now running, but it's using a Teploy-provided subdomain. Let's connect your custom domain.

1. Go to your project's **Domains** tab
2. Click **Add Domain**
3. Enter your domain: `yourdomain.com`
4. Configure your DNS:

### Option A: Using Cloudflare (Recommended)

If you're using Cloudflare, Teploy can automatically configure your DNS:

1. Enable **Cloudflare Integration** in your project settings
2. Add your Cloudflare API token
3. Teploy will create the necessary DNS records automatically

### Option B: Manual DNS Configuration

Add these DNS records with your provider:

```
Type: A
Name: @
Value: [Your server IP]

Type: A
Name: www
Value: [Your server IP]
```

After DNS propagates (usually a few minutes), Teploy will automatically provision an SSL certificate via Let's Encrypt.

## Step 7: Enable Auto-Deploy

You probably want deployments to happen automatically when you push code. Let's set that up.

1. Go to your project's **Settings** tab
2. Enable **Auto-deploy on push**
3. Select the branches that should trigger deployments

Now, every push to your configured branch will trigger a new deployment. Your production branch gets deployed to production, and you can configure preview deployments for pull requests.

## Optimizing Your Next.js Deployment

Here are some tips to get the most out of your deployment:

### Enable Output Standalone

In your `next.config.js`, enable standalone output for smaller, faster deployments:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
}

module.exports = nextConfig
```

This creates a minimal production bundle that deploys faster and uses less memory.

### Configure Caching

Teploy's Traefik integration supports caching headers out of the box. Make sure your Next.js app sets appropriate cache headers for static assets.

### Use ISR for Dynamic Content

If you're using Incremental Static Regeneration (ISR), it works the same way on Teploy as it does on Vercel. Your revalidation logic will function correctly.

## Monitoring Your Deployment

Once deployed, you can monitor your app from the Teploy dashboard:

- **Logs**: Real-time logs from your application
- **Metrics**: CPU, memory, and network usage
- **Status**: Deployment history and health checks

## Troubleshooting

### Build Fails with Memory Error

If your build fails with a memory error, your server might be too small. Try:

1. Resizing to a larger server temporarily
2. Adding `NODE_OPTIONS=--max_old_space_size=2048` to your build command

### App Won't Start

Check your logs for errors. Common issues:

- Missing environment variables
- Database connection issues
- Port conflicts (Teploy expects your app on port 3000 by default)

### SSL Certificate Issues

SSL certificates are provisioned automatically. If there's an issue:

1. Verify your DNS is pointing to the correct IP
2. Check that ports 80 and 443 are accessible
3. Wait a few minutes and check again—Let's Encrypt has rate limits

## What's Next?

You've successfully deployed a Next.js app to your own server! Here are some things to explore:

- **[Set up a database](/docs/deploying/databases)** with one-click PostgreSQL deployment
- **[Configure preview environments](/docs/features/previews)** for pull request testing
- **[Add team members](/docs/teams)** and configure access controls

## Cost Comparison

For reference, here's what you might pay running the same Next.js app:

| Platform | 50k pageviews/mo | 200k pageviews/mo |
|----------|-----------------|-------------------|
| Vercel | $20+ | $100+ |
| Railway | $15-25 | $40-60 |
| **Teploy + VPS** | **$5** | **$10** |

Same great developer experience. 80-90% cost reduction.

---

*Questions about deploying Next.js? Join our [contact us](/contact) or check the [documentation](/docs).*
