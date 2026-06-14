"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    id: 1,
    name: "Smash Burger",
    price: "12.50€",
    description:
      "Double patty, cheddar fondu, oignons caramélisés, sauce secrète.",
    image: "/Dossier PNG SMASH SMASH/Burgers PNG/smash burger.png",
  },
  {
    id: 2,
    name: "Smoky Smash",
    price: "13.90€",
    description:
      "Double patty, bacon croustillant, sauce fumée, oignons frits.",
    image: "/Dossier PNG SMASH SMASH/Burgers PNG/smoky smash.png",
  },
  {
    id: 3,
    name: "Big Smash",
    price: "15.90€",
    description:
      "Double patty, triple cheddar, sauce biggy, salade iceberg.",
    image: "/Dossier PNG SMASH SMASH/Burgers PNG/big smash.png",
  },
  {
    id: 4,
    name: "Frites Maison",
    price: "4.50€",
    description: "Pommes de terre fraîches, double cuisson, croustillantes.",
    image: "/Dossier PNG SMASH SMASH/Frites PNG/frites.png",
  },
];

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#469956] selection:text-white"
    >
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />
          <Image
            src="/Dossier PNG SMASH SMASH/Menus PNG/Menu big smash.png"
            fill
            className="object-contain scale-110 opacity-40 translate-x-1/4 sm:translate-x-1/3"
            alt="Hero Background"
            priority
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl xs:text-6xl sm:text-8xl lg:text-9xl font-black italic tracking-tighter mb-6 leading-[0.9]">
                SMASH <br /> 
                <span className="text-[#469956] text-neon uppercase">Everyday</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10 max-w-lg font-medium leading-relaxed italic border-l-4 border-[#469956] pl-6">
                Écrasez les codes. Smashez la viande. Savourez l'instant. Le smash burger dans sa forme la plus pure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  href="/menu"
                  className="bg-[#469956] text-white px-8 sm:px-10 py-4 rounded-full font-black text-base sm:text-lg uppercase hover:scale-105 transition-all shadow-lg neon-glow flex items-center justify-center gap-3"
                >
                  La Carte <ArrowRight size={20} />
                </Link>
                <Link
                  href="/restaurants"
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-8 sm:px-10 py-4 rounded-full font-black text-base sm:text-lg uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  Nous trouver <MapPin size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="absolute bottom-0 w-full bg-[#469956] py-4 sm:py-6 z-20 overflow-hidden border-t border-white/10 neon-glow">
          <div className="flex whitespace-nowrap animate-marquee">
            {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center mx-2 sm:mx-4">
                              <span className="text-white font-black italic text-xl sm:text-2xl uppercase tracking-tighter mx-2 sm:mx-4">Frais & Maison</span>
                              <span className="text-white/30 text-2xl sm:text-3xl mx-2 sm:mx-4">•</span>
                              <span className="text-white font-black italic text-xl sm:text-2xl uppercase tracking-tighter mx-2 sm:mx-4">Smashé Minute</span>
                              <span className="text-white/30 text-2xl sm:text-3xl mx-2 sm:mx-4">•</span>
                              <span className="text-white font-black italic text-xl sm:text-2xl uppercase tracking-tighter mx-2 sm:mx-4">Pain Brioché</span>
                              <span className="text-white/30 text-2xl sm:text-3xl mx-2 sm:mx-4">•</span>
                              <span className="text-white font-black italic text-xl sm:text-2xl uppercase tracking-tighter mx-2 sm:mx-4">Viande 100% Belge</span>
                              <span className="text-white/30 text-2xl sm:text-3xl mx-2 sm:mx-4">•</span>
                            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Experience Section */}
      <section className="py-20 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 relative z-10 shadow-2xl bg-black/40 p-4 sm:p-8 flex items-center justify-center">
                <Image 
                  src="/Dossier PNG SMASH SMASH/Menus PNG/Menu smash burger.png" 
                  width={600}
                  height={600}
                  className="w-full h-full object-contain" 
                  alt="Smash Burger Menu" 
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-[#469956] font-black text-xs sm:text-sm uppercase tracking-[0.4em] mb-4 text-neon">L'art du minimalisme</h2>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter mb-6 sm:mb-8 leading-tight">
                BRUT, FRAIS, <br /> ESSENTIEL.
              </h3>
              <p className="text-white/60 text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed italic">
                Oubliez le superflu. Ici, on mise sur le goût pur : des produits d'exception et le meilleur smash burger de la ville qui sort de notre cuisine. Simple, mais parfait.
              </p>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 sm:gap-12">
                <div className="glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-l-4 border-[#469956]">
                  <span className="block text-3xl sm:text-4xl font-black text-[#469956] mb-2 text-neon">100%</span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/40">Bœuf Belge</span>
                </div>
                <div className="glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-l-4 border-[#469956]">
                  <span className="block text-3xl sm:text-4xl font-black text-[#469956] mb-2 text-neon">FRAIS</span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/40">Chaque jour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlight */}
      <section className="py-20 sm:py-32 px-6 bg-dark-section relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 sm:mb-20 gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-4 text-neon leading-[0.9]">Le Best-of</h2>
              <p className="text-lg sm:text-xl text-white/60 font-medium italic">Smasché avec passion, servi avec style.</p>
            </div>
            <Link href="/menu" className="group flex items-center gap-4 text-white font-black uppercase tracking-widest hover:text-[#469956] transition-colors">
              Voir toute la carte <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#469956] transition-all"><ArrowRight size={20} /></div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {menuItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                className="glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 transition-all hover:border-[#469956]/40 flex flex-col items-center text-center"
              >
                <div className="h-40 sm:h-48 w-full mb-6 flex items-center justify-center relative">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    width={200}
                    height={200}
                    className="max-w-full max-h-full object-contain drop-shadow-2xl" 
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-black italic uppercase mb-2">{item.name}</h3>
                <p className="text-white/40 text-xs sm:text-sm mb-6 font-medium italic h-10 line-clamp-2">{item.description}</p>
                <span className="text-xl sm:text-2xl font-black text-[#469956] text-neon">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#469956] font-black text-sm uppercase tracking-[0.4em] mb-4 text-neon">Ils ont testé</h2>
            <h3 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">Paroles de <br /> <span className="text-white/20">Smasheurs</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Marc D.", date: "Il y a 2 jours", text: "Le meilleur smash de Bruxelles, sans aucun doute. La croûte est incroyable et le pain ultra moelleux.", rating: 5 },
              { name: "Sarah L.", date: "Il y a 1 semaine", text: "Ambiance minimaliste super propre. Les frites au cheddar sont une tuerie. Je reviendrai !", rating: 5 },
              { name: "Thomas V.", date: "Il y a 3 jours", text: "Enfin un vrai smash burger avec des produits de qualité. Le service est rapide et l'équipe au top.", rating: 5 }
            ].map((review, i) => (
              <div key={i} className="glass-card p-10 rounded-[3rem] relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-[#469956] text-xl text-neon">★</span>
                  ))}
                </div>
                <p className="text-white/70 italic mb-8 font-medium leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#469956]/20 flex items-center justify-center font-black text-[#469956]">{review.name[0]}</div>
                  <div>
                    <p className="font-black uppercase text-sm tracking-widest">{review.name}</p>
                    <p className="text-[10px] text-white/20 font-bold uppercase">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 sm:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-12 md:p-20 overflow-hidden relative flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md text-center md:text-left z-10 w-full">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter mb-6 sm:mb-8 uppercase leading-none text-neon">
                SMASH <br /> 
                <span className="text-white">BRUXELLES</span>
              </h2>
              <p className="text-white/60 text-base sm:text-lg mb-8 sm:mb-10 italic font-medium">
                Retrouvez-nous à deux pas de la Grand-Place pour une expérience smash authentique.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <MapPin className="text-[#469956]" size={20} />
                  <span className="font-bold uppercase tracking-widest text-xs sm:text-sm">Rue du Marché aux Herbes 100</span>
                </div>
                <Link href="/restaurants" className="inline-block mt-4 sm:mt-6 text-[#469956] font-black uppercase tracking-widest text-xs sm:text-sm hover:underline">
                  Voir tous nos restaurants
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 aspect-video md:aspect-square bg-black/40 rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 z-10 flex items-center justify-center p-4 sm:p-8 relative">
               <Image 
                src="/Dossier PNG SMASH SMASH/Menus PNG/Menu truffe.png" 
                width={500}
                height={500}
                className="w-full h-full object-contain drop-shadow-2xl" 
                alt="Smash Truffe" 
               />
            </div>
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#469956]/10 blur-[80px] sm:blur-[120px]"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
