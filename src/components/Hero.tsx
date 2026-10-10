import React from 'react';
import { Clock } from 'lucide-react';
import heroLogoImg from '../assets/images/regenerated_image_1791635031117.jpg';

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
      className="relative pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat text-center overflow-hidden w-full max-w-full"
      style={{
        backgroundImage:
          "linear-gradient(rgba(4, 2, 8, 0.92), rgba(12, 6, 22, 0.88)), url('/images/hero_thanos_gym_1790776930154.jpg')",
      }}
    >
      <div className="w-[94%] max-w-[1180px] mx-auto px-2 sm:px-4 flex flex-col items-center">
        {/* Apresentação Incrível e Impactante da Imagem Oficial Enviada pelo Usuário (Fiel, Sem Alterações no Arquivo) */}
        <div className="relative mb-5 sm:mb-7 flex flex-col items-center group">
          {/* Halo de Luz Neon Roxo & Violeta em Camadas */}
          <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-600 rounded-full blur-2xl opacity-60 group-hover:opacity-85 transition-opacity duration-700 animate-pulse pointer-events-none" />

          {/* Moldura de Alta Definição com Anel Iluminado */}
          <div className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full p-1.5 bg-gradient-to-b from-purple-300 via-fuchsia-500 to-purple-950 shadow-[0_0_55px_rgba(168,85,247,0.7)] ring-4 ring-purple-400/50 hover:ring-purple-300 transition-all duration-500 transform hover:scale-105">
            <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center shadow-inner">
              <img
                src={heroLogoImg}
                alt="Logo Oficial da Academia Thanos"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Badge Oficial com Brilho Neon */}
          <div className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#160c2b]/95 border border-purple-400/70 text-[10px] sm:text-xs text-purple-200 tracking-wider uppercase backdrop-blur-md shadow-lg shadow-purple-950/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-ping" />
            <span className="text-white font-bold">GUARANÉSIA - MG</span>
            <span className="text-purple-400">·</span>
            <span className="text-zinc-200">Rua Francisco Monteiro Dias Nº 380</span>
          </div>
        </div>

        {/* Título Principal Centralizado com Espaçamento e Alinhamento Preciso */}
        <div className="mb-4 sm:mb-6 max-w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl text-center leading-tight">
            ACADEMIA{' '}
            <span className="text-purple-400 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              THANOS
            </span>
          </h1>
        </div>

        {/* Texto Enquadrado e Perfeitamente Centralizado para Qualquer Aparelho Celular */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-200 max-w-[700px] mx-auto mb-8 sm:mb-10 leading-relaxed font-light opacity-95 px-2 break-words text-center">
          Musculação de alta performance, biomecânica avançada e acompanhamento direto com professores credenciados pelo CREF presentes no salão em Guaranésia. Resultados reais, disciplina e evolução contínua.
        </p>

        {/* Botões de Ação Centralizados */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 w-full max-w-md sm:max-w-none">
          <button
            onClick={() => scrollToSection('about')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(168,85,247,0.5)] border-2 border-purple-400/50 cursor-pointer text-center"
          >
            <span>CONHECER A ACADEMIA</span>
          </button>

          <button
            onClick={() => scrollToSection('horarios')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#120b22] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-purple-950 hover:text-purple-300 border-2 border-purple-900/60 hover:border-purple-400 cursor-pointer shadow-md text-center"
          >
            <Clock className="w-4 h-4 text-purple-400" />
            <span>VER HORÁRIOS & MODALIDADES</span>
          </button>
        </div>

        {/* 4 Cards de Resumo Rápidos - 100% Centralizados na Grade Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-3xl mx-auto">
          <div className="bg-[#120a22]/90 border border-purple-900/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center flex flex-col items-center justify-center hover:border-purple-400 transition-colors shadow-lg">
            <span className="text-lg sm:text-2xl font-extrabold text-purple-400 block leading-tight text-center">
              R$ 80,00
            </span>
            <span className="text-[11px] sm:text-xs text-zinc-300 font-light mt-1 block leading-tight text-center">
              Plano Mensal Livre
            </span>
          </div>

          <div className="bg-[#120a22]/90 border border-purple-900/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center flex flex-col items-center justify-center hover:border-purple-400 transition-colors shadow-lg">
            <span className="text-lg sm:text-2xl font-extrabold text-white block leading-tight text-center">
              R$ 90,00
            </span>
            <span className="text-[11px] sm:text-xs text-purple-300 font-light mt-1 block leading-tight text-center">
              Plano Thanos VIP
            </span>
          </div>

          <div className="bg-[#120a22]/90 border border-purple-900/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center flex flex-col items-center justify-center hover:border-purple-400 transition-colors shadow-lg">
            <span className="text-lg sm:text-2xl font-extrabold text-purple-400 block leading-tight text-center">
              09h às 12h
            </span>
            <span className="text-[11px] sm:text-xs text-zinc-300 font-light mt-1 block leading-tight text-center">
              Feriados Abertos
            </span>
          </div>

          <div className="bg-[#120a22]/90 border border-purple-900/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center flex flex-col items-center justify-center hover:border-purple-400 transition-colors shadow-lg">
            <span className="text-lg sm:text-2xl font-extrabold text-white block leading-tight text-center">
              100% CREF
            </span>
            <span className="text-[11px] sm:text-xs text-zinc-300 font-light mt-1 block leading-tight text-center">
              Professores Presentes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
