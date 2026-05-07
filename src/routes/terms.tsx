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
          <p class="text-indigo-400 text-[13px] font-medium uppercase tracking-wider mb-4">Legal</p>
          <h1 class="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">
            Terms of Service
          </h1>
          <p class="text-zinc-400 text-[15px]">
            Last updated: January 17, 2026
          </p>
        </div>

        {/* Content */}
        <div class="prose prose-invert prose-zinc max-w-none">
          <div class="space-y-12">
            {/* Agreement */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Agreement to Terms</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                By accessing or using Teploy ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you do not have permission to access the Service.
              </p>
              <p class="text-zinc-400 text-[15px] leading-relaxed">
                These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
            </section>

            {/* Description of Service */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Description of Service</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed">
                Teploy is a managed infrastructure platform that provides VPS provisioning, CDN, domains, object storage, communications (Send), tax compliance (Billing), and a unified API (Router). The Service integrates with third-party VPS providers, Cloudflare, AWS SES, Telnyx, and Stripe for infrastructure and service management.
              </p>
            </section>

            {/* Account Terms */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Account Terms</h2>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-3 list-disc list-inside">
                <li>You must be 18 years or older to use this Service</li>
                <li>You must provide accurate and complete registration information</li>
                <li>You are responsible for maintaining the security of your account and password</li>
                <li>You are responsible for all activities that occur under your account</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>One person or legal entity may maintain no more than one free account</li>
              </ul>
            </section>

            {/* Acceptable Use */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Acceptable Use Policy</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                You agree not to use the Service to:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Transmit malware, viruses, or other malicious code</li>
                <li>Send spam or unsolicited communications</li>
                <li>Host content that is illegal, harmful, or abusive</li>
                <li>Attempt to gain unauthorized access to other systems</li>
                <li>Conduct cryptocurrency mining without explicit permission</li>
                <li>Run services that consume excessive resources impacting other users</li>
                <li>Store or transmit child sexual abuse material (CSAM)</li>
                <li>Engage in any form of illegal gambling or fraud</li>
              </ul>
              <p class="text-zinc-400 text-[15px] leading-relaxed mt-4">
                Violation of this policy may result in immediate account termination without refund.
              </p>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Payment Terms</h2>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-3 list-disc list-inside">
                <li>Paid plans are billed in advance on a monthly or annual basis</li>
                <li>VPS costs from third-party providers are passed through at cost or with a transparent markup</li>
                <li>All fees are non-refundable except as required by law</li>
                <li>We reserve the right to change pricing with 30 days notice</li>
                <li>Failure to pay may result in service suspension or termination</li>
                <li>You are responsible for any taxes applicable to your use of the Service</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Third-Party Services</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                The Service integrates with third-party providers including:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>VPS Providers: Vultr, DigitalOcean, Hetzner, Linode, OVH</li>
                <li>Cloudflare: DNS, CDN, SSL, and edge services</li>
                <li>Git Providers: GitHub, GitLab, Bitbucket</li>
                <li>Payment Processors: Stripe</li>
              </ul>
              <p class="text-zinc-400 text-[15px] leading-relaxed mt-4">
                Your use of these services is subject to their respective terms and conditions. We are not responsible for the actions or policies of third-party providers.
              </p>
            </section>

            {/* API Credentials */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">API Credentials and Access</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                When you provide API credentials for third-party services:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>You authorize us to access and manage resources on your behalf</li>
                <li>You are responsible for ensuring you have the right to grant such access</li>
                <li>Credentials are encrypted and stored securely</li>
                <li>You may revoke access at any time by removing credentials from your account</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Intellectual Property</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                The Service and its original content, features, and functionality are owned by Teploy and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p class="text-zinc-400 text-[15px] leading-relaxed">
                You retain all rights to your content and applications deployed through the Service.
              </p>
            </section>

            {/* Service Availability */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Service Availability</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                We strive to maintain high availability but do not guarantee uninterrupted service. We reserve the right to:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Perform maintenance with or without notice</li>
                <li>Modify or discontinue features</li>
                <li>Suspend service for security or legal reasons</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, TEPLOY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p class="text-zinc-400 text-[15px] leading-relaxed">
                Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
              </p>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Disclaimer</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Indemnification</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed">
                You agree to defend, indemnify, and hold harmless Teploy and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising out of your use of the Service or violation of these Terms.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Termination</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                We may terminate or suspend your account immediately, without prior notice, for any reason, including:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Breach of these Terms</li>
                <li>Violation of the Acceptable Use Policy</li>
                <li>Non-payment of fees</li>
                <li>Request by law enforcement or government agency</li>
              </ul>
              <p class="text-zinc-400 text-[15px] leading-relaxed mt-4">
                Upon termination, your right to use the Service will immediately cease. You may export your data before termination where technically feasible.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Governing Law</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Changes to Terms</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms and updating the "Last updated" date. Your continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Contact Us</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                If you have questions about these Terms, please contact us:
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
