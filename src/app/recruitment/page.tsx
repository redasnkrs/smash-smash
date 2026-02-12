import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-12">RECRUTEMENT</h1>
          <p className="text-xl text-foreground/60">Envie de bosser dans une ambiance de feu ? On recrute des passionnés.</p>
          <div className="mt-20 py-40 border-2 border-dashed border-foreground/10 rounded-3xl flex items-center justify-center">
             <p className="text-foreground/40 font-bold uppercase tracking-widest text-sm">Nos offres d'emploi arrivent bientôt...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
