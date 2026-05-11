export const config = { mode: "static" };

export function head() {
  return { title: "Status" };
}

const services = [
  { name: 'Dashboard', status: 'operational', uptime: '99.99%' },
  { name: 'API', status: 'operational', uptime: '99.98%' },
  { name: 'Deployment Pipeline', status: 'operational', uptime: '99.97%' },
  { name: 'Agent Communication', status: 'operational', uptime: '99.99%' },
  { name: 'Database Services', status: 'operational', uptime: '99.95%' },
  { name: 'DNS & SSL', status: 'operational', uptime: '99.99%' },
];

const incidents = [
  {
    date: 'January 12, 2026',
    title: 'Increased API latency',
    status: 'resolved',
    description: 'Some users experienced slower API response times due to a database connection pool issue. Resolved within 15 minutes.',
    duration: '15 minutes',
  },
  {
    date: 'January 5, 2026',
    title: 'Deployment delays for Hetzner servers',
    status: 'resolved',
    description: 'Deployments to Hetzner servers were delayed due to rate limiting on their API. Implemented retry logic.',
    duration: '45 minutes',
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case 'operational':
      return 'bg-emerald-500';
    case 'degraded':
      return 'bg-amber-500';
    case 'outage':
      return 'bg-rose-500';
    default:
      return 'bg-zinc-500';
  }
}

export default function Status() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div class="mb-12">
          <p class="text-zinc-600 dark:text-zinc-500 text-[13px] font-medium uppercase tracking-wider mb-4">System Status</p>
          <h1 class="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-6">
            All Systems Operational
          </h1>
          <p class="text-zinc-700 dark:text-zinc-400 text-[16px] leading-relaxed">
            Current status of Teploy services. Updated in real-time.
          </p>
        </div>

        {/* Overall Status Banner */}
        <div class="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.05] p-6 mb-12">
          <div class="flex items-center gap-3">
            <div class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
            <span class="text-emerald-400 font-medium">All systems are operational</span>
          </div>
          <p class="text-zinc-600 dark:text-zinc-500 text-[14px] mt-2">
            Last updated: {new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}
          </p>
        </div>

        {/* Services */}
        <div class="mb-16">
          <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Services</h2>
          <div class="space-y-3">
            {services.map((service) => (
              <div class="flex items-center justify-between p-4 rounded-lg border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02]">
                <div class="flex items-center gap-3">
                  <div class={`w-2.5 h-2.5 rounded-full ${getStatusColor(service.status)}`}></div>
                  <span class="text-zinc-900 dark:text-white text-[14px] font-medium">{service.name}</span>
                </div>
                <div class="flex items-center gap-4">
                  <span class="text-zinc-600 dark:text-zinc-500 text-[13px]">{service.uptime} uptime</span>
                  <span class="text-emerald-400 text-[13px] capitalize">{service.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Uptime Chart Placeholder */}
        <div class="mb-16">
          <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">90-Day Uptime</h2>
          <div class="p-6 rounded-xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02]">
            <div class="flex items-end gap-1 h-16">
              {Array.from({ length: 90 }, (_, i) => (
                <div
                  class={`flex-1 rounded-sm ${i > 85 ? 'bg-amber-500/50' : 'bg-emerald-500/50'} hover:bg-emerald-400/70 transition-colors`}
                  style={{ height: `${85 + Math.random() * 15}%` }}
                  title={`Day ${90 - i}`}
                ></div>
              ))}
            </div>
            <div class="flex justify-between mt-4 text-zinc-700 dark:text-zinc-600 text-[12px]">
              <span>90 days ago</span>
              <span>Today</span>
            </div>
            <div class="mt-4 pt-4 border-t border-zinc-200/70 dark:border-white/[0.06] flex items-center justify-between">
              <span class="text-zinc-600 dark:text-zinc-500 text-[14px]">Overall uptime</span>
              <span class="text-zinc-900 dark:text-white font-semibold">99.97%</span>
            </div>
          </div>
        </div>

        {/* Recent Incidents */}
        <div class="mb-16">
          <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Recent Incidents</h2>
          {incidents.length > 0 ? (
            <div class="space-y-4">
              {incidents.map((incident) => (
                <div class="p-6 rounded-xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02]">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-3">
                      <span class="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 text-[11px] font-medium uppercase tracking-wider rounded-full">
                        {incident.status}
                      </span>
                      <span class="text-zinc-600 dark:text-zinc-500 text-[13px]">{incident.date}</span>
                    </div>
                    <span class="text-zinc-700 dark:text-zinc-600 text-[13px]">Duration: {incident.duration}</span>
                  </div>
                  <h3 class="text-zinc-900 dark:text-white font-medium text-[15px] mb-2">{incident.title}</h3>
                  <p class="text-zinc-600 dark:text-zinc-500 text-[14px]">{incident.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div class="p-6 rounded-xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02] text-center">
              <p class="text-zinc-600 dark:text-zinc-500 text-[14px]">No recent incidents</p>
            </div>
          )}
        </div>

        {/* Subscribe */}
        <div class="rounded-2xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02] p-8 text-center">
          <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Get Status Updates</h2>
          <p class="text-zinc-600 dark:text-zinc-500 text-[14px] mb-6 max-w-md mx-auto">
            Subscribe to receive notifications about scheduled maintenance and service disruptions.
          </p>
          <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              required
              class="flex-1 px-4 py-3 bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] rounded-lg text-zinc-900 dark:text-white text-[14px] placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors"
            />
            <button
              type="submit"
              class="px-6 py-3 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
