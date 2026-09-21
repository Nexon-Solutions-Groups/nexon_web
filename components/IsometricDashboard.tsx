'use client';

export function IsometricDashboard() {
  return (
    <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full max-w-4xl"
        style={{ filter: 'drop-shadow(0 20px 60px rgba(37, 99, 235, 0.15))' }}
      >
        {/* Background */}
        <defs>
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1a2f5a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0f1e3d', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#0f9f86', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>

        {/* Monitor Base (Isometric) */}
        <g transform="translate(250, 180) skewY(-15) skewX(5)">
          {/* Back face */}
          <rect
            x="0"
            y="0"
            width="300"
            height="240"
            fill="url(#screenGradient)"
            stroke="#2563eb"
            strokeWidth="2"
            rx="8"
          />

          {/* Screen glow */}
          <rect
            x="0"
            y="0"
            width="300"
            height="240"
            fill="url(#glowGradient)"
            rx="8"
            opacity="0.4"
          />

          {/* Top left indicator */}
          <text x="12" y="24" fontSize="11" fill="#ea580c" fontWeight="600" letterSpacing="1">
            KITCHEN LIVE
          </text>
          <circle cx="288" cy="16" r="4" fill="#0f9f86" />

          {/* Main data sections */}
          {/* Kitchen Orders */}
          <g>
            <text x="12" y="60" fontSize="36" fill="#ffffff" fontWeight="bold" fontFamily="monospace">
              42
            </text>
            <text x="12" y="78" fontSize="11" fill="#94a3b8">
              Active orders
            </text>
          </g>

          {/* Operations Tracked */}
          <g>
            <text x="12" y="130" fontSize="28" fill="#ffffff" fontWeight="bold" fontFamily="monospace">
              18
            </text>
            <text x="12" y="148" fontSize="11" fill="#94a3b8">
              Flocks / Shipments
            </text>
          </g>

          {/* Transactions */}
          <g>
            <text x="12" y="200" fontSize="28" fill="#ffffff" fontWeight="bold" fontFamily="monospace">
              156
            </text>
            <text x="12" y="218" fontSize="11" fill="#94a3b8">
              Today
            </text>
          </g>

          {/* Live badge */}
          <rect x="260" y="210" width="24" height="14" rx="2" fill="#0f9f86" opacity="0.3" />
          <circle cx="265" cy="217" r="2" fill="#0f9f86" />
          <text x="272" y="220" fontSize="9" fill="#0f9f86" fontWeight="600" letterSpacing="0.5">
            LIVE
          </text>
        </g>

        {/* Monitor Stand (Isometric perspective) */}
        <g>
          {/* Left stand leg */}
          <polygon
            points="300,420 320,480 280,480"
            fill="#1a2f5a"
            stroke="#2563eb"
            strokeWidth="1"
            opacity="0.8"
          />
          {/* Right stand leg */}
          <polygon
            points="500,420 520,480 480,480"
            fill="#1a2f5a"
            stroke="#2563eb"
            strokeWidth="1"
            opacity="0.8"
          />
          {/* Base plate */}
          <polygon
            points="280,480 520,480 540,495 260,495"
            fill="#0f1e3d"
            stroke="#2563eb"
            strokeWidth="1"
          />
        </g>

        {/* Floating data indicators */}
        <g opacity="0.6">
          {/* Data flow line 1 */}
          <line x1="150" y1="280" x2="250" y2="320" stroke="#2563eb" strokeWidth="1.5" />
          <circle cx="150" cy="280" r="2" fill="#2563eb" />

          {/* Data flow line 2 */}
          <line x1="650" y1="300" x2="550" y2="330" stroke="#0f9f86" strokeWidth="1.5" />
          <circle cx="650" cy="300" r="2" fill="#0f9f86" />
        </g>

        {/* Status text */}
        <text
          x="400"
          y="540"
          fontSize="12"
          fill="#64748b"
          textAnchor="middle"
          fontFamily="monospace"
          letterSpacing="0.5"
        >
          All operations reporting in real-time
        </text>
      </svg>
    </div>
  );
}
