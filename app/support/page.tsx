import type { Metadata } from "next";
import { Clock, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/home/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "24/7 support for NEXONS GROUP products and custom software in Pakistan and worldwide. Based in Islamabad.",
};

const channels = [
  {
    icon: Mail,
    title: "Email",
    body: `Write to ${site.email}. Active customers are prioritised. Typical first response under one business hour.`,
  },
  {
    icon: MessageCircle,
    title: "In-product chat",
    body: "From the KDS or Flockify admin. Screenshots and logs come with the ticket.",
  },
  {
    icon: Clock,
    title: "Onboarding",
    body: "Go-live on the floor, in your timezone. We do not hand you a PDF and disappear.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Pakistan and worldwide. One Islamabad HQ."
        description="Support runs 24/7 from I-9/3, Islamabad — covering Pakistan, the Americas, EMEA and Asia-Pacific, so a rush in Karachi and a morning check in Queensland both get a human."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact">Open a ticket</Button>
          <Button href={`mailto:${site.email}`} variant="outline">
            {site.email}
          </Button>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-3xl font-semibold tracking-tight">Coverage</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            <div className="grid grid-cols-[1fr_1.4fr_auto] gap-4 border-b border-line bg-ink-2 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-mist">
              <span>Region</span>
              <span>Operations</span>
              <span>Hours</span>
            </div>
            {site.regions.map((region) => (
              <div
                key={region.name}
                className="grid grid-cols-[1fr_1.4fr_auto] gap-4 border-b border-line px-5 py-4 last:border-b-0"
              >
                <span className="font-medium">{region.name}</span>
                <span className="text-sm text-mist">{region.coverage}</span>
                <span className="text-sm tabular-nums">24/7</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-ink-2 py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-3xl font-semibold tracking-tight">How to reach us</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="h-full rounded-3xl border border-line bg-surface p-6">
                  <item.icon className="h-5 w-5 text-signal" />
                  <h3 className="mt-4 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
