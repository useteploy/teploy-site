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
          <p class="text-zinc-600 dark:text-zinc-500 text-[13px] font-medium uppercase tracking-wider mb-4">About</p>
          <h1 class="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-6">
            Tools you own, not subscriptions you rent
          </h1>
          <p class="text-zinc-700 dark:text-zinc-400 text-[16px] leading-relaxed">
            Teploy is a small set of free, open source tools for deploying, monitoring, and operating self-hosted apps. No accounts. No managed dependencies. The kind of tools that disappear into your workflow.
          </p>
        </div>

        {/* Story */}
        <div class="prose prose-invert prose-zinc max-w-none mb-20">
          <div class="space-y-6">
            <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed">
              The deployment landscape has split into two extremes: hosted platforms that charge for every commit, and DIY setups that take weeks to wire together. There isn't much room in the middle for people who just want to ship.
            </p>
            <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed">
              Teploy is built for that middle. A single Go binary deploys your app to any server you can SSH into. A web dashboard reads the same state files the CLI writes — no desync. Observability is one self-hosted binary with the same data model. A terminal IDE bundle gets you productive on a fresh machine in one install.
            </p>
            <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed">
              Everything is MIT or AGPL on GitHub. Nothing phones home. If a managed offering ever ships, it'll be a separate, optional add-on — never a gate around what's free today.
            </p>
          </div>
        </div>

        {/* Values */}
        <div class="mb-20">
          <h2 class="text-2xl font-semibold text-zinc-900 dark:text-white mb-8">Our Values</h2>
          <div class="grid sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <div class="p-5 rounded-xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02]">
                <h3 class="text-zinc-900 dark:text-white font-medium text-[15px] mb-1">{value.title}</h3>
                <p class="text-zinc-600 dark:text-zinc-500 text-[14px] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div class="rounded-2xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02] p-8 text-center">
          <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Want to learn more?</h2>
          <p class="text-zinc-600 dark:text-zinc-500 text-[14px] mb-6">We'd love to hear from you.</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/contact" class="px-6 py-2.5 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-colors">
              Get in Touch
            </a>
            <a href="/docs/getting-started/introduction" class="px-6 py-2.5 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-[14px] font-medium transition-colors">
              Read the Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
