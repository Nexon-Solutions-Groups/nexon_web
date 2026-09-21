'use client';

import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: 'Orders used to pile up on paper tickets. Now our kitchen sees every order in real-time. We cut prep time by 30%.',
      author: 'Hassan Ali',
      role: 'Restaurant Manager, Karachi',
      initials: 'HA',
      rating: 5,
    },
    {
      quote: 'Tracking 50 flocks across three farms was a nightmare. Flockify shows us feed, health, and mortality instantly. We spot issues before they become costly.',
      author: 'Fatima Khan',
      role: 'Farm Operations, Punjab',
      initials: 'FK',
      rating: 5,
    },
    {
      quote: 'The support team in Islamabad responds within minutes, any time of day. That kind of reliability is rare. Our operations never stop because NEXONS doesn\'t.',
      author: 'Ahmed Siddiqui',
      role: 'Logistics Lead, Lahore',
      initials: 'AS',
      rating: 5,
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            Operators trust NEXONS
          </h2>
          <p className="text-lg text-mist max-w-2xl mx-auto">
            Real feedback from kitchens, farms, and operations worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-line bg-surface/50 hover:bg-surface/80 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-signal text-signal"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-mist text-sm leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-signal to-signal-2 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-mist">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
