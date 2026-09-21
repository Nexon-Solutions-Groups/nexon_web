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
                Real hardware.<br />Real-time data.
              </h2>
              <p className="text-base text-text-secondary leading-relaxed">
                Nexons runs on your existing hardware or integrates seamlessly with your setup. Kitchen, farm, or till — see everything live on one screen.
              </p>
            </div>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li className="flex items-start gap-3">
                <span className="text-signal mt-1 font-bold">✓</span>
                <span>Works with touchscreen terminals, tablets, and mobile</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-signal mt-1 font-bold">✓</span>
                <span>Integrates with scanners, scales, and payment systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-signal mt-1 font-bold">✓</span>
                <span>Real-time sync across all connected devices</span>
              </li>
            </ul>
          </div>

          {/* Right side - Hardware visualization */}
          <div className="relative h-96 flex items-center justify-center">
            <svg
              viewBox="0 0 420 420"
              className="w-full h-full max-w-lg"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Gradient defs */}
              <defs>
                <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#0f1620', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1a2a3a', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="scannerGrad" cx="50%" cy="30%">
                  <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#1d4ed8', stopOpacity: 0 }} />
                </radialGradient>
              </defs>

              {/* POS Terminal - Main body with 3D effect */}
              <g>
                {/* Shadow */}
                <ellipse cx="210" cy="340" rx="140" ry="25" fill="#000000" opacity="0.2" />
                
                {/* Stand/Base */}
                <path d="M 140 320 L 150 295 L 270 295 L 280 320 Z" fill="#1a1a2e" stroke="#2563eb" strokeWidth="2" />
                <rect x="150" y="320" width="120" height="8" fill="#2563eb" rx="2" />
                
                {/* Main terminal bezel */}
                <rect
                  x="100"
                  y="140"
                  width="220"
                  height="180"
                  fill="#1a1a2e"
                  stroke="#2563eb"
                  strokeWidth="4"
                  rx="16"
                />
                
                {/* Screen area */}
                <defs>
                  <filter id="screenShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                  </filter>
                </defs>
                
                <rect x="115" y="155" width="190" height="130" fill="url(#screenGrad)" rx="8" filter="url(#screenShadow)" />
                
                {/* Screen content - Live data display */}
                <g>
                  {/* LIVE indicator */}
                  <circle cx="330" cy="170" r="6" fill="#0f9f86" />
                  <text x="332" y="175" className="text-xs" fill="#0f9f86" fontWeight="bold" fontSize="11">
                    LIVE
                  </text>
                  
                  {/* Data metrics */}
                  <text x="130" y="195" className="text-sm" fill="#2563eb" fontWeight="bold" fontSize="18">
                    42
                  </text>
                  <text x="130" y="215" className="text-xs" fill="#94a3b8" fontSize="11">
                    Active Orders
                  </text>
                  
                  <text x="190" y="195" className="text-sm" fill="#2563eb" fontWeight="bold" fontSize="18">
                    18
                  </text>
                  <text x="190" y="215" className="text-xs" fill="#94a3b8" fontSize="11">
                    Flocks/Shipments
                  </text>
                  
                  <text x="250" y="195" className="text-sm" fill="#0f9f86" fontWeight="bold" fontSize="18">
                    £2.8k
                  </text>
                  <text x="250" y="215" className="text-xs" fill="#94a3b8" fontSize="11">
                    Today
                  </text>
                  
                  {/* NEXONS branding */}
                  <text x="210" y="255" textAnchor="middle" className="text-xs" fill="#2563eb" fontWeight="bold" fontSize="14" letterSpacing="2">
                    NEXONS
                  </text>
                </g>
                
                {/* Button row */}
                <g>
                  <rect x="120" y="265" width="28" height="18" fill="#2563eb" rx="3" />
                  <rect x="160" y="265" width="28" height="18" fill="#2563eb" rx="3" />
                  <rect x="200" y="265" width="28" height="18" fill="#2563eb" rx="3" />
                  <rect x="240" y="265" width="28" height="18" fill="#2563eb" rx="3" />
                </g>
              </g>

              {/* Scanner - Left side */}
              <g transform="translate(60, 200)">
                <ellipse cx="0" cy="0" rx="38" ry="50" fill="#1a1a2e" stroke="#2563eb" strokeWidth="3" />
                <circle cx="0" cy="-20" r="22" fill="url(#scannerGrad)" stroke="#0f9f86" strokeWidth="2.5" />
                <circle cx="0" cy="-20" r="16" fill="#0f1620" stroke="#2563eb" strokeWidth="1" />
                <text x="0" y="35" textAnchor="middle" className="text-xs" fill="#2563eb" fontWeight="600" fontSize="12">
                  SCANNER
                </text>
              </g>

              {/* Cash Drawer - Right side */}
              <g transform="translate(360, 210)">
                <rect x="-48" y="0" width="96" height="55" fill="#1a1a2e" stroke="#2563eb" strokeWidth="3" rx="4" />
                <rect x="-42" y="6" width="84" height="28" fill="#0f1620" stroke="#0f9f86" strokeWidth="1.5" rx="2" />
                
                {/* Drawer handle circles */}
                <circle cx="-20" cy="38" r="6" fill="#2563eb" />
                <circle cx="20" cy="38" r="6" fill="#2563eb" />
                
                <text x="0" y="52" textAnchor="middle" className="text-xs" fill="#2563eb" fontWeight="600" fontSize="12">
                  DRAWER
                </text>
              </g>

              {/* Connection lines - dashed */}
              <line x1="200" y1="320" x2="80" y2="240" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.4" />
              <line x1="220" y1="320" x2="320" y2="250" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.4" />

              {/* Live pulse indicator - bottom */}
              <g>
                <circle cx="210" cy="360" r="8" fill="#0f9f86" opacity="0.8" />
                <circle cx="210" cy="360" r="12" fill="none" stroke="#0f9f86" strokeWidth="1.5" opacity="0.4" />
                <text x="210" y="408" textAnchor="middle" className="text-sm" fill="#94a3b8" fontSize="13">
                  All operations reporting in real-time
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
