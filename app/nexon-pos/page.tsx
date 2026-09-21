import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PosMock } from "@/components/PosMock";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Nexon POS",
  description:
    "Point of sale for restaurants, cafés and multi-site food service. Pairs with Nexon KDS. Supported worldwide.",
};

const capabilities = [
  {
    title: "Speed on the floor",
    body: "Modifiers, splits, tables and takeaway without hunting through screens. Staff learn it in a shift, not a week.",
  },
  {
    title: "Money that ties out",
    body: "Payments, tips, discounts and end-of-day in one place. Managers close the till without a spreadsheet reconstruction.",
  },
  {
    title: "One group, many sites",
    body: "Menus, pricing and reporting that stay aligned whether you run one café or a regional group.",
  },
  {
    title: "Kitchen when you need it",
    body: "Send tickets to Nexon KDS, or keep POS standalone. You choose the stack. We do not force a rip-and-replace.",
  },
];

const included = [
  "Table and counter service",
  "Modifiers, splits and courses",
  "Card, cash and receipts",
  "Multi-site menus and reporting",
  "Staff permissions",
  "Optional Nexon KDS handoff",
];

export default function NexonPosPage() {
  return (
    <>
      <PageHero
        eyebrow="Hospitality · Product"
        title="Nexon POS"
        description="Point of sale for restaurants, cafés and multi-site food service. Fast on the floor, clear at close, ready to talk to the kitchen."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" size="lg">
            Book a POS walkthrough
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Request a quote
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-line py-12">
        <Container>
          <PosMock />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for service, not for a demo video.
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
