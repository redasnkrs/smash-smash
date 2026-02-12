'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine navbar styles based on scroll and current page
  const navBg = isHome 
    ? (isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6")
    : "bg-black/90 backdrop-blur-md border-b border-white/10 py-4";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-[#469956] italic">
          SMASH & SMASH
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-white">
          <Link href="/menu" className={`hover:text-[#469956] transition-colors ${pathname === '/menu' ? 'text-[#469956]' : ''}`}>
            Le Menu
          </Link>
          <Link href="/restaurants" className={`hover:text-[#469956] transition-colors ${pathname === '/restaurants' ? 'text-[#469956]' : ''}`}>
            Nos Restaurants
          </Link>
          <Link href="/franchise" className={`hover:text-[#469956] transition-colors ${pathname === '/franchise' ? 'text-[#469956]' : ''}`}>
            Franchise
          </Link>
          <Link href="/recruitment" className={`hover:text-[#469956] transition-colors ${pathname === '/recruitment' ? 'text-[#469956]' : ''}`}>
            Recrutement
          </Link>
        </div>
        <Link 
          href="/order" 
          className="bg-[#469956] text-white px-6 py-2 rounded-full font-bold text-sm uppercase hover:shadow-lg hover:shadow-[#469956]/20 transition-all"
        >
          Commander
        </Link>
      </div>
    </nav>
  );
}
