import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/gymData';
import { SectionHeader } from './SectionHeader';

export const PricingPlans: React.FC = () => {
  return (
    <section id="planos" className="py-24 bg-[#08050e] border-b border-purple-950/40">
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        <SectionHeader
          title="PLANOS & VALORES"
          subtitle="Valores transparentes e justos. Sem fidelidade forçada e sem taxa de matrícula."
        />

        {/* 2 Clean Plans in Purple & White */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isVip = plan.id === 'thanos-vip';

            return (
              <div
                key={plan.id}
                className={`relative bg-[#100c1c] rounded-2xl p-6 sm:p-8 border transition-all duration-500 flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.4)] ${
                  isVip
                    ? 'border-2 border-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.25)] ring-1 ring-purple-400/50'
                    : 'border border-purple-950/60 hover:border-purple-500'
                }`}
              >
                {/* Highlight Badge */}
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md ${
                        isVip
                          ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-400/40'
                          : 'bg-[#181326] text-purple-300 border border-purple-800/60'
                      }`}
                    >
                      {plan.highlight}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="text-center pt-2 mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-xs text-zinc-300 font-light max-w-xs mx-auto leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="text-center py-6 border-y border-purple-950/60 mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm font-semibold text-purple-300">R$</span>
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {plan.priceMonthly.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-xs text-zinc-400 font-light">/ mês</span>
                    </div>
                    <span className="text-[11px] text-purple-400 font-medium block mt-1">
                      {isVip ? 'Musculação + Acompanhamento Avançado' : 'Acesso total à Musculação'}
                    </span>
                  </div>

                  {/* Benefits List */}
                  <ul className="space-y-3 mb-8">
                    {plan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200 font-light">
                        <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Primary CTA - Sem Matrícula no WhatsApp */}
                <div>
                  <a
                    href="#contact"
                    className={`w-full py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                      isVip
                        ? 'bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-purple-400/40'
                        : 'bg-[#181326] text-white hover:bg-purple-600 border border-purple-900/50 hover:border-purple-400'
                    }`}
                  >
                    <span>Fazer Inscrição Presencial</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-[11px] text-center text-zinc-400 font-light mt-3">
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
