export const config = { mode: "static" };

export function head() {
  return { title: "teploy CLI — Zero-Downtime Docker Deploys" };
}

export default function Cli() {
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
              brew install useteploy/tap/teploy
            </div>
            <a href="/docs/getting-started/quick-start" class="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors">
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

        {/* Pairs with Dash */}
        <div class="mb-24 rounded-xl border border-white/[0.06] bg-white/[0.02] p-8">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 class="text-lg font-semibold text-white mb-2">Want a web UI?</h3>
              <p class="text-zinc-400 text-[14px] leading-relaxed max-w-xl">
                Run <span class="font-mono text-zinc-300 text-[13px]">teploy ui</span> for a local dashboard, or deploy <a href="/dash" class="text-sky-400 hover:text-sky-300 underline underline-offset-2">teploy Dash</a> standalone for 24/7 monitoring with HTTP/TCP health checks. Same binary, same state files — no desync.
              </p>
            </div>
            <a href="/dash" class="shrink-0 px-4 py-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.12] text-white text-[14px] font-medium rounded-lg transition-colors">
              Dash &rarr;
            </a>
          </div>
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
