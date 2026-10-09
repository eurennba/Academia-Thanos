import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { MODALITIES } from '../data/gymData';
import { SectionHeader } from './SectionHeader';

export const Modalities: React.FC = () => {
  return (
    <section id="modalidades" className="py-16 sm:py-24 bg-[#07040e] border-b border-purple-950/40 w-full max-w-full overflow-hidden">
      <div className="w-[94%] max-w-[1200px] mx-auto px-2 sm:px-4">
        <SectionHeader
          title="MODALIDADES"
          subtitle="Treinos estruturados para sua evolução. Musculação de alta performance e acompanhamento individual com professores credenciados pelo CREF."
        />

        {/* 2 Clean Modalities Cards in Purple & White */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {MODALITIES.map((modality) => (
            <div
              key={modality.id}
              className="bg-[#110a20] rounded-2xl p-5 sm:p-7 border border-purple-950/60 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-purple-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Responsive Height */}
                <div className="overflow-hidden rounded-xl bg-black mb-5 relative h-48 sm:h-56 border border-purple-900/40">
                  <img
                    src={modality.image}
                    alt={modality.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        modality.id === 'musculacao'
                          ? 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop'
                          : 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                  <span className="absolute top-3 left-3 text-[11px] bg-purple-600 text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md border border-purple-400/40">
                    {modality.category}
                  </span>
                </div>

                {/* Card Title & Teacher */}
                <div className="mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {modality.title}
                  </h3>
                  <span className="text-xs text-purple-300 font-light block mt-1">
                    Instrutores: {modality.coachName}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 mb-5 font-light leading-relaxed break-words">
                  {modality.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {modality.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-200 font-light">
                      <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons in Purple & White (Sem WhatsApp) */}
              <div className="space-y-2.5 pt-4 border-t border-purple-900/50">
                <a
                  href="#planos"
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-purple-950 border border-purple-400/40"
                >
                  <span>Conhecer Planos & Valores</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
