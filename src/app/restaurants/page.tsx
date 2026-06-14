"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function RestaurantsPage() {
  const restaurantInfo = {
    name: "SMASH & SMASH - Grand-Place",
    address: "Rue du Marché aux Herbes 100, 1000 Bruxelles, Belgique",
    phone: "+32 2 123 45 67",
    hours: "Lun - Dim : 11h30 - 23h00",
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 sm:mb-20 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black italic tracking-tighter mb-4 sm:mb-6 uppercase leading-none text-neon">Nos Restaurants</h1>
            <div className="h-1 sm:h-2 w-20 sm:w-32 bg-[#469956] mb-6 sm:mb-8 mx-auto lg:mx-0 neon-glow"></div>
            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto lg:mx-0 font-medium italic">
              L'expérience Smash & Smash s'étend sur toute la Belgique.
            </p>
          </header>

          <div className="flex flex-col lg:flex-row gap-10 sm:gap-20 items-center lg:items-stretch">
            {/* Atmosphere Visual */}
            <div className="w-full lg:w-[60%] relative">
              <div className="relative w-full aspect-square sm:aspect-video lg:aspect-auto lg:h-full rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden glass-card border border-white/10 p-6 sm:p-12 flex items-center justify-center">
                <img 
                  src="/Dossier PNG SMASH SMASH/Menus PNG/Menu hot chicken.png" 
                  className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(70,153,86,0.3)] scale-110" 
                  alt="Atmosphere Product" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#469956] mb-1 sm:mb-2">Expansion 2026</p>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#469956] neon-glow"></div>
                        <p className="font-black italic text-xl sm:text-2xl tracking-tighter uppercase">BRUXELLES - OUVERT</p>
                    </div>
                </div>
              </div>
            </div>

            {/* Restaurant Detail - Side Card */}
            <div className="w-full lg:w-[40%]">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-dark-section text-white rounded-[2rem] sm:rounded-[3.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between border border-white/5"
              >
                <div className="relative z-10">
                  <div className="mb-8 sm:mb-12">
                    <div className="inline-flex items-center gap-2 bg-[#469956]/20 border border-[#469956]/30 px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 neon-glow">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#469956] animate-pulse"></span>
                      <span className="text-[#469956] text-[10px] font-black uppercase tracking-[0.2em]">Restaurant Actif</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic tracking-tighter leading-none mb-3 sm:mb-4 uppercase">
                        SMASH & SMASH <br /> 
                        <span className="text-[#469956] text-neon">Grand-Place</span>
                    </h2>
                    <p className="text-white/40 text-xs sm:text-sm font-medium uppercase tracking-widest">Bruxelles Centre - Belgique</p>
                  </div>

                  <div className="space-y-6 sm:space-y-10">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center shrink-0">
                        <MapPin className="text-[#469956]" size={20} />
                      </div>
                      <div className="pt-1">
                        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em] mb-1 sm:mb-2">Localisation</p>
                        <p className="text-sm sm:text-base font-medium leading-relaxed max-w-[200px]">{restaurantInfo.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center shrink-0">
                        <Clock className="text-[#469956]" size={20} />
                      </div>
                      <div className="pt-1">
                        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em] mb-1 sm:mb-2">Ouverture</p>
                        <p className="text-sm sm:text-base font-medium leading-relaxed">{restaurantInfo.hours}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center shrink-0">
                        <Phone className="text-[#469956]" size={20} />
                      </div>
                      <div className="pt-1">
                        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em] mb-1 sm:mb-2">Contact Direct</p>
                        <p className="text-lg sm:text-xl font-black italic tracking-tight">{restaurantInfo.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 sm:mt-12">
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(restaurantInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#469956] text-white py-5 sm:py-6 rounded-[1.5rem] sm:rounded-3xl font-black uppercase text-xs sm:text-sm tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#3d854a] transition-all shadow-xl shadow-[#469956]/20 active:scale-95 group neon-glow"
                  >
                    <Navigation size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    Obtenir l'itinéraire
                  </a>
                </div>

                {/* Decorative glow */}
                <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-[#469956]/10 rounded-full blur-[80px] sm:blur-[100px]"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
