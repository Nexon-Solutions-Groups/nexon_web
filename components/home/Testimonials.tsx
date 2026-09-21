import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

const quotes = [
  {
    quote:
      "The printers went quiet on night one. Expo can see the whole line without shouting. That is the whole job.",
    name: "Hassan Malik",
    role: "Group ops, hospitality — Islamabad, Pakistan",
  },
  {
    quote:
      "Flockify replaced four spreadsheets and a notebook in the shed. I know the cycle before I pull into the yard.",
    name: "James Whitaker",
    role: "Farm manager — Australia",
  },
  {
    quote:
      "We rolled the same KDS playbook across sites in three countries. Support answered in our afternoon, their morning.",
    name: "Sofia Rahman",
    role: "Operations director — UAE",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-signal">Customers</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Used on floors, not just in decks.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {quotes.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <figure className="h-full rounded-3xl border border-line bg-surface p-7">
                <blockquote className="font-display text-lg leading-snug text-paper">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-8 text-sm">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-mist">{item.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
