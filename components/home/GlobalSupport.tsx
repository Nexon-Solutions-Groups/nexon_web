import { Globe2, Headphones, ShieldCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function GlobalSupport() {
  return (
    <section className="border-y border-line bg-ink-2 py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-signal">Support</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Pakistan and the world. 24/7 from Islamabad.
          </h2>
          <p className="mt-4 max-w-2xl text-mist">
            Headquartered at Software Technology Park, I-9/3, Islamabad. We serve operators in
            Pakistan and worldwide — same product, same 24/7 response.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.regions.map((region, index) => (
            <Reveal key={region.name} delay={index * 0.06}>
              <div className="h-full rounded-3xl border border-line bg-surface p-6">
                <Globe2 className="h-5 w-5 text-signal" />
                <h3 className="mt-4 font-display text-xl font-semibold">{region.name}</h3>
                <p className="mt-1 text-sm text-mist">{region.coverage}</p>
                <p className="mt-3 text-sm font-medium">Covered 24/7</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-6 text-sm text-mist">
          <span className="inline-flex items-center gap-2">
            <Headphones className="h-4 w-4 text-signal" /> Live chat and email
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-signal" /> Regional data residency on request
          </span>
        </div>
        <div className="mt-8">
          <Button href="/support" variant="outline">
            Support overview
          </Button>
        </div>
      </Container>
    </section>
  );
}
