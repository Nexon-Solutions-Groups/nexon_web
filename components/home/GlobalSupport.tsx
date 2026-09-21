import { Headphones, ShieldCheck } from "lucide-react";
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
        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
            <div className="grid grid-cols-[1fr_1.4fr_auto] gap-4 border-b border-line bg-surface px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-mist">
              <span>Region</span>
              <span>Operations</span>
              <span>Hours</span>
            </div>
            {site.regions.map((region) => (
              <div
                key={region.name}
                className="grid grid-cols-[1fr_1.4fr_auto] gap-4 border-b border-line bg-surface px-5 py-4 last:border-b-0"
              >
                <span className="font-medium">{region.name}</span>
                <span className="text-sm text-mist">{region.coverage}</span>
                <span className="text-sm tabular-nums">24/7</span>
              </div>
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
