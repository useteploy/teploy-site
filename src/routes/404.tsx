export const config = { mode: "static" };

export function head() {
  return { title: "Page Not Found" };
}

export default function NotFound() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-xl mx-auto px-6 text-center">
        <p class="text-zinc-500 text-[13px] font-medium uppercase tracking-wider mb-4">404</p>
        <h1 class="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-6">
          Page not found
        </h1>
        <p class="text-zinc-600 dark:text-zinc-400 text-[16px] leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          class="inline-flex items-center px-6 py-2.5 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
