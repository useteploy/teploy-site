---
order: 2
title: Docker Deploys
description: Deploy Docker containers with the teploy CLI.
---

The teploy CLI deploys Docker containers to your server via SSH. It supports Dockerfile builds, Nixpacks auto-detection, and pre-built images.

## Using a Dockerfile

If your project has a `Dockerfile`, teploy detects it automatically:

```bash
teploy deploy
```

Example Dockerfile:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

No additional configuration needed. Teploy builds the image, ships it to your server, and deploys with zero downtime.

## Build modes

### Server builds (default)

By default, teploy syncs your source code to the server and builds the Docker image there. This avoids uploading large images over the network.

```bash
teploy deploy
# Syncing source to server...
# Building image on server...
```

### Local builds

Build on your local machine and stream the image to the server. Useful when your dev machine has more CPU/RAM than the server, or when you want to use local Docker caching.

Set `build_local: true` in `teploy.yml`:

```yaml
app: myapp
domain: myapp.com
server: production
build_local: true
```

Or for cross-platform builds (e.g., building on Apple Silicon for an x86 server):

```yaml
app: myapp
domain: myapp.com
server: production
build_local: true
platform: linux/amd64
```

### Pre-built images

Skip the build entirely by specifying an image. Useful for CI pipelines that build and push images to a registry:

```bash
teploy deploy --image ghcr.io/myorg/myapp:latest
```

Or set it in `teploy.yml`:

```yaml
app: myapp
domain: myapp.com
server: production
image: ghcr.io/myorg/myapp:latest
```

Teploy pulls the image on the server and deploys it.

### Nixpacks

If no Dockerfile is found, teploy falls back to [Nixpacks](https://nixpacks.com/) for auto-detection. Nixpacks generates a Dockerfile from your project files (package.json, requirements.txt, go.mod, etc.).

## Port configuration

By default, teploy expects your app to listen on port 3000. Override with:

```yaml
app: myapp
domain: myapp.com
server: production
port: 8080
```

## Volumes

Persist data across deploys with named volumes:

```yaml
volumes:
  uploads: /app/uploads
  cache: /app/.cache
```

Volume data is stored at `/deployments/{app}/volumes/{name}` on the server.

## Hooks

Run commands before or after a deploy:

```yaml
hooks:
  pre_deploy: "npm run db:migrate"
  post_deploy: "npm run cache:clear"
```

Hooks run inside the app container on the server.

## Multi-process apps

Define multiple processes in a single deploy:

```yaml
processes:
  web: "npm start"
  worker: "npm run worker"
  scheduler: "npm run cron"
```

Each process runs in its own container from the same image. Only the `web` process receives HTTP traffic.

## Private registries

If you deploy from a private registry, authenticate on the server first:

```bash
teploy registry login ghcr.io --username myuser --password ghp_xxx
```

For CI pipelines, pipe the token via stdin:

```bash
echo $GITHUB_TOKEN | teploy registry login ghcr.io --token
```

List and manage stored credentials:

```bash
teploy registry list
teploy registry remove ghcr.io
```

## Version tagging

By default, teploy uses the git short hash as the version identifier. Override with:

```bash
teploy deploy --version v1.2.3
```

## Rollback

Roll back to the previous deploy instantly:

```bash
teploy rollback
```

The previous container image is retained on the server. Rollback starts the old container, health checks it, switches traffic, and stops the current container.
