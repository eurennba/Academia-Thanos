import React from 'react';
import { MessageCircle, Flame } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  return (
    <section
      id="home"
      className="relative pt-36 md:pt-44 pb-20 md:pb-28 min-h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.88), rgba(10, 5, 20, 0.82)), url('/images/hero_thanos_gym_1790776930154.jpg')",
      }}
    >
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        {/* Subtle badge with official address */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/50 text-xs text-purple-300 tracking-widest uppercase backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
          <span className="text-white font-semibold">Guaranésia - MG</span>
          <span className="text-purple-400">·</span>
          <span>Rua Francisco Monteiro Dias Nº 380</span>
        </div>

        {/* Logo do lado do Título Principal (sem alterar nada da imagem) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden shrink-0 shadow-2xl">
            <img
              src="/images/thanos_gym_logo_1790776940958.jpg"
              alt="Logo Oficial Academia Thanos High Performance Academy"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/thanos_official_logo.svg';
              }}
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg text-center sm:text-left">
            ACADEMIA <span className="text-purple-400">THANOS</span>
          </h1>
        </div>

        {/* Concise and direct paragraph without funcional */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-[760px] mx-auto mb-10 leading-relaxed font-light opacity-95">
          Infraestrutura completa de musculação pesada, biomecânica de ponta e acompanhamento técnico de professores credenciados pelo CREF em Guaranésia. Treine com foco e evolução real.
        </p>

        {/* Action Buttons in Purple & White */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto inline-block bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] group border-2 border-purple-500 hover:border-purple-300 cursor-pointer"
          >
            AULA EXPERIMENTAL GRATUITA <Flame className="w-4 h-4 inline-block ml-1" />
          </button>

          <button
            onClick={() => openWhatsApp(GYM_INFO.whatsapp.defaultMessage)}
            className="w-full sm:w-auto inline-block bg-[#120e1f] text-white px-8 py-3.5 rounded-full font-bold text-base transition-all duration-300 hover:bg-purple-950 hover:text-purple-300 border-2 border-purple-900/60 hover:border-purple-400 cursor-pointer shadow-md"
          >
            <MessageCircle className="w-4 h-4 inline-block mr-2 text-purple-400" />
            FALAR NO WHATSAPP
          </button>
        </div>

        {/* 4 Clean Summary Cards in Purple & White aesthetic */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
          <div className="bg-[#120e1f] border border-purple-900/50 rounded-2xl p-4 text-center hover:border-purple-500 transition-colors">
            <span className="text-xl sm:text-2xl font-bold text-purple-400 block">R$ 80,00</span>
            <span className="text-xs text-zinc-300 font-light mt-1 block">Plano Mensal Livre</span>
          </div>

          <div className="bg-[#120e1f] border border-purple-900/50 rounded-2xl p-4 text-center hover:border-purple-500 transition-colors">
            <span className="text-xl sm:text-2xl font-bold text-white block">R$ 90,00</span>
            <span className="text-xs text-purple-300 font-light mt-1 block">Plano Thanos VIP</span>
          </div>

          <div className="bg-[#120e1f] border border-purple-900/50 rounded-2xl p-4 text-center hover:border-purple-500 transition-colors">
            <span className="text-xl sm:text-2xl font-bold text-purple-400 block">09h às 12h</span>
            <span className="text-xs text-zinc-300 font-light mt-1 block">Feriados Abertos</span>
          </div>

          <div className="bg-[#120e1f] border border-purple-900/50 rounded-2xl p-4 text-center hover:border-purple-500 transition-colors">
            <span className="text-xl sm:text-2xl font-bold text-white block">100% CREF</span>
            <span className="text-xs text-zinc-300 font-light mt-1 block">Professores no Salão</span>
          </div>
        </div>
      </div>
    </section>
  );
};
