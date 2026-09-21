"use client";

import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
  rating: number;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Nexons KDS cut our kitchen time in half. Orders are clear, priorities are obvious, and our team moved faster than ever before.",
    author: "Hassan Ali",
    role: "Restaurant Manager",
    initials: "HA",
    rating: 5,
    location: "Karachi",
  },
  {
    quote:
      "We track every flock with Flockify now. Mortality, feed, health — all in one place. Decisions that used to take hours now take minutes.",
    author: "Fatima Khan",
    role: "Farm Operations",
    initials: "FK",
    rating: 5,
    location: "Punjab",
  },
  {
    quote:
      "Real-time visibility across all our shipments. No more chasing updates. Operators see what's happening and act instantly.",
    author: "Ahmed Siddiqui",
    role: "Logistics Lead",
    initials: "AS",
    rating: 5,
    location: "Lahore",
  },
  {
    quote:
      "Flockify transformed how we manage our poultry operations. The reporting is so detailed yet simple. Our yield improved significantly.",
    author: "Muhammad Tariq",
    role: "Farm Owner",
    initials: "MT",
    rating: 4.5,
    location: "Faisalabad",
  },
  {
    quote:
      "The integration was seamless. Our entire operation now runs on Flockify. Team coordination improved, and we cut costs by 30%.",
    author: "Ayesha Malik",
    role: "Operations Manager",
    initials: "AM",
    rating: 5,
    location: "Islamabad",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <div key={i}>
          {i < Math.floor(rating) ? (
            <Star
              size={16}
              className="fill-amber-400 text-amber-400"
              strokeWidth={0}
            />
          ) : i < rating ? (
            <div className="relative w-4 h-4">
              <Star
                size={16}
                className="absolute text-amber-400"
                strokeWidth={1.5}
              />
              <div className="absolute top-0 left-0 overflow-hidden w-2 h-4">
                <Star
                  size={16}
                  className="fill-amber-400 text-amber-400"
                  strokeWidth={0}
                />
              </div>
            </div>
          ) : (
            <Star
              size={16}
              className="text-amber-400"
              strokeWidth={1.5}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-signal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-glow/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Loved by operators
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real feedback from kitchens, farms, and operations that run on Nexons every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-surface rounded-[20px] border border-line p-8 flex flex-col hover:border-signal/50 transition-all"
            >
              {/* Star rating */}
              <div className="mb-6">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <p className="text-text-secondary leading-relaxed flex-grow mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-6 border-t border-line">
                <div className="w-10 h-10 bg-gradient-to-br from-signal to-signal-2 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div className="flex-grow">
                  <p className="text-foreground font-semibold text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-text-secondary text-xs">
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
