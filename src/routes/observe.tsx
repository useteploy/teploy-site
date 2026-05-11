export const config = { mode: "static" };

export function head() {
  return { title: "teploy Observe — Analytics, APM & Error Tracking in One" };
}

export default function Observe() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-5xl mx-auto px-6">

        {/* Hero */}
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[12px] font-medium mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
            Free, open source
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-6">
            Four tools.<br class="hidden sm:block" />
            One binary.
          </h1>
          <p class="text-zinc-700 dark:text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Analytics, APM, error tracking, and session replay — in a single self-hosted binary.
            One tool instead of four. Your data on your server. No per-seat pricing, no data caps.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div class="px-6 py-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg font-mono text-[14px] text-zinc-700 dark:text-zinc-300">
              brew install useteploy/tap/observe
            </div>
            <a href="/docs/getting-started/introduction" class="text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-[14px] font-medium transition-colors">
              Read the docs &rarr;
            </a>
          </div>
        </div>

        {/* The Stack Collapse */}
        <div class="mb-24">
          {/* Tier toggle */}
          <div class="flex justify-center mb-8">
            <div class="inline-flex items-center bg-white dark:bg-zinc-900 border border-zinc-200/70 dark:border-white/[0.06] rounded-lg p-1" id="tier-toggle">
              <button class="tier-btn active" data-tier="small">Growing SaaS</button>
              <button class="tier-btn" data-tier="growing">Scaling up</button>
            </div>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">

            {/* Before: The Stack (Growing SaaS) */}
            <div id="stack-small">
              <p class="text-zinc-600 dark:text-zinc-500 text-[11px] uppercase tracking-wider mb-2">What you're paying today</p>
              <p class="text-zinc-700 dark:text-zinc-600 text-[12px] mb-6">5M events/mo, 10 hosts, 50k errors/mo</p>
              <div class="space-y-3">
                <div class="tool-card">
                  <div class="tool-info">
                    <span class="tool-name">PostHog</span>
                    <span class="tool-desc">Product analytics (4M events past free tier at $0.00005/event)</span>
                  </div>
                  <span class="tool-price">~$200/mo</span>
                </div>
                <div class="tool-card">
                  <div class="tool-info">
                    <span class="tool-name">Sentry</span>
                    <span class="tool-desc">Error tracking (Business plan, 50k errors included)</span>
                  </div>
                  <span class="tool-price">$80/mo</span>
                </div>
                <div class="tool-card">
                  <div class="tool-info">
                    <span class="tool-name">Datadog</span>
                    <span class="tool-desc">APM (10 hosts at $31/host/mo)</span>
                  </div>
                  <span class="tool-price">$310/mo</span>
                </div>
                <div class="tool-card">
                  <div class="tool-info">
                    <span class="tool-name">Umami</span>
                    <span class="tool-desc">Web analytics (Pro cloud plan)</span>
                  </div>
                  <span class="tool-price">$20/mo</span>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-zinc-200/70 dark:border-white/[0.06] flex justify-between">
                <span class="text-zinc-600 dark:text-zinc-500 text-[13px]">4 tools, 4 dashboards, data doesn't connect</span>
                <div>
                  <span class="text-zinc-900 dark:text-white text-lg font-semibold">~$610</span>
                  <span class="text-zinc-600 dark:text-zinc-500 text-[13px]">/mo</span>
                </div>
              </div>
            </div>

            {/* Before: The Stack (Scaling) */}
            <div id="stack-growing" class="hidden">
              <p class="text-zinc-600 dark:text-zinc-500 text-[11px] uppercase tracking-wider mb-2">What you're paying today</p>
              <p class="text-zinc-700 dark:text-zinc-600 text-[12px] mb-6">50M events/mo, 50 hosts, 500k errors/mo</p>
              <div class="space-y-3">
                <div class="tool-card">
                  <div class="tool-info">
                    <span class="tool-name">PostHog</span>
                    <span class="tool-desc">Analytics + session replay (49M events past free tier)</span>
                  </div>
                  <span class="tool-price">~$2,000/mo</span>
                </div>
                <div class="tool-card">
                  <div class="tool-info">
                    <span class="tool-name">Sentry</span>
                    <span class="tool-desc">Error tracking (Business + 450k overage at $0.00029/error)</span>
                  </div>
                  <span class="tool-price">~$210/mo</span>
                </div>
                <div class="tool-card">
                  <div class="tool-info">
                    <span class="tool-name">Datadog</span>
                    <span class="tool-desc">APM + logs (50 hosts at $31/host, high-water billing)</span>
                  </div>
                  <span class="tool-price">~$1,550/mo</span>
                </div>
                <div class="tool-card">
                  <div class="tool-info">
                    <span class="tool-name">Umami</span>
                    <span class="tool-desc">Web analytics (Pro cloud plan)</span>
                  </div>
                  <span class="tool-price">$20/mo</span>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-zinc-200/70 dark:border-white/[0.06] flex justify-between">
                <span class="text-zinc-600 dark:text-zinc-500 text-[13px]">Same 4 tools, bills scaling fast</span>
                <div>
                  <span class="text-zinc-900 dark:text-white text-lg font-semibold">~$3,780</span>
                  <span class="text-zinc-600 dark:text-zinc-500 text-[13px]">/mo</span>
                </div>
              </div>
            </div>

            {/* After: Observe */}
            <div>
              <p class="text-zinc-600 dark:text-zinc-500 text-[11px] uppercase tracking-wider mb-6">What you could have instead</p>
              <div class="observe-card">
                <div class="observe-header">
                  <div>
                    <div class="text-zinc-900 dark:text-white text-xl font-semibold mb-1">teploy Observe</div>
                    <div class="text-zinc-700 dark:text-zinc-400 text-[14px]">Analytics + APM + Errors + Sessions</div>
                  </div>
                  <div class="text-right">
                    <div class="text-3xl font-bold text-violet-400">$0</div>
                    <div class="text-zinc-600 dark:text-zinc-500 text-[12px]">self-hosted, any scale</div>
                  </div>
                </div>
                <div class="observe-features">
                  <div class="observe-feat">
                    <svg class="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    <span>1 dashboard for everything</span>
                  </div>
                  <div class="observe-feat">
                    <svg class="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Your server, your data</span>
                  </div>
                  <div class="observe-feat">
                    <svg class="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Click error -- see trace -- see user journey</span>
                  </div>
                  <div class="observe-feat">
                    <svg class="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    <span>No data limits, no per-seat pricing</span>
                  </div>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-zinc-200/70 dark:border-white/[0.06] flex justify-between">
                <span class="text-zinc-600 dark:text-zinc-500 text-[13px]">1 dashboard, 1 install, 0 bills</span>
                <div>
                  <span class="text-violet-400 text-lg font-semibold">Save $7,300–$45,000+</span>
                  <span class="text-zinc-600 dark:text-zinc-500 text-[13px]">/yr depending on scale</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Inside */}
        <div class="mb-24">
          <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-4">
              Everything observability, nothing else
            </h2>
            <p class="text-zinc-700 dark:text-zinc-400 text-[16px] max-w-xl mx-auto">
              Each vertical replaces a dedicated tool. They share a unified data layer, so insights connect automatically.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            {/* Analytics */}
            <div class="observe-vertical">
              <div class="vertical-badge analytics">Replaces PostHog + Umami</div>
              <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Web Analytics</h3>
              <p class="text-zinc-700 dark:text-zinc-400 text-[14px] mb-4">Privacy-first, cookie-free analytics. No consent banners needed.</p>
              <ul class="vertical-list">
                <li>Pageviews, sessions, unique visitors</li>
                <li>Custom events with properties</li>
                <li>Funnels and conversion tracking</li>
                <li>UTM campaign tracking</li>
                <li>Geographic and device breakdown</li>
                <li>Real-time active visitors</li>
                <li>Referrer and channel analysis</li>
              </ul>
            </div>

            {/* APM */}
            <div class="observe-vertical">
              <div class="vertical-badge apm">Replaces Datadog + SigNoz</div>
              <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-2">APM & Tracing</h3>
              <p class="text-zinc-700 dark:text-zinc-400 text-[14px] mb-4">OpenTelemetry-native distributed tracing with automatic service maps.</p>
              <ul class="vertical-list">
                <li>Distributed traces (OTLP compatible)</li>
                <li>Service dependency maps</li>
                <li>Latency percentiles (p50/p95/p99)</li>
                <li>Error rates per endpoint</li>
                <li>Slow query detection</li>
                <li>Request/response inspection</li>
                <li>Infrastructure metrics</li>
              </ul>
            </div>

            {/* Errors */}
            <div class="observe-vertical">
              <div class="vertical-badge errors">Replaces Sentry</div>
              <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Error Tracking</h3>
              <p class="text-zinc-700 dark:text-zinc-400 text-[14px] mb-4">Crash reports with full context. Source maps, stack traces, breadcrumbs.</p>
              <ul class="vertical-list">
                <li>Automatic error grouping</li>
                <li>Stack traces with source maps</li>
                <li>Release tracking</li>
                <li>Error frequency and trends</li>
                <li>Issue management (open/resolved/ignored)</li>
                <li>User impact analysis</li>
                <li>Alert on new or regressed issues</li>
              </ul>
            </div>

            {/* Unified */}
            <div class="observe-vertical unified">
              <div class="vertical-badge unified-badge">The whole point</div>
              <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Unified Dashboard</h3>
              <p class="text-zinc-700 dark:text-zinc-400 text-[14px] mb-4">The reason to use one tool instead of four. Everything is connected.</p>
              <ul class="vertical-list">
                <li>Click an error -- see the trace that caused it</li>
                <li>Click a slow page -- see the API calls behind it</li>
                <li>Click a user -- see their journey, errors, and sessions</li>
                <li>One query language across all data</li>
                <li>Custom dashboards combining any metric</li>
                <li>Saved views and team sharing</li>
                <li>Time-synced investigation across all verticals</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div class="mb-24">
          <div class="text-center mb-12">
            <h2 class="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">One binary. Seriously.</h2>
            <p class="text-zinc-700 dark:text-zinc-400 text-[14px] max-w-lg mx-auto">
              Observe is a single Go binary backed by Nucleus, our multi-model database.
              Download, run, point your app at it.
            </p>
          </div>

          <div class="grid sm:grid-cols-3 gap-6">
            <div class="step-card">
              <div class="step-num">1</div>
              <h4 class="text-zinc-900 dark:text-white font-medium mb-2">Install</h4>
              <div class="step-code">curl -sL https://raw.githubusercontent.com/useteploy/teploy-observe/main/scripts/install.sh | sh</div>
              <p class="text-zinc-600 dark:text-zinc-500 text-[13px] mt-2">Single binary. No Docker, no Kubernetes, no config files.</p>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h4 class="text-zinc-900 dark:text-white font-medium mb-2">Add the tracker</h4>
              <div class="step-code">&lt;script src="observe.js" data-site="YOUR_ID"&gt;&lt;/script&gt;</div>
              <p class="text-zinc-600 dark:text-zinc-500 text-[13px] mt-2">2KB script. Cookie-free. No consent banner needed.</p>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h4 class="text-zinc-900 dark:text-white font-medium mb-2">See your data</h4>
              <div class="step-code">open http://your-server:8080</div>
              <p class="text-zinc-600 dark:text-zinc-500 text-[13px] mt-2">Dashboard is live. Real-time visitors, analytics, errors, traces.</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div class="mb-24">
          <div class="text-center mb-12">
            <h2 class="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">How Observe compares</h2>
          </div>
          <div class="overflow-x-auto">
            <table class="compare-table">
              <thead>
                <tr>
                  <th></th>
                  <th class="highlight">Observe</th>
                  <th>PostHog</th>
                  <th>Sentry</th>
                  <th>Datadog</th>
                  <th>Umami</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Web analytics</td><td class="highlight">Yes</td><td>Yes</td><td>No</td><td>Limited</td><td>Yes</td></tr>
                <tr><td>APM / Tracing</td><td class="highlight">Yes</td><td>No</td><td>Limited</td><td>Yes</td><td>No</td></tr>
                <tr><td>Error tracking</td><td class="highlight">Yes</td><td>No</td><td>Yes</td><td>Limited</td><td>No</td></tr>
                <tr><td>Custom events</td><td class="highlight">Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>Self-hosted</td><td class="highlight">Yes</td><td>Yes</td><td>Yes</td><td>No</td><td>Yes</td></tr>
                <tr><td>Single binary</td><td class="highlight">Yes</td><td>No (Docker)</td><td>No (Docker)</td><td>No (SaaS)</td><td>No (Docker)</td></tr>
                <tr><td>Cookie-free</td><td class="highlight">Yes</td><td>No</td><td>N/A</td><td>N/A</td><td>Yes</td></tr>
                <tr><td>OTLP compatible</td><td class="highlight">Yes</td><td>No</td><td>No</td><td>Yes</td><td>No</td></tr>
                <tr><td>Unified dashboard</td><td class="highlight">Yes</td><td>Analytics only</td><td>Errors only</td><td>Infra focus</td><td>Analytics only</td></tr>
                <tr class="price-row"><td>Price (5M events/mo, 10 hosts)</td><td class="highlight">$0</td><td>~$200/mo</td><td>$80/mo</td><td>$310/mo</td><td>$20/mo</td></tr>
                <tr><td colSpan={6} class="text-zinc-700 dark:text-zinc-600 text-[11px] pt-1" style={{ borderBottom: "none" }}>Verified pricing at 5M events/mo, 10 hosts. PostHog free tier covers 1M events — usage-based after that. Datadog at $31/host/mo APM. Costs compound significantly at scale.</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div class="text-center mb-16">
          <h2 class="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Run it yourself</h2>
          <p class="text-zinc-700 dark:text-zinc-400 text-[15px] mb-6 max-w-lg mx-auto">One binary. Your server. No accounts, no event caps, no per-seat pricing.</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://github.com/useteploy/observe" target="_blank" rel="noopener noreferrer" class="px-6 py-3 bg-white text-zinc-900 font-medium text-[14px] rounded-lg hover:bg-zinc-200 transition-colors">
              View on GitHub
            </a>
            <a href="/docs/getting-started/introduction" class="text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-[14px] font-medium transition-colors">
              Read the docs &rarr;
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
