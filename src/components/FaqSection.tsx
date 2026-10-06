import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#0d0a14] border-b border-purple-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/40">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>Tire suas Dúvidas</span>
            <span className="text-purple-600">·</span>
            <span>PERGUNTAS FREQUENTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            TUDO SOBRE A <span className="text-purple-400">ACADEMIA THANOS</span>.
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Perguntas comuns sobre nossos treinos na Rua Francisco Monteiro Dias Nº 380 em Guaranésia - MG.
          </p>
        </div>

        {/* FAQ Accordion list */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#0f0c18] border border-purple-900/40 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white hover:text-purple-400 transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-purple-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-purple-900/30">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Direct Query Callout */}
        <div className="mt-10 p-6 bg-black/60 border border-purple-900/50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white">Ainda tem alguma dúvida sobre os treinos?</div>
            <div className="text-xs text-zinc-400">Fale em tempo real com o professor no WhatsApp: <strong className="text-purple-300">{GYM_INFO.whatsapp.formattedNumber}</strong></div>
          </div>

          <button
            onClick={() => openWhatsApp("Olá Professor! Li as dúvidas frequentes no site e gostaria de fazer uma pergunta sobre a Academia Thanos em Guaranésia.")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl transition-all shadow-md shadow-purple-900/30 active:scale-95 border border-purple-400/30 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white/20 shrink-0" />
            <span>Chamar Professor no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
