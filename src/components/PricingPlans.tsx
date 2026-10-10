import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/gymData';
import { SectionHeader } from './SectionHeader';

export const PricingPlans: React.FC = () => {
  return (
    <section id="planos" className="py-20 sm:py-24 bg-[#08050e] border-b border-purple-950/40 w-full max-w-full overflow-hidden">
      <div className="w-[94%] max-w-[1200px] mx-auto px-2 sm:px-4">
        <SectionHeader
          title="PLANOS & VALORES"
          subtitle="Valores transparentes e justos. Sem fidelidade forçada e sem taxa de matrícula."
        />

        {/* 2 Planos Centralizados e Enquadrados para a Grade Mobile & Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isVip = plan.id === 'thanos-vip';

            return (
              <div
                key={plan.id}
                className={`relative bg-[#100c1c] rounded-2xl p-6 sm:p-8 border transition-all duration-500 flex flex-col justify-between items-center text-center shadow-[0_0_30px_rgba(0,0,0,0.4)] ${
                  isVip
                    ? 'border-2 border-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.25)] ring-1 ring-purple-400/50'
                    : 'border border-purple-950/60 hover:border-purple-500'
                }`}
              >
                {/* Badge de Destaque Centralizada */}
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md text-center block whitespace-nowrap ${
                        isVip
                          ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-400/40'
                          : 'bg-[#181326] text-purple-300 border border-purple-800/60'
                      }`}
                    >
                      {plan.highlight}
                    </span>
                  </div>
                )}

                <div className="w-full flex flex-col items-center text-center">
                  {/* Nome do Plano & Slogan Centralizados */}
                  <div className="text-center pt-2 mb-5 w-full">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 text-center">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-xs mx-auto leading-relaxed text-center">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Bloco de Preço 100% Centralizado */}
                  <div className="text-center py-5 border-y border-purple-950/60 mb-6 w-full flex flex-col items-center justify-center">
                    <div className="flex items-baseline justify-center gap-1 text-center">
                      <span className="text-sm font-semibold text-purple-300">R$</span>
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        {plan.priceMonthly.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-xs text-zinc-400 font-light">/ mês</span>
                    </div>
                    <span className="text-xs text-purple-400 font-medium block mt-1.5 text-center">
                      {isVip ? 'Musculação + Acompanhamento Avançado' : 'Acesso total e irrestrito à Musculação'}
                    </span>
                  </div>

                  {/* Lista de Benefícios Centralizada para Caber na Grade sem Erro */}
                  <ul className="space-y-3 mb-8 w-full max-w-sm mx-auto flex flex-col items-center text-center">
                    {plan.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-200 font-light text-center"
                      >
                        <Check className="w-4 h-4 text-purple-400 shrink-0" />
                        <span className="text-center">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botão de Ação Centralizado */}
                <div className="w-full text-center">
                  <a
                    href="#contact"
                    className={`w-full py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg text-center ${
                      isVip
                        ? 'bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-purple-400/40'
                        : 'bg-[#181326] text-white hover:bg-purple-600 border border-purple-900/50 hover:border-purple-400'
                    }`}
                  >
                    <span>Fazer Inscrição Presencial</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-[11px] text-center text-zinc-400 font-light mt-3 max-w-xs mx-auto">
                    Matrícula realizada diretamente na recepção na Rua Francisco Monteiro Dias Nº 380
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
