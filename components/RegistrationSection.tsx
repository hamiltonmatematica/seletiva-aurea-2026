import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LINKS } from '../constants';

export const RegistrationSection: React.FC = () => {
  return (
    <section className="py-24 bg-white text-aurea-ebony">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          <div className="lg:w-1/2">
            <span className="font-body font-bold text-aurea-orange uppercase tracking-widest mb-2 block">Inscrições Abertas</span>
            <h2 className="font-title text-6xl md:text-7xl mb-6 leading-none">
              Garanta sua <br />vaga agora
            </h2>
            <div className="space-y-6 font-body text-lg">
              <p className="text-gray-600">
                As inscrições podem ser realizadas pelas redes sociais do Áurea ou presencialmente na secretaria.
              </p>

              <div className="bg-gray-100 p-6 rounded-2xl border-l-4 border-aurea-blue">
                <p className="font-bold text-aurea-ebony text-xl">Gratuita</p>
                <p className="text-gray-500">Até o dia 10 de janeiro</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl border-l-4 border-aurea-orange">
                <p className="font-bold text-aurea-ebony text-xl">Taxa de R$ 20,00</p>
                <p className="text-gray-500">A partir de 11 de janeiro</p>
              </div>

              <p className="text-sm text-gray-400 mt-4">
                *O aluno deverá portar documento com foto, caneta preta/azul no dia da prova.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-aurea-ebony rounded-[3rem] p-10 md:p-14 text-center text-white relative overflow-hidden">
              {/* Abstract geometric decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-aurea-blue rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-aurea-orange rounded-tr-full opacity-50"></div>

              <h3 className="font-title text-4xl mb-6 relative z-10">Prazo Final de inscrições: 29/01</h3>
              <p className="font-body text-gray-300 mb-10 relative z-10">
                Não deixe para a última hora. O futuro começa com uma decisão.
              </p>

              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center gap-3 bg-white text-aurea-ebony px-10 py-5 rounded-full font-bold font-body text-lg hover:bg-aurea-orange hover:text-white transition-all duration-300 group"
              >
                FAZER INSCRIÇÃO
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};