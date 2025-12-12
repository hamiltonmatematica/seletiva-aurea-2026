import React from 'react';

export const ScholarshipRules: React.FC = () => {
  return (
    <section id="bolsas" className="py-24 bg-aurea-blue text-white overflow-hidden relative">
      {/* Background circles for identity */}
      <div className="absolute -left-20 top-20 w-96 h-96 bg-white opacity-10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-title text-5xl md:text-7xl mb-4">
            Bolsas & Descontos
          </h2>
          <p className="font-body text-xl opacity-90">
            São 40 bolsas principais distribuídas entre todas as turmas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* 1st Place Card */}
          <div className="bg-white text-aurea-ebony rounded-3xl p-8 transform md:-translate-y-4 hover:scale-105 transition-transform duration-300 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-aurea-orange rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform"></div>
            <h3 className="font-title text-4xl mb-2 relative z-10">1º Lugar</h3>
            <div className="text-6xl font-black text-aurea-orange mb-4 tracking-tighter relative z-10">100%</div>
            <p className="font-body text-gray-600 leading-snug relative z-10">
              Bolsa integral para o candidato com a maior pontuação global na categoria.
            </p>
          </div>

          {/* 2nd-10th Place Card */}
          <div className="bg-aurea-ebony text-white rounded-3xl p-8 shadow-xl border border-white/10 hover:border-aurea-orange transition-colors duration-300">
            <h3 className="font-title text-3xl mb-2 text-aurea-blue">2º ao 10º Lugar</h3>
            <div className="text-5xl font-bold mb-4 tracking-tighter">99% a 40%</div>
            <p className="font-body text-gray-400 text-sm mb-4 leading-relaxed">
              Proporcional ao percentual de acertos. <br />
              <em className="text-gray-500">Ex: 180 pontos de 200 (90%) = 90% de bolsa.</em>
            </p>
            <div className="w-full bg-white/10 h-px mb-4"></div>
            <p className="text-xs text-aurea-orange font-bold uppercase">
              Garantia Mínima: 40%
            </p>
          </div>

          {/* Others Card */}
          <div className="bg-aurea-ebony text-white rounded-3xl p-8 shadow-xl border border-white/10 hover:border-aurea-orange transition-colors duration-300">
            <h3 className="font-title text-3xl mb-2 text-gray-400">11º em diante</h3>
            <div className="text-5xl font-bold mb-4 tracking-tighter text-gray-300">39% a 20%</div>
            <p className="font-body text-gray-400 text-sm mb-4 leading-relaxed">
              Cálculo baseado na nota final em fórmula estruturada.
            </p>
            <div className="w-full bg-white/10 h-px mb-4"></div>
            <p className="text-xs text-aurea-orange font-bold uppercase">
              Garantia Mínima: 20%
            </p>
          </div>
        </div>

        <div className="mt-16 text-center font-body text-sm md:text-base opacity-80 max-w-3xl mx-auto">
          Nossa metodologia de bolsas reflete nosso compromisso com a meritocracia e acessibilidade.
        </div>
      </div>
    </section>
  );
};