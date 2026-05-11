export const config = { mode: "static" };

export function head() {
  return { title: "Support" };
}

const resources = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API reference for getting started with Teploy.',
    href: '/getting-started/introduction',
  },
  {
    title: 'Status Page',
    description: 'Check the current status of Teploy services and view incident history.',
    href: '/status',
  },
];

const faqs = [
  {
    question: 'How do I reset my password?',
    answer: 'Click "Forgot Password" on the login page and enter your email. You\'ll receive a link to reset your password.',
  },
  {
    question: 'My deployment is stuck. What should I do?',
    answer: 'Check the deployment logs for error messages. Common issues include missing environment variables, build failures, or Docker configuration errors. If the issue persists, try canceling and redeploying.',
  },
  {
    question: 'How do I connect my own VPS provider?',
    answer: 'Go to Settings > Cloud Providers and click "Add Provider". Enter your API key for Vultr, DigitalOcean, Hetzner, Linode, or OVH. We\'ll verify the connection and you can start provisioning servers.',
  },
  {
    question: 'Can I migrate from another platform?',
    answer: 'Yes! We have migration guides for Vercel, Railway, Render, and Heroku in our documentation. The process typically involves connecting your Git repository and configuring environment variables.',
  },
  {
    question: 'How do I upgrade my plan?',
    answer: 'Go to Settings > Billing and click "Upgrade Plan". You can switch plans at any time and we\'ll prorate the difference.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'Your servers remain active (you own them). We\'ll keep your Teploy account data for 30 days in case you want to reactivate. After that, it\'s permanently deleted.',
  },
];

export default function Support() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div class="text-center mb-16">
          <p class="text-zinc-500 text-[13px] font-medium uppercase tracking-wider mb-4">Support</p>
          <h1 class="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">
            How Can We Help?
          </h1>
          <p class="text-zinc-400 text-[16px] leading-relaxed max-w-lg mx-auto">
            Find answers in our docs, join the community, or reach out to our support team.
          </p>
        </div>

        {/* Resources Grid */}
        <div class="grid sm:grid-cols-2 gap-4 mb-16">
          {resources.map((resource) => (
            <a
              href={resource.href}
              class="group p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] hover:bg-white/[0.03] transition-all"
            >
              <h3 class="text-white font-medium text-[15px] mb-1 flex items-center gap-2">
                {resource.title}
              </h3>
              <p class="text-zinc-500 text-[14px] leading-relaxed">{resource.description}</p>
            </a>
          ))}
        </div>

        {/* FAQ */}
        <div class="mb-16">
          <h2 class="text-2xl font-semibold text-white mb-8">Frequently Asked Questions</h2>
          <div class="space-y-4">
            {faqs.map((faq) => (
              <details class="group border border-white/[0.06] rounded-lg bg-white/[0.02]">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span class="text-white font-medium text-[15px] pr-4">{faq.question}</span>
                  <svg class="w-5 h-5 text-zinc-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div class="px-5 pb-5 pt-0">
                  <p class="text-zinc-500 text-[14px] leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div class="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 class="text-xl font-semibold text-white mb-2">Still Need Help?</h2>
              <p class="text-zinc-500 text-[14px]">
                Our support team is available Monday–Friday, 9am–6pm EST.
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:contact@teploy.com"
                class="px-6 py-2.5 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-colors text-center"
              >
                Email Support
              </a>
              <a
                href="/contact"
                class="px-6 py-2.5 bg-white/[0.06] text-white text-[14px] font-medium rounded-lg hover:bg-white/[0.1] transition-colors text-center"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
