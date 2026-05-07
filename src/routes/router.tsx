export const config = { mode: "static" };

export function head() {
  return { title: "API Router -- Unified API Gateway" };
}

const features = [
  {
    title: 'Unified API Gateway',
    description: 'One endpoint for all your backends. Route requests to any service, anywhere. Automatic failover and load balancing.',
    icon: 'gateway',
  },
  {
    title: 'Smart Rate Limiting',
    description: 'Protect your APIs with configurable rate limits. Per-user, per-endpoint, or global. Burst handling and queuing built-in.',
    icon: 'ratelimit',
  },
  {
    title: 'API Key Management',
    description: 'Generate, rotate, and revoke API keys. Scope permissions per key. Track usage and set spending limits.',
    icon: 'keys',
  },
  {
    title: 'Real-time Analytics',
    description: 'Monitor latency, errors, and throughput. Per-endpoint breakdowns. Exportable metrics for your dashboards.',
    icon: 'analytics',
  },
  {
    title: 'Request Transformation',
    description: 'Modify headers, paths, and bodies on the fly. Map between API versions. No code changes required.',
    icon: 'transform',
  },
  {
    title: 'Edge Caching',
    description: 'Cache responses at the edge for instant delivery. Configurable TTLs. Automatic cache invalidation.',
    icon: 'cache',
  },
];

const useCases = [
  {
    title: 'AI Model Routing',
    description: 'Route to different LLM providers based on cost, latency, or availability. Automatic fallback when providers go down.',
    example: 'OpenAI -> Anthropic -> Local',
  },
  {
    title: 'Microservices Gateway',
    description: 'Single entry point for all your microservices. Service discovery, health checks, and circuit breakers.',
    example: 'api.app.com/*',
  },
  {
    title: 'Third-party API Proxy',
    description: 'Proxy external APIs with your own rate limits and caching. Hide API keys from clients.',
    example: 'Stripe, Twilio, SendGrid',
  },
];

const pricing = [
  { requests: '100K', price: 'Free' },
  { requests: '1M', price: '$10' },
  { requests: '10M', price: '$50' },
  { requests: '100M', price: '$200' },
];

function FeatureIcon({ icon }: { icon: string }) {
  const paths: Record<string, string> = {
    gateway: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    ratelimit: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    keys: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
    analytics: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    transform: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    cache: 'M13 10V3L4 14h7v7l9-11h-7z',
  };
  return (
    <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={paths[icon]} />
    </svg>
  );
}

export default function Router() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[12px] font-medium mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Platform
          </div>
          <h1 class="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">
            API Router
          </h1>
          <p class="text-zinc-400 text-[17px] leading-relaxed max-w-2xl mx-auto mb-8">
            One endpoint to rule them all. Route requests to any backend, add rate limiting, and monitor everything in real-time. Like OpenRouter, but for any API.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/getting-started/router" class="px-6 py-2.5 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-colors">
              Read the Docs
            </a>
            <a href="/getting-started/introduction" class="px-6 py-2.5 text-zinc-400 hover:text-white text-[14px] font-medium transition-colors">
              Explore Platform
            </a>
          </div>
        </div>

        {/* Code Example */}
        <div class="mb-20 rounded-2xl border border-white/[0.08] bg-zinc-900/50 overflow-hidden">
          <div class="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
            <div class="w-3 h-3 rounded-full bg-green-500/60"></div>
            <span class="ml-2 text-zinc-500 text-[12px]">Example Request</span>
          </div>
          <div class="p-6 font-mono text-[13px] leading-relaxed overflow-x-auto" dangerouslySetInnerHTML={{ __html: `<pre class="text-zinc-300"><span class="text-emerald-400">curl</span> https://router.teploy.io/v1/chat/completions \\
  <span class="text-zinc-500">-H</span> <span class="text-amber-300">"Authorization: Bearer $TEPLOY_KEY"</span> \\
  <span class="text-zinc-500">-H</span> <span class="text-amber-300">"Content-Type: application/json"</span> \\
  <span class="text-zinc-500">-d</span> <span class="text-amber-300">'{
    "model": "auto",
    "messages": [{"role": "user", "content": "Hello"}],
    "route": {
      "fallback": ["openai/gpt-4", "anthropic/claude-3", "local/llama"],
      "strategy": "cost"
    }
  }'</span></pre>` }} />

        </div>

        {/* Features Grid */}
        <div class="mb-20">
          <h2 class="text-2xl font-semibold text-white text-center mb-10">Built for scale</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div class="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <FeatureIcon icon={feature.icon} />
                </div>
                <h3 class="text-white font-medium text-[15px] mb-2">{feature.title}</h3>
                <p class="text-zinc-500 text-[13px] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div class="mb-20">
          <h2 class="text-2xl font-semibold text-white text-center mb-10">Use cases</h2>
          <div class="space-y-4">
            {useCases.map((useCase) => (
              <div class="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 class="text-white font-medium text-[16px] mb-2">{useCase.title}</h3>
                    <p class="text-zinc-500 text-[14px]">{useCase.description}</p>
                  </div>
                  <div class="flex-shrink-0">
                    <span class="inline-block px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[12px] font-mono">
                      {useCase.example}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Preview */}
        <div class="mb-20">
          <h2 class="text-2xl font-semibold text-white text-center mb-3">Simple pricing</h2>
          <p class="text-zinc-500 text-[14px] text-center mb-10">Pay per request. First 100K free every month.</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {pricing.map((tier, index) => (
              <div class={`p-5 rounded-xl border text-center ${index === 0 ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-white/[0.06] bg-white/[0.02]'}`}>
                <p class="text-zinc-400 text-[12px] mb-1">{tier.requests} requests/mo</p>
                <p class="text-white font-semibold text-[20px]">{tier.price}</p>
              </div>
            ))}
          </div>
          <p class="text-zinc-600 text-[12px] text-center mt-4">Volume discounts available for 100M+ requests</p>
        </div>

        {/* CTA */}
        <div class="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-emerald-500/5 to-transparent p-8 text-center">
          <h2 class="text-2xl font-semibold text-white mb-3">Start routing requests</h2>
          <p class="text-zinc-500 text-[14px] mb-6 max-w-md mx-auto">Learn how to set up API Router with the Teploy platform.</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/getting-started/router" class="px-6 py-2.5 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-colors">
              View Documentation
            </a>
            <a href="/getting-started/introduction" class="px-6 py-2.5 text-zinc-400 hover:text-white text-[14px] font-medium transition-colors">
              Explore Platform
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
