import Link from "next/link";
import { ArrowRight, Zap, Globe, Shield, Cpu } from "lucide-react";

export const metadata = {
  title: "NEXONS GROUP - Next-Gen Digital Solutions",
  description:
    "Operational software that works the way you do. From restaurants to farms to custom systems — we build software for real business.",
};

export default function Landing() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-background">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-signal rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-signal-2 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-glow rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-surface border border-line">
            <p className="text-sm font-medium text-mist">
              Operational Software for Modern Business
            </p>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Software That Actually
            <span className="block bg-gradient-to-r from-signal to-signal-2 bg-clip-text text-transparent">
              Works Your Way
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-mist mb-8 max-w-2xl mx-auto leading-relaxed">
            From kitchen displays to livestock tracking to custom enterprise systems — we build operational software around how you actually work.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-signal hover:bg-signal-2 text-background font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-surface hover:bg-surface-2 text-foreground font-semibold rounded-lg border border-line transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <p className="text-3xl font-bold text-signal mb-1">24/7</p>
              <p className="text-sm text-mist">Global Support</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-signal-2 mb-1">4</p>
              <p className="text-sm text-mist">World Regions</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-glow mb-1">1000+</p>
              <p className="text-sm text-mist">Operators Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Built for Real Operations
            </h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">
              Software that understands your workflow, not the other way around
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-lg bg-background border border-line hover:border-signal transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-signal to-signal-2 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">
                Lightning Fast
              </h3>
              <p className="text-mist">
                Real-time operations that keep pace with your team. No lag, no waiting.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-lg bg-background border border-line hover:border-signal-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-signal-2 to-glow rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">
                Global Reach
              </h3>
              <p className="text-mist">
                Support in every region, around the clock. From Islamabad to the Americas.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-lg bg-background border border-line hover:border-signal transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-signal to-glow rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">
                Security First
              </h3>
              <p className="text-mist">
                Enterprise-grade security and compliance built in from day one.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-lg bg-background border border-line hover:border-signal-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-signal-2 to-signal rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">
                Custom Built
              </h3>
              <p className="text-mist">
                From catalogue or completely custom — we design systems around your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-background to-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-mist mb-8">
            Join operators worldwide who run on NEXONS software.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-signal hover:bg-signal-2 text-background font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
