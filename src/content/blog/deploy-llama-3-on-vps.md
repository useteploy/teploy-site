---
title: "Deploying AI Models on Cheap VPS: Llama 3 & Ollama"
description: "You don't need expensive gpus to run useful AI services. Learn how to deploy quantized LLMs like Llama 3 using Ollama on a standard CPU VPS with Teploy."
publishedAt: 2026-01-20
author:
  name: "Teploy Engineering"
  twitter: "teploy"
category: "AI"
tags:
  - ai
  - llm
  - ollama
  - self-hosting
---

The AI revolution is here, but the API costs are adding up. OpenAI tokens aren't free, and data privacy is a major concern.

Did you know you can run capable Large Language Models (LLMs) like **Llama 3 (8B)** or **Mistral** on standard CPU infrastructure? It won't be as fast as an H100 GPU, but for background tasks, chatbots, or analysis, it is surprisingly usable—and infinitely cheaper.

## The Tool: Ollama

Ollama has standardized running local LLMs. It wraps the model weights and a runtime API into a simple executable.

## The Deployment

On Teploy, you can deploy Ollama as a Docker container.

`Dockerfile`:
```dockerfile
FROM ollama/ollama:latest
ENV OLLAMA_HOST=0.0.0.0
EXPOSE 11434
# Pre-pull a model so it's ready on startup (optional optimization)
RUN nohup bash -c "ollama serve &" && sleep 5 && ollama pull llama3
```

## Hardware Requirements

For a **7B or 8B parameter model** (quantized to 4-bit), you need about **6GB - 8GB of RAM**.
- **VPS Choice**: A generic 8GB RAM VPS from Contabo ($8/mo) or Hetzner (~$10/mo) works perfectly.
- **GPU**: Not required! Modern CPUs with AVX512 instructions run inference reasonably fast (5-10 tokens/second).

## Use Cases for CPU-hosted AI

1. **Email Classification**: Process incoming support emails in the background. Latency (2 seconds vs 0.2 seconds) doesn't matter.
2. **Summarization**: Summarize daily logs or articles roughly once a day.
3. **RAG (Retrieval Augmented Generation)**: Chat with your internal docs securely. No data leaves your server.

## Cost Comparison

- **OpenAI GPT-4**: Variable, can be $100s/month for heavy text processing.
- **Teploy + 8GB VPS**: Fixed ~$15/month total. Unlimited tokens.

## Privacy

The biggest benefit isn't cost—it's **privacy**. If you are processing legal docs, medical data, or proprietary code, sending it to OpenAI API might be a compliance violation. Hosting Llama 3 on your own isolated VPS via Teploy ensures complete data sovereignty.
