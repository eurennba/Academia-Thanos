import React, { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { FAQ_ITEMS } from '../data/gymData';
import { SectionHeader } from './SectionHeader';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#08050e] border-b border-purple-950/40">
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        <SectionHeader
          title="DÚVIDAS FREQUENTES"
          subtitle="Tudo o que você precisa saber para começar a treinar na Academia Thanos em Guaranésia."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#100c1c] rounded-2xl border border-purple-950/60 hover:border-purple-500 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#181326] border border-purple-900/50 flex items-center justify-center text-purple-300 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-purple-600 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 font-light leading-relaxed border-t border-purple-950/50">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}

          {/* Callout under FAQ (Sem WhatsApp) */}
          <div className="text-center pt-8">
            <p className="text-sm text-zinc-400 font-light mb-4">
              Ficou com alguma dúvida que não encontrou aqui?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#181326] hover:bg-purple-600 text-white border border-purple-900/50 hover:border-purple-400 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
            >
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Visitar Nossa Recepção em Guaranésia</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
