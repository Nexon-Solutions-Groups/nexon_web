import Link from "next/link";
import { ArrowRight, Zap, Globe, Users, Layers } from "lucide-react";
import { products } from "@/lib/site";

export const metadata = {
  title: "NEXONS GROUP - Transform Your Business Operations",
  description:
    "AI-powered operational software for restaurants, farms, and enterprise. KDS, POS, livestock management, and custom systems.",
};

export default function Landing() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-background via-ink-2 to-background overflow-hidden pt-20">
        {/* Animated Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-signal rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-signal-2 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse delay-2000" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-glow rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-2 rounded-full bg-signal/10 border border-signal/30 text-sm font-semibold text-signal">
                    ✨ Transform Your Operations
                  </span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  Operational Software
                  <br />
                  <span className="bg-gradient-to-r from-signal via-signal-2 to-glow bg-clip-text text-transparent">
                    Built for Reality
                  </span>
                </h1>
              </div>

              <p className="text-xl text-mist leading-relaxed max-w-xl">
                From restaurant kitchens to livestock farms. Real-time POS systems, kitchen displays, production tracking, and enterprise custom solutions. All designed around how you actually work.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-signal to-signal-2 hover:shadow-lg hover:shadow-signal/50 text-background font-bold rounded-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-surface hover:bg-surface-2 text-foreground font-bold rounded-lg border border-line transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-8 pt-8 text-sm text-mist border-t border-line/30 pt-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-signal rounded-full" />
                  <span>24/7 Global Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-signal-2 rounded-full" />
                  <span>1000+ Operators</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-glow rounded-full" />
                  <span>4 Regions</span>
                </div>
              </div>
            </div>

            {/* Right: Product Cards Grid */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              {products.map((product, idx) => (
                <div
                  key={product.slug}
                  className={`group p-6 rounded-xl bg-gradient-to-br border border-line hover:border-signal transition-all duration-300 hover:shadow-xl hover:shadow-signal/20 ${
                    idx % 2 === 0
                      ? "from-surface to-ink-2"
                      : "from-ink-2 to-surface"
                  }`}
                >
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-signal uppercase tracking-wide">
                      {product.category}
                    </p>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-signal transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-mist line-clamp-2">
                      {product.blurb}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-6 bg-surface border-y border-line">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Software for Every Operation
            </h2>
            <p className="text-lg text-mist max-w-2xl">
              Specialized systems built on a unified platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={product.href}
                className="group p-8 rounded-xl bg-background border border-line hover:border-signal hover:bg-ink-2 transition-all duration-300 hover:shadow-xl hover:shadow-signal/10"
              >
                <div className="space-y-4">
                  <p className="text-xs font-bold text-signal uppercase tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-signal transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-mist leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-6 text-signal opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Why Operators Choose NEXONS
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Speed",
                desc: "Real-time operations. Zero lag. Your team always sees what's happening.",
              },
              {
                icon: Globe,
                title: "Global Scale",
                desc: "Support in every region, 24/7. From Islamabad to the Americas.",
              },
              {
                icon: Users,
                title: "Operator-First",
                desc: "Built with input from actual users. Software that fits your workflow.",
              },
              {
                icon: Layers,
                title: "Custom or Catalogue",
                desc: "Standardized solutions or completely custom systems. Your choice.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-surface border border-line hover:border-signal hover:bg-ink-2 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-signal to-signal-2 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-mist">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-r from-signal/5 via-signal-2/5 to-glow/5 border-y border-line">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold">
            Transform Your Operations Today
          </h2>
          <p className="text-xl text-mist max-w-2xl mx-auto">
            Join 1000+ operators worldwide who run their business on NEXONS software
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-signal to-signal-2 hover:shadow-xl hover:shadow-signal/50 text-background font-bold rounded-lg transition-all transform hover:scale-105"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center justify-center px-8 py-4 bg-surface hover:bg-surface-2 text-foreground font-bold rounded-lg border border-line transition-all"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
