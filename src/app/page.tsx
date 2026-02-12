"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Clock,
  MapPin,
  Phone,
  Instagram,
  Facebook,
} from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "Smash Classic",
    price: "12.90€",
    description:
      "Double patty, cheddar fondu, oignons caramélisés, sauce secrète.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Smash Spicy",
    price: "13.50€",
    description:
      "Double patty, jalapeños, sauce piquante maison, bacon croustillant.",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Veggie Smash",
    price: "11.90€",
    description:
      "Patty de champignons et haricots noirs, avocat, sauce yaourt herbes.",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Frites Maison",
    price: "4.50€",
    description: "Pommes de terre fraîches, double cuisson, sel de mer.",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=500&auto=format&fit=crop",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white"
      style={{ "--accent": "#469956" } as React.CSSProperties}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-[#469956] italic">
            SMASH & SMASH
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-white">
            <a href="#menu" className="hover:text-[#469956] transition-colors">
              Le Menu
            </a>
            <a href="#about" className="hover:text-[#469956] transition-colors">
              Notre Histoire
            </a>
            <a href="#contact" className="hover:text-[#469956] transition-colors">
              Contact
            </a>
          </div>
          <button className="bg-[#469956] text-white px-6 py-2 rounded-full font-bold text-sm uppercase hover:shadow-lg hover:shadow-[#469956]/20 transition-all">
            Commander
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            alt="Hero Background"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter mb-6 text-white leading-tight"
            >
              LE MEILLEUR <br />{" "}
              <span className="text-[#469956] underline decoration-[#469956] decoration-4 underline-offset-8">
                SMASH
              </span>{" "}
              BURGER
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-10 max-w-lg font-medium"
            >
              Viande fraîche, pain brioché et une croûte parfaitement
              caramélisée. Le goût brut, sans compromis.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#menu"
                className="bg-[#469956] text-white px-10 py-4 rounded-full font-black text-lg uppercase hover:scale-105 transition-transform inline-block shadow-lg shadow-[#469956]/20"
              >
                Découvrir la carte
              </a>
            </motion.div>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="absolute bottom-0 w-full bg-[#469956] py-4 z-20 overflow-hidden border-t border-white/10">
          <div className="flex whitespace-nowrap animate-marquee">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center mx-4">
                <span className="text-white font-black italic text-xl uppercase tracking-tighter mx-4">
                  Frais & Maison
                </span>
                <span className="text-white/30 text-2xl mx-4">•</span>
                <span className="text-white font-black italic text-xl uppercase tracking-tighter mx-4">
                  Pain Brioché
                </span>
                <span className="text-white/30 text-2xl mx-4">•</span>
                <span className="text-white font-black italic text-xl uppercase tracking-tighter mx-4">
                  Viande 100% Belge
                </span>
                <span className="text-white/30 text-2xl mx-4">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story / Transition Section */}
      <section id="about" className="py-32 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1550317144-b3bfc2a7795e?q=80&w=800&auto=format&fit=crop" 
                  alt="L'art du Smash"
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#469956]/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#469956]/10 rounded-full blur-3xl -z-10" />
            </div>
            
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-[#469956] font-black text-sm uppercase tracking-[0.3em] mb-4">L'art du Smash</h2>
                <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-8 leading-tight">
                  UNE CROÛTE UNIQUE, <br /> UN GOÛT EXPLOSIF.
                </h3>
                <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                  Notre secret ? On "smash" nos boules de viande fraîche sur une plaque brûlante pour créer cette réaction de Maillard unique. Le résultat : une croûte caramélisée et craquante qui emprisonne tout le jus et les saveurs à l'intérieur.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="block text-3xl font-black text-[#469956] mb-1">100%</span>
                    <span className="text-sm font-bold uppercase text-foreground/50">Bœuf Belge</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-black text-[#469956] mb-1">FRAIS</span>
                    <span className="text-sm font-bold uppercase text-foreground/50">Chaque jour</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Features */}
      <section className="py-20 bg-[#469956] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <Clock size={40} strokeWidth={2.5} />
            <h3 className="mt-4 font-black text-xl">Prêt en 10 min</h3>
            <p className="font-medium opacity-80">
              Parce que la faim n'attend pas.
            </p>
          </div>
          <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-white/10 py-12 md:py-0">
            <ShoppingCart size={40} strokeWidth={2.5} />
            <h3 className="mt-4 font-black text-xl">Click & Collect</h3>
            <p className="font-medium opacity-80">
              Commandez en ligne, retirez sur place.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin size={40} strokeWidth={2.5} />
            <h3 className="mt-4 font-black text-xl">Local & Frais</h3>
            <p className="font-medium opacity-80">
              Produits sourcés à moins de 50km.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-black italic tracking-tighter mb-4">
              NOTRE CARTE
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-foreground/5 border border-foreground/10 rounded-3xl overflow-hidden hover:border-accent/50 transition-colors"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="text-accent font-black">{item.price}</span>
                  </div>
                  <p className="text-foreground/60 text-sm mb-6">
                    {item.description}
                  </p>
                  <button className="w-full border border-foreground/20 py-2 rounded-xl text-sm font-bold hover:bg-foreground hover:text-background transition-colors">
                    Ajouter
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 bg-foreground/5 border-t border-foreground/10"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black italic tracking-tighter mb-8">
              RETROUVEZ-NOUS
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold">Adresse</p>
                  <p className="text-foreground/60">
                    123 Rue du Burger, 75011 Paris
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold">Téléphone</p>
                  <p className="text-foreground/60">01 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold">Horaires</p>
                  <p className="text-foreground/60">
                    Lun - Dim : 11h30 - 23h00
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-6">
              <a
                href="#"
                className="p-3 bg-foreground/10 rounded-full hover:text-accent transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="p-3 bg-foreground/10 rounded-full hover:text-accent transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div className="h-[400px] rounded-3xl overflow-hidden bg-foreground/10 border border-foreground/20 flex items-center justify-center grayscale">
            <p className="text-foreground/40">
              [ Carte Google Maps Placeholder ]
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-foreground/40 text-sm border-t border-foreground/10">
        <p>&copy; 2024 SMASH & SMASH. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
