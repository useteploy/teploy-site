export const config = { mode: "static" };

export function head() {
  return { title: "Security" };
}

export default function Security() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div class="mb-16">
          <p class="text-indigo-400 text-[13px] font-medium uppercase tracking-wider mb-4">Security</p>
          <h1 class="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">
            Security at Teploy
          </h1>
          <p class="text-zinc-400 text-[16px] leading-relaxed max-w-2xl">
            Security is foundational to everything we build. Your infrastructure and data deserve enterprise-grade protection without the enterprise complexity.
          </p>
        </div>

        {/* Security Overview */}
        <div class="grid sm:grid-cols-2 gap-4 mb-16">
          <div class="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
            <h3 class="text-white font-medium text-[15px] mb-1">SOC 2 Type II</h3>
            <p class="text-zinc-500 text-[14px]">Compliance certification in progress</p>
          </div>
          <div class="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
            <h3 class="text-white font-medium text-[15px] mb-1">End-to-End Encryption</h3>
            <p class="text-zinc-500 text-[14px]">TLS 1.3 in transit, AES-256 at rest</p>
          </div>
          <div class="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
            <h3 class="text-white font-medium text-[15px] mb-1">Zero Trust Architecture</h3>
            <p class="text-zinc-500 text-[14px]">Every request is authenticated and authorized</p>
          </div>
          <div class="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
            <h3 class="text-white font-medium text-[15px] mb-1">Vulnerability Monitoring</h3>
            <p class="text-zinc-500 text-[14px]">24/7 automated scanning and alerts</p>
          </div>
        </div>

        {/* Content */}
        <div class="prose prose-invert prose-zinc max-w-none">
          <div class="space-y-12">
            {/* Infrastructure Security */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Infrastructure Security</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                Our control plane runs on hardened infrastructure with multiple layers of protection:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Isolated network architecture with private subnets</li>
                <li>Web Application Firewall (WAF) protection via Cloudflare</li>
                <li>DDoS mitigation at the edge</li>
                <li>Regular penetration testing by third-party security firms</li>
                <li>Automated vulnerability scanning of all dependencies</li>
                <li>Immutable infrastructure with automated patching</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Data Protection</h2>

              <h3 class="text-[16px] font-medium text-white mt-6 mb-3">Encryption</h3>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li><strong class="text-zinc-300">In Transit:</strong> All connections use TLS 1.3 with modern cipher suites</li>
                <li><strong class="text-zinc-300">At Rest:</strong> AES-256 encryption for all stored data</li>
                <li><strong class="text-zinc-300">API Credentials:</strong> Envelope encryption with hardware-backed key management</li>
                <li><strong class="text-zinc-300">Backups:</strong> Encrypted with separate keys from primary data</li>
              </ul>

              <h3 class="text-[16px] font-medium text-white mt-6 mb-3">Access Controls</h3>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Role-based access control (RBAC) for team management</li>
                <li>Two-factor authentication (2FA) support</li>
                <li>Session management with automatic expiration</li>
                <li>Audit logs for all sensitive operations</li>
              </ul>
            </section>

            {/* Agent Security */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Agent Security</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                The Teploy agent runs on your provisioned servers and communicates securely with our control plane:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Agent-initiated WebSocket connections (no inbound ports required)</li>
                <li>Mutual TLS authentication between agent and control plane</li>
                <li>Unique cryptographic identity per server</li>
                <li>Minimal permissions – agent only has access to Docker and deployment directories</li>
                <li>Automatic updates with signed binaries</li>
              </ul>
            </section>

            {/* Network Security */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Network Security</h2>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Cloudflare proxy for all public endpoints (CDN, WAF, DDoS protection)</li>
                <li>Automatic SSL certificate provisioning and renewal</li>
                <li>HSTS enforcement with preloading</li>
                <li>IP allowlisting for sensitive operations</li>
                <li>Rate limiting to prevent abuse</li>
              </ul>
            </section>

            {/* Compliance */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Compliance</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                We're committed to meeting industry standards:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li><strong class="text-zinc-300">SOC 2 Type II:</strong> Certification in progress</li>
                <li><strong class="text-zinc-300">GDPR:</strong> Compliant data processing with DPA available</li>
                <li><strong class="text-zinc-300">CCPA:</strong> California privacy rights supported</li>
              </ul>
            </section>

            {/* Incident Response */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Incident Response</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                We have a documented incident response process:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>24/7 on-call engineering team</li>
                <li>Defined escalation procedures</li>
                <li>Customer notification within 72 hours for data breaches</li>
                <li>Post-incident reviews and public postmortems for significant events</li>
              </ul>
            </section>

            {/* Responsible Disclosure */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Responsible Disclosure</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                We appreciate the security research community's efforts. If you discover a vulnerability:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Email: <a href="mailto:contact@teploy.com" class="text-indigo-400 hover:text-indigo-300 transition-colors">contact@teploy.com</a></li>
                <li>PGP key available upon request</li>
                <li>We aim to respond within 48 hours</li>
                <li>We will not pursue legal action for good-faith research</li>
              </ul>
            </section>

            {/* Your Responsibilities */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Your Security Responsibilities</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                While we secure the platform, you're responsible for:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Keeping your account credentials secure</li>
                <li>Enabling two-factor authentication</li>
                <li>Regularly rotating API keys and tokens</li>
                <li>Securing your application code</li>
                <li>Managing access permissions for your team</li>
                <li>Reviewing audit logs for suspicious activity</li>
              </ul>
            </section>

            {/* Contact */}
            <section>
              <h2 class="text-xl font-semibold text-white mb-4">Security Contact</h2>
              <p class="text-zinc-400 text-[15px] leading-relaxed mb-4">
                For security-related inquiries:
              </p>
              <ul class="text-zinc-400 text-[15px] leading-relaxed space-y-2">
                <li>All inquiries: <a href="mailto:contact@teploy.com" class="text-indigo-400 hover:text-indigo-300 transition-colors">contact@teploy.com</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
