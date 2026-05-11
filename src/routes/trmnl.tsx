export const config = { mode: "static" };

export function head() {
  return { title: "trmnl — Terminal IDE" };
}

const features = [
  {
    title: 'Neovim',
    description: '50+ language servers, autocompletion, formatting, debugging, and testing. Kickstart-based, fully extensible.',
    icon: 'M4 17l6-6-6-6M12 19h8',
  },
  {
    title: 'Zellij',
    description: 'Modern terminal multiplexer. Panes, tabs, layouts, and session management with a clean keybind system.',
    icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
  },
  {
    title: 'Lazygit',
    description: 'Terminal UI for git. Stage, commit, push, rebase, and resolve conflicts without leaving the terminal.',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 7l9-5-9-5-9 5 9 5z',
  },
  {
    title: 'Yazi file manager',
    description: 'Blazing-fast terminal file manager with image previews, batch operations, and Neovim integration.',
    icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
  },
  {
    title: 'Modern CLI',
    description: 'bat, eza, delta, fzf, ripgrep, fd, zoxide, starship. Drop-in replacements configured out of the box.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
  },
  {
    title: 'One Command Install',
    description: 'Homebrew or shell script. macOS, Linux, and WSL. No manual configuration required.',
    icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
  },
];

const stack = [
  { name: 'Neovim', role: 'Editor', url: 'https://neovim.io' },
  { name: 'Zellij', role: 'Multiplexer', url: 'https://zellij.dev' },
  { name: 'Yazi', role: 'File Manager', url: 'https://yazi-rs.github.io' },
  { name: 'Lazygit', role: 'Git UI', url: 'https://github.com/jesseduffield/lazygit' },
  { name: 'Ghostty', role: 'Terminal (rec.)', url: 'https://ghostty.org' },
  { name: 'Starship', role: 'Prompt', url: 'https://starship.rs' },
  { name: 'Kickstart.nvim', role: 'Config Base', url: 'https://github.com/nvim-lua/kickstart.nvim' },
];

const cliTools = [
  { name: 'bat', url: 'https://github.com/sharkdp/bat' },
  { name: 'eza', url: 'https://eza.rocks' },
  { name: 'delta', url: 'https://github.com/dandavison/delta' },
  { name: 'fzf', url: 'https://github.com/junegunn/fzf' },
  { name: 'ripgrep', url: 'https://github.com/BurntSushi/ripgrep' },
  { name: 'fd', url: 'https://github.com/sharkdp/fd' },
  { name: 'zoxide', url: 'https://github.com/ajeetdsouza/zoxide' },
  { name: 'btop', url: 'https://github.com/aristocratos/btop' },
  { name: 'tldr', url: 'https://tldr.sh' },
  { name: 'jq', url: 'https://jqlang.github.io/jq/' },
  { name: 'gh', url: 'https://cli.github.com' },
];

