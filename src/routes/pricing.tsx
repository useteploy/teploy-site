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
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
            Free tools. Pay-as-you-go cloud.
          </h1>
          <p class="text-zinc-400 text-lg max-w-xl mx-auto">
            Everything you need to deploy, code, and monitor is free. The cloud platform charges only for what you use.
          </p>
        </div>

        {/* Free section */}
        <div class="mb-16">
          <div class="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10">
            <div class="flex items-baseline justify-between mb-6">
              <div>
                <h2 class="text-2xl font-semibold text-white">Free, forever</h2>
                <p class="text-zinc-400 text-[14px] mt-1">No credit card, no limits, no catch</p>
              </div>
              <span class="text-3xl font-bold text-white">$0</span>
            </div>
            <div class="grid sm:grid-cols-2 gap-3">
              <div class="free-item">
                <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <div>
                  <span class="text-white text-[14px] font-medium">CLI</span>
                  <span class="text-zinc-500 text-[13px]"> -- unlimited deploys to any server</span>
                </div>
              </div>
              <div class="free-item">
                <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <div>
                  <span class="text-white text-[14px] font-medium">UI</span>
                  <span class="text-zinc-500 text-[13px]"> -- dashboard + uptime monitoring</span>
                </div>
              </div>
              <div class="free-item">
                <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <div>
                  <span class="text-white text-[14px] font-medium">Observe</span>
                  <span class="text-zinc-500 text-[13px]"> -- analytics, APM, error tracking</span>
                </div>
              </div>
              <div class="free-item">
                <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <div>
                  <span class="text-white text-[14px] font-medium">Code</span>
                  <span class="text-zinc-500 text-[13px]"> -- AI coding assistant + IDE extensions</span>
                </div>
              </div>
              <div class="free-item">
                <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <div>
                  <span class="text-white text-[14px] font-medium">Trmnl</span>
                  <span class="text-zinc-500 text-[13px]"> -- terminal IDE config bundle</span>
                </div>
              </div>
              <div class="free-item">
                <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <div>
                  <span class="text-white text-[14px] font-medium">Open source</span>
                  <span class="text-zinc-500 text-[13px]"> -- self-host everything, no lock-in</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud section */}
        <div class="mb-16">
          <div class="rounded-2xl border border-amber-500/20 bg-amber-500/[0.03] p-8 sm:p-10">
            <div class="mb-8">
              <h2 class="text-2xl font-semibold text-white mb-2">Teploy Cloud</h2>
              <p class="text-zinc-400 text-[14px]">
                Don't want to manage your own servers? Provision VPS through Teploy and we handle the setup.
                Pay only for what you use -- no subscriptions, no minimums.
              </p>
            </div>

            {/* Paid services */}
            <p class="text-zinc-500 text-[11px] uppercase tracking-wider font-medium mb-4">Pay as you go</p>
            <div class="space-y-0">
              {/* VPS */}
              <div class="cloud-row">
                <div>
                  <h3 class="text-white font-medium text-[15px]">VPS Provisioning</h3>
                  <p class="text-zinc-500 text-[13px]">Vultr, Hetzner, DigitalOcean, Linode, OVH</p>
                </div>
                <div class="text-right">
                  <span class="text-amber-400 font-semibold">Provider cost + margin</span>
                </div>
              </div>

              {/* Send */}
              <div class="cloud-row">
                <div>
                  <h3 class="text-white font-medium text-[15px]">Send</h3>
                  <p class="text-zinc-500 text-[13px]">Email via SES, SMS/voice via Telnyx</p>
                </div>
                <div class="text-right">
                  <span class="text-amber-400 font-semibold">Per message</span>
                </div>
              </div>

              {/* Router */}
              <div class="cloud-row" style={{ borderBottom: "none" }}>
                <div>
                  <h3 class="text-white font-medium text-[15px]">Router API</h3>
                  <p class="text-zinc-500 text-[13px]">Programmatic access to all cloud services</p>
                </div>
                <div class="text-right">
                  <span class="text-amber-400 font-semibold">Per request</span>
                </div>
              </div>
            </div>

            {/* Included with Cloud */}
            <div class="mt-8 pt-6 border-t border-white/[0.06]">
              <p class="text-zinc-500 text-[11px] uppercase tracking-wider font-medium mb-4">Included with any Cloud account</p>
              <div class="grid sm:grid-cols-2 gap-3">
                <div class="free-item">
                  <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span class="text-white text-[14px] font-medium">Billing</span>
                    <span class="text-zinc-500 text-[13px]"> -- tax threshold tracking, unlimited entities</span>
                  </div>
                </div>
                <div class="free-item">
                  <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span class="text-white text-[14px] font-medium">CDN & Domains</span>
                    <span class="text-zinc-500 text-[13px]"> -- Cloudflare, domain registration, DNS</span>
                  </div>
                </div>
                <div class="free-item">
                  <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span class="text-white text-[14px] font-medium">Object Storage</span>
                    <span class="text-zinc-500 text-[13px]"> -- S3-compatible (R2, B2, MinIO)</span>
                  </div>
                </div>
                <div class="free-item">
                  <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span class="text-white text-[14px] font-medium">Team management</span>
                    <span class="text-zinc-500 text-[13px]"> -- orgs, RBAC, audit logs, API keys</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 class="text-xl font-semibold text-white mb-8">Common questions</h2>
          <div class="space-y-6">
            <div class="faq">
              <h3>Do I need Teploy Cloud to use teploy?</h3>
              <p>No. The CLI, UI, Observe, Code, and Trmnl are all free and work with any server you have SSH access to. Teploy Cloud is optional -- it just makes provisioning and managing servers easier.</p>
            </div>
            <div class="faq">
              <h3>How does VPS pricing work?</h3>
              <p>You pick a provider (Vultr, Hetzner, etc.), choose a region and size, and we provision it for you. You pay the provider's rate plus a small margin. The server is yours -- we just handle the setup and make it easy to manage from one dashboard.</p>
            </div>
            <div class="faq">
              <h3>Can I bring my own servers?</h3>
              <p>Yes. The CLI works with any server you can SSH into. You don't need Teploy Cloud at all. Many users start with their own servers and add Cloud later for convenience.</p>
            </div>
            <div class="faq">
              <h3>What about Observe pricing?</h3>
              <p>Self-hosted Observe is free with no limits. If you want us to host Observe for you (managed), that's a Cloud feature with usage-based pricing based on event volume.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
