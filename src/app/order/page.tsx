import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-12">COMMANDER</h1>
          <p className="text-xl text-foreground/60 mb-16">Choisissez votre mode de commande.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-10 border border-foreground/10 rounded-3xl hover:border-[#469956] transition-colors bg-foreground/5">
              <h2 className="text-3xl font-black mb-4 italic">CLICK & COLLECT</h2>
              <p className="text-foreground/60 mb-8">Commandez en ligne et récupérez votre commande en restaurant.</p>
              <button className="w-full bg-[#469956] text-white py-4 rounded-full font-black uppercase tracking-widest">Choisir un restaurant</button>
            </div>
            <div className="p-10 border border-foreground/10 rounded-3xl hover:border-[#469956] transition-colors bg-foreground/5">
              <h2 className="text-3xl font-black mb-4 italic">LIVRAISON</h2>
              <p className="text-foreground/60 mb-8">Faites-vous livrer vos burgers préférés directement chez vous.</p>
              <button className="w-full border-2 border-[#469956] text-[#469956] py-4 rounded-full font-black uppercase tracking-widest">Uber Eats / Deliveroo</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
