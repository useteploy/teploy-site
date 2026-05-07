export const config = { mode: "static" };

export function head() {
  return { title: "Zero-Downtime Docker Deploys" };
}

export default function Deploy() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-5xl mx-auto px-6">

        {/* Hero */}
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[12px] font-medium mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            Free, open source
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
            Deploy to any server,<br class="hidden sm:block" /> zero downtime
          </h1>
          <p class="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            A single Go binary. SSH into any server. Three lines of config. Zero-downtime deploys
            with automatic rollback. No management server, no dependencies.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div class="px-6 py-3 bg-zinc-800 border border-zinc-700 rounded-lg font-mono text-[14px] text-zinc-300">
              brew install teploy
            </div>
            <a href="/getting-started/quick-start" class="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors">
              Quick start &rarr;
            </a>
          </div>
        </div>

        {/* Terminal Demo */}
        <div class="mb-24 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden shadow-2xl">
          <div class="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-white/[0.06]">
            <div class="flex items-center gap-1.5">
              <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
            </div>
          </div>
          <div class="p-6 font-mono text-[13px] leading-relaxed">
            <p class="text-zinc-500">$ cat teploy.yml</p>
            <p class="text-zinc-300 mt-1">app: myapp</p>
            <p class="text-zinc-300">domain: myapp.com</p>
            <p class="text-zinc-300">server: 1.2.3.4</p>
            <p class="text-zinc-500 mt-4">$ teploy deploy</p>
            <p class="text-indigo-400 mt-1">Building from Dockerfile...</p>
            <p class="text-indigo-400">Starting new container on port 3001</p>
            <p class="text-indigo-400">Health check passed</p>
            <p class="text-indigo-400">Routing traffic via Caddy (HTTPS auto-provisioned)</p>
            <p class="text-indigo-400">Stopping old container</p>
            <p class="text-green-400 mt-1">Deployed in 14s. Zero downtime.</p>
          </div>
        </div>

        {/* CLI + UI */}
        <div class="mb-24">
          <h2 class="text-2xl sm:text-3xl font-semibold text-white text-center mb-4">CLI + UI, one tool</h2>
          <p class="text-zinc-400 text-center text-[16px] max-w-xl mx-auto mb-12">
            The CLI is the engine. The UI runs embedded for quick access, or standalone on your server for always-on monitoring.
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            {/* CLI */}
            <div class="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <div class="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 17l6-6-6-6M12 19h8" />
                </svg>
              </div>
              <h3 class="text-white font-semibold mb-2">CLI</h3>
              <p class="text-zinc-400 text-[14px] mb-3">Single Go binary. Deploy, rollback, logs, env vars, accessories, backups, preview environments. Everything from your terminal.</p>
              <div class="font-mono text-[12px] text-zinc-500 bg-black/20 rounded-md px-3 py-2">
                teploy deploy<br />
                teploy rollback<br />
                teploy logs -f
              </div>
            </div>

            {/* UI */}
            <div class="p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.03]">
              <div class="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-white font-semibold mb-2">UI <span class="text-zinc-500 font-normal text-[13px]">— embedded or standalone</span></h3>
              <p class="text-zinc-400 text-[14px] mb-3">Run <span class="font-mono text-zinc-300 text-[13px]">teploy ui</span> locally for a quick dashboard, or deploy the UI standalone on your server for 24/7 access with uptime monitoring, HTTP/TCP health checks, and alerting. Uptime Kuma-style, built in.</p>
              <div class="font-mono text-[12px] text-zinc-500 bg-black/20 rounded-md px-3 py-2">
                teploy ui <span class="text-zinc-600"># embedded</span><br />
                teploy ui --serve <span class="text-zinc-600"># standalone</span>
              </div>
            </div>
          </div>
        </div>

        {/* No desync callout */}
        <div class="mb-24 rounded-xl border border-white/[0.06] bg-white/[0.02] p-8">
          <h3 class="text-lg font-semibold text-white mb-3">No desync. Ever.</h3>
          <p class="text-zinc-400 text-[14px] leading-relaxed max-w-2xl">
            Tools like Dokploy and Coolify maintain their own database of what's deployed. When you change something via SSH, the UI is stale. Teploy works differently: the CLI writes state to files on the server. The UI reads those same files. Whether you deploy from the CLI, the UI, or a webhook — the state files are always current. One source of truth. No divergence.
          </p>
        </div>

        {/* Features Grid */}
        <div class="mb-24">
          <h2 class="text-2xl font-semibold text-white mb-8">Everything you need to ship</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="feat-card"><h4>Zero-downtime deploys</h4><p>New container starts, health checks pass, traffic routes, old container stops. Automatic rollback on failure.</p></div>
            <div class="feat-card"><h4>Automatic HTTPS</h4><p>Caddy provisions and renews TLS certificates automatically for every domain.</p></div>
            <div class="feat-card"><h4>Multi-server</h4><p>Deploy to multiple servers in parallel with load balancer configuration.</p></div>
            <div class="feat-card"><h4>Accessories</h4><p>Postgres, Redis, MySQL alongside your app. One-line config, managed by the CLI.</p></div>
            <div class="feat-card"><h4>Preview environments</h4><p>Deploy branches to temporary URLs with auto-expiry. One command.</p></div>
            <div class="feat-card"><h4>Auto-deploy</h4><p>Webhook listener for CI/CD. Push to main, teploy deploys automatically.</p></div>
            <div class="feat-card"><h4>Backups</h4><p>S3-compatible volume backups with cron scheduling and database-aware dumps.</p></div>
            <div class="feat-card"><h4>Encrypted secrets</h4><p>Environment variables and encrypted secrets persisted across deploys.</p></div>
            <div class="feat-card"><h4>VPN mesh</h4><p>Tailscale or WireGuard networking across your servers. One command.</p></div>
          </div>
        </div>

        {/* Comparison */}
        <div class="mb-16">
          <h2 class="text-2xl font-semibold text-white text-center mb-8">How teploy compares</h2>
          <div class="overflow-x-auto">
            <table class="compare-table">
              <thead>
                <tr>
                  <th></th>
                  <th class="highlight">teploy</th>
                  <th>Kamal</th>
                  <th>Coolify</th>
                  <th>Dokploy</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Management server required</td><td class="highlight">No</td><td>No</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>Single binary</td><td class="highlight">Yes</td><td>No (Ruby)</td><td>No</td><td>No</td></tr>
                <tr><td>Config lines to deploy</td><td class="highlight">3</td><td>~20</td><td>GUI</td><td>GUI</td></tr>
                <tr><td>Auto HTTPS</td><td class="highlight">Caddy</td><td>Kamal Proxy</td><td>Traefik</td><td>Traefik</td></tr>
                <tr><td>Preview environments</td><td class="highlight">Yes</td><td>No</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>No UI desync</td><td class="highlight">Yes</td><td>N/A</td><td>No</td><td>No</td></tr>
                <tr><td>Uptime monitoring</td><td class="highlight">Built in</td><td>No</td><td>No</td><td>No</td></tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
