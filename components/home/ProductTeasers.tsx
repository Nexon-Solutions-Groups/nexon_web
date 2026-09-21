import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/site";

export function ProductTeasers() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-signal">Products</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Catalogue products and custom builds.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-mist">
                Hospitality, agriculture, and software we design around operations that do not fit a
                standard SKU.
              </p>
            </div>
            <Button href="/products" variant="outline">
              All products
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.06}>
              <Link
                href={product.href}
                className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition hover:border-signal/40"
              >
                <span className="text-[11px] uppercase tracking-[0.18em] text-glow">
                  {product.category}
                </span>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold">{product.name}</h3>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line transition group-hover:border-signal group-hover:bg-signal group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{product.description}</p>
                <span className="mt-6 text-sm font-medium text-signal">View {product.name}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
