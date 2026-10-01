import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';
import { ThanosLogo } from './ThanosLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050408] text-zinc-400 text-xs border-t border-purple-950/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-purple-500/50 bg-black p-0.5 shrink-0">
                <ThanosLogo className="w-full h-full" />
              </div>
              <span className="text-xl font-extrabold tracking-tight font-display text-white">
                ACADEMIA <span className="text-purple-500">THANOS</span>
              </span>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed">
              O seu centro de musculação e alta performance em Guaranésia - MG. Acompanhamento com professores credenciados pelo CREF, ambiente motivador e foco nos seus objetivos.
            </p>

            <div className="pt-2 text-zinc-400 text-[11px]">
              Guaranésia - MG · Registro CREF
            </div>
          </div>

          {/* Col 2: Endereço & Localização Detalhada */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-300">
              Endereço da Unidade
            </div>
            
            <div className="space-y-1.5 text-zinc-300">
              <div className="font-semibold text-white flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>
                  {GYM_INFO.location.street} N ° {GYM_INFO.location.number}
                </span>
              </div>
              <div className="pl-5 text-zinc-400">
                Bairro {GYM_INFO.location.neighborhood}
              </div>
              <div className="pl-5 text-purple-300 font-semibold">
                {GYM_INFO.location.city} - {GYM_INFO.location.state}
              </div>
              <div className="pl-5 text-zinc-400 font-mono text-[11px]">
                CEP {GYM_INFO.location.zipCode}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={GYM_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline text-[11px] font-semibold"
              >
                Abrir no Google Maps →
              </a>
            </div>
          </div>

          {/* Col 3: Horários de Treino */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-300">
              Horários de Funcionamento
            </div>

            <div className="space-y-2 text-zinc-300">
              <div className="flex justify-between border-b border-purple-950/60 pb-1.5">
                <span className="text-zinc-400">Segunda a Sexta:</span>
                <span className="font-medium text-white">{GYM_INFO.hours.weekdays}</span>
              </div>
              <div className="flex justify-between border-b border-purple-950/60 pb-1.5">
                <span className="text-zinc-400">Sábado:</span>
                <span className="font-medium text-white">{GYM_INFO.hours.saturday}</span>
              </div>
              <div className="flex justify-between border-b border-purple-950/60 pb-1.5">
                <span className="text-zinc-400">Domingos:</span>
                <span className="font-semibold text-rose-400">{GYM_INFO.hours.sunday}</span>
              </div>
              <div className="flex justify-between border-b border-purple-950/60 pb-1.5">
                <span className="text-zinc-400">Feriados:</span>
                <span className="font-semibold text-purple-300">{GYM_INFO.hours.holidays}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contato Direto & WhatsApp do Professor */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-300">
              Contato com o Professor
            </div>

            <p className="text-zinc-400 text-xs">
              Tire dúvidas diretamente com a equipe técnica da Academia Thanos:
            </p>

            <button
              onClick={() => openWhatsApp(GYM_INFO.whatsapp.defaultMessage)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl transition-all shadow-md shadow-purple-900/30 active:scale-95 border border-purple-400/30"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp: {GYM_INFO.whatsapp.formattedNumber}</span>
            </button>

            <div className="text-[11px] text-zinc-400 text-center">
              Atendimento em tempo real durante horário de funcionamento
            </div>
          </div>

        </div>

        {/* Quiet Bottom Bar */}
        <div className="pt-8 border-t border-purple-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-[11px]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 text-center sm:text-left">
            <span>
              © {new Date().getFullYear()} Academia Thanos · {GYM_INFO.location.street} N ° {GYM_INFO.location.number} - {GYM_INFO.location.city} - MG.
            </span>
            <span className="hidden sm:inline text-zinc-600">·</span>
            <span className="text-zinc-300">
              Criado por <span className="text-purple-400 font-bold hover:text-purple-300 transition-colors">Abnner Camargo</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#modalidades" className="hover:text-purple-300">Modalidades</a>
            <span>·</span>
            <a href="#planos" className="hover:text-purple-300">Planos</a>
            <span>·</span>
            <a href="#horarios" className="hover:text-purple-300">Horários</a>
            <span>·</span>
            <a href="#localizacao" className="hover:text-purple-300">Localização</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
