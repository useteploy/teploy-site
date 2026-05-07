export const config = { mode: "static" };

export function head() {
  return { title: "Teploy Billing -- MoR Tax Compliance" };
}

const features = [
  {
    title: 'Tax Thresholds',
    description: 'Track economic nexus across all 50 US states and international jurisdictions automatically.',
    icon: 'threshold',
  },
  {
    title: 'Stripe Sync',
    description: 'Daily automatic sync of transactions, customers, and revenue data from your Stripe account.',
    icon: 'sync',
  },
  {
    title: 'Filing Guidance',
    description: 'Know exactly when and where you need to file. Deadline reminders and threshold alerts.',
    icon: 'filing',
  },
  {
    title: 'Multi-Entity',
    description: 'Manage multiple businesses and legal entities with separate thresholds and obligations.',
    icon: 'entity',
  },
  {
    title: 'Revenue Dashboard',
    description: 'See revenue broken down by jurisdiction, track trends, and export reports.',
    icon: 'dashboard',
  },
  {
    title: 'Tax Rate API',
    description: 'Look up sales tax rates by address via REST API. Integrate into your checkout flow.',
    icon: 'api',
  },
];

function FeatureIcon({ icon }: { icon: string }) {
  const paths: Record<string, string> = {
    threshold: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    sync: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    filing: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    entity: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    dashboard: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z',
    api: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  };
  return (
    <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={paths[icon]} />
    </svg>
  );
}

export default function Payments() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[12px] font-medium mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Billing
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
            DIY tax compliance,<br class="hidden sm:block" /> your Stripe account
          </h1>
          <p class="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Connect your own Stripe account. Track revenue thresholds per jurisdiction.
            Get alerts at 70/80/90%. No middleman on payments — Stripe base fees only.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/getting-started/quick-start" class="px-6 py-3 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer">
              Get Started
            </a>
            <a href="/getting-started/introduction" class="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors">
              Learn more &rarr;
            </a>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div class="mb-24 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden shadow-2xl">
          <div class="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-white/[0.06]">
            <div class="flex items-center gap-1.5">
              <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
            </div>
            <div class="flex-1 flex justify-center">
              <span class="text-zinc-500 text-[12px]">Tax Thresholds</span>
            </div>
          </div>
          <div class="p-6">
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <p class="text-zinc-500 text-[11px] mb-1">Jurisdictions tracked</p>
                <p class="text-2xl font-semibold text-white">54</p>
              </div>
              <div class="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <p class="text-zinc-500 text-[11px] mb-1">Approaching threshold</p>
                <p class="text-2xl font-semibold text-amber-400">3</p>
              </div>
              <div class="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <p class="text-zinc-500 text-[11px] mb-1">Filing due soon</p>
                <p class="text-2xl font-semibold text-red-400">1</p>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div class="flex items-center gap-3">
                  <span class="text-white text-[13px] font-medium w-24">California</span>
                  <div class="w-48 h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div class="h-full rounded-full bg-amber-400" style={{ width: "87%" }}></div>
                  </div>
                </div>
                <span class="text-amber-400 text-[12px] font-medium">87% ($435K / $500K)</span>
              </div>
              <div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div class="flex items-center gap-3">
                  <span class="text-white text-[13px] font-medium w-24">New York</span>
                  <div class="w-48 h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div class="h-full rounded-full bg-emerald-400" style={{ width: "42%" }}></div>
                  </div>
                </div>
                <span class="text-zinc-400 text-[12px] font-medium">42% ($210K / $500K)</span>
              </div>
              <div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div class="flex items-center gap-3">
                  <span class="text-white text-[13px] font-medium w-24">Texas</span>
                  <div class="w-48 h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div class="h-full rounded-full bg-emerald-400" style={{ width: "18%" }}></div>
                  </div>
                </div>
                <span class="text-zinc-400 text-[12px] font-medium">18% ($90K / $500K)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div class="mb-20">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-semibold text-white mb-4">Compliance on autopilot</h2>
            <p class="text-zinc-500 max-w-xl mx-auto">Stop guessing about sales tax. Let Teploy track obligations so you can focus on growth.</p>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div class="group p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-amber-500/20 transition-all">
                <div class="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <FeatureIcon icon={feature.icon} />
                </div>
                <h3 class="text-white font-medium mb-2">{feature.title}</h3>
                <p class="text-zinc-500 text-[14px] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div class="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.02] to-transparent p-8 sm:p-12 text-center">
          <h2 class="text-xl font-semibold text-white mb-3">Connect Stripe in 2 minutes</h2>
          <p class="text-zinc-500 text-[14px] mb-8 max-w-lg mx-auto">
            Authorize your Stripe account, and Teploy starts syncing transactions and calculating thresholds immediately.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-8">
            <div class="text-center">
              <p class="text-2xl font-semibold text-white">50+</p>
              <p class="text-zinc-500 text-[12px]">US jurisdictions</p>
            </div>
            <div class="w-px h-10 bg-white/[0.08]"></div>
            <div class="text-center">
              <p class="text-2xl font-semibold text-white">9</p>
              <p class="text-zinc-500 text-[12px]">Countries</p>
            </div>
            <div class="w-px h-10 bg-white/[0.08]"></div>
            <div class="text-center">
              <p class="text-2xl font-semibold text-white">Daily</p>
              <p class="text-zinc-500 text-[12px]">Stripe sync</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
