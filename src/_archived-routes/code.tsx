export const config = { mode: "static" };

export function head() {
  return { title: "teploy code -- AI Coding Assistant" };
}

const features = [
  {
    title: 'Terminal-first TUI',
    description: 'Full-featured AI coding interface in your terminal. Built in Go, runs as a single binary.',
    icon: 'M4 17l6-6-6-6M12 19h8',
  },
  {
    title: 'Multi-model',
    description: 'OpenAI, Anthropic, Google, Mistral, DeepSeek, and more. Switch models on the fly.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  },
  {
    title: 'VS Code Extension',
    description: 'AI coding, deploy via CLI, tail logs, and manage env vars without leaving your editor.',
    icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
  },
  {
    title: 'Neovim Plugin',
    description: 'Native Lua plugin for Neovim. AI completions, inline edits, and teploy CLI integration.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    title: 'teploy Integration',
    description: 'Deploy, rollback, preview, and monitor directly from the coding interface.',
    icon: 'M5 12h14M12 5l7 7-7 7',
  },
  {
    title: 'Single Binary',
    description: 'Go binary. No runtime dependencies. Install and run. Works on macOS and Linux.',
    icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
  },
];

export default function Code() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[12px] font-medium mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Free, open source
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
            AI coding from<br class="hidden sm:block" /> your terminal
          </h1>
          <p class="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            A Go binary for AI-assisted coding. Multi-model TUI, VS Code extension, Neovim plugin.
            teploy deploys built in.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div class="px-6 py-3 bg-zinc-800 border border-zinc-700 rounded-lg font-mono text-[14px] text-zinc-300">
              brew install teploy-code
            </div>
            <a href="/getting-started/introduction" class="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors">
              Learn more &rarr;
            </a>
          </div>
        </div>

        {/* Terminal Preview */}
        <div class="mb-24 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden shadow-2xl">
          <div class="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-white/[0.06]">
            <div class="flex items-center gap-1.5">
              <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
            </div>
            <div class="flex-1 flex justify-center">
              <span class="text-[11px] text-zinc-500 font-mono">teploy code</span>
            </div>
          </div>
          <div class="p-6 font-mono text-[13px] leading-relaxed">
            <p class="text-zinc-500">$ teploy-code</p>
            <p class="text-cyan-400 mt-2">teploy code v0.1 -- AI Coding Assistant</p>
            <p class="text-zinc-400 mt-1">Model: claude-4-opus | Context: 200k tokens</p>
            <p class="text-zinc-500 mt-3">&gt; Refactor the deploy handler to support rollback</p>
            <p class="text-cyan-400 mt-2">Analyzing deploy/handler.go...</p>
            <p class="text-zinc-400 mt-1">Found 3 functions to modify.</p>
            <p class="text-zinc-400">Generating diff...</p>
            <p class="text-green-400 mt-2">Applied 3 changes to deploy/handler.go</p>
            <p class="text-zinc-500 mt-3">&gt; teploy deploy</p>
            <p class="text-green-400 mt-1">Deployed in 8s. Zero downtime.</p>
          </div>
        </div>

        {/* Features */}
        <div class="mb-20">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-semibold text-white mb-4">Code faster, ship faster</h2>
            <p class="text-zinc-500 max-w-xl mx-auto">AI coding assistant with deployment built in. Terminal TUI and IDE extensions.</p>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div class="group p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all">
                <div class="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={feature.icon} />
                  </svg>
                </div>
                <h3 class="text-white font-medium mb-2">{feature.title}</h3>
                <p class="text-zinc-500 text-[14px] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div class="text-center">
          <h2 class="text-2xl font-semibold text-white mb-8">How it fits together</h2>
          <div class="inline-block text-left font-mono text-[13px] text-zinc-400 bg-zinc-900/50 border border-white/[0.06] rounded-xl p-6">
            <p class="text-cyan-400">IDE Extension (VS Code, Neovim)</p>
            <p class="text-zinc-500">    |</p>
            <p class="text-zinc-500">    v</p>
            <p class="text-cyan-400">teploy code (Go binary, runs locally)</p>
            <p class="text-zinc-500">    |</p>
            <p>    +--&gt; teploy CLI (deploy, logs, status)</p>
            <p>    +--&gt; AI providers (code generation)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
