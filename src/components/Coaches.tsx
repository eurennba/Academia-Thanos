import React from 'react';
import { Check, ShieldCheck, PhoneCall } from 'lucide-react';
import { COACHES } from '../data/gymData';
import { SectionHeader } from './SectionHeader';

export const Coaches: React.FC = () => {
  return (
    <section id="professores" className="py-16 sm:py-24 bg-black border-b border-purple-950/40 w-full max-w-full overflow-hidden">
      <div className="w-[94%] max-w-[1200px] mx-auto px-2 sm:px-4">
        <SectionHeader
          title="PROFESSORES RESPONSÁVEIS"
          subtitle="Profissionais credenciados pelo CREF presentes diariamente no salão da Academia Thanos em Guaranésia."
        />

        {/* 2 Coach Cards in Purple & White */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {COACHES.map((coach) => (
            <div
              key={coach.id}
              className="bg-[#110a20] rounded-2xl p-5 sm:p-7 border border-purple-950/60 hover:border-purple-400 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col justify-between group"
            >
              <div>
                {/* Header with Photo & Name */}
                <div className="flex items-center gap-4 sm:gap-5 mb-5 sm:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-purple-500 bg-black shrink-0 shadow-lg shadow-purple-950">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400&auto=format&fit=crop';
                      }}
                    />
                  </div>

                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider block mb-1">
                      {coach.cref}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                      {coach.nickname || coach.name}
                    </h3>
                    <p className="text-xs text-zinc-300 font-light mt-0.5 line-clamp-2">
                      {coach.role}
                    </p>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-xs sm:text-sm text-zinc-200 opacity-90 mb-5 font-light leading-relaxed break-words">
                  {coach.bio}
                </p>

                {/* Specialties list */}
                <div className="space-y-1.5 mb-6">
                  {coach.specialties.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-zinc-300 font-light">
                      <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão de Chamada para o Professor */}
              <div className="pt-4 border-t border-purple-900/50 space-y-2.5">
                <a
                  href={`tel:${coach.phone}`}
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-tight py-3.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-purple-950 border border-purple-400/40 hover:scale-[1.02] active:scale-95"
                  aria-label={`Fazer chamada para ${coach.nickname || coach.name}`}
                >
                  <PhoneCall className="w-4 h-4 text-white" />
                  <span>Fazer Chamada: {coach.formattedPhone || coach.phone}</span>
                </a>

                <div className="w-full bg-[#18112a] text-purple-300 py-2.5 px-3 rounded-xl text-[11px] font-semibold flex items-center justify-center gap-1.5 border border-purple-900/40">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                  <span>Acompanhamento Técnico Diário no Salão</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
