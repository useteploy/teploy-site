---
order: 1
title: Deploy from GitHub
description: Set up webhook-triggered auto-deploys with the teploy CLI.
---

The teploy CLI can automatically deploy your app when you push to a branch. No PaaS git integration required -- just a webhook.

## Set up auto-deploy

From your project directory (where `teploy.yml` lives):

```bash
teploy autodeploy setup --branch main
```

This installs a lightweight webhook listener on your server and configures a Caddy route for it. The output includes the webhook URL:

```
Auto-deploy configured for myapp
  Webhook URL: https://myapp.com/teploy-webhook/myapp
  Branch: main

Add this URL to your Git provider's webhook settings (push events only).
```

## Configure your Git provider

### GitHub

1. Go to your repository **Settings > Webhooks**
2. Click **Add webhook**
3. Set **Payload URL** to the webhook URL from the setup output
4. Set **Content type** to `application/json`
5. Set **Secret** if you used `--secret` during setup
6. Select **Just the push event**
7. Click **Add webhook**

### GitLab

1. Go to your project **Settings > Webhooks**
2. Set **URL** to the webhook URL
3. Check **Push events**
4. Click **Add webhook**

### Bitbucket

1. Go to your repository **Settings > Webhooks**
2. Click **Add webhook**
3. Set **URL** to the webhook URL
4. Select **Repository push** trigger
5. Click **Save**

## Webhook security

Use a secret to validate webhook payloads:

```bash
teploy autodeploy setup --branch main --secret my-webhook-secret
```

Set the same secret in your Git provider's webhook configuration. The webhook listener validates the HMAC signature on every request.

## Check auto-deploy status

```bash
teploy autodeploy status
```

```
Auto-deploy: active (running)
  Webhook URL: https://myapp.com/teploy-webhook/myapp
```

## Remove auto-deploy

```bash
teploy autodeploy remove
```

This stops the webhook listener and removes the Caddy route.

## Preview environments

Deploy any branch to a temporary preview URL:

```bash
teploy preview deploy feature-login --ttl 72h
```

The preview gets its own container and subdomain:

```
https://feature-login.myapp.com
```

Manage previews:

```bash
teploy preview list          # list active previews
teploy preview destroy feature-login  # tear down a preview
teploy preview prune         # remove all expired previews
```

Previews auto-expire after the TTL (default: 72 hours).

## CI/CD pipelines

For more control, call `teploy deploy` directly from your CI pipeline instead of using webhooks.

### GitHub Actions

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install teploy
        run: |
          curl -fsSL https://github.com/useteploy/teploy/releases/latest/download/teploy_linux_amd64.tar.gz | tar -xz -C /tmp
          sudo mv /tmp/teploy /usr/local/bin/teploy

      - name: Deploy
        run: teploy deploy
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
```

### Pre-built image pipeline

Build in CI and deploy the image:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: docker build -t ghcr.io/myorg/myapp:${{ github.sha }} .
      - run: docker push ghcr.io/myorg/myapp:${{ github.sha }}

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: teploy deploy --image ghcr.io/myorg/myapp:${{ github.sha }}
```

## Deploy notifications

Get notified on deploy success or failure. Add notification channels to `teploy.yml`:

```yaml
notifications:
  channels:
    - type: slack
      url: https://hooks.slack.com/services/T.../B.../xxx
    - type: webhook
      url: https://example.com/deploy-webhook
```
