export const config = { mode: "static" };

export function head() {
  return { title: "About" };
}

const values = [
  {
    title: 'Developer-First',
    description: 'We build tools we want to use ourselves. Every feature is designed with the developer experience in mind.',
  },
  {
    title: 'Transparency',
    description: 'No hidden fees, no surprise bills. You always know exactly what you\'re paying for.',
  },
  {
    title: 'Simplicity',
    description: 'Powerful doesn\'t have to mean complex. We eliminate unnecessary configuration and let you focus on shipping.',
  },
  {
    title: 'Ownership',
    description: 'Your servers, your data, your control. We manage the complexity, you keep the ownership.',
  },
];

export default function About() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div class="mb-16">
          <p class="text-indigo-400 text-[13px] font-medium uppercase tracking-wider mb-4">About</p>
          <h1 class="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">
            Deployment should be simple
          </h1>
          <p class="text-zinc-400 text-[16px] leading-relaxed">
            We're building the deployment platform we always wanted—combining Vercel's simplicity with the raw power and unmatched economics of your own servers.
          </p>
        </div>

        {/* Story */}
        <div class="prose prose-invert prose-zinc max-w-none mb-20">
          <div class="space-y-6">
            <p class="text-zinc-400 text-[15px] leading-relaxed">
              Teploy was born from a simple frustration: deployment shouldn't be a choice between exorbitant managed fees or weeks to months of server wrangling.
            </p>
            <p class="text-zinc-400 text-[15px] leading-relaxed">
              We forged a middle ground. A platform that delivers one-click simplicity on affordable VPS instances you control. Connect your provider, push your code, and go live in minutes.
            </p>
            <p class="text-zinc-400 text-[15px] leading-relaxed">
              That's Teploy. We abstract away the chaos of provisioning, pipelines, SSL, and CDNs so you can just ship. Plus, we give you the keys to self-host your entire business stack—automating your operations for free.
            </p>
          </div>
        </div>

        {/* Values */}
        <div class="mb-20">
          <h2 class="text-2xl font-semibold text-white mb-8">Our Values</h2>
          <div class="grid sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <div class="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 class="text-white font-medium text-[15px] mb-1">{value.title}</h3>
                <p class="text-zinc-500 text-[14px] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div class="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center">
          <h2 class="text-xl font-semibold text-white mb-3">Want to learn more?</h2>
          <p class="text-zinc-500 text-[14px] mb-6">We'd love to hear from you.</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/contact" class="px-6 py-2.5 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-colors">
              Get in Touch
            </a>
            <a href="/getting-started/introduction" class="px-6 py-2.5 text-zinc-400 hover:text-white text-[14px] font-medium transition-colors">
              Read the Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
