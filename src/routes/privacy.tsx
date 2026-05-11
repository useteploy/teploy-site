export const config = { mode: "static" };

export function head() {
  return { title: "Privacy" };
}

export default function Privacy() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div class="mb-16">
          <p class="text-zinc-600 dark:text-zinc-500 text-[13px] font-medium uppercase tracking-wider mb-4">Privacy</p>
          <h1 class="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-6">
            We don't collect your data
          </h1>
          <p class="text-zinc-700 dark:text-zinc-400 text-[16px] leading-relaxed max-w-2xl">
            Teploy ships free, open source binaries that run on your machines. There is no Teploy account, no cloud service, no telemetry endpoint. The short version of this page is: we couldn't collect your data if we tried, because the tools don't talk to us.
          </p>
          <p class="text-zinc-600 dark:text-zinc-500 text-[13px] mt-4">Last updated: May 10, 2026</p>
        </div>

        {/* Content */}
        <div class="prose prose-invert prose-zinc max-w-none">
          <div class="space-y-12">

            {/* The tools */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">The tools (CLI, Dash, Observe, trmnl)</h2>
              <ul class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li><strong class="text-zinc-700 dark:text-zinc-300">No phone-home.</strong> The binaries don't ping a Teploy server. No usage metrics, no crash reports sent to us, no anonymous IDs.</li>
                <li><strong class="text-zinc-700 dark:text-zinc-300">No accounts.</strong> There's nothing to sign up for. You install a binary; that's the whole onboarding.</li>
                <li><strong class="text-zinc-700 dark:text-zinc-300">Your data stays on your servers.</strong> Deploy state, logs, analytics, traces, errors — they live on infrastructure you control. Teploy Observe in particular never sends your application data anywhere off-server.</li>
                <li><strong class="text-zinc-700 dark:text-zinc-300">SSH keys never leave your machine.</strong> The CLI uses your local SSH agent and credentials. We don't broker your connections.</li>
                <li><strong class="text-zinc-700 dark:text-zinc-300">Auditable.</strong> The source is on GitHub (<a href="https://github.com/useteploy" class="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white underline underline-offset-2 transition-colors">github.com/useteploy</a>). If you want to verify any of the above, the code is the source of truth.</li>
              </ul>
            </section>

            {/* The website */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">This website (teploy.com)</h2>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed mb-4">
                The marketing site and docs are static pages. We don't run third-party analytics (no Google Analytics, no PostHog, no Plausible). Standard web server access logs are kept for short retention to debug outages and abuse; they record IP, user-agent, and request path.
              </p>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed">
                We don't set tracking cookies. The site sets one localStorage value (<span class="font-mono text-zinc-700 dark:text-zinc-300 text-[13px]">theme</span>) to remember your light/dark preference. That value never leaves your browser.
              </p>
            </section>

            {/* If you contact us */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">If you contact us</h2>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed">
                If you email <a href="mailto:contact@teploy.com" class="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white underline underline-offset-2 transition-colors">contact@teploy.com</a> or send a message through the contact form, we keep the message and your email address as long as needed to reply, and delete on request. We don't add you to any mailing list.
              </p>
            </section>

            {/* What we share */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">What we share with third parties</h2>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed">
                Nothing. There's nothing to share — we don't have a database of users. The only third parties that touch any data at all are the static-hosting provider and email provider used for the marketing site and contact inbox, and they only see what's required to serve pages and deliver mail.
              </p>
            </section>

            {/* Your rights */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Your rights (GDPR / CCPA)</h2>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed">
                You can ask us to delete any email correspondence we have with you. Email <a href="mailto:contact@teploy.com" class="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white underline underline-offset-2 transition-colors">contact@teploy.com</a> and we'll do it. There's no account to delete, no data export to request — we don't have anything else.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Changes</h2>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed">
                If this policy ever changes — for instance, if we add a paid managed offering that genuinely requires accounts — we'll update this page and bump the date at the top. The free, self-hosted tools will always stay no-telemetry.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
