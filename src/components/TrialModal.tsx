import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Sparkles, User, Phone } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';
import { ThanosLogo } from './ThanosLogo';

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
  defaultCoach
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
${defaultCoach ? `- Gostaria de treinar com o(a) professor(a): ${defaultCoach}` : ''}
- Local da Academia: ${GYM_INFO.location.street} Nº ${GYM_INFO.location.number}, ${GYM_INFO.location.city} - MG

Podemos confirmar meu acesso? Obrigado!`;

    setTimeout(() => {
      openWhatsApp(message);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0f0c18] border border-purple-500/50 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950/60 text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg bg-black/60 border border-purple-900/50 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header with Logo */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-purple-500/50 bg-black p-0.5 shrink-0 shadow-lg shadow-purple-900/40">
                <ThanosLogo className="w-full h-full" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-400 mb-1 bg-purple-950/60 px-2.5 py-0.5 rounded border border-purple-800/40">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Aula Gratuita · 100% Cortesia</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Agende sua Aula Experimental
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 -mt-3 mb-6">
              Conheça a estrutura da Academia Thanos em Guaranésia ({GYM_INFO.location.street} N ° {GYM_INFO.location.number}) e treine um dia com acompanhamento de um professor.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Seu Nome Completo
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Ex: João da Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/60 border border-purple-900/60 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Seu WhatsApp / Telefone
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="(35) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-black/60 border border-purple-900/60 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400"
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
                    className="w-full bg-black/60 border border-purple-900/60 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="Musculação & Hipertrofia">Musculação & Hipertrofia</option>
                    <option value="Treinamento Funcional">Treinamento Funcional</option>
                    <option value="Personal Trainer">Personal Trainer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Turno Preferido
                  </label>
                  <select
                    value={preferredShift}
                    onChange={(e) => setPreferredShift(e.target.value)}
                    className="w-full bg-black/60 border border-purple-900/60 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-purple-400"
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
                  Dia de Treino Previsto
                </label>
                <select
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-black/60 border border-purple-900/60 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-purple-400"
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
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-extrabold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-500 hover:to-purple-600 rounded-xl transition-all shadow-lg shadow-purple-900/50 active:scale-95 border border-purple-400/40"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Confirmar & Abrir no WhatsApp: (35) 99135-9857</span>
                </button>
                <div className="text-[11px] text-center text-zinc-400 mt-2">
                  Aula 100% gratuita na Rua Francisco Monteiro Dias N ° 380, Guaranésia.
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-950/80 border border-purple-400 text-purple-300 flex items-center justify-center mx-auto shadow-lg shadow-purple-950">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold font-display text-white">
              Vaga Pré-Agendada!
            </h3>

            <p className="text-sm text-zinc-300 max-w-sm mx-auto">
              Sua solicitação foi enviada para o professor. A conversa no WhatsApp foi iniciada para confirmar seu acesso livre à academia em Guaranésia.
            </p>

            <div className="p-4 bg-black/60 rounded-xl border border-purple-900/50 text-left text-xs space-y-1.5 max-w-xs mx-auto font-mono text-zinc-300">
              <div>Aluno: <strong className="text-white">{name}</strong></div>
              <div>Modalidade: <span className="text-purple-300">{modality}</span></div>
              <div>Turno: <span>{preferredShift}</span></div>
              <div className="text-[11px] text-zinc-400 pt-1 border-t border-purple-900/40">
                Local: {GYM_INFO.location.street} Nº {GYM_INFO.location.number}, {GYM_INFO.location.city} - MG
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  handleSubmit({ preventDefault: () => {} } as any);
                }}
                className="w-full py-3 px-4 text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Reenviar WhatsApp do Professor</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2 px-4 text-xs text-zinc-400 hover:text-white"
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
