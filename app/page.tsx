import { CTA } from "@/components/home/CTA";
import { Features } from "@/components/home/Features";
import { GlobalSupport } from "@/components/home/GlobalSupport";
import { Hero } from "@/components/home/Hero";
import { ProductTeasers } from "@/components/home/ProductTeasers";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductTeasers />
      <GlobalSupport />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
