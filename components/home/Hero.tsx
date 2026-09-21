import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ProductShot } from "@/components/ProductShot";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line pb-16 pt-10 sm:pb-24 sm:pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="orb animate-drift left-[-10%] top-[-10%] h-[420px] w-[420px] bg-signal/20" />
        <div className="orb animate-drift-alt right-[-8%] top-[10%] h-[380px] w-[380px] bg-glow/15" />
        <div className="grid-mask absolute inset-0" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-mist">
              <span className="h-1.5 w-1.5 rounded-full bg-glow" />
              Global operations · 24/7 support
            </p>
            <h1 className="font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-[3.75rem]">
              Next-gen digital solutions for operators, anywhere they run.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              Catalogue products for hospitality and agriculture, plus custom software when your
              operation does not fit a box — in Pakistan and worldwide. Live systems on the floor.
              Support that follows the sun.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" size="lg">
                Book a live demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/products" variant="outline" size="lg">
                View products
              </Button>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-line pt-8">
              {[
                ["99.9%", "Uptime"],
                ["24/7", "Global support"],
                ["4", "Regions"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl font-semibold sm:text-3xl">{stat}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.12em] text-mist">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[36px] bg-signal/10 blur-2xl" />
            <ProductShot
              className="relative"
              src="/products/nexon-kds.jpg"
              alt="Nexon KDS kitchen display on a restaurant screen"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
