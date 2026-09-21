'use client';

import Link from 'next/link';
import { ArrowRight, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [orders, setOrders] = useState(42);
  const [prep, setPrep] = useState(3.2);
  const [flocks, setFlocks] = useState(18);

  useEffect(() => {
    const orderInterval = setInterval(() => {
      setOrders((prev) => prev + Math.floor(Math.random() * 3));
    }, 2000);

    const prepInterval = setInterval(() => {
      setPrep((prev) => {
        const change = (Math.random() - 0.5) * 0.5;
        return Math.max(2.1, Math.min(4.5, prev + change));
      });
    }, 1500);

    const flocksInterval = setInterval(() => {
      setFlocks((prev) => prev + (Math.random() > 0.5 ? 1 : 0));
    }, 3000);

    return () => {
      clearInterval(orderInterval);
      clearInterval(prepInterval);
      clearInterval(flocksInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-surface-2">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background orbs */}
        <div className="absolute top-40 -right-32 w-96 h-96 bg-signal/15 rounded-full blur-3xl orb animate-drift" />
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-glow/10 rounded-full blur-3xl orb animate-drift-alt" />
        
        <div className="absolute inset-0 grid-mask opacity-40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl mb-16">
            <h1 className="text-6xl lg:text-7xl font-display font-bold leading-tight text-foreground mb-6">
              See your <span className="bg-gradient-to-r from-signal via-signal-2 to-glow bg-clip-text text-transparent">operation</span> in real time
            </h1>
            <p className="text-xl text-mist mb-12 leading-relaxed max-w-2xl">
              No refresh. No wait. No lag. Every order, every status, every decision flows to your floor in under a second.
            </p>
          </div>

          {/* Live Dashboard Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* Kitchen Orders */}
            <div className="bg-surface/60 backdrop-blur border border-line rounded-2xl p-8 hover:border-signal/50 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-mono text-signal uppercase tracking-wider">Kitchen Live</h3>
                <div className="w-2 h-2 bg-glow rounded-full animate-pulse" />
              </div>
              <p className="text-mist text-sm mb-6">Active orders this rush</p>
              
              <div className="space-y-4">
                <div className="text-5xl font-bold text-foreground font-mono">
                  {orders}
                </div>
                <div className="h-1 bg-gradient-to-r from-signal/50 to-transparent rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-signal to-signal-2" />
                </div>
                <div className="text-xs text-mist">+{Math.floor(Math.random() * 5)} this minute</div>
              </div>
            </div>

            {/* Prep Time */}
            <div className="bg-surface/60 backdrop-blur border border-line rounded-2xl p-8 hover:border-glow/50 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-mono text-glow uppercase tracking-wider">Prep Speed</h3>
                <div className="w-2 h-2 bg-signal rounded-full animate-pulse" />
              </div>
              <p className="text-mist text-sm mb-6">Average from order to plate</p>
              
              <div className="space-y-4">
                <div className="text-5xl font-bold text-foreground font-mono">
                  {prep.toFixed(1)}m
                </div>
                <div className="h-1 bg-gradient-to-r from-glow/50 to-transparent rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-glow to-glow/50" />
                </div>
                <div className="text-xs text-mist">
                  {prep < 3 ? '🔥 Peak' : prep < 3.5 ? '⚡ Running' : '✓ Normal'}
                </div>
              </div>
            </div>

            {/* Farm Operations */}
            <div className="bg-surface/60 backdrop-blur border border-line rounded-2xl p-8 hover:border-signal/50 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-mono text-signal uppercase tracking-wider">Flock Tracking</h3>
                <div className="w-2 h-2 bg-glow rounded-full animate-pulse" />
              </div>
              <p className="text-mist text-sm mb-6">Active flocks monitored</p>
              
              <div className="space-y-4">
                <div className="text-5xl font-bold text-foreground font-mono">
                  {flocks}
                </div>
                <div className="h-1 bg-gradient-to-r from-signal/50 to-transparent rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-signal to-glow" />
                </div>
                <div className="text-xs text-mist">All reporting live</div>
              </div>
            </div>
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
              <span>Live now. Anywhere. Any operation.</span>
            </div>
          </div>
        </div>
      </section>

      {/* One line proof */}
      <section className="relative py-16 px-6 border-t border-line">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-lg text-mist">
            Used on floors in <span className="text-foreground font-semibold">Pakistan, Americas, EMEA, Asia-Pacific</span> — 
            <span className="text-signal font-semibold"> 24/7 support</span> follows the sun.
          </p>
        </div>
      </section>

      {/* Noise */}
      <div className="noise" />
    </div>
  );
}
