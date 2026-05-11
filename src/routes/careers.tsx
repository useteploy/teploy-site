export const config = { mode: "static" };

export function head() {
  return { title: "Careers" };
}

const openings: Array<{ title: string; department: string; location: string; type: string; description: string }> = [];

export default function Careers() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div class="mb-16">
          <p class="text-zinc-500 text-[13px] font-medium uppercase tracking-wider mb-4">Careers</p>
          <h1 class="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-6">
            Working on Teploy
          </h1>
          <p class="text-zinc-600 dark:text-zinc-400 text-[16px] leading-relaxed max-w-xl">
            Teploy is a small, focused project. There are no open roles right now, but if you care about deployment, developer tools, and the kind of software that respects the people using it, we'd still like to hear from you.
          </p>
        </div>

        {/* Open Positions */}
        <div class="mb-16">
          <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Open positions</h2>
          {openings.length > 0 ? (
            <div class="space-y-4">
              {openings.map((job) => (
                <a
                  href={`mailto:contact@teploy.com?subject=Application: ${job.title}`}
                  class="block group p-6 rounded-xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02] hover:border-white/20 hover:bg-zinc-100/70 dark:hover:bg-white/[0.03] transition-all"
                >
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                    <h3 class="text-zinc-900 dark:text-white font-medium text-[16px] group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                      {job.title}
                    </h3>
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="px-2.5 py-1 bg-zinc-200/70 dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-400 text-[11px] font-medium uppercase tracking-wider rounded-full">
                        {job.department}
                      </span>
                      <span class="text-zinc-600 text-[13px]">{job.location}</span>
                      <span class="text-zinc-700">&middot;</span>
                      <span class="text-zinc-600 text-[13px]">{job.type}</span>
                    </div>
                  </div>
                  <p class="text-zinc-500 text-[14px]">{job.description}</p>
                </a>
              ))}
            </div>
          ) : (
            <div class="p-8 rounded-xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02] text-center">
              <p class="text-zinc-600 dark:text-zinc-400 text-[15px] mb-4">We don't have any open positions right now.</p>
              <p class="text-zinc-500 text-[14px]">
                Interested in working with us in the future? Send a note to{' '}
                <a href="mailto:contact@teploy.com" class="text-zinc-900 dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 underline underline-offset-2 transition-colors">
                  contact@teploy.com
                </a>
              </p>
            </div>
          )}
        </div>

        {/* How we work */}
        <div class="mb-16">
          <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">How we work</h2>
          <div class="prose prose-invert prose-zinc max-w-none">
            <div class="space-y-4">
              <p class="text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed">
                Remote, async, shipping in small steps. We build tools we actually use ourselves and avoid features we wouldn't want imposed on us. Every decision is judged on whether it makes the tools more useful — not on whether it makes them easier to monetize.
              </p>
              <p class="text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed">
                Code is on GitHub, conversations happen in the open, and there's no roadmap nobody else can see. If that resonates, get in touch.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div class="rounded-2xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02] p-8 text-center">
          <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Want to talk anyway?</h2>
          <p class="text-zinc-500 text-[14px] mb-6 max-w-md mx-auto">
            Send a note. Tell us what you'd want to build.
          </p>
          <a
            href="mailto:contact@teploy.com"
            class="inline-flex items-center px-6 py-2.5 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
