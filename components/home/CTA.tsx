import { site } from "@/lib/site";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export function CTA() {
  return (
    <section className="py-20 sm:pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-signal/25 bg-gradient-to-br from-signal/15 via-surface to-glow/10 px-8 py-14 text-center sm:px-16">
            <div className="orb left-[-10%] top-[-40%] h-64 w-64 bg-signal/40" />
            <div className="relative">
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Ready when the operation is.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-mist">
                Catalogue product or a custom build — tell us how the work actually runs. We will
                map the rollout and show you the live system, not a deck.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  Get a demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href={`mailto:${site.email}`} variant="outline" size="lg">
                  {site.email}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
