---
title: "Self-Hosting Observability: Grafana & Prometheus on Teploy"
description: "Stop paying $65/month/host for Datadog. Learn how to deploy a full open-source observability stack on your own node using Teploy."
publishedAt: 2026-01-20
author:
  name: "Teploy Engineering"
  twitter: "teploy"
category: "Tutorials"
tags:
  - observability
  - grafana
  - prometheus
  - self-hosting
---

Observability is expensive. Platforms like Datadog or New Relic are amazing, but they charge based on host count and data volume. For a startup or side project, a $200 Datadog bill for a $20 app environment is painful.

The alternative? The **LGTM Stack** (Loki for logs, Grafana for visual, Tempo for traces, Mimir for metrics). Or simply **Prometheus + Grafana**.

In the past, setting this up was a DevOps nightmare. With Teploy, it's just another Docker Compose file.

## The Stack

We will deploy:
1. **Prometheus**: To scrape metrics from your diverse apps.
2. **Grafana**: To visualize those metrics.
3. **Node Exporter**: To monitor the health (CPU/RAM) of the VPS itself.

## Step 1: Create the Project

On your Teploy dashboard, create a new project called "Observability". Provision a dedicated small server (e.g., $5 VPS) for this, as monitoring tools can consume RAM.

## Step 2: Docker Compose Configuration

Create a `docker-compose.yml` in a GitHub repo:

```yaml
version: '3.8'

services:
  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
    ports:
      - 9090:9090

  grafana:
    image: grafana/grafana:latest
    volumes:
      - grafana_data:/var/lib/grafana
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=secret_password
    ports:
      - 3000:3000
    depends_on:
      - prometheus

volumes:
  prometheus_data:
  grafana_data:
```

## Step 3: Deploy

Connect this repo to Teploy. Teploy will detect the `docker-compose.yml` and deploy both services.
Teploy will automatically provide SSL endpoints for them (e.g., `grafana.your-project.teploy.io`).

## Saving Money

Managed Grafana costs ~$29/month/user or dynamic usage fees. Datadog Infrastructure is ~$15/host.
By self-hosting on Teploy:
- **Cost**: $5/mo (Server) + $3/mo (Teploy) = $8/mo.
- **Limits**: None. Retain data as long as you have disk space (which is cheap).
- **Users**: Unlimited.

## Next Steps

Once running, you can configure your other Teploy applications to expose a `/metrics` endpoint and point your new self-hosted Prometheus to scrape them via the private network (Teploy makes inter-service communication easy via internal DNS).

Own your data. Own your monitoring. Save the budget for marketing.
