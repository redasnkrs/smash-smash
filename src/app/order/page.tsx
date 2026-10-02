import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bike, ShoppingBag } from 'lucide-react';

const deliveryPartners = [
  {
    name: "Uber Eats",
    href: "https://www.ubereats.com",
    Icon: Bike,
  },
  {
    name: "Deliveroo",
    href: "https://www.deliveroo.be",
    Icon: ShoppingBag,
  },
];

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main className="min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 flex items-center">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black italic tracking-tighter mb-6 sm:mb-8 uppercase text-neon">Commander</h1>
          <div className="h-1 w-16 sm:w-24 bg-[#469956] mx-auto mb-6 sm:mb-8 neon-glow"></div>
          <p className="text-lg sm:text-xl text-white/60 italic font-medium max-w-xl mx-auto px-4">
            Faites-vous livrer vos burgers préférés directement chez vous.
          </p>

          <div className="mt-12 sm:mt-16 p-8 sm:p-12 md:p-16 glass-card rounded-[2.5rem] sm:rounded-[4rem]">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 italic uppercase">Livraison</h2>
            <p className="text-white/40 mb-10 sm:mb-14 text-sm sm:text-base lg:text-lg max-w-lg mx-auto">
              Commandez en ligne via nos partenaires de livraison, disponible dans toute la Belgique.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {deliveryPartners.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/partner flex flex-col items-center justify-center gap-4 sm:gap-5 py-10 sm:py-12 px-6 rounded-[2rem] border-2 border-[#469956]/40 hover:border-[#469956] hover:bg-[#469956] transition-all duration-300"
                >
                  <Icon size={48} strokeWidth={1.5} className="text-[#469956] group-hover/partner:text-white transition-colors" />
                  <span className="text-2xl sm:text-3xl font-black uppercase tracking-tight">{name}</span>
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-white/40 group-hover/partner:text-white/80 transition-colors">
                    Commander
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
