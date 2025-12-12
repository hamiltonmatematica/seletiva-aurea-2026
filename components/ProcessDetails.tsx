import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export const ProcessDetails: React.FC = () => {
  return (
    <section id="processo" className="py-24 bg-white text-aurea-ebony relative overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-aurea-blue rounded-bl-full opacity-10"></div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="font-title text-5xl md:text-6xl text-aurea-blue mb-8 uppercase">
              O Processo
            </h2>
            <p className="font-body text-lg text-gray-700 leading-relaxed mb-6">
              A Seletiva de Bolsas Áurea é a sua oportunidade de conquistar descontos exclusivos para nossas turmas regulares em 2026.
              As provas abrangem todo o conteúdo programático das 5 grandes áreas do ENEM e conteúdos específicos para turmas Unimontes e Med 360.
            </p>
            
            <div className="space-y-6 mt-10">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border-l-4 border-aurea-orange">
                <Calendar className="w-6 h-6 text-aurea-orange shrink-0" />
                <div>
                  <h4 className="font-bold font-body text-lg">Data da Prova</h4>
                  <p className="text-gray-600">01 de Fevereiro de 2026</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border-l-4 border-aurea-blue">
                <Clock className="w-6 h-6 text-aurea-blue shrink-0" />
                <div>
                  <h4 className="font-bold font-body text-lg">Horário</h4>
                  <p className="text-gray-600">Início às 8h | Término às 11h</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border-l-4 border-aurea-ebony">
                <MapPin className="w-6 h-6 text-aurea-ebony shrink-0" />
                <div>
                  <h4 className="font-bold font-body text-lg">Local</h4>
                  <p className="text-gray-600">Unidade 1 – Áurea (Av. Afonso Pena, 197, Centro, Montes Claros/MG)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="bg-aurea-ebony text-white p-10 rounded-3xl relative z-10">
                <h3 className="font-title text-3xl mb-6">Sobre a Matrícula</h3>
                <ul className="space-y-4 font-body text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-aurea-orange font-bold">•</span>
                    <span>O valor da bolsa incide sobre o valor total do curso.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aurea-orange font-bold">•</span>
                    <span>Não inclui taxa de material e primeira mensalidade.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aurea-orange font-bold">•</span>
                    <span>As bolsas não são transferíveis.</span>
                  </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm text-gray-400">Resultados divulgados dia 04 de fevereiro, às 18h nas redes sociais.</p>
                </div>
             </div>
             {/* Offset decoration */}
             <div className="absolute -bottom-6 -right-6 w-full h-full bg-aurea-orange rounded-3xl -z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};