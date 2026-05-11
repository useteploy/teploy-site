export const config = { mode: "static" };

export function head() {
  return { title: "Contact" };
}

export default function Contact() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div class="text-center mb-16">
          <p class="text-zinc-500 text-[13px] font-medium uppercase tracking-wider mb-4">Contact</p>
          <h1 class="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-6">
            Get in Touch
          </h1>
          <p class="text-zinc-600 dark:text-zinc-400 text-[16px] leading-relaxed max-w-lg mx-auto">
            Have questions? We're here to help.
          </p>
        </div>

        {/* Email Contact */}
        <div class="mb-16 text-center">
          <a
            href="mailto:contact@teploy.com"
            class="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02] hover:border-zinc-300 dark:hover:border-white/[0.1] hover:bg-zinc-100/70 dark:hover:bg-white/[0.03] transition-all"
          >
            <svg class="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="text-zinc-900 dark:text-white font-medium text-[15px]">contact@teploy.com</span>
          </a>
        </div>

        {/* Contact Form */}
        <div class="rounded-2xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02] p-8 sm:p-10">
          <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Send us a Message</h2>
          <p class="text-zinc-500 text-[14px] mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

          <form class="space-y-6">
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" class="block text-zinc-600 dark:text-zinc-400 text-[13px] font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="w-full px-4 py-3 bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] rounded-lg text-zinc-900 dark:text-white text-[14px] placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" class="block text-zinc-600 dark:text-zinc-400 text-[13px] font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="w-full px-4 py-3 bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] rounded-lg text-zinc-900 dark:text-white text-[14px] placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" class="block text-zinc-600 dark:text-zinc-400 text-[13px] font-medium mb-2">Subject</label>
              <select
                id="subject"
                name="subject"
                required
                class="w-full px-4 py-3 bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] rounded-lg text-zinc-900 dark:text-white text-[14px] focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors"
              >
                <option value="" class="bg-white dark:bg-zinc-900">Select a topic</option>
                <option value="general" class="bg-white dark:bg-zinc-900">General inquiry</option>
                <option value="support" class="bg-white dark:bg-zinc-900">Technical support</option>
                <option value="billing" class="bg-white dark:bg-zinc-900">Billing question</option>
                <option value="enterprise" class="bg-white dark:bg-zinc-900">Enterprise</option>
                <option value="other" class="bg-white dark:bg-zinc-900">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" class="block text-zinc-600 dark:text-zinc-400 text-[13px] font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                class="w-full px-4 py-3 bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] rounded-lg text-zinc-900 dark:text-white text-[14px] placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors resize-none"
                placeholder="How can we help?"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full sm:w-auto px-8 py-3 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
