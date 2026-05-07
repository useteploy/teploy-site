---
order: 2
title: Managing Servers
description: Monitor and manage your servers.
---

## Server dashboard

Each server has a dashboard showing:

- **Apps** — All deployed applications
- **Metrics** — CPU, memory, disk, network
- **Logs** — System and app logs
- **Alerts** — Threshold-based monitoring alerts
- **Jobs** — Scheduled tasks and cron jobs
- **Settings** — Configuration and SSH

## Metrics

Real-time metrics available:

- CPU usage (%)
- Memory usage (MB/GB)
- Disk usage (GB)
- Network I/O (MB/s)
- Request metrics via Traefik access logs

Historical data retained for 30 days.

## Alerts

Set up threshold-based alerts for your servers:

1. Go to **Server → Alerts**
2. Click **Add Alert**
3. Configure thresholds:
   - CPU usage (e.g., alert when > 90%)
   - Memory usage (e.g., alert when > 85%)
   - Disk usage (e.g., alert when > 80%)
4. Choose notification channels

### Notification channels

Alerts can be sent to:

- **Slack** — Post to a channel
- **Discord** — Webhook notifications
- **Email** — Send to team members
- **Telegram** — Bot notifications
- **Webhooks** — Custom HTTP endpoints

Configure channels in **Settings → Notifications**.

## SSH Terminal

Access your server directly from the dashboard:

1. Go to **Server → Terminal**
2. Connect via web-based SSH
3. Full terminal access with your server's shell

## Logs

Access logs from:

- System (Docker, Traefik)
- Individual apps
- Databases

Stream logs in real-time or search historical logs.

## Reboot

Reboot from **Server → Settings → Reboot**. Apps automatically restart.

## Delete

Delete a server from **Server → Settings → Delete**. This is irreversible and destroys all data.
