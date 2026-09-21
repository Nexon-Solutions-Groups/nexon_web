'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HardwareShowcase } from '@/components/HardwareShowcase';
import { HowItWorks } from '@/components/HowItWorks';
import { Testimonials } from '@/components/Testimonials';
import { ArrowRight, Activity, Zap, Users, Globe } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-surface-2">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10">
        {/* Background orbs */}
        <div className="absolute top-40 -right-32 w-96 h-96 bg-signal/15 rounded-full blur-3xl orb animate-drift" />
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-glow/10 rounded-full blur-3xl orb animate-drift-alt" />
        
        <div className="absolute inset-0 grid-mask opacity-40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="space-y-8">
              {/* NE Logo - Larger */}
              <div className="w-32 h-32">
                <Image
                  src="/logo-ne.png"
                  alt="NEXONS GROUP"
                  width={128}
                  height={128}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-display font-bold leading-tight text-foreground">
                  See your <span className="bg-gradient-to-r from-signal via-signal-2 to-glow bg-clip-text text-transparent">operation</span> in real time
                </h1>
                <p className="text-xl text-mist leading-relaxed max-w-2xl">
                  No refresh. No wait. No lag. Every order, every status, every decision on your floor in under a second.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-signal to-signal-2 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-signal/30 transition-all"
                >
                  See it live
                  <ArrowRight size={20} />
                </Link>
                <div className="flex items-center gap-2 text-sm text-mist">
                  <Activity size={16} className="text-glow" />
                  <span>Kitchen, farm, till. Anywhere.</span>
                </div>
              </div>
            </div>

            <HardwareShowcase />
          </div>

          {/* Proof line */}
          <div className="mt-20 pt-12 border-t border-line">
            <p className="text-center text-lg text-mist">
              Used on floors in <span className="text-foreground font-semibold">Pakistan, Americas, EMEA, Asia-Pacific</span> — 
              <span className="text-signal font-semibold"> 24/7 support</span> from Islamabad.
            </p>
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

      <HowItWorks />

      <Testimonials />
      <div className="noise" />
    </div>
  );
}
