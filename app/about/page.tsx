import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/home/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "NEXONS GROUP builds operational software and custom digital systems for businesses worldwide, including Pakistan, with 24/7 support.",
};

const values = [
  {
    title: "Operators first",
    body: "If it does not work under pressure — a rush, a shed, a warehouse — it is not finished. We design for the people holding the operation.",
  },
  {
    title: "Catalogue and custom",
    body: "Nexon KDS, Nexon POS and Flockify are products we ship today. Custom software is for everything that does not fit those names.",
  },
  {
    title: "Global, not distant",
    body: "Support in Pakistan, the Americas, EMEA and Asia-Pacific. Same standard, local hours — 24/7.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A company for the real economy."
        description="NEXONS GROUP builds operational software because businesses were being sold dashboards when they needed systems. Some of that work is named products. The rest we design around the floor in front of us."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.07}>
                <div className="h-full rounded-3xl border border-line bg-surface p-7">
                  <h2 className="font-display text-2xl font-semibold">{value.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 rounded-3xl border border-line bg-surface p-8">
            <h2 className="font-display text-2xl font-semibold">Where we work</h2>
            <p className="mt-3 max-w-2xl text-sm text-mist">
              Based at {site.address.line1}, {site.address.city}. Customers
              across Pakistan and worldwide.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/products" variant="outline">
                Products
              </Button>
              <Button href="/support" variant="outline">
                Worldwide support
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
