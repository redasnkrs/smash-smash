import React from 'react';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 sm:pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1">
          <div className="text-2xl font-black tracking-tighter text-[#469956] italic mb-6">
            SMASH & SMASH
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
            Le meilleur smash burger de Bruxelles. Viande belge fraîche, pain brioché et une croûte légendaire.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#469956] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#469956] transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold uppercase text-[10px] sm:text-xs tracking-[0.2em] mb-6 text-[#469956]">Navigation</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link href="/menu" className="hover:text-white transition-colors">Le Menu</Link></li>
            <li><Link href="/restaurants" className="hover:text-white transition-colors">Nos Restaurants</Link></li>
            <li><Link href="/franchise" className="hover:text-white transition-colors">Franchise</Link></li>
            <li><Link href="/recruitment" className="hover:text-white transition-colors">Recrutement</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase text-[10px] sm:text-xs tracking-[0.2em] mb-6 text-[#469956]">Contact</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Rue+du+Marché+aux+Herbes+100,+1000+Bruxelles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-white transition-colors"
              >
                <MapPin size={18} className="text-[#469956] shrink-0" />
                <span>Rue du Marché aux Herbes 100,<br />1000 Bruxelles, Belgique</span>
              </a>
            </li>
            <li>
              <a href="tel:+3221234567" className="flex items-center space-x-3 hover:text-white transition-colors">
                <Phone size={18} className="text-[#469956] shrink-0" />
                <span>+32 2 123 45 67</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase text-[10px] sm:text-xs tracking-[0.2em] mb-6 text-[#469956]">Horaires</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex justify-between gap-4">
              <span>Lun - Jeu</span>
              <span>11:30 - 22:30</span>
            </li>
            <li className="flex justify-between gap-4 font-bold text-white">
              <span>Ven - Sam</span>
              <span>11:30 - 23:30</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Dimanche</span>
              <span>12:00 - 22:00</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/30 uppercase tracking-widest font-bold text-center md:text-left">
        <p>&copy; 2026 SMASH & SMASH BRUXELLES. TOUS DROITS RÉSERVÉS.</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
          <Link href="/mentions-legales" className="hover:text-white transition-colors">Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
