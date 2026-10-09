import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Clock, ExternalLink } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { SectionHeader } from './SectionHeader';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(GYM_INFO.location.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-24 bg-[#08050e] border-b border-purple-950/40">
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        <SectionHeader
          title="LOCALIZAÇÃO & ACESSO"
          subtitle="Venha conhecer nossa estrutura. Fácil acesso e localização central em Guaranésia - MG."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Info Card in Purple & White */}
          <div className="lg:col-span-5 bg-[#100c1c] rounded-2xl p-6 sm:p-8 border border-purple-950/60 flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider block mb-1">
                  Endereço Oficial
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {GYM_INFO.location.street}, Nº {GYM_INFO.location.number}
                </h3>
                <p className="text-sm text-zinc-300 font-light mt-1">
                  Bairro {GYM_INFO.location.neighborhood} · {GYM_INFO.location.city} - {GYM_INFO.location.state}
                </p>
                <p className="text-xs text-zinc-400 font-light mt-0.5">
                  CEP: {GYM_INFO.location.zipCode}
                </p>
              </div>

              {/* Horários Oficiais */}
              <div className="pt-6 border-t border-purple-950/60">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>Horários de Treino</span>
                </h4>
                <div className="space-y-2 text-xs text-zinc-300 font-light">
                  <div className="flex justify-between py-1 border-b border-purple-950/50">
                    <span>Segunda a Sexta:</span>
                    <strong className="text-white font-normal">{GYM_INFO.hours.weekdays}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-purple-950/50">
                    <span>Sábados:</span>
                    <strong className="text-white font-normal">{GYM_INFO.hours.saturday}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-purple-950/50">
                    <span className="text-purple-300 font-medium">Feriados:</span>
                    <strong className="text-purple-300 font-bold">{GYM_INFO.hours.holidays}</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Domingos:</span>
                    <strong className="text-zinc-400 font-normal">Fechado</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions (Sem WhatsApp) */}
            <div className="space-y-2.5 pt-6 mt-6 border-t border-purple-950/60">
              <button
                onClick={handleCopy}
                className="w-full bg-[#181326] hover:bg-purple-950/60 text-white font-semibold text-xs py-3 px-4 rounded-xl border border-purple-900/50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-purple-400" />}
                <span>{copied ? 'Endereço Copiado!' : 'Copiar Endereço Completo'}</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={GYM_INFO.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#181326] hover:bg-purple-600 text-white border border-purple-900/50 hover:border-purple-400 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-purple-300" />
                  <span>Google Maps</span>
                </a>

                <a
                  href={GYM_INFO.location.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#181326] hover:bg-purple-600 text-white border border-purple-900/50 hover:border-purple-400 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-purple-300" />
                  <span>Waze</span>
                </a>
              </div>

              <a
                href={GYM_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-950 border border-purple-400/40"
              >
                <MapPin className="w-4 h-4" />
                <span>Traçar Rota no Google Maps</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 bg-[#100c1c] rounded-2xl overflow-hidden border border-purple-950/60 shadow-[0_0_30px_rgba(0,0,0,0.4)] min-h-[360px] lg:min-h-full flex flex-col">
            <div className="p-4 bg-[#140e24] border-b border-purple-950/60 flex items-center justify-between text-xs text-zinc-300">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                Rua Francisco Monteiro Dias, 380 - Guaranésia, MG
              </span>
              <a
                href={GYM_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline flex items-center gap-1 text-[11px]"
              >
                Ver no mapa maior <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 w-full h-full min-h-[320px] bg-black">
              <iframe
                title="Localização da Academia Thanos em Guaranésia"
                src="https://maps.google.com/maps?q=Rua%20Francisco%20Monteiro%20Dias%2C%20380%2C%20Guaran%C3%A9sia%20-%20MG&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter invert-[90%] hue-rotate-[180deg] contrast-[110%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
