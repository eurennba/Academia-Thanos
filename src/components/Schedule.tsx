import React, { useState } from 'react';
import { Clock, MessageCircle } from 'lucide-react';
import { SCHEDULE_BY_DAY, GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';
import { SectionHeader } from './SectionHeader';

export const Schedule: React.FC = () => {
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Feriados'];
  const [selectedDay, setSelectedDay] = useState('Segunda');

  const classes = SCHEDULE_BY_DAY[selectedDay] || [];

  return (
    <section id="horarios" className="py-24 bg-black border-b border-purple-950/40">
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        <SectionHeader
          title="HORÁRIOS DE FUNCIONAMENTO"
          subtitle="Grade semanal simplificada e horários oficiais da Academia Thanos em Guaranésia."
        />

        {/* Official Hours Overview in Purple & White Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#100c1c] rounded-2xl p-4 border border-purple-950/60 hover:border-purple-500 transition-colors text-center">
            <span className="text-xs text-zinc-400 font-light uppercase tracking-wider block mb-1">
              Segunda a Sexta
            </span>
            <span className="text-lg md:text-xl font-bold text-white">05:30 às 22:00</span>
          </div>

          <div className="bg-[#100c1c] rounded-2xl p-4 border border-purple-950/60 hover:border-purple-500 transition-colors text-center">
            <span className="text-xs text-zinc-400 font-light uppercase tracking-wider block mb-1">
              Sábados
            </span>
            <span className="text-lg md:text-xl font-bold text-white">05:00 às 12:00</span>
          </div>

          <div className="bg-[#150d26] rounded-2xl p-4 border-2 border-purple-500 text-center shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <span className="text-xs text-purple-300 font-bold uppercase tracking-wider block mb-1">
              Feriados
            </span>
            <span className="text-lg md:text-xl font-bold text-purple-300">09:00 às 12:00</span>
          </div>

          <div className="bg-[#100c1c] rounded-2xl p-4 border border-purple-950/60 text-center">
            <span className="text-xs text-zinc-400 font-light uppercase tracking-wider block mb-1">
              Domingos
            </span>
            <span className="text-lg md:text-xl font-bold text-zinc-400">Fechado</span>
          </div>
        </div>

        {/* Day Selector Tabs in Purple & White */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 touch-pan-x">
          {days.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all whitespace-nowrap cursor-pointer ${
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

        {/* Day Classes / Sessions List */}
        <div className="space-y-3.5">
          {classes.length > 0 ? (
            classes.map((item) => (
              <div
                key={item.id}
                className="bg-[#100c1c] border border-purple-950/60 hover:border-purple-500 rounded-2xl p-4 sm:p-5 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* Time & Modality */}
                <div className="flex items-start sm:items-center gap-4">
                  <div className="bg-purple-950/80 border border-purple-800/60 text-purple-300 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap flex items-center gap-1.5 shrink-0">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span>{item.time}</span>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {item.modality}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-zinc-300 font-light mt-0.5">
                      <span>Instrutor: <strong className="text-white font-normal">{item.coach}</strong></span>
                      <span>·</span>
                      <span>{item.room}</span>
                      <span>·</span>
                      <span className="text-purple-300 font-semibold">{item.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Direct reserve action */}
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Olá Professor! Gostaria de participar da aula de *${item.modality}* às ${item.time} (${selectedDay}) na Academia Thanos.`
                    )
                  }
                  className="w-full sm:w-auto bg-[#181326] hover:bg-purple-600 text-white border border-purple-900/50 hover:border-purple-400 px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-purple-400" />
                  <span>Reservar Horário</span>
                </button>
              </div>
            ))
          ) : (
            <div className="bg-[#100c1c] border border-purple-950/60 rounded-2xl p-8 text-center text-zinc-400">
              <p className="text-base font-light">
                Não há aulas coletivas programadas para este dia. O salão opera com treinos livres conforme horário oficial.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