export default function Trmnl() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-500/10 border border-zinc-500/20 text-zinc-700 dark:text-zinc-400 text-[12px] font-medium mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
            Free, open source
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-6">
            Terminal IDE,<br class="hidden sm:block" /> ready to go
          </h1>
          <p class="text-zinc-700 dark:text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            A curated terminal development environment. Neovim, Zellij, Lazygit, and 50+ tools
            pre-configured with Tokyo Night theming across everything.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div class="px-6 py-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg font-mono text-[14px] text-zinc-700 dark:text-zinc-300">
              brew install useteploy/tap/trmnl
            </div>
            <span class="text-zinc-700 dark:text-zinc-600 text-[13px]">or</span>
            <div class="px-6 py-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg font-mono text-[14px] text-zinc-700 dark:text-zinc-300">
              curl -fsSL https://raw.githubusercontent.com/useteploy/trmnl/main/install.sh | bash
            </div>
          </div>
          <p class="text-zinc-700 dark:text-zinc-600 text-[12px] mt-3">macOS, Linux, WSL</p>
        </div>

        {/* Terminal Preview */}
        <div class="mb-24 rounded-2xl border border-zinc-200 dark:border-white/[0.08] bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 overflow-hidden shadow-2xl">
          <div class="flex items-center gap-2 px-4 py-3 bg-white dark:bg-zinc-900 border-b border-zinc-200/70 dark:border-white/[0.06]">
            <div class="flex items-center gap-1.5">
              <div class="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
              <div class="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
              <div class="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
            </div>
            <div class="flex-1 flex justify-center">
              <span class="text-[11px] text-zinc-600 dark:text-zinc-500 font-mono">trmnl</span>
            </div>
          </div>
          <div class="p-6 font-mono text-[13px] leading-relaxed">
            <p class="text-zinc-600 dark:text-zinc-500">$ trmnl setup</p>
            <p class="text-zinc-700 dark:text-zinc-400 mt-2">Setting up Terminal IDE...</p>
            <p class="text-green-400 mt-1">  &gt; Linking configs...</p>
            <p class="text-zinc-700 dark:text-zinc-400 mt-1">    &#x2713; nvim</p>
            <p class="text-zinc-700 dark:text-zinc-400">    &#x2713; zellij</p>
            <p class="text-zinc-700 dark:text-zinc-400">    &#x2713; yazi</p>
            <p class="text-zinc-700 dark:text-zinc-400">    &#x2713; starship</p>
            <p class="text-zinc-700 dark:text-zinc-400">    &#x2713; gitconfig (include added)</p>
            <p class="text-zinc-700 dark:text-zinc-400">    &#x2713; zshrc</p>
            <p class="text-green-400 mt-2">  Setup complete!</p>
            <p class="text-zinc-600 dark:text-zinc-500 mt-3">$ trmnl</p>
            <p class="text-zinc-600 dark:text-zinc-500 mt-1">{/* launches zellij with neovim */}</p>
          </div>
        </div>

        {/* Features */}
        <div class="mb-16">
          <h2 class="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-white mb-4">What's included</h2>
          <p class="text-zinc-700 dark:text-zinc-400 text-[16px] max-w-lg mb-8">A complete terminal development environment in one install.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {features.map((feature) => (
            <div class="group p-5 rounded-xl bg-zinc-100/60 dark:bg-white/[0.02] border border-zinc-200/70 dark:border-white/[0.06] hover:bg-zinc-100/70 dark:hover:bg-white/[0.03] hover:border-zinc-500/20 transition-all">
              <div class="w-8 h-8 rounded-lg bg-zinc-200/70 dark:bg-white/[0.06] flex items-center justify-center mb-3">
                <svg class="w-4 h-4 text-zinc-700 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={feature.icon} />
                </svg>
              </div>
              <h3 class="text-[15px] font-medium text-zinc-900 dark:text-white mb-1.5">{feature.title}</h3>
              <p class="text-[13px] text-zinc-600 dark:text-zinc-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Built With */}
        <div class="mb-24">
          <h2 class="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-white mb-4">Built with</h2>
          <p class="text-zinc-700 dark:text-zinc-400 text-[16px] max-w-lg mb-8">trmnl bundles and configures open source tools. Full credit to their authors.</p>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {stack.map((tool) => (
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between p-4 rounded-lg bg-zinc-100/60 dark:bg-white/[0.02] border border-zinc-200/70 dark:border-white/[0.06] hover:bg-zinc-100 dark:hover:bg-white/[0.04] hover:border-zinc-500/20 transition-all group"
              >
                <div>
                  <p class="text-[14px] font-medium text-zinc-900 dark:text-white group-hover:text-zinc-200">{tool.name}</p>
                  <p class="text-[12px] text-zinc-700 dark:text-zinc-600">{tool.role}</p>
                </div>
                <svg class="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>

          <div class="flex flex-wrap gap-2">
            {cliTools.map((tool) => (
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                class="px-3 py-1.5 rounded-md bg-zinc-100/60 dark:bg-white/[0.02] border border-zinc-200/70 dark:border-white/[0.06] text-[13px] text-zinc-600 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 hover:border-zinc-500/20 transition-all font-mono"
              >
                {tool.name}
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div class="text-center">
          <h2 class="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Get started</h2>
          <p class="text-zinc-700 dark:text-zinc-400 text-[15px] mb-6">Install in under a minute. Run <span class="font-mono text-zinc-700 dark:text-zinc-300">trmnl doctor</span> to verify.</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/useteploy/trmnl"
              target="_blank"
              rel="noopener noreferrer"
              class="px-6 py-3 bg-white text-zinc-900 font-medium text-[14px] rounded-lg hover:bg-zinc-200 transition-colors"
            >
              View on GitHub
            </a>
            <a href="/docs" class="text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-[14px] font-medium transition-colors">
              Read the docs &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
