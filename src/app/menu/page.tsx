"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const burgers = [
  {
    name: "Le Smash",
    description: "Bun Martin’s, Irish steak, American cheese, oignons, salade, tomate, pickles, sauce smash.",
    price: "12.50€",
    category: "Bœuf",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Smoky Smash",
    description: "Bun Martin’s, Irish steak, beef bacon, American cheese, salade, tomate, pickles, smoky sauce.",
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
    description: "Bun Martin’s, Irish steak, American cheese, avocat, pickles, salade, tomate, sauce smash.",
    price: "14.50€",
    category: "Bœuf",
    image: "https://images.unsplash.com/photo-1607013271323-83b4383402b2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Big Smash",
    description: "Bun Martin’s, cheddar, Double Irish steak, oignons, pickles, salade iceberg, sauce biggy.",
    price: "15.90€",
    category: "Bœuf",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Fungi Smash",
    description: "Bun Martin’s, Irish steak, American cheese, champignons frais grillés, pickles, smoky sauce.",
    price: "13.50€",
    category: "Bœuf",
    image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Chili Smash",
    description: "Bun Martin’s, Irish steak, beef bacon, jalapeños, American cheese, oignons, salade, tomates, pickles, sauce spicy.",
    price: "14.00€",
    category: "Bœuf",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Chicken Smash",
    description: "Bun Martin’s, crispy chicken, American cheese, oignons blancs, salade, tomate, pickles, sauce smash.",
    price: "12.90€",
    category: "Poulet",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Avocado Chicken",
    description: "Bun Martin’s, crispy chicken, American cheese, avocat, oignons blancs, salade, tomate, pickles, sauce smash.",
    price: "14.90€",
    category: "Poulet",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Hot Chicken Smash",
    description: "Bun Martin’s, crispy chicken, American cheese, jalapeños, oignons blancs, salade, tomate, pickles, sauce spicy.",
    price: "13.50€",
    category: "Poulet",
    image: "https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Veggie Smash",
    description: "Bun Martin’s, avocat, champignons frais grillés, American cheese, oignons blancs, salade, tomate, pickles, sauce smash.",
    price: "12.50€",
    category: "Veggie",
    image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Veggie Chick'n SMASH",
    description: "Sauce smash, oignons, pickles, Chicken veggie, cheddar, salade, tomate.",
    price: "13.50€",
    category: "Veggie",
    image: "https://images.unsplash.com/photo-1584947847219-7a303405a933?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Veggie Beef Smash",
    description: "Sauce smash, oignons, cornichons, steak veggie, cheddar, salade, tomate.",
    price: "12.50€",
    category: "Veggie",
    image: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=800&auto=format&fit=crop"
  }
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
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Nos burgers sont préparés à la commande avec du bœuf irlandais frais, smasché pour une croûte parfaite.
            </p>
          </header>

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
                  <img 
                    src={burger.image} 
                    alt={burger.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full">
                    <span className="text-lg font-black italic text-[#469956]">{burger.price}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white px-3 py-1 bg-[#469956] rounded-full">
                      {burger.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black italic tracking-tight mb-4 group-hover:text-[#469956] transition-colors uppercase">
                    {burger.name}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed font-medium text-sm">
                    {burger.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-32 p-12 bg-black rounded-[3rem] text-white overflow-hidden relative">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-6">PAS SEULEMENT DES BURGERS</h2>
                <p className="text-white/60 text-lg mb-0">Accompagnez votre smash avec nos frites maison coupées chaque matin ou nos milkshakes onctueux.</p>
              </div>
              <button className="bg-[#469956] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shrink-0">
                Découvrir les à-côtés
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
