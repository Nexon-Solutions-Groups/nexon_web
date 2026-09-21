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
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How Nexons works
          </h2>
          <p className="text-base text-text-secondary max-w-3xl mx-auto">
            From first connection to full-scale operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative group">
                {/* Card */}
                <div className="bg-surface rounded-[16px] border border-line p-6 h-full flex flex-col hover:border-signal/50 transition-all">
                  {/* Number badge - small */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-signal/15 border border-signal mb-4">
                    <span className="text-signal font-bold text-sm">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <Icon className="w-6 h-6 text-signal mb-4" strokeWidth={1.5} />

                  {/* Title */}
                  <h3 className="text-base font-semibold text-foreground mb-3 leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 w-6 h-1 bg-gradient-to-r from-signal/40 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
