"use client";

export function HardwareShowcase() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Real hardware. Real-time data.
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Nexons runs on your existing hardware or integrates seamlessly with your setup. Kitchen, farm, or till — see everything live on one screen.
              </p>
            </div>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-signal mt-1">✓</span>
                <span>Works with touchscreen terminals, tablets, and mobile</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-signal mt-1">✓</span>
                <span>Integrates with scanners, scales, and payment systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-signal mt-1">✓</span>
                <span>Real-time sync across all connected devices</span>
              </li>
            </ul>
          </div>

          {/* Right side - Hardware visualization */}
          <div className="relative">
            <svg
              viewBox="0 0 400 500"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* POS Terminal */}
              <g>
                {/* Stand base */}
                <rect x="120" y="320" width="160" height="15" fill="#1a1a2e" rx="2" />
                <ellipse cx="200" cy="320" rx="90" ry="8" fill="#0f1620" />
                
                {/* Main terminal body */}
                <rect
                  x="100"
                  y="160"
                  width="200"
                  height="170"
                  fill="#1a1a2e"
                  stroke="#2563eb"
                  strokeWidth="3"
                  rx="8"
                />
                
                {/* Screen */}
                <rect x="110" y="170" width="180" height="120" fill="#0f1620" rx="4" />
                
                {/* Screen content - live data */}
                <text x="200" y="195" textAnchor="middle" className="text-sm" fill="#0f9f86" fontWeight="bold">
                  LIVE
                </text>
                <text x="140" y="220" className="text-xs" fill="#2563eb" fontWeight="bold">
                  42 Orders
                </text>
                <text x="140" y="240" className="text-xs" fill="#2563eb">
                  18 Active
                </text>
                <text x="140" y="260" className="text-xs" fill="#2563eb" fontWeight="bold">
                  £2,850 Today
                </text>
                
                {/* Nexons branding on screen */}
                <text x="200" y="285" textAnchor="middle" className="text-xs" fill="#2563eb" fontWeight="bold">
                  NEXONS
                </text>
                
                {/* Hardware buttons */}
                <rect x="115" y="295" width="25" height="20" fill="#2563eb" rx="2" />
                <rect x="155" y="295" width="25" height="20" fill="#2563eb" rx="2" />
                <rect x="195" y="295" width="25" height="20" fill="#2563eb" rx="2" />
                <rect x="235" y="295" width="25" height="20" fill="#2563eb" rx="2" />
                
                {/* Speaker grille */}
                <rect x="125" y="310" width="150" height="6" fill="#1a1a2e" rx="1" />
              </g>

              {/* Scanner */}
              <g transform="translate(80, 250)">
                <ellipse cx="0" cy="0" rx="35" ry="45" fill="#1a1a2e" stroke="#2563eb" strokeWidth="2" />
                <circle cx="0" cy="-15" r="18" fill="#0f1620" stroke="#0f9f86" strokeWidth="2" />
                <text x="0" y="25" textAnchor="middle" className="text-xs" fill="#2563eb">
                  Scanner
                </text>
              </g>

              {/* Cash Drawer */}
              <g transform="translate(320, 280)">
                <rect x="-40" y="0" width="80" height="50" fill="#1a1a2e" stroke="#2563eb" strokeWidth="2" rx="3" />
                <rect x="-35" y="5" width="70" height="25" fill="#0f1620" stroke="#0f9f86" strokeWidth="1" rx="2" />
                <circle cx="-20" cy="32" r="5" fill="#2563eb" />
                <circle cx="20" cy="32" r="5" fill="#2563eb" />
                <text x="0" y="50" textAnchor="middle" className="text-xs" fill="#2563eb">
                  Drawer
                </text>
              </g>

              {/* Connection lines */}
              <line x1="200" y1="330" x2="80" y2="295" stroke="#2563eb" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
              <line x1="220" y1="330" x2="280" y2="280" stroke="#2563eb" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
              
              {/* Live indicator */}
              <circle cx="200" cy="380" r="8" fill="#0f9f86" />
              <text x="200" y="385" textAnchor="middle" className="text-xs" fill="#0f9f86" fontWeight="bold">
                LIVE
              </text>
              
              {/* Bottom text */}
              <text x="200" y="450" textAnchor="middle" className="text-sm" fill="#94a3b8" fontWeight="500">
                All operations reporting in real-time
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
