import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-black italic tracking-tighter mb-8 sm:mb-12 uppercase text-neon">COMMANDER</h1>
          <p className="text-lg sm:text-xl text-white/60 mb-10 sm:mb-16 italic font-medium">Choisissez votre mode de commande.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="p-8 sm:p-10 glass-card rounded-[2rem] sm:rounded-[3rem] hover:border-[#469956]/50 transition-all group">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 italic uppercase group-hover:text-[#469956] transition-colors">CLICK & COLLECT</h2>
              <p className="text-white/40 mb-8 text-sm sm:text-base">Commandez en ligne et récupérez votre commande en restaurant.</p>
              <Link href="/restaurants" className="w-full bg-[#469956] text-white py-4 rounded-full font-black uppercase tracking-widest block text-center shadow-lg neon-glow">Choisir un restaurant</Link>
            </div>
            <div className="p-8 sm:p-10 glass-card rounded-[2rem] sm:rounded-[3rem] hover:border-[#469956]/50 transition-all group">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 italic uppercase group-hover:text-[#469956] transition-colors">LIVRAISON</h2>
              <p className="text-white/40 mb-8 text-sm sm:text-base">Faites-vous livrer vos burgers préférés directement chez vous.</p>
              <div className="flex flex-col gap-3 sm:gap-4">
                <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer" className="w-full border-2 border-[#469956] text-[#469956] py-4 rounded-full font-black uppercase tracking-widest text-center hover:bg-[#469956] hover:text-white transition-all text-sm sm:text-base">Uber Eats</a>
                <a href="https://www.deliveroo.be" target="_blank" rel="noopener noreferrer" className="w-full border-2 border-[#469956] text-[#469956] py-4 rounded-full font-black uppercase tracking-widest text-center hover:bg-[#469956] hover:text-white transition-all text-sm sm:text-base">Deliveroo</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
