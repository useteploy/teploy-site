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
          <p class="text-zinc-500 text-[13px] font-medium uppercase tracking-wider mb-4">Security</p>
          <h1 class="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-6">
            Open source, no phone-home
          </h1>
          <p class="text-zinc-600 dark:text-zinc-400 text-[16px] leading-relaxed max-w-2xl">
            The Teploy tools run on your machines and servers, with code you can audit. There's no Teploy-operated control plane to compromise, no agent reporting back to us, and no credentials being relayed through a third-party service. This page covers how the tools are built and how to report security issues.
          </p>
        </div>

        {/* Pillars */}
        <div class="grid sm:grid-cols-2 gap-4 mb-16">
          <div class="p-5 rounded-xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02]">
            <h3 class="text-zinc-900 dark:text-white font-medium text-[15px] mb-1">Source-available</h3>
            <p class="text-zinc-500 text-[14px]">MIT / AGPL on GitHub — read the code, build it yourself.</p>
          </div>
          <div class="p-5 rounded-xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02]">
            <h3 class="text-zinc-900 dark:text-white font-medium text-[15px] mb-1">No telemetry</h3>
            <p class="text-zinc-500 text-[14px]">Binaries don't ping a Teploy server. Ever.</p>
          </div>
          <div class="p-5 rounded-xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02]">
            <h3 class="text-zinc-900 dark:text-white font-medium text-[15px] mb-1">Local credentials</h3>
            <p class="text-zinc-500 text-[14px]">SSH keys, registry tokens, env vars — all stay on your machine.</p>
          </div>
          <div class="p-5 rounded-xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02]">
            <h3 class="text-zinc-900 dark:text-white font-medium text-[15px] mb-1">Reproducible builds</h3>
            <p class="text-zinc-500 text-[14px]">GitHub Actions builds the releases. SHA256 published with every tag.</p>
          </div>
        </div>

        {/* Content */}
        <div class="prose prose-invert prose-zinc max-w-none">
          <div class="space-y-12">

            {/* How the CLI handles credentials */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">How the CLI handles credentials</h2>
              <ul class="text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li><strong class="text-zinc-700 dark:text-zinc-300">SSH:</strong> the CLI uses your local SSH agent and <span class="font-mono text-zinc-700 dark:text-zinc-300 text-[13px]">~/.ssh</span> keys. Connections go directly from your machine to your server. Nothing routes through teploy.com.</li>
                <li><strong class="text-zinc-700 dark:text-zinc-300">Registry credentials:</strong> Docker registry logins are written to <span class="font-mono text-zinc-700 dark:text-zinc-300 text-[13px]">~/.teploy/registry.yml</span> on your machine, with file permissions <span class="font-mono text-zinc-700 dark:text-zinc-300 text-[13px]">0600</span>.</li>
                <li><strong class="text-zinc-700 dark:text-zinc-300">Secrets:</strong> encrypted secrets in <span class="font-mono text-zinc-700 dark:text-zinc-300 text-[13px]">teploy.secrets.yml</span> use age (X25519) with keys you control. The CLI never has plaintext you didn't give it.</li>
                <li><strong class="text-zinc-700 dark:text-zinc-300">State files:</strong> deploy state lives at <span class="font-mono text-zinc-700 dark:text-zinc-300 text-[13px]">/deployments/&lt;app&gt;/</span> on your server. The CLI and Dash both read and write the same files — no separate database, no out-of-band channel.</li>
              </ul>
            </section>

            {/* Build supply chain */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Build &amp; supply chain</h2>
              <ul class="text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Releases are built by GitHub Actions from a tagged commit on the public repo.</li>
                <li>Every release ships with SHA256 checksums and, where applicable, signed Homebrew formulae.</li>
                <li>Dependencies are pinned in <span class="font-mono text-zinc-700 dark:text-zinc-300 text-[13px]">go.mod</span> / <span class="font-mono text-zinc-700 dark:text-zinc-300 text-[13px]">go.sum</span> and reviewed before bumps.</li>
                <li>Anyone can rebuild the binary from source and compare digests.</li>
              </ul>
            </section>

            {/* Hardening on your end */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">What's on your end</h2>
              <p class="text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed mb-4">
                Because there's no managed Teploy service, your security posture is largely about how you run the tools and operate your servers. The basics that matter most:
              </p>
              <ul class="text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Use SSH keys, not passwords. Disable password auth on your servers.</li>
                <li>Keep your server OS patched. The CLI doesn't install or run an agent that could become an attack surface, but the SSH/Docker/Caddy stack on the server still needs updates.</li>
                <li>Lock down the Caddy admin API (default: bound to localhost only — leave it that way).</li>
                <li>Don't expose Dash standalone (<span class="font-mono text-zinc-700 dark:text-zinc-300 text-[13px]">teploy ui --serve</span>) to the public internet without an auth proxy in front of it.</li>
                <li>Store age keys for encrypted secrets somewhere you'd store SSH keys — not in the repo.</li>
              </ul>
            </section>

            {/* Responsible disclosure */}
            <section>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Reporting a vulnerability</h2>
              <p class="text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed mb-4">
                If you find a security issue in any Teploy binary or in this website, please report it privately first:
              </p>
              <ul class="text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed space-y-2 list-disc list-inside">
                <li>Email <a href="mailto:contact@teploy.com" class="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white underline underline-offset-2 transition-colors">contact@teploy.com</a> with details and reproduction steps.</li>
                <li>Don't open a public GitHub issue for security bugs until a fix is shipped.</li>
                <li>We'll acknowledge within a couple of business days and work with you on a coordinated disclosure timeline.</li>
                <li>Good-faith research is welcome. We won't pursue legal action for testing against your own infrastructure or for finding bugs in published binaries.</li>
              </ul>
              <p class="text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed mt-4">
                There's no bug bounty program right now — this is a small project. We'll credit reporters in release notes where appropriate.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
