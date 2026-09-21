"use client";

import { Zap, Eye, Lightbulb, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Zap,
    title: "Connect instantly",
    description:
      "Link your kitchen, farm, or till in minutes. No complex integrations. Just plug in and go live.",
  },
  {
    number: "02",
    icon: Eye,
    title: "See everything live",
    description:
      "Orders, inventory, shipments — everything flows to one screen under a second. Real-time, always.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "React before problems grow",
    description:
      "Spot bottlenecks and opportunities instantly. Make decisions faster than the operation can break.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale with confidence",
    description:
      "One site or a hundred. Same system, same reliability, same real-time view across everything.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-signal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-glow/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How Nexons works
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From first connection to full-scale operations, see how operators get real-time control in four steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="group relative">
                {/* Card background with gradient hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-2 to-surface rounded-[20px] border border-line group-hover:border-signal/50 transition-all duration-300" />
                
                {/* Accent line on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-signal via-signal-2 to-transparent rounded-t-[20px] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Number badge with glow */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-signal/20 to-signal-2/10 border-2 border-signal mb-6 group-hover:shadow-lg group-hover:shadow-signal/30 transition-all">
                    <span className="text-signal font-bold text-2xl">{step.number}</span>
                  </div>

                  {/* Icon with color animation */}
                  <div className="mb-6 inline-block p-3 rounded-lg bg-signal/10 group-hover:bg-signal/20 transition-colors">
                    <Icon className="w-8 h-8 text-signal group-hover:text-glow transition-colors" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-signal transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  {/* Bottom accent dot */}
                  <div className="mt-6 pt-6 border-t border-line">
                    <div className="inline-block w-2 h-2 bg-signal rounded-full group-hover:bg-glow transition-colors" />
                  </div>
                </div>

                {/* Connector line (desktop only, except for last) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-3 w-6 h-1 bg-gradient-to-r from-signal/50 to-transparent group-hover:from-signal transition-all" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom call to action */}
        <div className="mt-20 text-center pt-12 border-t border-line/30">
          <p className="text-text-secondary max-w-2xl mx-auto mb-6">
            These four steps power kitchens, farms, and custom operations worldwide. All in one interface. All in real-time.
          </p>
          <div className="inline-flex items-center gap-2 text-signal text-sm font-semibold">
            <span className="w-2 h-2 bg-signal rounded-full animate-pulse" />
            Currently live in 50+ locations across 4 continents
          </div>
        </div>
      </div>
    </section>
  );
}
