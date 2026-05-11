export const config = { mode: "static" };

export function head() {
  return { title: "Terms of Service" };
}

export default function Terms() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div class="mb-16">
          <p class="text-zinc-600 dark:text-zinc-500 text-[13px] font-medium uppercase tracking-wider mb-4">Legal</p>
          <h1 class="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-6">
            Terms of Service
          </h1>
          <p class="text-zinc-700 dark:text-zinc-400 text-[15px]">
            Last updated: May 10, 2026
          </p>
        </div>

        {/* Content */}
        <div class="prose prose-invert prose-zinc max-w-none">
          <div class="space-y-12">

            {/* Agreement */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Agreement</h2>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed mb-4">
                These terms cover the Teploy marketing website at teploy.com and the open source Teploy tools distributed from it.
              </p>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed">
                By accessing the website or using the tools, you agree to these terms. There is no Teploy account to sign up for and nothing to pay — these terms simply set out the basics so it's clear what you're using.
              </p>
            </section>

            {/* The tools */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">The tools</h2>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed mb-4">
                Teploy publishes four free, open source tools:
              </p>
              <ul class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li><strong class="text-zinc-700 dark:text-zinc-300">teploy CLI</strong> — zero-downtime Docker deploys via SSH</li>
                <li><strong class="text-zinc-700 dark:text-zinc-300">teploy Dash</strong> — web UI and uptime monitoring for the CLI</li>
                <li><strong class="text-zinc-700 dark:text-zinc-300">teploy Observe</strong> — self-hosted analytics, APM, and error tracking</li>
                <li><strong class="text-zinc-700 dark:text-zinc-300">trmnl</strong> — a terminal IDE configuration bundle</li>
              </ul>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed mt-4">
                Each tool is distributed under an MIT or AGPL license (see the LICENSE file in each repository). Your use of the tools is governed by the relevant license, not these terms.
              </p>
            </section>

            {/* No warranty */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">No warranty</h2>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed">
                The tools are provided "as is" and "as available" without warranties of any kind, express or implied. You run them on your own infrastructure, and you're responsible for backups, security, and operations. We make no guarantee that the tools will be defect-free, fit for any particular purpose, or available without interruption.
              </p>
            </section>

            {/* Limitation of liability */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Limitation of liability</h2>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed">
                To the maximum extent permitted by law, Teploy and its contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including but not limited to loss of profits, data, or use — arising out of or in connection with the tools or this website.
              </p>
            </section>

            {/* Acceptable use of the website */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Acceptable use of this website</h2>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed mb-4">
                When using teploy.com, please don't:
              </p>
              <ul class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Attempt to disrupt or overload the site (DoS, scraping at abusive rates, etc.)</li>
                <li>Attempt to access systems or data you weren't given access to</li>
                <li>Use the contact form to send spam, malware, or harassment</li>
              </ul>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed mt-4">
                None of this restricts what you do with the tools themselves on your own infrastructure — that's covered by the license, not these terms.
              </p>
            </section>

            {/* Intellectual property */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Intellectual property</h2>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed mb-4">
                The Teploy name and logos are property of the project. Marketing-site copy and visuals are under the same usage you'd expect from any branded site — please don't pass them off as your own.
              </p>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed">
                Source code is governed by its LICENSE file. Apps and data you deploy with the tools remain yours.
              </p>
            </section>

            {/* Governing law */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Governing law</h2>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed">
                These terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law provisions.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Changes</h2>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed">
                We may update these terms. The "Last updated" date at the top of this page reflects the most recent change. If a paid managed offering ever ships, separate terms will apply to it — these will continue to cover the free, open source tools.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Contact</h2>
              <p class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed mb-4">
                Questions about these terms?
              </p>
              <ul class="text-zinc-700 dark:text-zinc-400 text-[15px] leading-relaxed space-y-2">
                <li>Email: <a href="mailto:contact@teploy.com" class="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white underline underline-offset-2 transition-colors">contact@teploy.com</a></li>
                <li>Support: <a href="/support" class="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white underline underline-offset-2 transition-colors">teploy.com/support</a></li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
