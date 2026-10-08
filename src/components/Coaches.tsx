import React from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { COACHES } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';
import { SectionHeader } from './SectionHeader';

interface CoachesProps {
  onOpenTrialModal: (coachName?: string) => void;
}

export const Coaches: React.FC<CoachesProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="professores" className="py-24 bg-black border-b border-purple-950/40">
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        <SectionHeader
          title="PROFESSORES RESPONSÁVEIS"
          subtitle="Profissionais credenciados pelo CREF presentes diariamente no salão da Academia Thanos em Guaranésia."
        />

        {/* 2 Coach Cards in Purple & White */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {COACHES.map((coach) => (
            <div
              key={coach.id}
              className="bg-[#100c1c] rounded-2xl p-6 sm:p-8 border border-purple-950/60 hover:border-purple-500 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.4)] flex flex-col justify-between group"
            >
              <div>
                {/* Header with Photo & Name */}
                <div className="flex items-center gap-5 mb-6">
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

                  <div>
                    <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider block mb-1">
                      {coach.cref}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {coach.nickname || coach.name}
                    </h3>
                    <p className="text-xs text-zinc-300 font-light mt-1">
                      {coach.role}
                    </p>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-sm text-zinc-200 opacity-90 mb-6 font-light leading-relaxed">
                  {coach.bio}
                </p>

                {/* Specialties list */}
                <div className="space-y-2 mb-8">
                  {coach.specialties.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-zinc-300 font-light">
                      <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Actions */}
              <div className="space-y-2.5 pt-4 border-t border-purple-950/60">
                <button
                  onClick={() => openWhatsApp(coach.whatsappMessage, coach.phone)}
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-purple-950 border border-purple-400/40"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp direto com {coach.nickname || coach.name}</span>
                </button>

                <button
                  onClick={() => onOpenTrialModal(coach.nickname || coach.name)}
                  className="w-full bg-[#181326] hover:bg-purple-950/60 text-white font-semibold text-xs py-2.5 rounded-xl border border-purple-900/50 hover:border-purple-400 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Agendar Aula com este Professor</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
