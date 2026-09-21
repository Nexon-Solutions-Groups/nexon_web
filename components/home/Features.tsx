import { Activity, Headphones, Lock, Radio, Smartphone, Workflow } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

const features = [
  {
    icon: Smartphone,
    title: "Built for the floor",
    body: "Large targets, readable at speed, usable with wet hands and tired eyes. Designed where the work actually happens.",
  },
  {
    icon: Radio,
    title: "Real-time by default",
    body: "Tickets, sheds and statuses move in under a second. No refresh. No waiting for a report to catch up.",
  },
  {
    icon: Lock,
    title: "Secure without friction",
    body: "Role-based access, encrypted in transit, regional hosting options, and a 99.9% uptime target.",
  },
  {
    icon: Activity,
    title: "Analytics operators read",
    body: "Prep times, FCR, mortality, labour — the numbers that change tomorrow morning, not vanity charts.",
  },
  {
    icon: Workflow,
    title: "Fits what you already run",
    body: "POS, printers, tablets, farm sensors. We integrate with your stack instead of forcing a rip-and-replace.",
  },
  {
    icon: Headphones,
    title: "Worldwide 24/7 support",
    body: "Pakistan plus the Americas, EMEA and Asia-Pacific. Teams who know a dinner rush from a shed alarm. We stay until you are live.",
  },
];

export function Features() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-signal">Why NEXONS</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Software that respects the operation.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 0.05}>
                <div className="h-full rounded-3xl border border-line bg-surface p-6 transition hover:border-signal/30">
                  <Icon className="h-5 w-5 text-signal" />
                  <h3 className="mt-4 font-display text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{feature.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
