"use client";

export function HardwareShowcase() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
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

          {/* Right side - NE Logo */}
          <div className="flex items-center justify-center">
            <img
              src="/logo-ne.png"
              alt="NEXONS GROUP"
              className="w-full max-w-sm h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
