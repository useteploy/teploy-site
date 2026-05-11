const navLinks = [
  { href: "/cli", label: "CLI" },
  { href: "/dash", label: "Dash" },
  { href: "/observe", label: "Observe" },
  { href: "/trmnl", label: "trmnl" },
  { href: "/docs", label: "Docs" },
];

export default function Nav() {
  return (
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-200/70 dark:border-white/[0.06]">
      <div class="mx-auto max-w-6xl px-6">
        <div class="flex items-center justify-between h-14">
          <div class="flex items-center gap-8">
            <a href="/" class="text-[15px] font-semibold tracking-tight text-zinc-900 dark:text-white hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors">
              Teploy
            </a>

            <nav class="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a href={link.href} class="px-3 py-1.5 text-[13px] text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors rounded-md hover:bg-zinc-100 dark:hover:bg-white/[0.04]">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div class="hidden md:flex items-center gap-3 z-10">
            <a href="/docs/getting-started/quick-start" class="px-2.5 py-1 text-[12px] font-medium bg-white text-zinc-900 rounded-[5px] hover:bg-zinc-100 transition-colors cursor-pointer">
              Get Started
            </a>
            <ThemeToggleButton />
          </div>

          {/* Mobile Controls */}
          <div class="md:hidden flex items-center gap-2">
            <ThemeToggleButton />
            <button
              type="button"
              class="p-2 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#09090b] border-b border-zinc-200/70 dark:border-white/[0.06]">
        <div class="max-w-6xl mx-auto px-6 py-4 space-y-4">
          <div class="grid grid-cols-2 gap-2">
            <a href="/cli" class="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
              <div class="text-[13px] text-zinc-900 dark:text-white font-semibold">CLI</div>
              <div class="text-[10px] text-zinc-700 dark:text-zinc-400">Zero-downtime deploys</div>
            </a>
            <a href="/dash" class="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20">
              <div class="text-[13px] text-zinc-900 dark:text-white font-semibold">Dash</div>
              <div class="text-[10px] text-zinc-700 dark:text-zinc-400">Web UI + uptime</div>
            </a>
            <a href="/observe" class="p-3 rounded-lg bg-violet-500/10 border border-violet-500/20">
              <div class="text-[13px] text-zinc-900 dark:text-white font-semibold">Observe</div>
              <div class="text-[10px] text-zinc-700 dark:text-zinc-400">Analytics & APM</div>
            </a>
            <a href="/trmnl" class="p-3 rounded-lg bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08]">
              <div class="text-[13px] text-zinc-900 dark:text-white font-semibold">trmnl</div>
              <div class="text-[10px] text-zinc-700 dark:text-zinc-400">Terminal IDE</div>
            </a>
            <a href="/docs" class="p-3 rounded-lg bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] col-span-2">
              <div class="text-[13px] text-zinc-900 dark:text-white font-semibold">Docs</div>
              <div class="text-[10px] text-zinc-700 dark:text-zinc-400">Guides & reference</div>
            </a>
          </div>

          <div class="pt-4 border-t border-zinc-200/70 dark:border-white/[0.06] space-y-3">
            <a href="/docs/getting-started/quick-start" class="block text-center px-4 py-2.5 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer w-full">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var toggle = document.getElementById('mobile-menu-toggle');
          var menu = document.getElementById('mobile-menu');
          if (toggle && menu) {
            toggle.addEventListener('click', function() { menu.classList.toggle('hidden'); });
            menu.querySelectorAll('a').forEach(function(a) { a.addEventListener('click', function() { menu.classList.add('hidden'); }); });
          }
          // Theme toggle — no island runtime needed, just delegate clicks.
          document.querySelectorAll('.theme-toggle').forEach(function(btn) {
            btn.addEventListener('click', function() {
              var cur = document.documentElement.getAttribute('data-theme') || 'dark';
              var next = cur === 'dark' ? 'light' : 'dark';
              document.documentElement.setAttribute('data-theme', next);
              try { localStorage.setItem('theme', next); } catch (e) {}
            });
          });
        })();
      `}} />
    </header>
  );
}

function ThemeToggleButton() {
  return (
    <button class="theme-toggle" aria-label="Toggle theme" title="Toggle theme">
      <svg class="icon sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      <svg class="icon moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
