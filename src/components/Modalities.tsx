import React, { useState } from 'react';
import { Dumbbell, UserCheck, Activity, Check, MessageCircle } from 'lucide-react';
import { MODALITIES } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';

interface ModalitiesProps {
  onOpenTrialModal: (preferredModality?: string) => void;
}

export const Modalities: React.FC<ModalitiesProps> = ({ onOpenTrialModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas as Modalidades' },
    { id: 'forca', label: 'Musculação & Hipertrofia' },
    { id: 'funcional', label: 'Treinamento Funcional' },
    { id: 'personal', label: 'Personal Trainer' },
  ];

  const filteredModalities = MODALITIES.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'forca') return item.id === 'musculacao';
    if (selectedCategory === 'funcional') return item.id === 'funcional';
    if (selectedCategory === 'personal') return item.id === 'personal';
    return true;
  });

  return (
    <section id="modalidades" className="py-20 bg-[#09090d] border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
              <span>Estrutura & Modalidades</span>
              <span className="text-zinc-600">·</span>
              <span>O Melhor da Thanos em Guaranésia</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              TREINOS FEITOS PARA GERAR <span className="text-purple-400">EVOLUÇÃO REAL</span>.
            </h2>
            <p className="text-base text-zinc-400 mt-2 max-w-2xl">
              Equipamentos de padrão profissional, espaço amplo e treinadores dedicados para conduzir sua preparação física com segurança e intensidade.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1 p-1 bg-black/60 border border-purple-900/50 rounded-xl self-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-purple-950/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout of Modalities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredModalities.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#0f0c18] border border-purple-900/40 hover:border-purple-500/60 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/40"
            >
              {/* Visual Header Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c18] via-[#0f0c18]/40 to-transparent" />
                
                {/* Category & intensity metadata */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-semibold text-zinc-200 bg-black/75 backdrop-blur-md px-3 py-1 rounded-md border border-purple-500/30">
                  <span className="text-purple-400 font-bold">{item.category}</span>
                  <span className="text-zinc-500">·</span>
                  <span>Intensidade: {item.intensity}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2.5 mb-6">
                    {item.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-zinc-400 py-3 border-t border-purple-950/80 flex items-center justify-between">
                    <span>Responsável: <strong className="text-zinc-200">{item.coachName}</strong></span>
                    <span className="text-purple-300 font-medium">{item.scheduleSummary}</span>
                  </div>
                </div>

                {/* Action Buttons for WhatsApp & Free Trial */}
                <div className="mt-6 pt-4 border-t border-purple-900/40 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <button
                    onClick={() => openWhatsApp(`Olá Professor! Gostaria de saber mais informações e valores para começar na modalidade *${item.title}* da Academia Thanos em Guaranésia.`)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl transition-all shadow-md shadow-purple-900/30 active:scale-95 border border-purple-400/30"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>WhatsApp do Professor</span>
                  </button>

                  <button
                    onClick={() => onOpenTrialModal(item.title)}
                    className="py-3 px-4 text-xs font-semibold text-zinc-200 hover:text-white bg-black/60 hover:bg-purple-950/40 border border-purple-900/60 rounded-xl transition-colors active:scale-95 whitespace-nowrap"
                  >
                    Aula Experimental
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Structural Highlights Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#0f0c18] border border-purple-900/40 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Maquinário Robusto</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Biomecânica precisa, anilhas olímpicas e halteres para quem busca evolução séria e segura em Guaranésia.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Professores Sempre Presentes</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Você nunca treina sozinho. Nossa equipe corrige postura, incentiva e ajusta a progressão em cada série.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Energia & Disciplina</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Clima motivador, som ambiente empolgante e vestiários limpos para você ter a melhor experiência diária.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
