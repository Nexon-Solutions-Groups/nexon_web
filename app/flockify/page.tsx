import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FlockifyMock } from "@/components/FlockifyMock";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Flockify",
  description:
    "Poultry farm management software for flock tracking, feed conversion, health, mortality and production analytics. Supported worldwide.",
};

const capabilities = [
  {
    title: "Every flock, one record",
    body: "Placement to deplete in a single timeline. Birds, sheds, cycles and notes stop living in four different notebooks.",
  },
  {
    title: "Feed, health, mortality",
    body: "Log what happened in the shed, not what someone remembered later. FCR and mortality are always current.",
  },
  {
    title: "Reports for owners and vets",
    body: "Production views that can be shared without exporting a mess. Decisions happen faster when the numbers agree.",
  },
  {
    title: "Works where signal does not",
    body: "Critical capture is built for yards and sheds. Sync when you are back in range. The cycle does not wait for Wi-Fi.",
  },
];

const included = [
  "Flock and shed tracking",
  "Feed conversion monitoring",
  "Health and treatment logs",
  "Mortality and production analytics",
  "Owner / manager / operator roles",
  "Automated cycle reports",
];

export default function FlockifyPage() {
  return (
    <>
      <PageHero
        eyebrow="Agriculture · Product"
        title="Flockify"
        description="Complete poultry farm management. Track the flock, the feed and the cycle — then see the operation clearly before you reach the yard. Supported worldwide, 24/7."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" size="lg">
            See Flockify live
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Request a quote
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-line py-12">
        <Container>
          <FlockifyMock />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Farm software that belongs on the farm.
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
