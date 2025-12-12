import React from 'react';
import { COURSES } from '../constants';

export const ExamTable: React.FC = () => {
  return (
    <section id="provas" className="py-24 bg-aurea-ebony text-white relative">
      <div className="container mx-auto px-6">
        <h2 className="font-title text-5xl md:text-6xl mb-4 text-center">
          Das <span className="text-aurea-orange">Provas</span>
        </h2>
        <p className="font-body text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Entenda a estrutura das avaliações e a pontuação necessária para cada modalidade.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {COURSES.map((course, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-aurea-blue transition-colors duration-300">
              <h3 className="font-title text-2xl text-aurea-blue mb-2">{course.name}</h3>
              <div className="space-y-3 font-body">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Disciplinas</span>
                  <span className="text-white text-lg">{course.disciplines}</span>
                </div>
                <div className="h-px bg-white/10 my-2"></div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Questões</span>
                  <span className="text-white">{course.questions}</span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Pontuação Final</span>
                  <span className="text-aurea-orange font-bold">{course.score}</span>
                </div>
                <div className="mt-4 p-3 bg-aurea-blue/10 rounded-lg border border-aurea-blue/20">
                  <span className="text-xs uppercase tracking-wider text-aurea-blue font-bold block mb-1">Nota de Corte (Correção Redação)</span>
                  <span className="text-white font-medium">{course.cutOff}</span>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};