import React from 'react';
import { CreditCard, Clock, MapPin, Award } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-24 min-h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat text-center overflow-hidden w-full max-w-full"
      style={{
        backgroundImage:
          "linear-gradient(rgba(4, 2, 8, 0.92), rgba(12, 6, 22, 0.88)), url('/images/hero_thanos_gym_1790776930154.jpg')",
      }}
    >
      <div className="w-[94%] max-w-[1180px] mx-auto px-2 sm:px-4 flex flex-col items-center">
        {/* Subtle badge with official address */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-5 sm:mb-7 px-3.5 sm:px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/50 text-[11px] sm:text-xs text-purple-300 tracking-wider uppercase backdrop-blur-md max-w-full truncate shadow-lg shadow-purple-950/50">
          <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0 animate-ping" />
          <span className="text-white font-semibold">Guaranésia - MG</span>
          <span className="text-purple-400">·</span>
          <span className="truncate">Rua Francisco Monteiro Dias Nº 380</span>
        </div>

        {/* Título Principal Centralizado - SEM LOGO */}
        <div className="mb-6 max-w-full">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-2xl text-center leading-none">
            ACADEMIA{' '}
            <span className="text-purple-400 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              THANOS
            </span>
          </h1>
        </div>

        {/* Texto Direto ao Ponto e enquadrado para qualquer celular */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-200 max-w-[720px] mx-auto mb-8 sm:mb-10 leading-relaxed font-light opacity-95 px-2 break-words">
          Musculação de alta performance, biomecânica avançada e professores credenciados pelo CREF presentes no salão em Guaranésia. Resultados reais, disciplina e evolução constante.
        </p>

        {/* Action Buttons in Purple & White */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 w-full max-w-md sm:max-w-none">
          <button
            onClick={() => scrollToSection('about')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base tracking-tight transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(168,85,247,0.5)] border-2 border-purple-400/50 cursor-pointer"
          >
            <span>CONHECER A ACADEMIA</span>
          </button>

          <button
            onClick={() => scrollToSection('horarios')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#120b22] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base tracking-tight transition-all duration-300 hover:bg-purple-950 hover:text-purple-300 border-2 border-purple-900/60 hover:border-purple-400 cursor-pointer shadow-md"
          >
            <Clock className="w-4 h-4 text-purple-400" />
            <span>VER HORÁRIOS & MODALIDADES</span>
          </button>
        </div>

        {/* 4 Cards de Resumo Rápidos em Roxo e Branco (Enquadrados para Mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-3xl mx-auto">
          <div className="bg-[#120a22]/90 border border-purple-900/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:border-purple-400 transition-colors shadow-lg">
            <span className="text-lg sm:text-2xl font-extrabold text-purple-400 block leading-tight">
              R$ 80,00
            </span>
            <span className="text-[11px] sm:text-xs text-zinc-300 font-light mt-1 block leading-tight">
              Plano Mensal Livre
            </span>
          </div>

          <div className="bg-[#120a22]/90 border border-purple-900/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:border-purple-400 transition-colors shadow-lg">
            <span className="text-lg sm:text-2xl font-extrabold text-white block leading-tight">
              R$ 90,00
            </span>
            <span className="text-[11px] sm:text-xs text-purple-300 font-light mt-1 block leading-tight">
              Plano Thanos VIP
            </span>
          </div>

          <div className="bg-[#120a22]/90 border border-purple-900/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:border-purple-400 transition-colors shadow-lg">
            <span className="text-lg sm:text-2xl font-extrabold text-purple-400 block leading-tight">
              09h às 12h
            </span>
            <span className="text-[11px] sm:text-xs text-zinc-300 font-light mt-1 block leading-tight">
              Feriados Abertos
            </span>
          </div>

          <div className="bg-[#120a22]/90 border border-purple-900/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:border-purple-400 transition-colors shadow-lg">
            <span className="text-lg sm:text-2xl font-extrabold text-white block leading-tight">
              100% CREF
            </span>
            <span className="text-[11px] sm:text-xs text-zinc-300 font-light mt-1 block leading-tight">
              Professores Presentes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
