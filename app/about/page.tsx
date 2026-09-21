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
  const { name: ceoName, title: ceoTitle, bio: ceoBio } = site.ceo;

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
                  <h2 className="font-display text-2xl font-semibold text-foreground">{value.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 rounded-3xl border border-line bg-surface p-8">
            <h2 className="font-display text-2xl font-semibold text-foreground">Where we work</h2>
            <p className="mt-3 max-w-2xl text-sm text-text-secondary">
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

          {/* CEO Section */}
          <div className="mt-12 rounded-3xl border border-line bg-gradient-to-br from-surface to-surface-2 p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              {/* Avatar - centered and rounded */}
              <div className="w-40 h-40 bg-gradient-to-br from-signal to-signal-2 rounded-full flex items-center justify-center mb-8">
                <span className="text-white font-display text-5xl font-bold">
                  {ceoName.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* CEO Info */}
              <h3 className="text-2xl font-bold text-signal mb-2">
                {ceoName}
              </h3>
              <p className="text-sm font-semibold text-text-secondary mb-6">
                {ceoTitle}
              </p>

              {/* Bio and leading text */}
              <p className="text-base text-text-secondary leading-relaxed max-w-2xl mb-6">
                {ceoBio}
              </p>
              <p className="text-base text-foreground font-semibold max-w-2xl mb-8">
                Leading NEXONS GROUP from Islamabad with a vision for operational software that actually works.
              </p>

              {/* CTA Button */}
              <Button href="/contact" variant="outline">
                Get in touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
