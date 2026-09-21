import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CustomMock } from "@/components/ProductVisual";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Custom software",
  description:
    "Bespoke operational software from NEXONS GROUP — web, mobile and integrations for businesses in Pakistan and worldwide.",
};

const capabilities = [
  {
    title: "Start on the floor",
    body: "We map the real workflow first: what people do under pressure, which systems already exist, and what must not break on day one.",
  },
  {
    title: "Build what the catalogue cannot",
    body: "Retail, logistics, field teams, franchise portals, internal tools. If it is operational software, it is in scope — even when it has no product name.",
  },
  {
    title: "Ship, then stay",
    body: "The same team that designs the system supports it. Coverage in Pakistan and worldwide, regional hosting, and a rollout plan that matches your sites.",
  },
  {
    title: "Connect, do not replace blindly",
    body: "APIs, POS, ERPs, sensors, spreadsheets you cannot drop yet. We integrate with the stack you already paid for.",
  },
];

const included = [
  "Discovery and process mapping",
  "Web and mobile applications",
  "Integrations and data migration",
  "Pilot, launch and training",
  "Hosting and security review",
  "Ongoing 24/7 support",
];

const industries = [
  "Hospitality groups",
  "Agriculture & food production",
  "Retail & franchise",
  "Logistics & field ops",
  "Internal operations tools",
  "Other — tell us the workflow",
];

export default function CustomSoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Enterprise · Product"
        title="Custom software"
        description="NEXONS GROUP is not limited to the catalogue. When Nexon KDS, Nexon POS or Flockify is not the right fit, we design and ship the system your operation actually needs."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" size="lg">
            Start a scoping call
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/products" variant="outline" size="lg">
            View catalogue
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-line py-12">
        <Container>
          <CustomMock />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Built around the work, not a template.
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
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[32px] border border-line bg-surface p-8 sm:p-10">
              <h2 className="font-display text-3xl font-semibold">In a typical build</h2>
              <ul className="mt-8 grid gap-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-glow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[32px] border border-line bg-surface p-8 sm:p-10">
              <h2 className="font-display text-3xl font-semibold">Where we work</h2>
              <ul className="mt-8 grid gap-3">
                {industries.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-glow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
