export default function BlueprintHero() {
  return (
    <section class="relative min-h-[auto] sm:min-h-[100svh] flex flex-col">
      {/* Gradient background */}
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-indigo-500/8 via-transparent to-transparent blur-3xl" />
        <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Hero content */}
      <div class="relative flex-1 flex items-start sm:items-center justify-center px-4 sm:px-6 pt-16 sm:pt-14">
        <div class="max-w-3xl mx-auto text-center">
          {/* Status badge */}
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span class="text-[12px] text-zinc-400 font-medium">Free, open source</span>
          </div>

          {/* Headline */}
          <h1 class="text-[clamp(2.5rem,6vw,4rem)] font-semibold tracking-[-0.03em] text-white leading-[1.1] mb-4">
            <span class="flip-letter-container">
              <span class="flip-letter">
                <span class="flip-letter-front">D</span>
                <span class="flip-letter-back">T</span>
              </span>
            </span>eploy. Observe. Build.<br />
            <span class="text-zinc-500">Own your stack.</span>
          </h1>

          {/* Subheadline */}
          <p class="text-[17px] text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Free tools to deploy, monitor, and develop. Zero-downtime deploys via SSH,
            observability, and a terminal IDE. No lock-in, no hosted dependencies.
          </p>

          {/* CTA */}
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-12">
            <a href="/docs/getting-started/quick-start" class="group px-5 py-2.5 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-all flex items-center gap-2 cursor-pointer">
              Get Started
              <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#how" class="px-5 py-2.5 text-[14px] text-zinc-400 hover:text-white transition-colors">
              See how it works
            </a>
          </div>

          {/* Product cards */}
          <div class="max-w-2xl mx-auto mb-16 sm:mb-0">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <ProductCard href="/cli" icon="M4 17l6-6-6-6M12 19h8" color="indigo" label="CLI" sub="Zero-downtime deploys" />
              <ProductCard href="/dash" icon="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" color="sky" label="Dash" sub="Web UI + uptime" />
              <ProductCard href="/observe" icon="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" color="violet" label="Observe" sub="Analytics & APM" />
              <ProductCard href="/trmnl" icon="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" color="zinc" label="trmnl" sub="Terminal IDE" />
            </div>
          </div>
        </div>
      </div>

      {/* Providers strip */}
      <div class="relative pt-8 sm:pt-0 pb-8 sm:pb-12">
        <div class="max-w-3xl mx-auto px-6">
          <div class="flex items-center justify-center gap-8 opacity-40">
            <span class="text-[12px] text-zinc-500 uppercase tracking-wider">Works with</span>
            <div class="flex items-center gap-6">
              <span class="text-[13px] text-zinc-400 font-medium">Vultr</span>
              <span class="text-[13px] text-zinc-400 font-medium">Hetzner</span>
              <span class="text-[13px] text-zinc-400 font-medium">DigitalOcean</span>
              <span class="text-[13px] text-zinc-400 font-medium hidden sm:block">Linode</span>
              <span class="text-[13px] text-zinc-400 font-medium hidden sm:block">OVH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ href, icon, color, label, sub }: {
  href: string; icon: string; color: string; label: string; sub: string;
}) {
  const colorMap: Record<string, { bg: string; text: string; hover: string }> = {
    indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", hover: "hover:border-indigo-500/30 hover:bg-indigo-500/[0.04]" },
    sky:    { bg: "bg-sky-500/10", text: "text-sky-400", hover: "hover:border-sky-500/30 hover:bg-sky-500/[0.04]" },
    violet: { bg: "bg-violet-500/10", text: "text-violet-400", hover: "hover:border-violet-500/30 hover:bg-violet-500/[0.04]" },
    zinc:   { bg: "bg-white/[0.06]", text: "text-zinc-400", hover: "hover:border-zinc-500/30 hover:bg-white/[0.03]" },
  };
  const c = colorMap[color] || colorMap.zinc;

  return (
    <a href={href} class={`group text-center p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] ${c.hover} transition-all`}>
      <div class={`w-7 h-7 rounded-lg ${c.bg} flex items-center justify-center mx-auto mb-1.5`}>
        <svg class={`w-3.5 h-3.5 ${c.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={icon} />
        </svg>
      </div>
      <div class="text-[12px] text-white font-medium">{label}</div>
      <div class="text-[10px] text-zinc-500">{sub}</div>
    </a>
  );
}
