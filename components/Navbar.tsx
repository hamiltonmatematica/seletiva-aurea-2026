import React, { useState, useEffect } from 'react';
import { Logo } from './ui/Logo';
import { LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
        scrolled ? 'bg-aurea-ebony/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo className="h-10" />
        
        <div className="hidden md:flex items-center gap-8 font-body text-sm font-semibold">
          <a href="#processo" className="hover:text-aurea-orange transition-colors">O PROCESSO</a>
          <a href="#provas" className="hover:text-aurea-orange transition-colors">AS PROVAS</a>
          <a href="#bolsas" className="hover:text-aurea-orange transition-colors">BOLSAS</a>
          <a 
            href={LINKS.whatsapp} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-aurea-blue hover:bg-aurea-orange text-white px-6 py-2 rounded-full transition-colors duration-300 font-bold tracking-wide"
          >
            INSCREVER-SE
          </a>
        </div>

        {/* Mobile Menu Icon (Simplified) */}
        <a 
          href={LINKS.whatsapp}
          className="md:hidden text-aurea-orange font-bold text-sm"
        >
          INSCREVER
        </a>
      </div>
    </nav>
  );
};