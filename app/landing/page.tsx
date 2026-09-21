import Link from "next/link";
import { ArrowRight, Code, TrendingUp, Users, Zap } from "lucide-react";
import { products } from "@/lib/site";

export const metadata = {
  title: "NEXONS GROUP - Operational Software for Every Business",
  description:
    "Kitchen management, livestock tracking, point of sale, and custom enterprise systems built around how you actually work.",
};

export default function Landing() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center bg-gradient-to-b from-background via-surface to-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-signal rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-signal-2 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-signal/10 border border-signal/30">
                <p className="text-sm font-semibold text-signal">
                  Trusted by Operators Worldwide
                </p>
              </div>

              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Operational Software
                <br />
                <span className="bg-gradient-to-r from-signal via-signal-2 to-glow bg-clip-text text-transparent">
                  Built for Reality
                </span>
              </h1>

              <p className="text-lg text-mist mb-8 leading-relaxed">
                From restaurants to farms. POS to KDS to livestock management. Every system we build works the way you do — not the other way around.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 py-3 bg-signal hover:bg-signal-2 text-background font-semibold rounded-lg transition-all hover:shadow-lg hover:scale-105"
                >
                  See Products
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-surface-2 hover:bg-surface text-foreground font-semibold rounded-lg border border-line transition-all"
                >
                  Talk to Us
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="font-bold text-signal text-xl">24/7</p>
                  <p className="text-mist">Global Support</p>
                </div>
                <div>
                  <p className="font-bold text-signal-2 text-xl">4</p>
                  <p className="text-mist">World Regions</p>
                </div>
                <div>
                  <p className="font-bold text-glow text-xl">1000+</p>
                  <p className="text-mist">Active Users</p>
                </div>
              </div>
            </div>

            {/* Right: Visual Grid of Products */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              {products.map((product) => (
                <div
                  key={product.slug}
                  className="relative p-6 rounded-lg bg-gradient-to-br from-surface to-background border border-line hover:border-signal transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-signal to-signal-2 opacity-0 group-hover:opacity-10 transition-opacity" />
                  <div className="relative z-10">
                    <p className="text-xs font-semibold text-signal uppercase tracking-wide mb-2">
                      {product.category}
                    </p>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-mist">{product.blurb}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Software for Every Operation
            </h2>
            <p className="text-lg text-mist">
              Specialized systems. One unified approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={product.href}
                className="group p-8 rounded-lg bg-surface hover:bg-surface-2 border border-line hover:border-signal transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-signal uppercase">
                      {product.category}
                    </p>
                    <h3 className="font-display text-2xl font-bold mt-2">
                      {product.name}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-mist group-hover:text-signal transition-colors" />
                </div>
                <p className="text-sm text-mist">{product.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why NEXONS */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">
            Why Operators Choose NEXONS
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-lg bg-background border border-line">
              <div className="w-12 h-12 bg-gradient-to-br from-signal to-signal-2 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-bold text-xl mb-3">Real-Time Operations</h3>
              <p className="text-mist">
                No lag. No delays. Your team sees everything as it happens — orders, inventory, production metrics.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-lg bg-background border border-line">
              <div className="w-12 h-12 bg-gradient-to-br from-signal-2 to-glow rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-bold text-xl mb-3">24/7 Support</h3>
              <p className="text-mist">
                Your team is never alone. Support in every region, around the clock — from Islamabad to the Americas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-lg bg-background border border-line">
              <div className="w-12 h-12 bg-gradient-to-br from-signal to-glow rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-bold text-xl mb-3">Custom or Catalogue</h3>
              <p className="text-mist">
                Standardized products for most operations. Completely custom systems for unique workflows.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-lg bg-background border border-line">
              <div className="w-12 h-12 bg-gradient-to-br from-signal-2 to-signal rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-bold text-xl mb-3">Built for Scale</h3>
              <p className="text-mist">
                From a single location to hundreds. Regional hosting and infrastructure designed to grow with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-signal/10 via-signal-2/10 to-glow/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Run Better?
          </h2>
          <p className="text-lg text-mist mb-8">
            Schedule a demo. See how operators worldwide transform their business with NEXONS.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-signal hover:bg-signal-2 text-background font-semibold rounded-lg transition-all hover:shadow-lg hover:scale-105"
          >
            Schedule Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
