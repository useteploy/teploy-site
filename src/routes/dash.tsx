export const config = { mode: "static" };

export function head() {
  return { title: "teploy Dash — Web UI for deploys, logs & uptime" };
}

const features = [
  {
    title: "Live deploy view",
    description: "Watch builds and deploys stream in real time. WebSocket-driven status, no polling, no refresh required.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "App & accessory control",
    description: "Start, stop, restart, rollback. Manage Postgres, Redis, MySQL accessories from the same screen as your apps.",
    icon: "M5 12h14M12 5l7 7-7 7",
  },
  {
    title: "Streamed logs",
    description: "Tail container logs from any server. Filter by service, level, or time range without leaving the dashboard.",
    icon: "M4 6h16M4 10h16M4 14h10M4 18h10",
  },
  {
    title: "Env vars & secrets",
    description: "Edit environment variables and encrypted secrets in the UI. Changes persist across deploys, encrypted at rest.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Uptime monitoring",
    description: "Standalone mode adds HTTP/TCP health checks, response-time graphs, and incident timeline. Uptime Kuma-style, built in.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Alerts on outages",
    description: "Notify via webhook, email, or Slack when a check fails or recovers. Per-monitor thresholds and grace windows.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
];

export default function Dash() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-5xl mx-auto px-6">

        {/* Hero */}
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[12px] font-medium mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            Free, open source
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
            A web UI that<br class="hidden sm:block" /> never desyncs
          </h1>
          <p class="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Embedded in the CLI for quick access, or run it standalone on your server for 24/7 monitoring.
            Reads the same state files the CLI writes — the dashboard is never out of date.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div class="px-6 py-3 bg-zinc-800 border border-zinc-700 rounded-lg font-mono text-[14px] text-zinc-300">
              teploy ui
            </div>
            <span class="text-zinc-600 text-[13px]">or</span>
            <div class="px-6 py-3 bg-zinc-800 border border-zinc-700 rounded-lg font-mono text-[14px] text-zinc-300">
              teploy ui --serve
            </div>
          </div>
          <p class="text-zinc-600 text-[12px] mt-3">Same binary. Two modes.</p>
        </div>

        {/* Terminal preview */}
        <div class="mb-24 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden shadow-2xl">
          <div class="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-white/[0.06]">
            <div class="flex items-center gap-1.5">
              <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
            </div>
            <div class="flex-1 flex justify-center">
              <span class="text-[11px] text-zinc-500 font-mono">teploy ui</span>
            </div>
          </div>
          <div class="p-6 font-mono text-[13px] leading-relaxed">
            <p class="text-zinc-500">$ teploy ui</p>
            <p class="text-sky-400 mt-1">Reading state from ./teploy.yml + servers</p>
            <p class="text-sky-400">3 apps, 5 servers, 2 accessories</p>
            <p class="text-sky-400">UI ready at http://localhost:8787</p>
            <p class="text-zinc-500 mt-4">$ teploy ui --serve --host 0.0.0.0:8787</p>
            <p class="text-sky-400 mt-1">Standalone mode</p>
            <p class="text-sky-400">Uptime checks running (HTTP/TCP)</p>
            <p class="text-sky-400">Listening on 0.0.0.0:8787 (Caddy auto-HTTPS)</p>
            <p class="text-green-400 mt-1">Ready.</p>
          </div>
        </div>

        {/* Two modes */}
        <div class="mb-24">
          <h2 class="text-2xl sm:text-3xl font-semibold text-white text-center mb-4">Two modes, one tool</h2>
          <p class="text-zinc-400 text-center text-[16px] max-w-xl mx-auto mb-12">
            Run it locally when you need a quick look, or deploy it standalone for always-on visibility.
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            {/* Embedded */}
            <div class="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <div class="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center mb-4">
                <svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 17l6-6-6-6M12 19h8" />
                </svg>
              </div>
              <h3 class="text-white font-semibold mb-2">Embedded</h3>
              <p class="text-zinc-400 text-[14px] mb-3">Bundled into the CLI binary. Run <span class="font-mono text-zinc-300 text-[13px]">teploy ui</span> from your terminal to launch a local dashboard against your current config. No install, no setup.</p>
              <div class="font-mono text-[12px] text-zinc-500 bg-black/20 rounded-md px-3 py-2">
                teploy ui <span class="text-zinc-600"># opens localhost</span>
              </div>
            </div>

            {/* Standalone */}
            <div class="p-6 rounded-xl border border-sky-500/20 bg-sky-500/[0.03]">
              <div class="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center mb-4">
                <svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-white font-semibold mb-2">Standalone <span class="text-zinc-500 font-normal text-[13px]">— 24/7 monitoring</span></h3>
              <p class="text-zinc-400 text-[14px] mb-3">Run the dashboard as a daemon on your server. Adds HTTP/TCP uptime checks, response-time history, and alerting on top of the embedded feature set.</p>
              <div class="font-mono text-[12px] text-zinc-500 bg-black/20 rounded-md px-3 py-2">
                teploy ui --serve <span class="text-zinc-600"># background daemon</span>
              </div>
            </div>
          </div>
        </div>

        {/* No desync callout */}
        <div class="mb-24 rounded-xl border border-white/[0.06] bg-white/[0.02] p-8">
          <h3 class="text-lg font-semibold text-white mb-3">One source of truth</h3>
          <p class="text-zinc-400 text-[14px] leading-relaxed max-w-2xl">
            Dokploy and Coolify maintain a separate database of what's deployed. Change anything via SSH and the UI is wrong. Dash doesn't have its own database. It reads the state files the CLI writes on your server. Deploy from CLI, UI, or a webhook — the view is always current.
          </p>
        </div>

        {/* Features */}
        <div class="mb-16">
          <h2 class="text-2xl sm:text-3xl font-semibold text-white mb-4">What's inside</h2>
          <p class="text-zinc-400 text-[16px] max-w-lg mb-8">A practical operations dashboard. No telemetry pipeline to set up, no agents to install.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {features.map((feature) => (
            <div class="group p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.03] hover:border-sky-500/20 transition-all">
              <div class="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center mb-3">
                <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={feature.icon} />
                </svg>
              </div>
              <h3 class="text-[15px] font-medium text-white mb-1.5">{feature.title}</h3>
              <p class="text-[13px] text-zinc-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div class="text-center">
          <h2 class="text-2xl font-semibold text-white mb-4">Already have the CLI?</h2>
          <p class="text-zinc-400 text-[15px] mb-6">Dash ships in the same binary. Run <span class="font-mono text-zinc-300">teploy ui</span> and you're in.</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/cli" class="px-6 py-3 bg-white text-zinc-900 font-medium text-[14px] rounded-lg hover:bg-zinc-200 transition-colors">
              Install the CLI
            </a>
            <a href="/docs" class="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors">
              Read the docs &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
