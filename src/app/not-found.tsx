"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-6 py-32 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#469956]/10 blur-[120px] pointer-events-none"></div>

        <div className="max-w-2xl w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#469956] font-black text-sm uppercase tracking-[0.5em] mb-4 block text-neon">Erreur 404</span>
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter mb-8 uppercase leading-none">
              SMASH <br />
              <span className="text-white/20 uppercase">MISSING</span>
            </h1>
            
            <div className="relative w-48 h-48 mx-auto mb-12 flex items-center justify-center">
                <img 
                    src="/Dossier PNG SMASH SMASH/Burgers PNG/smash burger.png" 
                    className="w-full h-full object-contain grayscale opacity-20 rotate-12 scale-110" 
                    alt="Burger manquant" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl">🤔</span>
                </div>
            </div>

            <p className="text-xl text-white/50 mb-12 italic font-medium">
                On dirait que ce burger n'est pas sur notre carte. <br className="hidden sm:block" />
                Pas de panique, la vraie carte est juste ici.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/"
                className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full font-black text-lg uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                <Home size={20} /> Accueil
              </Link>
              <Link
                href="/menu"
                className="w-full sm:w-auto bg-[#469956] text-white px-10 py-4 rounded-full font-black text-lg uppercase hover:scale-105 transition-all shadow-lg neon-glow flex items-center justify-center gap-3"
              >
                Voir la carte <ArrowLeft size={20} className="rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
