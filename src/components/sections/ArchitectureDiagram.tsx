export default function ArchitectureDiagram() {
  return (
    <section id="architecture" class="py-20 relative">
      <div class="max-w-3xl mx-auto px-6 relative">
        <div class="text-center mb-10">
          <p class="text-[11px] text-zinc-500 uppercase tracking-widest mb-3">Architecture</p>
          <h2 class="text-2xl font-semibold text-white tracking-tight">
            Your infrastructure, simplified
          </h2>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="relative p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <svg viewBox="0 0 600 320" class="w-full h-auto">
              <defs>
                <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connection lines */}
              <path d="M 240 52 Q 150 75 100 100" fill="none" stroke="rgba(99, 102, 241, 0.08)" stroke-width="1" />
              <path d="M 300 55 L 300 100" fill="none" stroke="rgba(99, 102, 241, 0.08)" stroke-width="1" />
              <path d="M 360 52 Q 450 75 500 100" fill="none" stroke="rgba(99, 102, 241, 0.08)" stroke-width="1" />
              <path d="M 100 195 Q 100 230 220 260" fill="none" stroke="rgba(16, 185, 129, 0.08)" stroke-width="1" />
              <path d="M 300 195 L 300 260" fill="none" stroke="rgba(16, 185, 129, 0.08)" stroke-width="1" />
              <path d="M 500 195 Q 500 230 380 260" fill="none" stroke="rgba(16, 185, 129, 0.08)" stroke-width="1" />

              {/* Teploy node */}
              <rect x="240" y="15" width="120" height="40" rx="8" fill="rgba(12, 12, 12, 0.95)" stroke="rgba(99, 102, 241, 0.3)" stroke-width="1" />
              <text x="300" y="40" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="500" font-family="Inter, sans-serif">Teploy</text>

              {/* Server nodes */}
              <rect x="40" y="100" width="120" height="95" rx="8" fill="rgba(12, 12, 12, 0.95)" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
              <text x="100" y="125" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="500" font-family="Inter, sans-serif">Server 1</text>
              <text x="100" y="145" text-anchor="middle" fill="#a1a1aa" font-size="10" font-family="Inter, sans-serif">Vultr - NYC</text>
              <text x="100" y="170" text-anchor="middle" fill="#52525b" font-size="9" font-family="Inter, sans-serif">3 containers</text>
              <text x="100" y="185" text-anchor="middle" fill="#3f3f46" font-size="9" font-family="Inter, sans-serif">99.99% uptime</text>

              <rect x="240" y="100" width="120" height="95" rx="8" fill="rgba(12, 12, 12, 0.95)" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
              <text x="300" y="125" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="500" font-family="Inter, sans-serif">Server 2</text>
              <text x="300" y="145" text-anchor="middle" fill="#a1a1aa" font-size="10" font-family="Inter, sans-serif">Hetzner - EU</text>
              <text x="300" y="170" text-anchor="middle" fill="#52525b" font-size="9" font-family="Inter, sans-serif">5 containers</text>
              <text x="300" y="185" text-anchor="middle" fill="#3f3f46" font-size="9" font-family="Inter, sans-serif">99.98% uptime</text>

              <rect x="440" y="100" width="120" height="95" rx="8" fill="rgba(12, 12, 12, 0.95)" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
              <text x="500" y="125" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="500" font-family="Inter, sans-serif">Server 3</text>
              <text x="500" y="145" text-anchor="middle" fill="#a1a1aa" font-size="10" font-family="Inter, sans-serif">DO - SFO</text>
              <text x="500" y="170" text-anchor="middle" fill="#52525b" font-size="9" font-family="Inter, sans-serif">2 containers</text>
              <text x="500" y="185" text-anchor="middle" fill="#3f3f46" font-size="9" font-family="Inter, sans-serif">99.99% uptime</text>

              {/* Users node */}
              <rect x="225" y="260" width="150" height="40" rx="8" fill="rgba(12, 12, 12, 0.95)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1" />
              <text x="300" y="285" text-anchor="middle" fill="#10b981" font-size="13" font-weight="500" font-family="Inter, sans-serif">Users</text>

              {/* Animated particles */}
              <circle r="3" fill="#818cf8" filter="url(#softGlow)">
                <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s" path="M 300 55 L 300 100" />
                <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <circle r="3" fill="#818cf8" filter="url(#softGlow)">
                <animateMotion dur="2.5s" repeatCount="indefinite" begin="1s" path="M 240 52 Q 150 75 100 100" />
                <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2.5s" repeatCount="indefinite" begin="1s" />
              </circle>
              <circle r="3" fill="#818cf8" filter="url(#softGlow)">
                <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.5s" path="M 360 52 Q 450 75 500 100" />
                <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2.5s" repeatCount="indefinite" begin="1.5s" />
              </circle>
              <circle r="3" fill="#10b981" filter="url(#softGlow)">
                <animateMotion dur="2s" repeatCount="indefinite" begin="2s" path="M 300 195 L 300 260" />
                <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2s" repeatCount="indefinite" begin="2s" />
              </circle>
              <circle r="3" fill="#10b981" filter="url(#softGlow)">
                <animateMotion dur="2.5s" repeatCount="indefinite" begin="2.5s" path="M 100 195 Q 100 230 220 260" />
                <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2.5s" repeatCount="indefinite" begin="2.5s" />
              </circle>
              <circle r="3" fill="#10b981" filter="url(#softGlow)">
                <animateMotion dur="2.5s" repeatCount="indefinite" begin="3s" path="M 500 195 Q 500 230 380 260" />
                <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2.5s" repeatCount="indefinite" begin="3s" />
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
