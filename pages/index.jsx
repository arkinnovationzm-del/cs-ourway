import React, { useRef } from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import GlassCard from '../components/GlassCard';
import useScrollReveal from '../utils/useScrollReveal';
import Navbar from '../components/Navbar';

export default function Home() {
  const featureRef = useRef(null);
  useScrollReveal(featureRef);

  return (
    <>
      <Head>
        <title>BrandGlow</title>
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-900/90 pt-20">
        <Hero />

        <section ref={featureRef} className="max-w-7xl mx-auto px-4 py-14 grid gap-6 md:grid-cols-3">
          <GlassCard title="Realtime Analytics">
            Monitor sales and performance live.
          </GlassCard>

          <GlassCard title="Offline Capability">
            Keep selling without internet.
          </GlassCard>

          <GlassCard title="Secure by Design">
            Built with strong security systems.
          </GlassCard>
        </section>
      </main>
    </>
  );
}