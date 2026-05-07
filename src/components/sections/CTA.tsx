export default function CTA() {
  return (
    <section class="py-24 relative">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/5 to-transparent blur-3xl" />
      </div>

      <div class="max-w-2xl mx-auto px-6 text-center relative">
        <h2 class="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
          Free. Open source. Yours.
        </h2>
        <p class="text-[16px] text-zinc-400 mb-8 max-w-md mx-auto">
          Deploy, monitor, and develop with tools you own. No lock-in, no subscriptions required.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a href="/docs/getting-started/quick-start" class="group px-6 py-2.5 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-all flex items-center gap-2 cursor-pointer">
            Get Started
            <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="/docs" class="px-6 py-2.5 text-[14px] text-zinc-400 hover:text-white transition-colors">
            Read the docs
          </a>
        </div>

        <p class="text-zinc-600 text-[13px]">
          Deploy + Observe + Trmnl. Everything free, forever.
        </p>
      </div>
    </section>
  );
}
