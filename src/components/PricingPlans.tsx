import React, { useState } from 'react';
import { Check, Zap, MessageCircle } from 'lucide-react';
import { PRICING_PLANS, PricingPlan, GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';

export const PricingPlans: React.FC = () => {
  const [cycle, setCycle] = useState<'mensal' | 'trimestral'>('mensal');

  const getPrice = (plan: PricingPlan) => {
    if (cycle === 'trimestral') return plan.priceQuarterly;
    return plan.priceMonthly;
  };

  const handleEnrollWhatsApp = (planName: string, price: number) => {
    const cycleText = cycle === 'mensal' ? 'Mensal' : 'Trimestral';
    const message = `Olá Professor! Gostaria de me matricular no *${planName}* (${cycleText}) por R$ ${price.toFixed(2).replace('.', ',')}/mês na Academia Thanos de Guaranésia - MG. Como posso finalizar minha inscrição?`;
    openWhatsApp(message);
  };

  return (
    <section id="planos" className="py-20 bg-[#09090d] border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/40">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>Valores Transparentes</span>
            <span className="text-purple-600">·</span>
            <span>SEM TAXA DE ADESÃO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            ESCOLHA SEU PLANO NA <span className="text-purple-400">ACADEMIA THANOS</span>.
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Preços justos e acessíveis para você treinar com a melhor infraestrutura de Guaranésia - MG.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-8 inline-flex items-center p-1 bg-black/60 border border-purple-900/50 rounded-xl">
            <button
              onClick={() => setCycle('mensal')}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all ${
                cycle === 'mensal'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md shadow-purple-900/40'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Mensal (R$ 80 / R$ 90)
            </button>

            <button
              onClick={() => setCycle('trimestral')}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
                cycle === 'trimestral'
                  ? 'bg-purple-900 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Trimestral
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid - 2 centered cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const currentPrice = getPrice(plan);
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#18112b] to-[#100b1d] border-2 border-purple-500 shadow-2xl shadow-purple-950/60 scale-100 md:-translate-y-2'
                    : 'bg-[#0f0c18] border border-purple-900/40 hover:border-purple-700/60'
                }`}
              >
                {/* Popular Highlight Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-extrabold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg shadow-purple-900/50 border border-purple-300/30">
                    {plan.highlight}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price display with explicit R$ 80,00 and R$ 90,00 values */}
                  <div className="py-4 border-y border-purple-900/40 mb-6 bg-black/20 -mx-7 px-7">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-purple-400 font-semibold">R$</span>
                      <span className="text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                        {currentPrice.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-xs text-zinc-400">/mês</span>
                    </div>
                    <div className="text-[11px] text-purple-300 font-medium mt-1">
                      {plan.id === 'mensal' ? 'Plano Mensal individual sem taxa de cancelamento' : 'Acesso completo a todas as modalidades'}
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-purple-300/80">
                      Vantagens inclusas:
                    </div>
                    {plan.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-tight">
                        <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Button to WhatsApp */}
                <button
                  onClick={() => handleEnrollWhatsApp(plan.name, currentPrice)}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold rounded-xl transition-all shadow-md active:scale-95 whitespace-nowrap ${
                    isPopular
                      ? 'bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:from-purple-400 hover:to-purple-600 text-white shadow-purple-900/40 border border-purple-300/30'
                      : 'bg-zinc-900 hover:bg-purple-950/60 text-white border border-purple-900/60'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-current/20" />
                  <span>Matricular no WhatsApp ({GYM_INFO.whatsapp.formattedNumber})</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Location & Payment reassurance */}
        <div className="mt-12 text-center text-xs text-zinc-400 border-t border-purple-900/30 pt-6 space-y-1">
          <div>
            Pagamento via <strong>Pix</strong>, <strong>Cartão de Crédito</strong> e <strong>Débito</strong> sem taxa de matrícula.
          </div>
          <div className="text-purple-300 font-medium">
            Local: {GYM_INFO.location.street} Nº {GYM_INFO.location.number} — Guaranésia - MG
          </div>
        </div>

      </div>
    </section>
  );
};
