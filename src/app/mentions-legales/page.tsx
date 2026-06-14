"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-12 uppercase text-neon text-center">MENTIONS LÉGALES</h1>
          
          <div className="glass-card p-8 sm:p-12 rounded-[3rem] space-y-8 text-white/70 leading-relaxed">
            <section>
              <h2 className="text-[#469956] font-black uppercase tracking-widest mb-4">1. Éditeur du site</h2>
              <p>Le site smash-smash.be est édité par la société SMASH & SMASH SRL, dont le siège social est situé à Rue du Marché aux Herbes 100, 1000 Bruxelles, Belgique.</p>
              <p>TVA : BE 0123.456.789</p>
              <p>Email : contact@smash-smash.be</p>
            </section>

            <section>
              <h2 className="text-[#469956] font-black uppercase tracking-widest mb-4">2. Hébergement</h2>
              <p>Le site est hébergé par Vercel Inc., situé au 340 S Lemon Ave #1135, Walnut, CA 91789, USA.</p>
            </section>

            <section>
              <h2 className="text-[#469956] font-black uppercase tracking-widest mb-4">3. Propriété intellectuelle</h2>
              <p>L'ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive de SMASH & SMASH. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
            </section>

            <section>
              <h2 className="text-[#469956] font-black uppercase tracking-widest mb-4">4. Cookies</h2>
              <p>Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Nous n'utilisons pas de cookies de traçage publicitaire sans votre consentement.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
