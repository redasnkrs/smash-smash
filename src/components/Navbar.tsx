'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Determine navbar styles based on scroll and current page
  const navBg = isHome 
    ? (isScrolled ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6")
    : "bg-black/95 backdrop-blur-md border-b border-white/10 py-4";

  const navLinks = [
    { name: 'Le Menu', href: '/menu' },
    { name: 'Nos Restaurants', href: '/restaurants' },
    { name: 'Franchise', href: '/franchise' },
    { name: 'Recrutement', href: '/recruitment' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter text-[#469956] italic z-50">
            SMASH & SMASH
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-white">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`hover:text-[#469956] transition-colors ${pathname === link.href ? 'text-[#469956]' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/order" 
              className="bg-[#469956] text-white px-6 py-2 rounded-full font-bold text-sm uppercase hover:shadow-lg hover:shadow-[#469956]/20 transition-all hidden sm:block"
            >
              Commander
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white p-2 z-[70]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-[60] transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 text-3xl font-black italic uppercase tracking-tighter px-6 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`hover:text-[#469956] transition-colors ${pathname === link.href ? 'text-[#469956]' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/order" 
            className="bg-[#469956] text-white px-12 py-5 rounded-full font-black text-2xl uppercase mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Commander
          </Link>
        </div>
      </div>
    </>
  );
}
