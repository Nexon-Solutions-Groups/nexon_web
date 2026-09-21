"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Will Nexon KDS work with our existing POS?",
    a: "In most cases, yes. We integrate with common hospitality POS systems worldwide and can map a custom feed when needed. We confirm this on the first call — we will not sell you a dead end.",
  },
  {
    q: "Does Flockify work without perfect connectivity?",
    a: "Yes. Critical logging is designed for sheds and yards where signal drops. Data syncs when the connection returns so the cycle never depends on a perfect Wi-Fi story.",
  },
  {
    q: "How long does a typical rollout take?",
    a: "A single-site kitchen can go live in days. Multi-site groups and full farm cycles are scoped properly — usually weeks, not quarters. We train on the floor, not in a slide deck.",
  },
  {
    q: "Where is our data hosted?",
    a: "We offer regional hosting (Pakistan, Americas, EMEA, Asia-Pacific). Access is role-based, traffic is encrypted, and we will walk through residency on request before you sign anything.",
  },
  {
    q: "Can we start with one site or one shed?",
    a: "That is the recommended path. Prove it on one operation, then roll out. Starter exists for exactly this.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-signal">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Straight answers.
            </h2>
            <p className="mt-4 text-mist">
              If your question is not here, that is a good reason to book a demo.
            </p>
          </Reveal>
          <div className="space-y-2">
            {faqs.map((item, index) => {
              const active = open === index;
              return (
                <Reveal key={item.q} delay={index * 0.04}>
                  <div className="rounded-2xl border border-line bg-surface">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      onClick={() => setOpen(active ? -1 : index)}
                      aria-expanded={active}
                    >
                      <span className="font-medium">{item.q}</span>
                      <span className={cn("text-mist transition", active && "rotate-45")}>+</span>
                    </button>
                    {active && (
                      <p className="px-5 pb-5 text-sm leading-relaxed text-mist">{item.a}</p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
