import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ProductShot } from "@/components/ProductShot";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Nexon KDS",
  description:
    "Kitchen Display System for restaurants, ghost kitchens and multi-site groups worldwide. Live order routing, POS integration and kitchen analytics.",
};

const capabilities = [
  {
    title: "Route every ticket",
    body: "Grill, pass, expo, bar — each station sees only what it owns. Modifiers stay attached. Nothing gets lost in a printer jam.",
  },
  {
    title: "Bump with intent",
    body: "Clear a ticket, recall it, split it. Colour and timers tell the kitchen the truth without a manager walking the line.",
  },
  {
    title: "See the whole group",
    body: "One kitchen or twenty, in one city or several countries. Compare ticket times, late orders and labour against the same playbook.",
  },
  {
    title: "Keep the POS you trust",
    body: "Nexon KDS sits on top of the systems you already paid for. We map the feed. You keep service moving.",
  },
];

const included = [
  "Live multi-station routing",
  "Expo / pass overview",
  "Allergen and modifier highlighting",
  "Prep-time analytics",
  "Tablet, touch and bump-bar friendly",
  "Multi-location admin",
];

export default function NexonKdsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hospitality · Product"
        title="Nexon KDS"
        description="The kitchen display that replaces paper, shouting and guesswork. Every order, every station, live — supported 24/7 worldwide."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" size="lg">
            Book a kitchen walkthrough
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Request a quote
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-line py-12">
        <Container>
          <ProductShot
            src="/products/nexon-kds.jpg"
            alt="Nexon KDS kitchen display on a restaurant screen"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for the hour when nothing can wait.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {capabilities.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-3xl border border-line bg-surface p-7">
                  <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <div className="rounded-[32px] border border-line bg-surface p-8 sm:p-12">
            <h2 className="font-display text-3xl font-semibold">In the box</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm">
                  <Check className="h-4 w-4 text-glow" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
