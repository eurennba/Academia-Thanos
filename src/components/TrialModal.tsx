import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, User, Phone } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultModality?: string;
  defaultCoach?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  defaultModality = 'Musculação & Hipertrofia',
  defaultCoach,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [modality, setModality] = useState(defaultModality);
  const [preferredShift, setPreferredShift] = useState('Manhã (06:00 às 11:00)');
  const [preferredDate, setPreferredDate] = useState('Hoje / Amanhã');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setSubmitted(true);

    const message = `Olá Professor da Academia Thanos em Guaranésia!
Meu nome é *${name.trim()}* (Tel: ${phone.trim()}).
Gostaria de agendar minha *AULA EXPERIMENTAL GRATUITA*:
- Modalidade: ${modality}
- Turno: ${preferredShift}
- Dia pretendido: ${preferredDate}
${defaultCoach ? `- Gostaria de treinar com o professor: ${defaultCoach}` : ''}
- Local da Academia: ${GYM_INFO.location.street} Nº ${GYM_INFO.location.number}, ${GYM_INFO.location.city} - MG

Podemos confirmar meu acesso? Obrigado!`;

    setTimeout(() => {
      openWhatsApp(message);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#100c1c] border border-purple-900/60 rounded-2xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg bg-[#181326] border border-purple-950 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white bg-purple-600 px-3 py-1 rounded-full inline-block mb-3 shadow-md shadow-purple-950">
                100% Gratuita · Sem Compromisso
              </span>
              <h3 className="text-2xl font-bold text-white">
                Agende sua Aula Experimental
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light mt-1">
                Conheça a estrutura da Academia Thanos em Guaranésia ({GYM_INFO.location.street} Nº {GYM_INFO.location.number}) e treine acompanhado por um professor.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Seu Nome Completo
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-purple-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Ex: João da Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#181326] border border-purple-950 focus:border-purple-400 rounded-xl pl-9 pr-4 py-3 text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Seu WhatsApp
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-purple-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="(35) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#181326] border border-purple-950 focus:border-purple-400 rounded-xl pl-9 pr-4 py-3 text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Modalidade
                  </label>
                  <select
                    value={modality}
                    onChange={(e) => setModality(e.target.value)}
                    className="w-full bg-[#181326] border border-purple-950 focus:border-purple-400 rounded-xl px-3 py-3 text-base sm:text-xs text-white focus:outline-none transition-colors"
                  >
                    <option value="Musculação & Hipertrofia">Musculação & Hipertrofia</option>
                    <option value="Personal Trainer">Personal Trainer Dedicado</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Turno Preferido
                  </label>
                  <select
                    value={preferredShift}
                    onChange={(e) => setPreferredShift(e.target.value)}
                    className="w-full bg-[#181326] border border-purple-950 focus:border-purple-400 rounded-xl px-3 py-3 text-base sm:text-xs text-white focus:outline-none transition-colors"
                  >
                    <option value="Manhã (05:30 às 12:00)">Manhã (05:30 às 12:00)</option>
                    <option value="Tarde (12:00 às 18:00)">Tarde (12:00 às 18:00)</option>
                    <option value="Noite (18:00 às 22:00)">Noite (18:00 às 22:00)</option>
                    <option value="Sábado (05:00 às 12:00)">Sábado (05:00 às 12:00)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Dia Previsto
                </label>
                <select
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-[#181326] border border-purple-950 focus:border-purple-400 rounded-xl px-3 py-3 text-base sm:text-xs text-white focus:outline-none transition-colors"
                >
                  <option value="Hoje">Hoje</option>
                  <option value="Amanhã">Amanhã</option>
                  <option value="Próxima Segunda-feira">Próxima Segunda-feira</option>
                  <option value="Neste Fim de Semana">Neste Fim de Semana</option>
                  <option value="A combinar com o professor">A combinar no WhatsApp</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider py-4 px-4 rounded-xl transition-all shadow-lg shadow-purple-950 flex items-center justify-center gap-2 cursor-pointer border border-purple-400/40"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirmar & Abrir no WhatsApp</span>
                </button>
                <div className="text-[11px] text-center text-zinc-400 font-light mt-2">
                  Atendimento direto pelo número {GYM_INFO.whatsapp.formattedNumber}
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-600/20 border-2 border-purple-500 text-purple-300 flex items-center justify-center mx-auto shadow-lg shadow-purple-950">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Vaga Pré-Agendada!
            </h3>

            <p className="text-sm text-zinc-300 font-light max-w-sm mx-auto">
              Sua solicitação foi enviada para o professor da Academia Thanos. A conversa no WhatsApp foi iniciada para confirmar seu acesso.
            </p>

            <div className="p-4 bg-[#181326] rounded-xl border border-purple-950 text-left text-xs space-y-1.5 max-w-xs mx-auto text-zinc-300">
              <div>Aluno: <strong className="text-white">{name}</strong></div>
              <div>Modalidade: <span className="text-purple-300 font-semibold">{modality}</span></div>
              <div>Turno: <span>{preferredShift}</span></div>
              <div className="text-[11px] text-zinc-400 pt-1 border-t border-purple-950">
                Local: {GYM_INFO.location.street} Nº {GYM_INFO.location.number}, {GYM_INFO.location.city} - MG
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  handleSubmit({ preventDefault: () => {} } as any);
                }}
                className="w-full py-3 px-4 text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-purple-950"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reabrir WhatsApp do Professor</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2 px-4 text-xs text-zinc-400 hover:text-white cursor-pointer"
              >
                Fechar janela
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
