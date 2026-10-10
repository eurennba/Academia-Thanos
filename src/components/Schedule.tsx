import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { SCHEDULE_BY_DAY } from '../data/gymData';
import { SectionHeader } from './SectionHeader';

export const Schedule: React.FC = () => {
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Feriados'];
  const [selectedDay, setSelectedDay] = useState('Segunda');

  const classes = SCHEDULE_BY_DAY[selectedDay] || [];

  return (
    <section id="horarios" className="py-20 sm:py-24 bg-black border-b border-purple-950/40 w-full max-w-full overflow-hidden">
      <div className="w-[94%] max-w-[1200px] mx-auto px-2 sm:px-4">
        <SectionHeader
          title="HORÁRIOS DE FUNCIONAMENTO"
          subtitle="Grade semanal simplificada e horários oficiais da Academia Thanos em Guaranésia."
        />

        {/* Grade de Horários Oficiais - Letras e textos 100% centralizados para mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12 max-w-4xl mx-auto">
          <div className="bg-[#100c1c] rounded-2xl p-4 sm:p-5 border border-purple-950/60 hover:border-purple-500 transition-colors text-center flex flex-col items-center justify-center">
            <span className="text-[11px] sm:text-xs text-zinc-400 font-light uppercase tracking-wider block mb-1.5 text-center">
              Segunda a Sexta
            </span>
            <span className="text-base sm:text-lg md:text-xl font-bold text-white text-center leading-tight">
              05:30 às 22:00
            </span>
          </div>

          <div className="bg-[#100c1c] rounded-2xl p-4 sm:p-5 border border-purple-950/60 hover:border-purple-500 transition-colors text-center flex flex-col items-center justify-center">
            <span className="text-[11px] sm:text-xs text-zinc-400 font-light uppercase tracking-wider block mb-1.5 text-center">
              Sábados
            </span>
            <span className="text-base sm:text-lg md:text-xl font-bold text-white text-center leading-tight">
              05:00 às 12:00
            </span>
          </div>

          <div className="bg-[#150d26] rounded-2xl p-4 sm:p-5 border-2 border-purple-500 text-center flex flex-col items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.25)]">
            <span className="text-[11px] sm:text-xs text-purple-300 font-bold uppercase tracking-wider block mb-1.5 text-center">
              Feriados
            </span>
            <span className="text-base sm:text-lg md:text-xl font-bold text-purple-300 text-center leading-tight">
              09:00 às 12:00
            </span>
          </div>

          <div className="bg-[#100c1c] rounded-2xl p-4 sm:p-5 border border-purple-950/60 text-center flex flex-col items-center justify-center">
            <span className="text-[11px] sm:text-xs text-zinc-400 font-light uppercase tracking-wider block mb-1.5 text-center">
              Domingos
            </span>
            <span className="text-base sm:text-lg md:text-xl font-bold text-zinc-400 text-center leading-tight">
              Fechado
            </span>
          </div>
        </div>

        {/* Seletor de Dias Centralizado */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 w-full max-w-full px-1 text-center touch-pan-x">
          {days.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all whitespace-nowrap cursor-pointer text-center shrink-0 ${
                  isSelected
                    ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-400/40'
                    : 'bg-[#100c1c] text-zinc-300 border border-purple-950/60 hover:border-purple-400 hover:text-white'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Grade de Treinos & Sessões do Dia - Textos 100% Centralizados para Mobile */}
        <div className="space-y-3.5 max-w-4xl mx-auto">
          {classes.length > 0 ? (
            classes.map((item) => (
              <div
                key={item.id}
                className="bg-[#100c1c] border border-purple-950/60 hover:border-purple-500 rounded-2xl p-4 sm:p-5 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
              >
                {/* Horário & Modality com alinhamento centralizado no mobile */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left w-full sm:w-auto">
                  <div className="bg-purple-950/80 border border-purple-800/60 text-purple-300 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap flex items-center justify-center gap-1.5 shrink-0 mx-auto sm:mx-0 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span>{item.time}</span>
                  </div>

                  <div className="text-center sm:text-left w-full">
                    <h4 className="text-base sm:text-lg font-bold text-white text-center sm:text-left">
                      {item.modality}
                    </h4>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-xs text-zinc-300 font-light mt-1 text-center sm:text-left">
                      <span>Instrutor: <strong className="text-white font-normal">{item.coach}</strong></span>
                      <span className="hidden sm:inline text-purple-500">·</span>
                      <span>{item.room}</span>
                      <span className="hidden sm:inline text-purple-500">·</span>
                      <span className="text-purple-300 font-semibold">{item.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Badge de Horário Orientado no Salão - Centralizado no Mobile */}
                <div className="shrink-0 w-full sm:w-auto text-center">
                  <span className="inline-block bg-[#160d26] text-purple-300 border border-purple-900/50 px-4 py-2 rounded-xl text-xs font-semibold text-center w-full sm:w-auto">
                    Acompanhamento no Salão
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-[#100c1c] border border-purple-950/60 rounded-2xl p-8 text-center text-zinc-400">
              <p className="text-sm sm:text-base font-light text-center">
                Não há aulas coletivas programadas para este dia. O salão opera com treinos livres conforme horário oficial.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
