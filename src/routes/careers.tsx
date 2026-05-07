export const config = { mode: "static" };

export function head() {
  return { title: "Careers" };
}

const openings = [
  {
    title: 'Senior Backend Engineer',
    department: 'Engineering',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    description: 'Build and scale our deployment infrastructure. TypeScript, Node.js, PostgreSQL, Docker.',
  },
  {
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    description: 'Create delightful user experiences for our dashboard. React, TypeScript, Tailwind CSS.',
  },
  {
    title: 'Developer Advocate',
    department: 'Developer Relations',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help developers succeed with Teploy through content, talks, and community engagement.',
  },
];

const benefits = [
  { title: 'Remote-first', description: 'Work from anywhere in the world' },
  { title: 'Competitive salary', description: 'Top-of-market compensation' },
  { title: 'Equity', description: 'Meaningful ownership stake' },
  { title: 'Health insurance', description: 'Medical, dental, and vision' },
  { title: 'Unlimited PTO', description: 'Take the time you need' },
  { title: 'Home office budget', description: '$2,000 setup allowance' },
  { title: 'Learning budget', description: '$1,000/year for courses and conferences' },
  { title: 'Parental leave', description: '16 weeks fully paid' },
];

export default function Careers() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div class="mb-16">
          <p class="text-indigo-400 text-[13px] font-medium uppercase tracking-wider mb-4">Careers</p>
          <h1 class="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">
            Join Our Team
          </h1>
          <p class="text-zinc-400 text-[16px] leading-relaxed max-w-xl">
            We're building the deployment platform developers deserve. If you're passionate about developer tools and want to work on challenging infrastructure problems, we'd love to hear from you.
          </p>
        </div>

        {/* Values */}
        <div class="mb-16">
          <h2 class="text-xl font-semibold text-white mb-6">Why Teploy?</h2>
          <div class="prose prose-invert prose-zinc max-w-none">
            <div class="space-y-4">
              <p class="text-zinc-400 text-[15px] leading-relaxed">
                We're a small, focused team building tools we genuinely want to use. Every decision we make is driven by what's best for developers—not investors or enterprise sales cycles.
              </p>
              <p class="text-zinc-400 text-[15px] leading-relaxed">
                We believe in working sustainably, shipping iteratively, and maintaining high standards without burning out. We're remote-first and async-friendly, with occasional in-person gatherings.
              </p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div class="mb-16">
          <h2 class="text-xl font-semibold text-white mb-6">Open Positions</h2>
          {openings.length > 0 ? (
            <div class="space-y-4">
              {openings.map((job) => (
                <a
                  href={`mailto:contact@teploy.com?subject=Application: ${job.title}`}
                  class="block group p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/30 hover:bg-indigo-500/[0.02] transition-all"
                >
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                    <h3 class="text-white font-medium text-[16px] group-hover:text-indigo-400 transition-colors">
                      {job.title}
                    </h3>
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 text-[11px] font-medium uppercase tracking-wider rounded-full">
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
            <div class="p-8 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center">
              <p class="text-zinc-400 text-[15px] mb-4">We don't have any open positions right now.</p>
              <p class="text-zinc-500 text-[14px]">
                Interested in working with us? Send your resume to{' '}
                <a href="mailto:contact@teploy.com" class="text-indigo-400 hover:text-indigo-300 transition-colors">
                  contact@teploy.com
                </a>
              </p>
            </div>
          )}
        </div>

        {/* Benefits */}
        <div class="mb-16">
          <h2 class="text-xl font-semibold text-white mb-6">Benefits</h2>
          <div class="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div class="p-4 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                <h3 class="text-white font-medium text-[14px] mb-1">{benefit.title}</h3>
                <p class="text-zinc-500 text-[13px]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div class="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center">
          <h2 class="text-xl font-semibold text-white mb-3">Don't See a Fit?</h2>
          <p class="text-zinc-500 text-[14px] mb-6 max-w-md mx-auto">
            We're always looking for talented people. Send us your resume and tell us how you'd like to contribute.
          </p>
          <a
            href="mailto:contact@teploy.com"
            class="inline-flex items-center px-6 py-2.5 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
