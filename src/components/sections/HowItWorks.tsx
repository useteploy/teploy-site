const steps = [
  { number: "1", title: "Install", description: "One command. Homebrew or shell script. macOS, Linux, WSL." },
  { number: "2", title: "Connect", description: "Point at any server via SSH. No hosted dependencies." },
  { number: "3", title: "Deploy", description: "Zero-downtime deployment with instant rollback." },
  { number: "4", title: "Monitor", description: "Analytics, APM, and error tracking. Self-hosted." },
];

export default function HowItWorks() {
  return (
    <section id="how" class="py-20 relative">
      <div class="max-w-2xl mx-auto px-6">
        <div class="text-center mb-12 animate-fade-in-up">
          <p class="text-[11px] text-zinc-500 uppercase tracking-widest mb-3">How it works</p>
          <h2 class="text-2xl font-semibold text-white tracking-tight">
            Four steps to production
          </h2>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in-up animate-delay-100">
          {steps.map((step) => (
            <div class="text-center">
              <div class="text-[32px] font-light text-zinc-700 mb-2">{step.number}</div>
              <h3 class="text-[13px] font-medium text-white mb-1">{step.title}</h3>
              <p class="text-[11px] text-zinc-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div class="mt-12 pt-8 border-t border-white/[0.04] animate-fade-in animate-delay-200">
          <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-zinc-600">
            <span>Automatic HTTPS</span>
            <span class="hidden sm:inline">&#183;</span>
            <span>Self-hosted observability</span>
            <span class="hidden sm:inline">&#183;</span>
            <span>No vendor lock-in</span>
          </div>
        </div>
      </div>
    </section>
  );
}
