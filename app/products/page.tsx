import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ProductVisual } from "@/components/ProductVisual";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/home/CTA";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "NEXONS GROUP products: Nexon KDS, Nexon POS, Flockify, and custom software for operations in Pakistan and worldwide.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="A suite of operational software — and systems we build when the suite is not enough."
        description="Nexon KDS, Nexon POS and Flockify are in the catalogue today. Custom software covers everything else: retail, logistics, field ops, or a workflow that does not have a product name yet."
      >
        <Button href="/contact">
          Talk to sales
          <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 0.05}>
                <article className="flex h-full flex-col overflow-hidden rounded-[32px] border border-line bg-surface">
                  <div className="p-7 sm:p-8">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-glow">{product.category}</p>
                    <h2 className="mt-2 font-display text-3xl font-semibold">{product.name}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-mist">{product.description}</p>
                    <ul className="mt-5 space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex gap-2 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-glow" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Links section */}
                    <div className="mt-6 flex flex-col gap-3">
                      <Link
                        href={product.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-signal"
                      >
                        {product.name} page
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      
                      {/* YouTube link for KDS and Flockify */}
                      {'videoUrl' in product && product.videoUrl && (
                        <a
                          href={product.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-glow hover:text-glow/80 transition-colors"
                        >
                          <Play className="h-4 w-4" />
                          Watch demo
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="px-5 pb-5 sm:px-7 sm:pb-7">
                    <ProductVisual slug={product.slug} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
