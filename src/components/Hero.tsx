import React from 'react';
import { MessageCircle, Flame, ArrowRight, MapPin } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';
import { ThanosLogo } from './ThanosLogo';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center bg-[#09090d] overflow-hidden pt-8 pb-16">
      {/* Background Image with Cinematic Purple Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_thanos_gym_1790776930154.jpg"
          alt="Academia Thanos Estrutura de Musculação e Alta Performance em Guaranésia"
          className="w-full h-full object-cover object-center brightness-45 scale-105"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-[#09090d]/85 to-[#09090d]/50" />
        <div className="absolute inset-0 bg-radial from-purple-700/20 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Official Emblem + Quality Marker */}
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-purple-500/70 shadow-xl shadow-purple-950/70 bg-black p-0.5 shrink-0">
              <ThanosLogo className="w-full h-full" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 tracking-wide uppercase bg-purple-950/60 border border-purple-500/30 px-3 py-1 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-zinc-200">GUARANÉSIA - MG</span>
                <span className="text-purple-400">·</span>
                <span>RUA FRANCISCO MONTEIRO DIAS N° 380</span>
              </div>
              <div className="text-[11px] text-zinc-400 font-mono tracking-wider uppercase mt-1">
                Thanos High Performance Academy
              </div>
            </div>
          </div>

          {/* Main Titan Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-display leading-[1.05] text-balance mb-6">
            O SEU CORPO MAIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500">FORTE E IMPARÁVEL</span>.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl mb-8">
            A academia com melhor infraestrutura de musculação pesada, funcional e acompanhamento de professores credenciados em Guaranésia. Equipamentos biomecânicos e ambiente de alto rendimento.
          </p>

          {/* Primary Action Zone */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={() => openWhatsApp(GYM_INFO.whatsapp.defaultMessage)}
              className="group flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-500 hover:to-purple-600 rounded-xl transition-all shadow-xl shadow-purple-900/40 active:scale-95 whitespace-nowrap border border-purple-400/40"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 fill-white/40" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-purple-200 uppercase tracking-wider">WhatsApp Oficial: (35) 99135-9857</div>
                <div className="text-sm sm:text-base font-extrabold leading-tight">Falar com o Professor no WhatsApp</div>
              </div>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenTrialModal}
              className="flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white bg-black/70 hover:bg-zinc-900 border border-purple-800/60 hover:border-purple-400/60 rounded-xl transition-all active:scale-95 whitespace-nowrap backdrop-blur-sm shadow-md"
            >
              <Flame className="w-4 h-4 text-purple-400" />
              <span>Aula Experimental Grátis</span>
            </button>
          </div>

          {/* Direct Address Badge for Instant Recognition */}
          <div className="p-4 bg-[#110e1c]/90 border border-purple-900/50 rounded-xl backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
              <span>
                <strong className="text-white">{GYM_INFO.location.street} N ° {GYM_INFO.location.number}</strong> — <span className="text-purple-300 font-semibold">{GYM_INFO.location.city} - {GYM_INFO.location.state}</span>
              </span>
            </div>
            <a
              href="#localizacao"
              className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 text-xs"
            >
              Ver mapa e direções →
            </a>
          </div>
        </div>

        {/* Hero Trust Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-purple-900/30">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">
              R$ 80,00
            </span>
            <span className="text-xs sm:text-sm text-purple-300/80 mt-0.5">Plano Mensal Sem Fidelidade</span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-display tabular-nums">
              R$ 90,00
            </span>
            <span className="text-xs sm:text-sm text-zinc-400 mt-0.5">Plano Thanos VIP Completo</span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">
              100% CREF
            </span>
            <span className="text-xs sm:text-sm text-zinc-400 mt-0.5">Professores no Salão</span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums flex items-center gap-1">
              05:30h
            </span>
            <span className="text-xs sm:text-sm text-zinc-400 mt-0.5">Abertura Cedo para Treinar</span>
          </div>
        </div>
      </div>
    </section>
  );
};
