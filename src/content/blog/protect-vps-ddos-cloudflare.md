---
title: "Protecting Your VPS: Teploy + Cloudflare Strategy"
description: "Self-hosting doesn't mean you are vulnerable. Learn how to front your Teploy VPS with Cloudflare for enterprise-grade DDoS protection and WAF."
publishedAt: 2026-01-20
author:
  name: "Teploy Engineering"
  twitter: "teploy"
category: "Security"
tags:
  - security
  - cloudflare
  - ddos
  - self-hosting
---

A common fear of self-hosting/VPS is security. "What if I get DDoS'd? What if someone hacks my IP?"

The secret that big managed platforms don't tell you: **They just use Cloudflare too.** And you can use it yourself for free.

## The Architecture

User -> **Cloudflare Edge** -> **Your Teploy VPS**

By putting Cloudflare in front of your Teploy server, you hide your server's real IP address (Origin IP) from the world.

## Step 1: DNS Proxy

When you set up your domain in Cloudflare, turn the "Cloud" icon to **Orange (Proxied)**.
Now, `ping yourdomain.com` resolves to a Cloudflare IP, not your Vultr/Hetzner IP. Attackers cannot attack your server directly because they don't know where it is.

## Step 2: Strict SSL

In Teploy, your server automatically gets a Let's Encrypt certificate.
In Cloudflare SSL/TLS settings, set mode to **Full (Strict)**. This ensures the connection is encrypted all the way:
Browser <--(Encryption)--> Cloudflare <--(Encryption)--> Teploy.

## Step 3: Firewall Rules (WAF)

Cloudflare Free Plan gives you a WAF (Web Application Firewall). You can block:
- SQL Injection attempts
- Bots/Scrapers
- Traffic from specific high-risk countries

## Authenticated Origin Pulls (Advanced)

For maximum security, you can configure your server (via Teploy's custom Nginx config) to *only* accept traffic authenticated from Cloudflare's client certificates. This means even if someone guesses your IP, they can't connect. The server will drop the connection unless it comes from Cloudflare.

## Conclusion

You don't need a $5,000/mo Enterprise Shield contract to be secure. The combination of **Cloudflare (Free)** + **Teploy (VPS)** gives you 99% of the security posture of Vercel or Heroku. You are protected by the same global network, you just pay less for the compute behind it.
