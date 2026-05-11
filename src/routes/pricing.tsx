export const config = { mode: "static" };

export function head() {
  return { title: "Pricing" };
}

export default function Pricing() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div class="text-center mb-16">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-4">
            Free. Self-host. No catch.
          </h1>
          <p class="text-zinc-600 dark:text-zinc-400 text-lg max-w-xl mx-auto">
            Every Teploy tool is free and open source. Run them on your own servers. No accounts, no usage limits, no upsell.
          </p>
        </div>

        {/* Free section */}
        <div class="mb-16">
          <div class="rounded-2xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02] p-8 sm:p-10">
            <div class="flex items-baseline justify-between mb-6">
              <div>
                <h2 class="text-2xl font-semibold text-zinc-900 dark:text-white">Free, forever</h2>
                <p class="text-zinc-600 dark:text-zinc-400 text-[14px] mt-1">No credit card, no limits, no catch</p>
              </div>
              <span class="text-3xl font-bold text-zinc-900 dark:text-white">$0</span>
            </div>
            <div class="grid sm:grid-cols-2 gap-3">
              <div class="free-item">
                <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <div>
                  <span class="text-zinc-900 dark:text-white text-[14px] font-medium">teploy CLI</span>
                  <span class="text-zinc-500 text-[13px]"> — unlimited deploys to any server</span>
                </div>
              </div>
              <div class="free-item">
                <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <div>
                  <span class="text-zinc-900 dark:text-white text-[14px] font-medium">teploy Dash</span>
                  <span class="text-zinc-500 text-[13px]"> — web UI + uptime monitoring</span>
                </div>
              </div>
              <div class="free-item">
                <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <div>
                  <span class="text-zinc-900 dark:text-white text-[14px] font-medium">teploy Observe</span>
                  <span class="text-zinc-500 text-[13px]"> — analytics, APM, error tracking</span>
                </div>
              </div>
              <div class="free-item">
                <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <div>
                  <span class="text-zinc-900 dark:text-white text-[14px] font-medium">trmnl</span>
                  <span class="text-zinc-500 text-[13px]"> — terminal IDE config bundle</span>
                </div>
              </div>
              <div class="free-item sm:col-span-2">
                <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <div>
                  <span class="text-zinc-900 dark:text-white text-[14px] font-medium">Open source</span>
                  <span class="text-zinc-500 text-[13px]"> — self-host everything, no lock-in, no telemetry phoning home</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why free */}
        <div class="mb-16 rounded-xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02] p-8">
          <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-3">Why is it free?</h3>
          <p class="text-zinc-600 dark:text-zinc-400 text-[14px] leading-relaxed">
            Teploy is a solo project that exists to remove the toll booths on self-hosting. Deploys, observability, and a terminal setup are tools — not subscriptions. The tools stay free and open source. If a paid managed offering ever ships, it'll be a separate add-on, not a gate around what's here today.
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-8">Common questions</h2>
          <div class="space-y-6">
            <div class="faq">
              <h3>What does it cost to run?</h3>
              <p>The cost of the server you run it on. A $5/month VPS from Hetzner or Vultr is plenty for most apps. Teploy itself takes no cut.</p>
            </div>
            <div class="faq">
              <h3>Do I need an account?</h3>
              <p>No. There's no Teploy account, no login, no signup. You install a binary on your machine and SSH into your server. That's it.</p>
            </div>
            <div class="faq">
              <h3>Can I bring my own servers?</h3>
              <p>Yes. The CLI works with any server you can SSH into — Vultr, Hetzner, DigitalOcean, Linode, OVH, your homelab, anywhere.</p>
            </div>
            <div class="faq">
              <h3>What's the catch?</h3>
              <p>No catch. The code is MIT/AGPL on GitHub. You can fork it, read it, audit it, and run it forever. If a managed offering ever ships, it'll be optional and separate from the free tools.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
