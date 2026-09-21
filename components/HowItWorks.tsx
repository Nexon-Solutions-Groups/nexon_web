'use client';

import { Zap, Eye, Lightbulb, TrendingUp } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Zap,
      number: '01',
      title: 'Connect your operations',
      desc: 'Link your kitchen, farm, or till in minutes. No complex integrations.',
    },
    {
      icon: Eye,
      number: '02',
      title: 'See live data in real-time',
      desc: 'Orders, inventory, shipments—everything flows to one screen under a second.',
    },
    {
      icon: Lightbulb,
      number: '03',
      title: 'Make faster decisions',
      desc: 'Spotting bottlenecks and opportunities becomes instant. React before problems grow.',
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Scale with confidence',
      desc: 'Same system works for one location or a hundred. Your operations run the same way.',
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-mist max-w-2xl mx-auto">
            From setup to live operations in four simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-signal/50 to-transparent -z-10" />
                )}

                <div className="space-y-4">
                  {/* Step number badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-signal/10 border border-signal/30">
                    <span className="text-sm font-mono font-bold text-signal">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="p-3 bg-signal/10 rounded-lg w-fit">
                    <Icon className="w-6 h-6 text-signal" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-mist text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
