"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const burgers = [
  {
    name: "Le Smash",
    description: "Bun Martin’s, steak irlandais, fromage américain, oignons, salade, tomate, pickles, sauce smash.",
    price: "12.50€",
    category: "Bœuf",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Smoky Smash",
    description: "Bun Martin’s, steak irlandais, bacon de bœuf, fromage américain, salade, tomate, pickles, sauce fumée.",
    price: "13.90€",
    category: "Bœuf",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Cheeseburger",
    description: "Bun Martin’s, steak irlandais, fromage américain, cornichons, sauce ketchup moutarde.",
    price: "11.00€",
    category: "Bœuf",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Avocado Cheese",
    description: "Bun Martin’s, steak irlandais, fromage américain, avocat, pickles, salade, tomate, sauce smash.",
    price: "14.50€",
    category: "Bœuf",
    image: "https://images.unsplash.com/photo-1607013271323-83b4383402b2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Big Smash",
    description: "Bun Martin’s, cheddar, Double steak irlandais, oignons, pickles, salade iceberg, sauce biggy.",
    price: "15.90€",
    category: "Bœuf",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Fungi Smash",
    description: "Bun Martin’s, steak irlandais, fromage américain, champignons frais grillés, pickles, sauce fumée.",
    price: "13.50€",
    category: "Bœuf",
    image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Chili Smash",
    description: "Bun Martin’s, steak irlandais, bacon de bœuf, jalapeños, fromage américain, oignons, salade, tomates, pickles, sauce épicée.",
    price: "14.00€",
    category: "Bœuf",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Chicken Smash",
    description: "Bun Martin’s, poulet croustillant, fromage américain, oignons blancs, salade, tomate, pickles, sauce smash.",
    price: "12.90€",
    category: "Poulet",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Avocado Chicken",
    description: "Bun Martin’s, poulet croustillant, fromage américain, avocat, oignons blancs, salade, tomate, pickles, sauce smash.",
    price: "14.90€",
    category: "Poulet",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Hot Chicken Smash",
    description: "Bun Martin’s, poulet croustillant, fromage américain, jalapeños, oignons blancs, salade, tomate, pickles, sauce épicée.",
    price: "13.50€",
    category: "Poulet",
    image: "https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Veggie Smash",
    description: "Bun Martin’s, avocat, champignons frais grillés, fromage américain, oignons blancs, salade, tomate, pickles, sauce smash.",
    price: "12.50€",
    category: "Veggie",
    image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Veggie Chick'n SMASH",
    description: "Sauce smash, oignons, pickles, poulet végétarien, cheddar, salade, tomate.",
    price: "13.50€",
    category: "Veggie",
    image: "https://images.unsplash.com/photo-1584947847219-7a303405a933?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Veggie Beef Smash",
    description: "Sauce smash, oignons, cornichons, steak végétarien, cheddar, salade, tomate.",
    price: "12.50€",
    category: "Veggie",
    image: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=800&auto=format&fit=crop"
  }
];

const sides = [
  {
    name: "Frites Maison",
    description: "Fraîchement coupées chaque matin, double cuisson à la belge.",
    price: "4.50€",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Cheesy Fries",
    description: "Nos frites maison nappées de cheddar fondu et d'oignons frits.",
    price: "6.50€",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Chicken Tenders (x4)",
    description: "Filets de poulet ultra croustillants, servis avec une sauce au choix.",
    price: "7.90€",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop"
  }
];

const drinks = [
  { name: "Milkshake Spéculoos", price: "6.50€", description: "Le classique bruxellois, ultra onctueux." },
  { name: "Milkshake Oreo", price: "6.50€", description: "Vanille, éclats d'Oreo et chantilly." },
  { name: "Limonade Maison", price: "4.50€", description: "Citron frais, menthe et une pointe de sucre." },
  { name: "Softs (33cl)", price: "2.80€", description: "Coca-Cola, Fanta, Sprite, Eau." }
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-20 text-center">
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6 uppercase">La Carte</h1>
            <div className="h-2 w-24 bg-[#469956] mx-auto mb-8"></div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-[#469956] text-white px-6 py-3 rounded-2xl font-black italic transform -rotate-1 shadow-lg">
                MENU SMASH : BURGER + FRITES + BOISSON = +5.00€
              </div>
            </div>

            <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
              Du bœuf irlandais frais, smasché à la perfection, accompagné du meilleur des produits belges.
            </p>
          </header>

          <div className="mb-32">
            <h2 className="text-4xl font-black italic tracking-tighter mb-12 uppercase border-l-8 border-[#469956] pl-6">Nos Burgers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {burgers.map((burger, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group border border-foreground/10 rounded-[2.5rem] bg-foreground/[0.02] overflow-hidden hover:bg-white hover:shadow-2xl hover:shadow-[#469956]/10 hover:border-[#469956]/30 transition-all duration-500"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img src={burger.image} alt={burger.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full">
                      <span className="text-lg font-black italic text-[#469956]">{burger.price}</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white px-3 py-1 bg-[#469956] rounded-full shadow-lg">
                        {burger.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black italic tracking-tight mb-4 group-hover:text-[#469956] transition-colors uppercase">{burger.name}</h3>
                    <p className="text-foreground/60 leading-relaxed font-medium text-sm">{burger.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-32">
            <h2 className="text-4xl font-black italic tracking-tighter mb-12 uppercase border-l-8 border-[#469956] pl-6">Les Sides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sides.map((side, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group border border-foreground/10 rounded-[2rem] bg-foreground/[0.02] overflow-hidden hover:bg-white transition-all duration-500"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={side.image} alt={side.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-black text-[#469956]">{side.price}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black italic mb-2 uppercase">{side.name}</h3>
                    <p className="text-foreground/60 text-sm font-medium">{side.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
            <div>
              <h2 className="text-4xl font-black italic tracking-tighter mb-12 uppercase border-l-8 border-[#469956] pl-6">Milkshakes & Desserts</h2>
              <div className="space-y-6">
                {drinks.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-6 border border-foreground/5 rounded-2xl bg-foreground/[0.01]">
                    <div>
                      <h3 className="font-black italic uppercase text-lg">{item.name}</h3>
                      <p className="text-sm text-foreground/50">{item.description}</p>
                    </div>
                    <span className="font-black text-[#469956]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black italic tracking-tighter mb-12 uppercase border-l-8 border-[#469956] pl-6">Boissons Fraîches</h2>
              <div className="space-y-6">
                {drinks.slice(2).map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-6 border border-foreground/5 rounded-2xl bg-foreground/[0.01]">
                    <div>
                      <h3 className="font-black italic uppercase text-lg">{item.name}</h3>
                      <p className="text-sm text-foreground/50">{item.description}</p>
                    </div>
                    <span className="font-black text-[#469956]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-12 bg-black rounded-[3rem] text-white overflow-hidden relative">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-6">UNE QUESTION SUR LES ALLERGÈNES ?</h2>
                <p className="text-white/60 text-lg mb-0">Notre équipe est à votre disposition en restaurant pour vous renseigner sur la composition détaillée de nos produits.</p>
              </div>
              <button className="bg-[#469956] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shrink-0">
                Nous contacter
              </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#469956]/20 blur-[100px] -z-0"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
