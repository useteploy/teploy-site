const categories = [
  {
    label: "CLI",
    color: "indigo",
    heading: "Deploy to any server, zero downtime",
    subheading: "Single Go binary. SSH into any server. Three lines of config. The engine behind every Teploy install.",
    features: [
      { title: "Zero-downtime deploys", description: "New container starts, health checks pass, traffic routes, old container stops. Automatic rollback on failure.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
      { title: "Caddy auto-HTTPS", description: "TLS certificates provisioned and renewed automatically. Routing and load balancing configured for you.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
      { title: "Multi-server in parallel", description: "Deploy to multiple servers at once with load-balancer configuration. Preview environments with auto-expiry.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
      { title: "Accessories & backups", description: "Postgres, Redis, MySQL alongside your app. S3 backups with cron scheduling and database-aware dumps.", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
    ],
  },
  {
    label: "Dash",
    color: "sky",
    heading: "A web UI that never desyncs",
    subheading: "Embedded for quick access, standalone for 24/7 monitoring. Reads the same state files the CLI writes.",
    features: [
      { title: "Live deploy view", description: "Watch builds and deploys stream in real time. WebSocket-driven, no refresh required.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
      { title: "Apps & accessories", description: "Start, stop, restart, rollback. Manage databases and caches alongside your apps from one screen.", icon: "M5 12h14M12 5l7 7-7 7" },
      { title: "Uptime monitoring", description: "Standalone mode adds HTTP/TCP health checks, response-time graphs, and an incident timeline.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
      { title: "Alerts on outages", description: "Webhook, email, or Slack notifications when a check fails or recovers. Per-monitor thresholds.", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
    ],
  },
  {
    label: "Observe",
    color: "violet",
    heading: "See what's happening",
    subheading: "Analytics, APM, error tracking, and session replay in one self-hosted binary. Privacy-first.",
    features: [
      { title: "Web analytics", description: "Page views, sessions, referrers, devices. Lightweight script, no cookie banners needed.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
      { title: "APM & tracing", description: "OpenTelemetry-native distributed tracing. Latency percentiles, slow query detection, service maps.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
      { title: "Error tracking", description: "Catch exceptions before users report them. Stack traces, source maps, affected-user counts.", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" },
      { title: "Unified dashboard", description: "Click an error, see the trace. Click a slow page, see the API calls. Everything connects automatically.", icon: "M5 12h14M12 5l7 7-7 7" },
    ],
  },
  {
    label: "trmnl",
    color: "zinc",
    heading: "A terminal IDE, ready to go",
    subheading: "Neovim, Zellij, Lazygit, and 50+ tools. Pre-configured with Tokyo Night. One install.",
    features: [
      { title: "Neovim + 50 LSPs", description: "Autocompletion, formatting, diagnostics, debugging, and testing out of the box. Kickstart-based.", icon: "M4 17l6-6-6-6M12 19h8" },
      { title: "Zellij multiplexer", description: "Panes, tabs, layouts, session management. Custom keybinds tuned for Neovim integration.", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" },
      { title: "Modern CLI tools", description: "bat, eza, delta, fzf, ripgrep, fd, zoxide, starship. Drop-in replacements, pre-configured.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35" },
      { title: "One command install", description: "Homebrew or shell script. macOS, Linux, WSL. Run trmnl doctor to verify. No manual setup.", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" },
    ],
  },
];

const colorStyles: Record<string, { badge: string; dot: string; icon: string; iconBg: string; cardHover: string }> = {
  indigo: { badge: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20", dot: "bg-indigo-400", icon: "text-indigo-400", iconBg: "bg-indigo-500/10", cardHover: "hover:border-indigo-500/20" },
  sky: { badge: "bg-sky-500/10 text-sky-400 border border-sky-500/20", dot: "bg-sky-400", icon: "text-sky-400", iconBg: "bg-sky-500/10", cardHover: "hover:border-sky-500/20" },
  violet: { badge: "bg-violet-500/10 text-violet-400 border border-violet-500/20", dot: "bg-violet-400", icon: "text-violet-400", iconBg: "bg-violet-500/10", cardHover: "hover:border-violet-500/20" },
  zinc: { badge: "bg-zinc-200/70 dark:bg-white/[0.06] text-zinc-700 dark:text-zinc-400 border border-zinc-200 dark:border-white/[0.08]", dot: "bg-zinc-400", icon: "text-zinc-700 dark:text-zinc-400", iconBg: "bg-zinc-200/70 dark:bg-white/[0.06]", cardHover: "hover:border-zinc-500/20" },
};

export default function Features() {
  return (
    <section id="features" class="py-24 relative">
      <div class="max-w-5xl mx-auto px-6">
        <div class="space-y-20">
          {categories.map((cat) => {
            const s = colorStyles[cat.color];
            return (
              <div>
                <div class="mb-8">
                  <span class={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-medium mb-4 ${s.badge}`}>
                    <span class={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    {cat.label}
                  </span>
                  <h2 class="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-2">{cat.heading}</h2>
                  <p class="text-[16px] text-zinc-700 dark:text-zinc-400 max-w-lg">{cat.subheading}</p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.features.map((f) => (
                    <div class={`group p-5 rounded-xl bg-zinc-100/60 dark:bg-white/[0.02] border border-zinc-200/70 dark:border-white/[0.06] hover:bg-zinc-100/70 dark:hover:bg-white/[0.03] transition-all ${s.cardHover}`}>
                      <div class={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${s.iconBg}`}>
                        <svg class={`w-4 h-4 ${s.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={f.icon} />
                        </svg>
                      </div>
                      <h3 class="text-[15px] font-medium text-zinc-900 dark:text-white mb-1.5">{f.title}</h3>
                      <p class="text-[13px] text-zinc-600 dark:text-zinc-500 leading-relaxed">{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
