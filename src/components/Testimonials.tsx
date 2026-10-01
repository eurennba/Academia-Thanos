import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#0d0a14] border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/40">
            <Star className="w-3.5 h-3.5 fill-purple-400 text-purple-400" />
            <span>Resultados Comprovados</span>
            <span className="text-zinc-600">·</span>
            <span>ALUNOS DE GUARANÉSIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            A VOZ DE QUEM VIVE A <span className="text-purple-400">ROTINA THANOS</span>.
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Veja o depoimento de quem decidiu sair da inércia e conquistou mais saúde, disciplina e força física em Guaranésia - MG.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#0f0c18] border border-purple-900/40 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-600/50 transition-all shadow-md"
            >
              <div>
                {/* Rating stars & Modality */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-purple-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-purple-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-zinc-400 bg-black/60 px-2 py-0.5 rounded border border-purple-900/40">
                    {t.modality}
                  </span>
                </div>

                {/* Transformation highlighted metric */}
                <div className="mb-4 p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/30 text-xs font-bold text-purple-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{t.result}</span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">{t.name}, {t.age} anos</div>
                  <div className="text-zinc-400">{t.timeTraining}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-900/60 border border-purple-500/40 flex items-center justify-center font-bold text-purple-300">
                  {t.name[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
