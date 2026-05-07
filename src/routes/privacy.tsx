export const config = { mode: "static" };

export function head() {
  return { title: "Privacy Policy" };
}

export default function Privacy() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div class="mb-16">
          <p class="text-indigo-400 text-[13px] font-medium uppercase tracking-wider mb-4">Legal</p>
          <h1 class="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p class="text-zinc-400 text-[15px]">
            Last updated: January 17, 2026
          </p>
        </div>

        {/* Content */}
        <div class="prose prose-invert prose-zinc max-w-none">
          <div class="space-y-12">
            {/* Introduction */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Introduction</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                Teploy ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
              </p>
              <p class="text-zinc-400 text-[15px] leading-relaxed">
                By using Teploy, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Information We Collect</h2>

              <h3 class="text-[16px] font-medium text-white mt-6 mb-3">Account Information</h3>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Name and email address</li>
                <li>Company or organization name</li>
                <li>Billing information and payment details</li>
                <li>Account credentials (passwords are hashed and never stored in plain text)</li>
              </ul>

              <h3 class="text-[16px] font-medium text-white mt-6 mb-3">Usage Information</h3>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Server and application deployment data</li>
                <li>Log data and analytics</li>
                <li>IP addresses and device information</li>
                <li>Browser type and operating system</li>
              </ul>

              <h3 class="text-[16px] font-medium text-white mt-6 mb-3">Third-Party Integrations</h3>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>GitHub, GitLab, or Bitbucket account information (when connected)</li>
                <li>Cloud provider API credentials (encrypted at rest)</li>
                <li>Domain and DNS information from Cloudflare</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>To provide and maintain our services</li>
                <li>To process transactions and send billing information</li>
                <li>To communicate with you about service updates and support</li>
                <li>To monitor and analyze usage patterns to improve our platform</li>
                <li>To detect, prevent, and address technical issues or security threats</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            {/* Data Storage and Security */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Data Storage and Security</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>All data is encrypted in transit using TLS 1.3</li>
                <li>Sensitive data is encrypted at rest using AES-256</li>
                <li>API credentials are stored using envelope encryption</li>
                <li>Regular security audits and penetration testing</li>
                <li>SOC 2 Type II compliance (in progress)</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Data Sharing</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                We do not sell your personal information. We may share data with:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li><strong class="text-zinc-300">Service Providers:</strong> Third-party vendors who assist in providing our services (payment processors, cloud infrastructure)</li>
                <li><strong class="text-zinc-300">VPS Providers:</strong> When you provision servers, we share necessary information with your chosen provider (Vultr, DigitalOcean, Hetzner, etc.)</li>
                <li><strong class="text-zinc-300">Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Your Rights</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li><strong class="text-zinc-300">Access:</strong> Request a copy of your personal data</li>
                <li><strong class="text-zinc-300">Correction:</strong> Request correction of inaccurate data</li>
                <li><strong class="text-zinc-300">Deletion:</strong> Request deletion of your personal data</li>
                <li><strong class="text-zinc-300">Portability:</strong> Request a machine-readable copy of your data</li>
                <li><strong class="text-zinc-300">Opt-out:</strong> Opt out of marketing communications</li>
              </ul>
              <p class="text-zinc-400 text-[15px] leading-relaxed mt-4">
                To exercise these rights, contact us at <a href="mailto:contact@teploy.com" class="text-indigo-400 hover:text-indigo-300 transition-colors">contact@teploy.com</a>.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Cookies and Tracking</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Keep you signed in to your account</li>
                <li>Remember your preferences</li>
                <li>Understand how you use our platform</li>
                <li>Improve our services</li>
              </ul>
              <p class="text-zinc-400 text-[15px] leading-relaxed mt-4">
                You can control cookies through your browser settings. Note that disabling cookies may affect functionality.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Data Retention</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed">
                We retain your data for as long as your account is active or as needed to provide services. After account deletion, we may retain certain data for up to 90 days for backup purposes, and longer if required by law.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">International Data Transfers</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed">
                Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including standard contractual clauses approved by relevant authorities.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Children's Privacy</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed">
                Teploy is not intended for users under 18 years of age. We do not knowingly collect personal information from children under 18.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Contact Us</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2">
                <li>Email: <a href="mailto:contact@teploy.com" class="text-indigo-400 hover:text-indigo-300 transition-colors">contact@teploy.com</a></li>
                <li>Support: <a href="/support" class="text-indigo-400 hover:text-indigo-300 transition-colors">teploy.com/support</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
