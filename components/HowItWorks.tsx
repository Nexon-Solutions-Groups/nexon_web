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
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How Nexons works
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From first connection to full-scale operations, see how operators get real-time control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Card */}
                <div className="bg-surface rounded-[20px] border border-line p-8 h-full flex flex-col">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 bg-opacity-10 border border-signal mb-4">
                    <span className="text-signal font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <Icon className="w-8 h-8 text-signal mb-6" strokeWidth={1.5} />

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>

                {/* Connector line (except for last) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-signal to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
