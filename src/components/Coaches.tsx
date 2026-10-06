import React from 'react';
import { MessageCircle, Award, Phone } from 'lucide-react';
import { COACHES, Coach, GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';

interface CoachesProps {
  onOpenTrialModal: (coachName?: string) => void;
}

export const Coaches: React.FC<CoachesProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="professores" className="py-20 bg-[#0d0a14] border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            PROFESSORES QUE TREINAM COM VOCÊ, <span className="text-purple-400">NÃO APENAS OLHAM</span>.
          </h2>
          <p className="text-base text-zinc-400 mt-3">
            Conheça os professores responsáveis pela Academia Thanos em Guaranésia: <strong>Vinicius</strong> e <strong>Presley</strong>. Tire dúvidas e fale diretamente no WhatsApp: {GYM_INFO.whatsapp.formattedNumber}.
          </p>
        </div>

        {/* Coach Cards Grid: 2 responsible teachers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {COACHES.map((coach: Coach) => (
            <div
              key={coach.id}
              className="bg-[#0f0c18] border border-purple-900/40 hover:border-purple-500/60 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/40"
            >
              <div>
                {/* Header Profile */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/60 shadow-lg shadow-purple-950/60 group-hover:border-purple-400 group-hover:scale-105 transition-all bg-black shrink-0 ring-2 ring-purple-900/40">
                    <img
                      src={coach.image}
                      alt={`Foto do ${coach.name}`}
                      className="w-full h-full object-cover object-center transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          coach.id === 'vinicius'
                            ? 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400&auto=format&fit=crop'
                            : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop';
                      }}
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                      {coach.name}
                    </h3>
                    <div className="text-xs text-purple-300 font-medium">
                      {coach.nickname ? `"${coach.nickname}"` : coach.role}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                      {coach.cref}
                    </div>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  {coach.bio}
                </p>

                {/* Specialties tags */}
                <div className="space-y-1.5 mb-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-purple-300/80">
                    Especialidades:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {coach.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2 py-0.5 rounded bg-black/60 text-zinc-300 border border-purple-900/50"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Actions for WhatsApp */}
              <div className="pt-4 border-t border-purple-900/30 space-y-2.5">
                {/* Number Badge / Direct Link */}
                <button
                  type="button"
                  onClick={() => openWhatsApp(coach.whatsappMessage, coach.phone)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-green-950/30 hover:bg-green-900/40 border border-green-500/40 hover:border-green-400 transition-all group/tel cursor-pointer"
                  title={`Conversar com ${coach.name} no WhatsApp`}
                >
                  <span className="flex items-center gap-1.5 text-xs text-zinc-300 group-hover/tel:text-white">
                    <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                    <span className="font-medium">WhatsApp do Professor:</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-green-400 group-hover/tel:text-green-300 tracking-wide">
                    {coach.formattedPhone || (coach.phone === '5535997757577' ? '(35) 99775-7577' : '(35) 99135-9857')}
                  </span>
                </button>

                <button
                  onClick={() => openWhatsApp(coach.whatsappMessage, coach.phone)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl transition-all shadow-md shadow-purple-900/30 active:scale-95 border border-purple-400/30 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white/20 shrink-0" />
                  <span>Conversar no WhatsApp ({coach.formattedPhone || (coach.phone === '5535997757577' ? '35 99775-7577' : '35 99135-9857')})</span>
                </button>

                <button
                  onClick={() => onOpenTrialModal(coach.name)}
                  className="w-full py-2 px-3 text-[11px] font-semibold text-zinc-300 hover:text-white bg-black/60 hover:bg-purple-950/40 border border-purple-900/50 rounded-xl transition-colors text-center"
                >
                  Marcar Treino com este Professor
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Callout Box */}
        <div className="mt-12 bg-gradient-to-r from-purple-950/40 via-[#130f22] to-black border border-purple-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 font-bold shadow-lg shadow-purple-900/50 border border-purple-400/40">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Dúvidas sobre o treino ou horários em Guaranésia?</h4>
              <p className="text-xs sm:text-sm text-zinc-300">
                Os professores <strong>Vinicius</strong> e <strong>Presley</strong> estão disponíveis no WhatsApp oficial: <strong className="text-purple-300">{GYM_INFO.whatsapp.formattedNumber}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={() => openWhatsApp("Olá Professores Vinicius e Presley! Gostaria de tirar dúvidas sobre a Academia Thanos em Guaranésia.")}
            className="w-full md:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-3 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl transition-all shadow-lg shadow-purple-900/40 active:scale-95 border border-purple-400/30 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white/20 shrink-0" />
            <span>Falar com os Professores no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
