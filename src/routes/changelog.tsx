export const config = { mode: "static" };

export function head() {
  return { title: "Changelog" };
}

const releases = [
  {
    version: '1.2.0',
    date: 'January 15, 2026',
    type: 'feature',
    title: 'Database Backups & Restoration',
    changes: [
      { type: 'added', text: 'Automated daily backups for PostgreSQL and MySQL databases' },
      { type: 'added', text: 'One-click restore from any backup point' },
      { type: 'added', text: 'Backup retention policies (7, 14, 30 days)' },
      { type: 'improved', text: 'Database provisioning speed improved by 40%' },
    ],
  },
  {
    version: '1.1.0',
    date: 'January 8, 2026',
    type: 'feature',
    title: 'Team Collaboration',
    changes: [
      { type: 'added', text: 'Invite team members to your organization' },
      { type: 'added', text: 'Role-based access control (Owner, Admin, Developer, Viewer)' },
      { type: 'added', text: 'Audit logs for all team actions' },
      { type: 'fixed', text: 'Fixed issue with environment variable visibility' },
    ],
  },
  {
    version: '1.0.1',
    date: 'January 3, 2026',
    type: 'patch',
    title: 'Bug Fixes & Improvements',
    changes: [
      { type: 'fixed', text: 'Fixed deployment status not updating in real-time' },
      { type: 'fixed', text: 'Fixed Cloudflare DNS propagation delay detection' },
      { type: 'improved', text: 'Better error messages for failed builds' },
      { type: 'improved', text: 'Reduced agent memory footprint by 25%' },
    ],
  },
  {
    version: '1.0.0',
    date: 'January 1, 2026',
    type: 'major',
    title: 'Public Launch',
    changes: [
      { type: 'added', text: 'Server provisioning for Vultr, DigitalOcean, Hetzner, Linode, OVH' },
      { type: 'added', text: 'Git-based deployments from GitHub' },
      { type: 'added', text: 'Automatic SSL via Let\'s Encrypt' },
      { type: 'added', text: 'Custom domain support' },
      { type: 'added', text: 'PostgreSQL, MySQL, Redis, MongoDB database support' },
      { type: 'added', text: 'Real-time logs and monitoring' },
    ],
  },
];

function getTypeBadge(type: string) {
  switch (type) {
    case 'added':
      return { bg: 'bg-emerald-500/10', text: 'text-emerald-400', label: 'Added' };
    case 'improved':
      return { bg: 'bg-indigo-500/10', text: 'text-indigo-400', label: 'Improved' };
    case 'fixed':
      return { bg: 'bg-amber-500/10', text: 'text-amber-400', label: 'Fixed' };
    case 'removed':
      return { bg: 'bg-rose-500/10', text: 'text-rose-400', label: 'Removed' };
    default:
      return { bg: 'bg-zinc-500/10', text: 'text-zinc-400', label: type };
  }
}

export default function Changelog() {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div class="mb-16">
          <p class="text-indigo-400 text-[13px] font-medium uppercase tracking-wider mb-4">Changelog</p>
          <h1 class="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">
            What's New
          </h1>
          <p class="text-zinc-400 text-[16px] leading-relaxed">
            All the latest updates, improvements, and fixes to Teploy.
          </p>
        </div>

        {/* Releases */}
        <div class="space-y-12">
          {releases.map((release) => (
            <div class="relative pl-8 border-l border-white/[0.06]">
              <div class="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-indigo-500"></div>

              <div class="mb-4">
                <div class="flex flex-wrap items-center gap-3 mb-2">
                  <span class="text-white font-semibold text-lg">v{release.version}</span>
                  <span class="text-zinc-600 text-[13px]">{release.date}</span>
                </div>
                <h2 class="text-white font-medium text-[16px]">{release.title}</h2>
              </div>

              <ul class="space-y-3">
                {release.changes.map((change) => {
                  const badge = getTypeBadge(change.type);
                  return (
                    <li class="flex items-start gap-3">
                      <span class={`flex-shrink-0 px-2 py-0.5 ${badge.bg} ${badge.text} text-[11px] font-medium uppercase tracking-wider rounded`}>
                        {badge.label}
                      </span>
                      <span class="text-zinc-400 text-[14px]">{change.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Subscribe */}
        <div class="mt-16 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center">
          <h2 class="text-xl font-semibold text-white mb-3">Stay in the Loop</h2>
          <p class="text-zinc-500 text-[14px] mb-6">
            Get notified when we release new features and updates.
          </p>
          <a href="/blog" class="inline-flex items-center px-6 py-2.5 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-colors">
            Subscribe to Updates
          </a>
        </div>
      </div>
    </div>
  );
}
