import React, { useState } from 'react';
import { Calendar, Clock, MapPin, MessageCircle } from 'lucide-react';
import { SCHEDULE_BY_DAY, ClassScheduleItem } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';

export const Schedule: React.FC = () => {
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo', 'Feriados'];
  const [selectedDay, setSelectedDay] = useState<string>('Segunda');

  const classes: ClassScheduleItem[] = SCHEDULE_BY_DAY[selectedDay] || [];

  return (
    <section id="horarios" className="py-20 bg-[#09090d] border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/40">
              <Calendar className="w-3.5 h-3.5 text-purple-400" />
              <span>Quadro de Aulas & Horários</span>
              <span className="text-zinc-600">·</span>
              <span>Guaranésia - MG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              GRADE DE AULAS <span className="text-purple-400">DINÂMICA</span>.
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              Escolha o dia da semana para conferir as turmas de funcional, mobilidade e musculação assistida.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-zinc-400 flex items-center gap-2 bg-[#0f0c18] px-3.5 py-2 rounded-lg border border-purple-900/40">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>Seg a Sex: <strong>05:30 às 22:00</strong> · Sáb: <strong>07:00 às 16:00</strong> · Feriados: <strong>08:00 a 12:00</strong></span>
          </div>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-black/60 border border-purple-900/50 rounded-xl overflow-x-auto no-scrollbar mb-8">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`flex-1 min-w-[110px] py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all text-center whitespace-nowrap ${
                selectedDay === day
                  ? day === 'Domingo'
                    ? 'bg-rose-900/80 text-white shadow-md shadow-rose-950/40 font-bold border border-rose-500/50'
                    : 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md shadow-purple-900/40 font-bold'
                  : 'text-zinc-400 hover:text-white hover:bg-purple-950/40'
              }`}
            >
              <span>{day}</span>
              {day === 'Domingo' && (
                <span className="text-[10px] text-rose-400 font-bold ml-1">
                  (Fechado)
                </span>
              )}
              {day === 'Feriados' && (
                <span className="text-[10px] text-purple-300 font-bold ml-1">
                  (08h-12h)
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="space-y-3">
          {selectedDay === 'Domingo' ? (
            <div className="p-10 text-center bg-[#0f0c18] rounded-2xl border border-rose-500/30 text-zinc-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-400 mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Aos Domingos: FECHADO</h4>
              <p className="text-sm text-zinc-400 max-w-lg mx-auto">
                A Academia Thanos permanece fechada aos domingos para descanso muscular dos alunos e manutenção dos equipamentos. Esperamos você na segunda-feira a partir das 05:30!
              </p>
            </div>
          ) : classes.length === 0 ? (
            <div className="p-8 text-center bg-[#0f0c18] rounded-2xl border border-purple-900/40 text-zinc-400">
              Nenhuma aula coletiva programada para este dia. Sala de musculação em funcionamento normal.
            </div>
          ) : (
            classes.map((c) => (
              <div
                key={c.id}
                className="bg-[#0f0c18] border border-purple-900/30 hover:border-purple-500/50 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
              >
                {/* Time & Duration */}
                <div className="flex items-center gap-4 sm:w-1/4">
                  <div className="w-10 h-10 rounded-lg bg-black/70 border border-purple-900/60 flex items-center justify-center text-purple-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-extrabold text-white font-mono tabular-nums">
                      {c.time}
                    </div>
                    <div className="text-xs text-zinc-400">
                      Duração: {c.duration}
                    </div>
                  </div>
                </div>

                {/* Modality & Room */}
                <div className="sm:w-2/5">
                  <div className="text-base font-bold text-white group-hover:text-purple-400 transition-colors">
                    {c.modality}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-zinc-400 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-purple-400" />
                      {c.room}
                    </span>
                    <span>·</span>
                    <span className="text-purple-300">{c.level}</span>
                  </div>
                </div>

                {/* Coach & Reservation Action */}
                <div className="flex items-center justify-between sm:justify-end gap-4 sm:w-1/3 pt-3 sm:pt-0 border-t sm:border-t-0 border-purple-950/60">
                  <div className="text-left sm:text-right">
                    <div className="text-xs text-zinc-400">Professor:</div>
                    <div className="text-xs sm:text-sm font-semibold text-zinc-200">
                      {c.coach}
                    </div>
                  </div>

                  <button
                    onClick={() => openWhatsApp(`Olá Professor! Gostaria de reservar minha presença na aula de *${c.modality}* na *${selectedDay}* às *${c.time}* com o professor ${c.coach} na Academia Thanos de Guaranésia.`)}
                    className="flex items-center gap-1.5 py-2 px-3 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg transition-colors whitespace-nowrap active:scale-95 border border-purple-400/30 shadow-sm shadow-purple-900/30"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                    <span>Reservar no WhatsApp</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};
