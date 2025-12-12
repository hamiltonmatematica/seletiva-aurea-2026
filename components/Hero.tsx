import React from 'react';
import { LINKS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-aurea-ebony pt-20">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-aurea-blue rounded-full mix-blend-screen opacity-80 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-aurea-orange rounded-full mix-blend-screen opacity-20 blur-3xl"></div>
      
      {/* Geometric Overlay (Circles from identity) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="font-body text-aurea-orange tracking-widest text-sm md:text-base mb-4 uppercase font-bold">
          Edital 2026
        </h2>
        <h1 className="font-title text-7xl md:text-9xl text-white leading-[0.9] mb-8 uppercase">
          Seletiva<br />
          <span className="text-aurea-blue">Áurea</span> 2026
        </h1>
        <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          O melhor dos dois mundos. O primeiro passo para sua aprovação começa agora.
          Confira o edital completo para as turmas Extensivas e Intensivas.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white font-bold font-body rounded-full hover:bg-aurea-blue hover:border-aurea-blue transition-colors duration-300 w-full md:w-auto"
          >
            INSCREVER AGORA
          </a>
        </div>
      </div>
    </section>
  );
};