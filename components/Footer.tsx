import React from 'react';
import { Logo } from './ui/Logo';
import { CONTACT } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-aurea-ebony text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          <div className="flex flex-col items-center md:items-start">
            <Logo className="h-12 mb-6" />
            <p className="font-body text-gray-400 text-sm max-w-xs text-center md:text-left">
              Preparação de alto nível para estudantes de ensino médio e pré-vestibular.
            </p>
          </div>

          <div className="text-center md:text-right font-body">
            <h4 className="font-bold text-lg mb-4 text-aurea-orange">Contato</h4>
            <p className="text-gray-300 mb-2">{CONTACT.address}</p>
            <p className="text-gray-300 font-bold text-lg">{CONTACT.phone1}</p>
            <p className="text-gray-300 font-bold text-lg">{CONTACT.phone2}</p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center font-body text-xs text-gray-600">
          <p>&copy; 2026 Áurea Vestibulares. Todos os direitos reservados.</p>
          <p className="mt-2">Montes Claros, MG.</p>
        </div>
      </div>
    </footer>
  );
};