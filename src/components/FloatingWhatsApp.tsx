import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';
import { GYM_INFO, COACHES } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Pop-up selector if opened */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-[#0f0c18] border border-purple-500/50 rounded-2xl p-4 shadow-2xl shadow-black text-white">
          <div className="flex items-center justify-between pb-3 border-b border-purple-900/40">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold shadow-md shadow-purple-900/50">
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0f0c18]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Academia Thanos Guaranésia</h4>
                <div className="text-[10px] text-emerald-400">Professor Online no WhatsApp</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-zinc-300 my-2.5 leading-relaxed">
            Fale diretamente no WhatsApp com nossos professores responsáveis:
          </p>

          <div className="space-y-1.5">
            {COACHES.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setIsOpen(false);
                  openWhatsApp(c.whatsappMessage, c.phone);
                }}
                className="w-full flex items-center justify-between p-2 rounded-xl bg-black/60 hover:bg-purple-950/60 hover:border-purple-500/60 border border-purple-900/40 transition-all text-left group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-500/50 bg-black shrink-0">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          c.id === 'vinicius'
                            ? 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=200&auto=format&fit=crop'
                            : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop';
                      }}
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-purple-400 transition-colors">
                      {c.nickname || c.name}
                    </div>
                    <div className="text-[10px] text-zinc-400">
                      {c.role}
                    </div>
                    <div className="text-[10px] font-mono text-green-400 font-semibold mt-0.5">
                      {c.formattedPhone || (c.phone === '5535997757577' ? '(35) 99775-7577' : '(35) 99135-9857')}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>

          <div className="mt-3 pt-2.5 border-t border-purple-900/40 text-[10px] text-zinc-400 text-center">
            {GYM_INFO.location.street} N ° {GYM_INFO.location.number} · {GYM_INFO.location.city} - MG
          </div>
        </div>
      )}

      {/* Floating Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-500 hover:to-purple-600 text-white px-4 py-3 rounded-full shadow-xl shadow-purple-950/70 active:scale-95 transition-all border border-purple-400/40"
        aria-label="Falar com o Professor no WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white/20" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-purple-600 animate-ping" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200 leading-none">WhatsApp do Professor</span>
          <span className="text-xs font-extrabold text-white leading-tight">(35) 99135-9857</span>
        </div>
      </button>
    </div>
  );
};
