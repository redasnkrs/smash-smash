"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Send, Building, Users, TrendingUp } from 'lucide-react';

export default function FranchisePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-8 uppercase text-neon">DEVENIR FRANCHISÉ</h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-16 italic font-medium">
              Rejoignez l'enseigne de Smash Burger la plus dynamique de Belgique et ouvrez votre propre restaurant.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: <TrendingUp className="text-[#469956]" size={40} />, title: "Rentabilité", desc: "Un business model optimisé pour un retour sur investissement rapide." },
              { icon: <Building className="text-[#469956]" size={40} />, title: "Accompagnement", desc: "Nous vous aidons dans la recherche de local et l'aménagement." },
              { icon: <Users className="text-[#469956]" size={40} />, title: "Formation", desc: "Une formation complète sur nos techniques de smash et de gestion." }
            ].map((feature, i) => (
              <div key={i} className="glass-card p-10 rounded-[2.5rem] text-center flex flex-col items-center">
                <div className="mb-6 p-4 bg-[#469956]/10 rounded-2xl">{feature.icon}</div>
                <h3 className="text-2xl font-black italic uppercase mb-4">{feature.title}</h3>
                <p className="text-white/40 font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto glass-card p-8 sm:p-12 rounded-[3rem] border border-[#469956]/20">
            <h2 className="text-3xl font-black italic uppercase mb-8">Contact Franchise</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#469956] mb-2 block ml-4">Nom</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-[#469956] transition-colors" placeholder="Votre nom" />
                </div>
                <div className="text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#469956] mb-2 block ml-4">Prénom</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-[#469956] transition-colors" placeholder="Votre prénom" />
                </div>
              </div>
              <div className="text-left">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#469956] mb-2 block ml-4">Email</label>
                <input type="email" className="w-full bg-black/40 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-[#469956] transition-colors" placeholder="votre@email.com" />
              </div>
              <div className="text-left">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#469956] mb-2 block ml-4">Ville cible</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-[#469956] transition-colors" placeholder="Où souhaitez-vous ouvrir ?" />
              </div>
              <button className="w-full bg-[#469956] text-white py-5 rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-lg neon-glow">
                Envoyer ma candidature <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
