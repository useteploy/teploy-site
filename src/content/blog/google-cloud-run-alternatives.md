---
title: "Google Cloud Run Alternatives: Why VPS is Simpler"
description: "Cloud Run is amazing technology, but stateless containers can be architecturally limiting. Discover why a persistent VPS with Teploy might be a better fit."
publishedAt: 2026-01-20
author:
  name: "Teploy Team"
  twitter: "teploy"
category: "Comparisons"
tags:
  - gcp
  - cloud-run
  - serverless
---

Google Cloud Run is the pinnacle of "Serverless Containers". It scales to zero and scales to infinity. It's incredible tech.

But for 95% of web apps, **is it necessary?**

## The "Stateless" Constraint

Cloud Run forces your app to be **stateless**.
- You cannot save files to disk (except temporary memory).
- You cannot run background threads reliably (CPU is throttled after response).
- You cannot use WebSockets easily (timeouts, connection handling constraints).

This forces you to re-architect:
- Need file uploads? Must implement S3/GCS signed URLs immediately.
- Need background jobs? Must use Cloud Tasks or Pub/Sub.
- Need specific caching? Must use managed Redis.

Everything becomes distributed and complex.

## The Teploy Model: Stateful Simplicity

On Teploy (VPS):
- **Disk**: Just save the file to `./uploads`. It stays there.
- **Background**: Just run `setInterval` or a background worker process. It keeps running.
- **WebSockets**: Just use `socket.io`. It works perfectly.

## Simplicity scales

Most startups die from complexity, not traffic.
Architecting a cloud-native, stateless, microservice distributed system on Cloud Run from Day 1 is often overkill.

A 4GB VPS can handle:
- The App
- The Database (Postgres)
- The Redis Cache
- The Job Worker
- The File Storage

All in one box. Latency is close to zero (localhost). Debugging is looking at one log file.

## Cost

Cloud Run billing is complex (vCPU-seconds + Memory-seconds + Request count). A persistent, always-on service on Cloud Run is significantly more expensive than an equivalent VPS.

**Cloud Run (Always on 1 vCPU)**: ~$25-30/mo
**VPS (Always on 1 vCPU)**: ~$5/mo

## Conclusion

Use Cloud Run if you have truly bursty traffic (0 users at night, 10,000 at noon).
Use Teploy if you have a business application that needs to just work, reliably, 24/7, with minimal architectural overhead.
