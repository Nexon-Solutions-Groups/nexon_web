'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Globe, Users, Check } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-surface-2">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10">
        {/* Background orbs */}
        <div className="absolute top-20 -right-40 w-80 h-80 bg-signal/20 rounded-full blur-3xl orb animate-drift" />
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-glow/15 rounded-full blur-3xl orb animate-drift-alt" />
        
        <div className="absolute inset-0 grid-mask" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-mono text-signal uppercase tracking-wider">
                  Real-time operations
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
                Software that <span className="bg-gradient-to-r from-signal to-glow bg-clip-text text-transparent">moves with</span> your floor
              </h1>
              <p className="text-lg text-mist leading-relaxed max-w-md">
                Tickets move in under a second. No refresh. No delay. Built where the work actually happens — hospitality, agriculture, retail. Pakistan to worldwide. 24/7.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-signal to-signal-2 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-signal/25 transition-all"
              >
                Book a live demo
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-line text-foreground rounded-lg font-semibold hover:bg-fill transition-all"
              >
                Explore products
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 pt-4 text-sm text-mist">
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-glow" />
                <span>99.9% uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-signal" />
                <span>24/7 global</span>
              </div>
            </div>
          </div>

          {/* Right: Illustration concept */}
          <div className="relative h-96 lg:h-[500px] hidden lg:flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Isometric-style dashboard visualization */}
              <div className="absolute inset-0 flex items-center justify-center perspective">
                {/* Main card - tilted */}
                <div className="relative w-72 h-56 bg-gradient-to-br from-surface to-surface-2 rounded-2xl border border-line shadow-2xl"
                  style={{
                    transform: 'rotateX(15deg) rotateZ(-20deg)',
                  }}>
                  <div className="absolute inset-6 space-y-4">
                    {/* Dashboard elements */}
                    <div className="h-8 bg-gradient-to-r from-signal/30 to-glow/20 rounded w-full" />
                    <div className="space-y-2">
                      <div className="h-3 bg-signal/40 rounded w-3/4" />
                      <div className="h-3 bg-signal/30 rounded w-1/2" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <div className="h-12 bg-signal/20 rounded border border-signal/30" />
                      <div className="h-12 bg-glow/20 rounded border border-glow/30" />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-12 right-0 w-32 h-24 bg-gradient-to-br from-signal to-signal-2 rounded-xl opacity-80 shadow-lg"
                  style={{ transform: 'rotateX(10deg) rotateZ(25deg)' }}>
                  <div className="p-4">
                    <div className="text-white font-mono text-xs">LIVE</div>
                    <div className="text-white text-lg font-bold mt-2">0.8s</div>
                  </div>
                </div>

                <div className="absolute bottom-16 left-12 w-28 h-20 bg-gradient-to-br from-glow to-glow/70 rounded-lg opacity-70 shadow-lg"
                  style={{ transform: 'rotateX(-15deg) rotateZ(-15deg)' }}>
                  <div className="p-3 text-white font-mono text-xs">
                    <div>OPS</div>
                    <div className="text-sm font-bold mt-1">LIVE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NEXONS Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Built for operators, not boardrooms
            </h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">
              Every decision starts with how the work actually runs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Real-time by default',
                desc: 'Tickets, sheds, and statuses move in under a second. No refresh. No report lag.',
              },
              {
                icon: Users,
                title: 'Operator-first design',
                desc: 'Readable at speed. Usable with wet hands and tired eyes. Built where the work happens.',
              },
              {
                icon: Globe,
                title: '24/7 global support',
                desc: 'Teams in Pakistan, Americas, EMEA, and Asia-Pacific. Same product. Same response.',
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-surface rounded-xl border border-line hover:border-signal/30 transition-all group">
                <item.icon className="text-signal mb-4 group-hover:text-glow transition-colors" size={32} />
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-mist">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 px-6 bg-surface/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-foreground mb-16 text-center">
            Used on floors, not just in decks
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'The printers went quiet on night one. Expo can see the whole line without shouting. That is the whole job.',
                name: 'Hassan Malik',
                role: 'Group ops, hospitality — Islamabad',
              },
              {
                quote: 'Flockify replaced four spreadsheets and a notebook in the shed. I know the cycle before I pull into the yard.',
                name: 'James Whitaker',
                role: 'Farm manager — Australia',
              },
              {
                quote: 'We rolled the same KDS playbook across sites in three countries. Support answered in our afternoon, their morning.',
                name: 'Sofia Rahman',
                role: 'Operations director — UAE',
              },
            ].map((testimonial, i) => (
              <div key={i} className="p-8 bg-surface rounded-xl border border-line">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-signal">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-mist">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Support Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                24/7 from Islamabad to the world
              </h2>
              <p className="text-lg text-mist mb-8 leading-relaxed">
                Headquartered in Pakistan. Supporting operators across Pakistan, Americas, EMEA, and Asia-Pacific. Same product. Same 24/7 response. No timezone gaps.
              </p>
              <div className="space-y-4">
                {[
                  'Regional data residency',
                  'Live chat, email, and phone',
                  'Operator-trained support teams',
                  '99.9% uptime SLA',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={20} className="text-glow flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map concept */}
            <div className="relative h-80 bg-gradient-to-br from-surface to-surface-2 rounded-2xl border border-line overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <Globe className="text-signal/30 mx-auto mb-4" size={64} />
                <p className="text-mist">Pakistan · Americas · EMEA · Asia-Pacific</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Quick Look */}
      <section className="relative py-24 px-6 bg-surface/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Catalogue or custom
            </h2>
            <p className="text-lg text-mist">
              Four products ready to ship. Or tell us how the work runs — we'll build it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Nexon KDS', desc: 'Kitchen management for hospitality' },
              { name: 'Nexon POS', desc: 'Till and ordering system for venues' },
              { name: 'Flockify', desc: 'Flock tracking for agriculture' },
              { name: 'Custom software', desc: 'Operational software built around your workflow' },
            ].map((product, i) => (
              <Link
                key={i}
                href={`/products`}
                className="p-8 bg-surface rounded-xl border border-line hover:border-signal/50 transition-all group"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-signal transition-colors">
                  {product.name}
                </h3>
                <p className="text-mist mb-4">{product.desc}</p>
                <div className="flex items-center text-signal text-sm font-semibold gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-display font-bold text-foreground mb-6">
            Ready when the operation is
          </h2>
          <p className="text-lg text-mist mb-12">
            Catalogue product or a custom build — tell us how the work actually runs. We'll map the rollout and show you the live system, not a deck.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-signal to-signal-2 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-signal/25 transition-all"
            >
              Get a demo
              <ArrowRight size={18} />
            </Link>
            <a
              href="mailto:support.nexons@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-line text-foreground rounded-lg font-semibold hover:bg-fill transition-all"
            >
              support.nexons@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Noise overlay */}
      <div className="noise" />
    </div>
  );
}
