"use client";

export function HardwareShowcase() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Real hardware.<br />Real-time data.
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-8">
                Nexons runs on your existing hardware or integrates seamlessly with your setup. Kitchen, farm, or till — see everything live on one screen.
              </p>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-signal font-bold">✓</span>
                <span className="text-text-secondary">Works with touchscreen terminals, tablets, and mobile</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-signal font-bold">✓</span>
                <span className="text-text-secondary">Integrates with scanners, scales, and payment systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-signal font-bold">✓</span>
                <span className="text-text-secondary">Real-time sync across all connected devices</span>
              </li>
            </ul>
          </div>

          {/* Right side - Hardware showcase */}
          <div className="relative h-80 sm:h-96 flex items-center justify-center">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full max-w-sm"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Gradient defs */}
              <defs>
                <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#0f1620', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1a2a3a', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* POS Terminal */}
              <g>
                {/* Shadow */}
                <ellipse cx="200" cy="340" rx="120" ry="20" fill="#000000" opacity="0.15" />
                
                {/* Stand */}
                <rect x="150" y="300" width="100" height="8" fill="#2563eb" rx="2" />
                
                {/* Main bezel */}
                <rect x="100" y="120" width="200" height="160" fill="#1a1a2e" stroke="#2563eb" strokeWidth="3" rx="12" />
                
                {/* Screen */}
                <rect x="115" y="135" width="170" height="110" fill="url(#screenGrad)" rx="6" />
                
                {/* Screen content */}
                <g>
                  <circle cx="315" cy="150" r="5" fill="#0f9f86" />
                  <text x="318" y="154" fill="#0f9f86" fontSize="10" fontWeight="bold">LIVE</text>
                  
                  <text x="130" y="160" fill="#2563eb" fontSize="16" fontWeight="bold">42</text>
                  <text x="130" y="175" fill="#94a3b8" fontSize="9">Orders</text>
                  
                  <text x="180" y="160" fill="#2563eb" fontSize="16" fontWeight="bold">18</text>
                  <text x="180" y="175" fill="#94a3b8" fontSize="9">Active</text>
                  
                  <text x="235" y="160" fill="#0f9f86" fontSize="16" fontWeight="bold">£2.8k</text>
                  <text x="235" y="175" fill="#94a3b8" fontSize="9">Today</text>
                  
                  <text x="200" y="230" textAnchor="middle" fill="#2563eb" fontSize="12" fontWeight="bold" letterSpacing="1">NEXONS</text>
                </g>
                
                {/* Buttons */}
                <rect x="120" y="255" width="22" height="15" fill="#2563eb" rx="2" />
                <rect x="155" y="255" width="22" height="15" fill="#2563eb" rx="2" />
                <rect x="190" y="255" width="22" height="15" fill="#2563eb" rx="2" />
                <rect x="225" y="255" width="22" height="15" fill="#2563eb" rx="2" />
              </g>

              {/* Scanner */}
              <g transform="translate(70, 220)">
                <ellipse cx="0" cy="0" rx="30" ry="40" fill="#1a1a2e" stroke="#2563eb" strokeWidth="2" />
                <circle cx="0" cy="-15" r="16" fill="#0f1620" stroke="#0f9f86" strokeWidth="2" />
                <text x="0" y="28" textAnchor="middle" fill="#2563eb" fontSize="11" fontWeight="600">Scanner</text>
              </g>

              {/* Drawer */}
              <g transform="translate(330, 240)">
                <rect x="-40" y="0" width="80" height="45" fill="#1a1a2e" stroke="#2563eb" strokeWidth="2" rx="3" />
                <rect x="-35" y="5" width="70" height="22" fill="#0f1620" stroke="#0f9f86" strokeWidth="1" rx="1" />
                <circle cx="-15" cy="33" r="5" fill="#2563eb" />
                <circle cx="15" cy="33" r="5" fill="#2563eb" />
                <text x="0" y="48" textAnchor="middle" fill="#2563eb" fontSize="11" fontWeight="600">Drawer</text>
              </g>

              {/* Connection lines */}
              <line x1="190" y1="300" x2="80" y2="250" stroke="#2563eb" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
              <line x1="210" y1="300" x2="305" y2="250" stroke="#2563eb" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />

              {/* Live indicator */}
              <circle cx="200" cy="350" r="6" fill="#0f9f86" />
              <text x="200" y="375" textAnchor="middle" fill="#94a3b8" fontSize="12">All operations reporting in real-time</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
