"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { asset } from '@/lib/asset';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

type MenuItem = {
  name: string;
  description: string;
  image: string;
};

type MenuCategory = {
  id: string;
  name: string;
  cols?: string;
  items: MenuItem[];
};

const categories: MenuCategory[] = [
  {
    id: "burgers",
    name: "Nos Burgers",
    items: [
      {
        name: "Le Smash",
        description: "Bun Martin’s, steak irlandais, fromage américain, oignons, salade, tomate, pickles, sauce smash.",
        image: "/Dossier PNG SMASH SMASH/Burgers PNG/smash burger.png"
      },
      {
        name: "Smoky Smash",
        description: "Bun Martin’s, steak irlandais, bacon croustillant, fromage américain, salade, tomate, pickles, sauce fumée.",
        image: "/Dossier PNG SMASH SMASH/Burgers PNG/smoky smash.png"
      },
      {
        name: "Cheeseburger",
        description: "Bun Martin’s, steak irlandais, fromage américain, cornichons, sauce ketchup moutarde.",
        image: "/Dossier PNG SMASH SMASH/Burgers PNG/cheese burger.png"
      },
      {
        name: "Avocado Cheese",
        description: "Bun Martin’s, steak irlandais, fromage américain, avocat, pickles, salade, tomate, sauce smash.",
        image: "/Dossier PNG SMASH SMASH/Burgers PNG/avocado cheese.png"
      },
      {
        name: "Big Smash",
        description: "Bun Martin’s, cheddar, Double steak irlandais, oignons, pickles, salade iceberg, sauce biggy.",
        image: "/Dossier PNG SMASH SMASH/Burgers PNG/big smash.png"
      },
      {
        name: "Fungi Smash",
        description: "Bun Martin’s, steak irlandais, fromage américain, champignons frais grillés, pickles, sauce fumée.",
        image: "/Dossier PNG SMASH SMASH/Burgers PNG/fungi smash.png"
      },
      {
        name: "Chili Smash",
        description: "Bun Martin’s, steak irlandais, bacon croustillant, jalapeños, fromage américain, oignons, salade, tomates, pickles, sauce épicée.",
        image: "/Dossier PNG SMASH SMASH/Burgers PNG/chili smash.png"
      },
      {
        name: "Chicken Smash",
        description: "Bun Martin’s, poulet croustillant, fromage américain, oignons blancs, salade, tomate, pickles, sauce smash.",
        image: "/Dossier PNG SMASH SMASH/Burgers PNG/chicken smash.png"
      },
      {
        name: "Avocado Chicken",
        description: "Bun Martin’s, poulet croustillant, fromage américain, avocat, oignons blancs, salade, tomate, pickles, sauce smash.",
        image: "/Dossier PNG SMASH SMASH/Burgers PNG/avocado chicken.png"
      },
      {
        name: "Hot Chicken Smash",
        description: "Bun Martin’s, poulet croustillant, fromage américain, jalapeños, oignons blancs, salade, tomate, pickles, sauce épicée.",
        image: "/Dossier PNG SMASH SMASH/Burgers PNG/hot chicken.png"
      },
      {
        name: "BBQ Chicken",
        description: "Bun Martin’s, poulet croustillant, bacon croustillant, oignons frits, cheddar, sauce BBQ.",
        image: "/Dossier PNG SMASH SMASH/Burgers PNG/bbq chicken.png"
      },
      {
        name: "Le Truffe",
        description: "Bun Martin’s, steak irlandais, fromage américain, oignons caramélisés, sauce à la truffe noire.",
        image: "/Dossier PNG SMASH SMASH/Burgers PNG/truffe.png"
      },
      {
        name: "Veggie Smash",
        description: "Bun Martin’s, steak végétarien, fromage américain, oignons, salade, tomate, pickles, sauce smash.",
        image: "/Dossier PNG SMASH SMASH/Burgers PNG/veggie.png"
      },
      {
        name: "Fish Smash",
        description: "Bun Martin’s, poisson pané croustillant, fromage américain, sauce tartare maison.",
        image: "/Dossier PNG SMASH SMASH/Burgers PNG/fish.png"
      }
    ]
  },
  {
    id: "hotdogs",
    name: "Hot Dogs",
    cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    items: [
      {
        name: "Classic Dog",
        description: "Saucisse de bœuf, ketchup, moutarde, oignons frits.",
        image: "/Dossier PNG SMASH SMASH/Hot Dog PNG/hotdog classic.png"
      },
      {
        name: "New York Dog",
        description: "Saucisse de bœuf, choucroute, moutarde douce, oignons caramélisés.",
        image: "/Dossier PNG SMASH SMASH/Hot Dog PNG/hotdog new york style.png"
      },
      {
        name: "Spicy Dog",
        description: "Saucisse de bœuf, jalapeños, sauce piquante, oignons rouges.",
        image: "/Dossier PNG SMASH SMASH/Hot Dog PNG/hotdog spicy.png"
      },
      {
        name: "Bacon Cheese Dog",
        description: "Saucisse de bœuf, bacon croustillant, sauce cheddar fondu.",
        image: "/Dossier PNG SMASH SMASH/Hot Dog PNG/hotdog bacon cheese.png"
      }
    ]
  },
  {
    id: "sides",
    name: "Frites & Sides",
    items: [
      {
        name: "Frites Maison",
        description: "Fraîchement coupées chaque matin, double cuisson.",
        image: "/Dossier PNG SMASH SMASH/Frites PNG/frites.png"
      },
      {
        name: "Frites Patate Douce",
        description: "Croustillantes et légèrement sucrées.",
        image: "/Dossier PNG SMASH SMASH/Frites PNG/frites patate douce.png"
      },
      {
        name: "Cheesy Fries",
        description: "Nos frites maison nappées de cheddar fondu.",
        image: "/Dossier PNG SMASH SMASH/Frites PNG/frites cheddar.png"
      },
      {
        name: "Bacon Cheese Fries",
        description: "Frites, cheddar fondu et éclats de bacon croustillant.",
        image: "/Dossier PNG SMASH SMASH/Frites PNG/frites cheddar bacon.png"
      },
      {
        name: "Jalapeños Cheese Fries",
        description: "Frites, cheddar fondu et piments jalapeños.",
        image: "/Dossier PNG SMASH SMASH/Frites PNG/frites cheddar jalapenos.png"
      },
      {
        name: "Crispy Onion Fries",
        description: "Frites, cheddar fondu et oignons frits croustillants.",
        image: "/Dossier PNG SMASH SMASH/Frites PNG/frites cheddar ognion crispy.png"
      },
      {
        name: "Chicken Tenders (x4)",
        description: "Filets de poulet ultra croustillants.",
        image: "/Dossier PNG SMASH SMASH/Petite Faim/tenders.png"
      },
      {
        name: "Chicken Wings (x6)",
        description: "Ailerons de poulet marinés et grillés.",
        image: "/Dossier PNG SMASH SMASH/Petite Faim/wings.png"
      },
      {
        name: "Mozza Sticks (x5)",
        description: "Bâtonnets de mozzarella fondante.",
        image: "/Dossier PNG SMASH SMASH/Petite Faim/mozza sticks.png"
      },
      {
        name: "Onion Rings (x8)",
        description: "Rondelles d'oignons panées.",
        image: "/Dossier PNG SMASH SMASH/Petite Faim/onion rings.png"
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts & Douceurs",
    items: [
      {
        name: "Tiramisu Maison",
        description: "Oreo, Speculoos, Bueno ou Daim.",
        image: "/Dossier PNG SMASH SMASH/Desserts PNG/tiramisu oreo.png"
      },
      {
        name: "Cheesecake",
        description: "Framboise, Mangue, Citron ou Fruits Rouges.",
        image: "/Dossier PNG SMASH SMASH/Desserts PNG/cheesecake framboise.png"
      },
      {
        name: "Crêpe Nutella",
        description: "La classique, généreuse en chocolat.",
        image: "/Dossier PNG SMASH SMASH/Desserts PNG/crepe nutella.png"
      },
      {
        name: "Gaufre Sucre",
        description: "Gaufre de Bruxelles saupoudrée de sucre glace.",
        image: "/Dossier PNG SMASH SMASH/Desserts PNG/gaufre perle de sucre.png"
      },
      {
        name: "Smash Nutella",
        description: "Notre dessert signature au Nutella.",
        image: "/Dossier PNG SMASH SMASH/Desserts PNG/smash nutella.png"
      }
    ]
  },
  {
    id: "crousty",
    name: "Crousty",
    cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    items: [
      {
        name: "Crousty Sucré",
        description: "Bouchées croustillantes et sucrées.",
        image: "/Dossier PNG SMASH SMASH/Crousty PNG/crousty sucré.png"
      },
      {
        name: "Crousty Hot",
        description: "Bouchées croustillantes et épicées.",
        image: "/Dossier PNG SMASH SMASH/Crousty PNG/crousty hot.png"
      },
      {
        name: "Crousty BBQ",
        description: "Bouchées croustillantes sauce BBQ.",
        image: "/Dossier PNG SMASH SMASH/Crousty PNG/crousty bbq.png"
      },
      {
        name: "Crousty Mixte",
        description: "Assortiment de nos meilleurs crousties.",
        image: "/Dossier PNG SMASH SMASH/Crousty PNG/crousty mixte.png"
      }
    ]
  },
  {
    id: "salades",
    name: "Salades",
    cols: "grid-cols-1 max-w-2xl mx-auto",
    items: [
      {
        name: "Salade Smash",
        description: "Mélange de fraîcheur avec nos ingrédients signature.",
        image: "/Dossier PNG SMASH SMASH/Salade PNG/Salade.png"
      }
    ]
  },
  {
    id: "drinks",
    name: "Boissons",
    cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    items: [
      {
        name: "Milkshakes Premium",
        description: "Speculoos, Oreo, Bueno, M&M's ou Snickers.",
        image: "/Dossier PNG SMASH SMASH/Boissons PNG/Milkshake Oreo.png"
      },
      {
        name: "Mojitos Maison",
        description: "Menthe, Fraise, Passion, Pêche ou Pomme.",
        image: "/Dossier PNG SMASH SMASH/Boissons PNG/Mojito menthe.png"
      },
      {
        name: "Dada (33cl)",
        description: "Plusieurs saveurs disponibles.",
        image: "/Dossier PNG SMASH SMASH/Boissons PNG/dada fraise.png"
      },
      {
        name: "Oasis (33cl)",
        description: "Tropical, Pomme Poire ou Fraise Framboise.",
        image: "/Dossier PNG SMASH SMASH/Boissons PNG/oasis tropical.png"
      }
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main className="pt-24 sm:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="mb-12 sm:mb-20 text-center relative">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black italic tracking-tighter mb-4 sm:mb-6 uppercase text-neon">La Carte</h1>
            <div className="h-1 w-16 sm:w-24 bg-[#469956] mx-auto mb-6 sm:mb-8 neon-glow"></div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8 sm:mb-12">
              <div className="bg-[#469956] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-black italic text-xs sm:text-base shadow-lg neon-glow">
                MENU SMASH : BURGER + FRITES + BOISSON
              </div>
            </div>

            <p className="text-base sm:text-xl text-white/50 max-w-2xl mx-auto font-medium px-4">
              Du bœuf irlandais frais, smasché à la perfection, dans une ambiance brute et végétale.
            </p>
          </header>

          {categories.map((category) => (
            <div key={category.id} id={category.id} className="mb-20 sm:mb-32">
              <div className="flex items-center gap-4 mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl font-black italic tracking-tighter uppercase">
                  {category.name}
                </h2>
                <div className="flex-1 h-px bg-white/10"></div>
              </div>
              
              <div className={`grid gap-6 sm:gap-10 ${category.cols ?? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
                {category.items.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group glass-card rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden hover:border-[#469956]/50 transition-all duration-500"
                  >
                    <div className="h-48 sm:h-64 overflow-hidden relative p-4 sm:p-6 flex items-center justify-center bg-black/40">
                      <img 
                        src={asset(item.image)} 
                        alt={item.name} 
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" 
                      />
                    </div>
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-black italic tracking-tight mb-2 sm:mb-4 group-hover:text-[#469956] transition-colors uppercase">
                        {item.name}
                      </h3>
                      <p className="text-white/40 leading-relaxed font-medium text-xs sm:text-sm h-12 overflow-hidden line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Allergens Section */}
          <div className="p-8 sm:p-12 md:p-20 bg-dark-section rounded-[2rem] sm:rounded-[3rem] text-white overflow-hidden relative border border-white/5">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 text-center md:text-left">
              <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black italic tracking-tighter mb-4 sm:mb-6 uppercase leading-none">
                  UNE QUESTION SUR LES <br className="hidden sm:block" />
                  <span className="text-[#469956] text-neon">ALLERGÈNES ?</span>
                </h2>
                <p className="text-white/60 text-base sm:text-lg mb-0">Notre équipe est à votre disposition en restaurant pour vous renseigner sur la composition détaillée de nos produits.</p>
              </div>
              <div className="flex flex-col gap-4 shrink-0 w-full sm:w-auto">
                <a 
                  href="mailto:contact@smash-smash.be"
                  className="bg-[#469956] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-black uppercase text-sm sm:text-base tracking-widest hover:scale-105 transition-transform neon-glow text-center"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
