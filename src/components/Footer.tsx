const footerLinks = {
  products: [
    { href: "/cli", label: "CLI" },
    { href: "/dash", label: "Dash" },
    { href: "/observe", label: "Observe" },
    { href: "/trmnl", label: "trmnl" },
  ],
  resources: [
    { href: "/docs", label: "Documentation" },
    { href: "https://github.com/useteploy", label: "GitHub" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/security", label: "Security" },
  ],
};

function LinkList({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 class="text-zinc-900 dark:text-white font-semibold text-[13px] uppercase tracking-wider mb-4">{title}</h3>
      <ul class="space-y-3">
        {links.map((link) => (
          <li>
            <a href={link.href} class="text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-[14px]">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer class="border-t border-zinc-200/70 dark:border-white/[0.06] bg-zinc-50 dark:bg-[#0a0a0c]">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div class="col-span-2">
            <a href="/" class="text-[15px] font-semibold text-zinc-900 dark:text-white hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors inline-block mb-4">
              Teploy
            </a>
            <p class="text-zinc-600 dark:text-zinc-500 text-[14px] max-w-xs mb-6 leading-relaxed">
              Free, open source tools to deploy, monitor, and develop.
            </p>
          </div>

          <LinkList title="Products" links={footerLinks.products} />
          <LinkList title="Resources" links={footerLinks.resources} />
          <LinkList title="Legal" links={footerLinks.legal} />
        </div>

        <div class="mt-12 pt-8 border-t border-zinc-200/70 dark:border-white/[0.06] flex flex-col items-center gap-6">
          <a
            href="https://neutron.build"
            target="_blank"
            rel="noopener noreferrer"
            class="built-on-link"
          >
            neutron.
          </a>
          <p class="text-zinc-700 dark:text-zinc-600 text-[13px]">
            &copy; {new Date().getFullYear()} Teploy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
