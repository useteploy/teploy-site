---
order: 4
title: Recommended Services
description: Complementary services that work great with Teploy.
---

Teploy handles your infrastructure, but you'll likely need additional services for payments, email, storage, and communications. Here are our recommendations.

## CDN & Edge

### Cloudflare (Optional Integration)
Connect your Cloudflare account for CDN, DDoS protection, and WAF. See [Cloudflare Setup](/docs/domains/cloudflare) for setup instructions.

**Note:** SSL is provided automatically via Let's Encrypt. Cloudflare is optional and adds CDN/security features.

### Bunny CDN
Faster global routing at lower cost. Great alternative or complement to Cloudflare.

- **Best for:** Video streaming, large file delivery, cost optimization
- **Pricing:** $0.01/GB (cheaper than most CDNs)
- **Features:**
  - 114 PoPs worldwide
  - Bunny Stream for video
  - Bunny Storage for static files
  - Perma-Cache for origin protection
- **Website:** [bunny.net](https://bunny.net)

**Tip:** Use Bunny for media-heavy apps. Add Cloudflare for DDoS protection if needed.

## Object Storage

### Cloudflare R2
Zero egress fees, S3-compatible. Requires Cloudflare account.

- **Best for:** User uploads, static assets, media serving
- **Pricing:** $0.015/GB storage, free egress
- **Website:** [cloudflare.com/r2](https://cloudflare.com/products/r2)

### Backblaze B2
Cheapest reliable storage. Perfect for backups and archives.

- **Best for:** Database backups, log archives, cold storage
- **Pricing:** $0.005/GB storage, $0.01/GB egress
- **Free tier:** 10 GB storage, 1 GB/day egress
- **Website:** [backblaze.com/b2](https://www.backblaze.com/b2)

**Tip:** Use B2 for backups (cheap storage), R2 for serving (free egress).

### Wasabi
No egress fees, S3-compatible. Good middle ground.

- **Best for:** Large datasets, frequent access
- **Pricing:** $0.0069/GB, no egress fees
- **Website:** [wasabi.com](https://wasabi.com)

### Bring Your Own
Connect any S3-compatible storage in **Settings → Storage**:
- AWS S3
- MinIO (self-hosted)
- DigitalOcean Spaces
- Linode Object Storage

## Payments

### Stripe
The industry standard for payment processing. Handles subscriptions, one-time payments, invoicing, and more.

- **Best for:** Most applications
- **Pricing:** 2.9% + $0.30 per transaction
- **Website:** [stripe.com](https://stripe.com)

### Polar.sh
Modern billing for developers and open-source projects. Great for SaaS and developer tools.

- **Best for:** Developer tools, open-source monetization
- **Pricing:** 5% of revenue
- **Website:** [polar.sh](https://polar.sh)

## Transactional Email

### Resend
Developer-first email API with excellent deliverability. Built by the team behind React Email.

- **Best for:** Modern applications, great DX
- **Pricing:** Free tier (3,000 emails/mo), then $20/mo
- **Website:** [resend.com](https://resend.com)

### Amazon SES
High-volume, low-cost email sending. Requires more setup but unbeatable at scale.

- **Best for:** High volume, cost-sensitive
- **Pricing:** $0.10 per 1,000 emails
- **Website:** [aws.amazon.com/ses](https://aws.amazon.com/ses)

## Email Hosting

### Purelymail
Simple, affordable email hosting without the bloat. Perfect for custom domain email.

- **Best for:** Custom domain email on a budget
- **Pricing:** $10/year for unlimited domains
- **Website:** [purelymail.com](https://purelymail.com)

## Newsletters

### Amazon SES + Newsletter Platform
Combine SES with a self-hosted newsletter platform like [Listmonk](https://listmonk.app) for cost-effective newsletters.

- **Best for:** High-volume newsletters
- **Pricing:** SES rates + hosting costs
- **Tip:** Deploy Listmonk on Teploy with our one-click templates

### Resend + React Email
Build beautiful transactional and marketing emails with React components.

- **Best for:** Developer teams, design-forward brands
- **Website:** [react.email](https://react.email)

## SMS & Voice

### Telnyx
Carrier-grade communications platform for SMS, voice, and fax. Competitive pricing and excellent API.

- **Best for:** SMS verification, voice calls, global messaging
- **Pricing:** Pay-as-you-go, ~$0.004/SMS
- **Website:** [telnyx.com](https://telnyx.com)

## Why We Recommend These

We don't offer these services because:

1. **Focus** — We do infrastructure really well; others do payments/email/SMS really well
2. **No lock-in** — Use best-in-class services for each need
3. **Flexibility** — Swap providers without changing your hosting

These services all have excellent APIs that integrate seamlessly with apps deployed on Teploy.

## Integration Tips

### Environment Variables

Store API keys securely in Teploy:

```bash
# Payments
STRIPE_SECRET_KEY=sk_live_...

# Email
RESEND_API_KEY=re_...

# SMS
TELNYX_API_KEY=KEY...

# Storage (S3-compatible)
S3_ENDPOINT=https://s3.us-west-001.backblazeb2.com
S3_ACCESS_KEY_ID=...
S3_SECRET_ACCESS_KEY=...
S3_BUCKET=my-backups

# Bunny CDN
BUNNY_API_KEY=...
BUNNY_STORAGE_ZONE=...
```

### Webhooks

Point service webhooks to your Teploy-hosted app:

```
https://your-app.teploy.app/api/webhooks/stripe
https://your-app.teploy.app/api/webhooks/resend
```

All webhook endpoints get automatic SSL via Let's Encrypt.

### Storage Architecture

A common pattern for Teploy apps:

| Use Case | Provider | Why |
|----------|----------|-----|
| User uploads | **R2** | Free egress for serving |
| Database backups | **B2** | Cheapest storage |
| Video/media | **Bunny Storage** | Fast global delivery |
| Build cache | **R2** | Low latency to workers |

Configure backup destinations in **Settings → Backups → Storage**.
