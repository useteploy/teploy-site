export const config = { mode: "static" };

export function head() {
  return { title: "Teploy Send -- Email, SMS & Voice" };
}

const features = [
  {
    title: 'SMS Dashboard',
    description: 'Send and receive text messages from a visual dashboard. View conversations, delivery status, and message history.',
    icon: 'sms',
  },
  {
    title: 'Email Campaigns',
    description: 'Compose transactional and bulk emails with a visual editor. Custom domains with DKIM, SPF, and DMARC configured automatically.',
    icon: 'email',
  },
  {
    title: 'Voice Calls',
    description: 'Make and manage calls from the dashboard. Set up IVR menus, forwarding rules, and recording with a few clicks.',
    icon: 'voice',
  },
  {
    title: 'Number Management',
    description: 'Buy and manage local, toll-free, and international numbers. Search, provision, and configure from one screen.',
    icon: 'number',
  },
  {
    title: 'Delivery Logs',
    description: 'Full visibility into every message. Track delivery, opens, bounces, and errors across all channels in real-time.',
    icon: 'logs',
  },
  {
    title: 'API & SDK',
    description: 'Automate everything via REST API or Node.js SDK. The dashboard and API share the same capabilities.',
    icon: 'api',
  },
];

function FeatureIcon({ icon }: { icon: string }) {
  const paths: Record<string, string> = {
    sms: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    email: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    voice: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    number: 'M7 20l4-16m2 16l4-16M6 9h14M4 15h14',
    logs: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    api: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  };
  return (
    <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={paths[icon]} />
    </svg>
  );
}

export default function Communicate() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[12px] font-medium mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Send
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
            Email, SMS & voice<br class="hidden sm:block" /> one API
          </h1>
          <p class="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Email via AWS SES, SMS and voice via Telnyx. Abstracted providers,
            delivery analytics, templates, and suppression lists. One dashboard.
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
              <span class="text-zinc-500 text-[12px]">Messages</span>
            </div>
          </div>
          <div class="p-6">
            {/* Stats Row */}
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <p class="text-zinc-500 text-[11px] mb-1">Sent today</p>
                <p class="text-2xl font-semibold text-white">1,247</p>
              </div>
              <div class="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <p class="text-zinc-500 text-[11px] mb-1">Delivered</p>
                <p class="text-2xl font-semibold text-emerald-400">98.4%</p>
              </div>
              <div class="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <p class="text-zinc-500 text-[11px] mb-1">Active numbers</p>
                <p class="text-2xl font-semibold text-white">12</p>
              </div>
            </div>
            {/* Message List */}
            <div class="space-y-2">
              <div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <span class="text-white text-[13px] font-medium">+1 (555) 012-3456</span>
                    <p class="text-zinc-500 text-[11px]">Your order #4821 has shipped!</p>
                  </div>
                </div>
                <span class="text-emerald-400 text-[11px] font-medium">Delivered</span>
              </div>
              <div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span class="text-white text-[13px] font-medium">jane@example.com</span>
                    <p class="text-zinc-500 text-[11px]">Welcome to Acme! Confirm your email</p>
                  </div>
                </div>
                <span class="text-emerald-400 text-[11px] font-medium">Opened</span>
              </div>
              <div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span class="text-white text-[13px] font-medium">+1 (555) 987-6543</span>
                    <p class="text-zinc-500 text-[11px]">Outbound call · 2m 14s</p>
                  </div>
                </div>
                <span class="text-zinc-400 text-[11px] font-medium">Completed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div class="mb-20">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-semibold text-white mb-4">One dashboard, every channel</h2>
            <p class="text-zinc-500 max-w-xl mx-auto">Telnyx for SMS and voice. AWS SES for email. Teploy wraps both into a single, easy-to-use interface.</p>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div class="group p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all">
                <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
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
          <h2 class="text-xl font-semibold text-white mb-3">Built on the best providers</h2>
          <p class="text-zinc-500 text-[14px] mb-8 max-w-lg mx-auto">
            Teploy handles the complexity of Telnyx and AWS SES so you don't have to. One account, one dashboard, one bill.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-8">
            <div class="text-center">
              <p class="text-2xl font-semibold text-white">Telnyx</p>
              <p class="text-zinc-500 text-[12px]">SMS & Voice</p>
            </div>
            <div class="w-px h-10 bg-white/[0.08]"></div>
            <div class="text-center">
              <p class="text-2xl font-semibold text-white">AWS SES</p>
              <p class="text-zinc-500 text-[12px]">Email</p>
            </div>
            <div class="w-px h-10 bg-white/[0.08]"></div>
            <div class="text-center">
              <p class="text-2xl font-semibold text-white">98%+</p>
              <p class="text-zinc-500 text-[12px]">Delivery rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
