import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "NEXONS GROUP - Operational Software",
  description: "Software built for real business operations.",
};

export default function Landing() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="min-h-screen bg-gradient-to-br from-background to-surface flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <p className="text-sm font-semibold text-signal mb-4">
            Trusted by Operators Worldwide
          </p>
          <h1 className="text-6xl font-bold mb-6">
            Operational Software
            <br />
            Built for Reality
          </h1>
          <p className="text-xl text-mist mb-8">
            From restaurants to farms. POS to KDS to livestock management.
            Every system we build works the way you do.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-3 bg-signal hover:bg-signal-2 text-background font-semibold rounded-lg transition-all"
            >
              See Products
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-surface border border-line text-foreground font-semibold rounded-lg hover:bg-surface-2 transition-all"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose NEXONS
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-background rounded-lg border border-line">
              <h3 className="font-bold text-lg mb-2">Real-Time</h3>
              <p className="text-mist">No lag. Live operations.</p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-line">
              <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
              <p className="text-mist">Always there for you.</p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-line">
              <h3 className="font-bold text-lg mb-2">Custom</h3>
              <p className="text-mist">Built your way.</p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-line">
              <h3 className="font-bold text-lg mb-2">Global</h3>
              <p className="text-mist">Worldwide reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-signal/10 to-signal-2/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-lg text-mist mb-8">
            Schedule a demo and see NEXONS in action.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-signal hover:bg-signal-2 text-background font-semibold rounded-lg transition-all"
          >
            Schedule Demo
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
