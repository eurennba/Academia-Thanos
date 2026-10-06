import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Clock, MessageCircle, Car, Shield, Wifi, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${GYM_INFO.location.street} Nº ${GYM_INFO.location.number}, ${GYM_INFO.location.neighborhood}, ${GYM_INFO.location.city} - ${GYM_INFO.location.state}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-20 bg-[#09090d] border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/40">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Onde Estamos</span>
              <span className="text-zinc-600">·</span>
              <span>GUARANÉSIA - MG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
              LOCALIZAÇÃO DA <span className="text-purple-400">ACADEMIA THANOS</span>.
            </h2>
            <p className="text-base text-zinc-400 mt-2 max-w-xl">
              Fácil acesso na Rua Francisco Monteiro Dias com estacionamento e estrutura completa.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-purple-300 flex items-center gap-2 bg-[#0f0c18] px-4 py-2.5 rounded-xl border border-purple-900/50">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Guaranésia - Minas Gerais</span>
          </div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Detailed Street, Number, City Card */}
          <div className="lg:col-span-6 bg-[#0f0c18] border border-purple-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-purple-950/30">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-purple-900/40">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Endereço Oficial da Unidade
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Aberta para Treino
                </span>
              </div>

              {/* Big highlighted address blocks */}
              <div className="space-y-4 my-6">
                {/* Nome da Rua */}
                <div className="p-4 bg-black/60 rounded-xl border border-purple-900/40">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-0.5">
                    Nome da Rua
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-display">
                    {GYM_INFO.location.street}
                  </div>
                </div>

                {/* Número e Cidade */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-black/60 rounded-xl border border-purple-900/40">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-0.5">
                      Número do Local
                    </div>
                    <div className="text-xl sm:text-2xl font-extrabold text-purple-400 font-mono">
                      N ° {GYM_INFO.location.number}
                    </div>
                  </div>

                  <div className="p-4 bg-black/60 rounded-xl border border-purple-900/40">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-0.5">
                      Cidade / Estado
                    </div>
                    <div className="text-xl sm:text-2xl font-extrabold text-white font-display">
                      {GYM_INFO.location.city} - {GYM_INFO.location.state}
                    </div>
                  </div>
                </div>

                {/* Bairro, CEP e Contato */}
                <div className="p-4 bg-black/60 rounded-xl border border-purple-900/40 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400">Bairro:</span>
                    <strong className="text-white">{GYM_INFO.location.neighborhood}</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400">CEP:</span>
                    <span className="font-mono text-zinc-300">{GYM_INFO.location.zipCode}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pt-2 border-t border-purple-900/40">
                    <span className="text-purple-400 font-semibold">Contato / WhatsApp:</span>
                    <strong className="text-white font-mono text-sm">{GYM_INFO.whatsapp.formattedNumber}</strong>
                  </div>
                </div>
              </div>

              {/* Facilities tags */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-xs text-zinc-300 bg-black/40 p-2.5 rounded-lg border border-purple-900/40">
                  <Car className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Estacionamento</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300 bg-black/40 p-2.5 rounded-lg border border-purple-900/40">
                  <Shield className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Armários Privativos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300 bg-black/40 p-2.5 rounded-lg border border-purple-900/40">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Duchas Quentes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300 bg-black/40 p-2.5 rounded-lg border border-purple-900/40">
                  <Wifi className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Wi-Fi Livre</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-purple-900/40 space-y-3">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={handleCopy}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-white bg-black/60 hover:bg-purple-950/60 rounded-xl transition-colors border border-purple-900/50 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copiado com sucesso!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-purple-400" />
                      <span>Copiar Endereço Completo</span>
                    </>
                  )}
                </button>

                <a
                  href={GYM_INFO.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-black/60 hover:bg-purple-950/60 rounded-xl transition-colors border border-purple-900/50"
                >
                  <Navigation className="w-4 h-4 text-purple-400" />
                  <span>Abrir Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>

              <button
                onClick={() => openWhatsApp(`Olá Professor! Estou indo para a Academia Thanos em Guaranésia no endereço: ${GYM_INFO.location.street} Nº ${GYM_INFO.location.number}. Pode me passar pontos de referência?`)}
                className="w-full flex items-center justify-center gap-2 py-3 px-3 sm:px-4 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl transition-all shadow-md shadow-purple-900/30 active:scale-95 border border-purple-400/30 text-center cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20 shrink-0" />
                <span>Pedir Rota ao Professor no WhatsApp ({GYM_INFO.whatsapp.formattedNumber})</span>
              </button>
            </div>
          </div>

          {/* Interactive Map & Operating Hours Visual */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Map Graphic Preview Card */}
            <div className="bg-[#0f0c18] border border-purple-900/40 rounded-2xl overflow-hidden p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white font-display">
                    Mapa de Acesso Rápido
                  </h3>
                  <span className="text-xs text-purple-300 font-mono">
                    {GYM_INFO.location.city} - {GYM_INFO.location.state}
                  </span>
                </div>

                {/* Stylized Tactical Map Graphic */}
                <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden bg-black border border-purple-900/50 flex items-center justify-center group">
                  <div 
                    className="absolute inset-0 opacity-20 bg-[radial-gradient(#9333ea_1px,transparent_1px)] [background-size:16px_16px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  {/* Road representations */}
                  <div className="absolute w-full h-8 bg-purple-950/40 border-y border-purple-900/50 -rotate-6 top-1/2 -translate-y-1/2 flex items-center justify-center text-[10px] text-purple-300 font-mono tracking-widest uppercase">
                    {GYM_INFO.location.street}
                  </div>
                  <div className="absolute h-full w-8 bg-purple-950/30 rotate-45 left-1/3 flex items-center justify-center" />

                  {/* Marker Pin */}
                  <div className="relative z-10 flex flex-col items-center animate-bounce">
                    <div className="px-3.5 py-1.5 rounded-lg bg-black/95 border border-purple-400 text-xs font-extrabold text-purple-300 shadow-2xl flex items-center gap-1.5 whitespace-nowrap">
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                      ACADEMIA THANOS (N ° {GYM_INFO.location.number})
                    </div>
                    <div className="w-4 h-4 bg-purple-500 rotate-45 -mt-2 shadow-lg" />
                  </div>

                  <div className="absolute bottom-3 left-3 text-[11px] text-zinc-300 bg-black/80 px-2.5 py-1 rounded backdrop-blur-sm border border-purple-900/40">
                    Guaranésia - MG
                  </div>
                </div>
              </div>

              {/* Direct Link to GPS */}
              <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                <span>Navegar para a academia:</span>
                <div className="flex gap-2">
                  <a
                    href={GYM_INFO.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline font-semibold"
                  >
                    Google Maps
                  </a>
                  <span>·</span>
                  <a
                    href={GYM_INFO.location.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline font-semibold"
                  >
                    Waze
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Summary Card */}
            <div className="bg-[#0f0c18] border border-purple-900/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-purple-400" />
                <h4 className="text-base font-bold text-white">Horário de Funcionamento</h4>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-black/60 p-3 rounded-lg border border-purple-900/40">
                  <div className="text-zinc-400">Segunda a Sexta</div>
                  <div className="text-sm font-bold text-white mt-0.5">{GYM_INFO.hours.weekdays}</div>
                  <div className="text-[10px] text-emerald-400 mt-1">Treino contínuo</div>
                </div>

                <div className="bg-black/60 p-3 rounded-lg border border-purple-900/40">
                  <div className="text-zinc-400">Sábados</div>
                  <div className="text-sm font-bold text-white mt-0.5">{GYM_INFO.hours.saturday}</div>
                  <div className="text-[10px] text-zinc-400 mt-1">Aulões & musculação</div>
                </div>

                <div className="bg-black/60 p-3 rounded-lg border border-rose-900/40">
                  <div className="text-zinc-400">Domingos</div>
                  <div className="text-sm font-bold text-rose-400 mt-0.5">{GYM_INFO.hours.sunday}</div>
                  <div className="text-[10px] text-zinc-400 mt-1">Descanso semanal</div>
                </div>

                <div className="bg-black/60 p-3 rounded-lg border border-purple-900/40">
                  <div className="text-zinc-400">Feriados</div>
                  <div className="text-sm font-bold text-purple-400 mt-0.5">{GYM_INFO.hours.holidays}</div>
                  <div className="text-[10px] text-purple-300 mt-1">Manhã fitness</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
