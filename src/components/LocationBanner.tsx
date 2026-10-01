import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, MessageCircle, Phone } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';

export const LocationBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${GYM_INFO.location.street} Nº ${GYM_INFO.location.number}, ${GYM_INFO.location.city} - ${GYM_INFO.location.state}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="bg-gradient-to-r from-black via-[#120e20] to-black border-y border-purple-900/40 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Street, Number & Neighborhood Badges */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0 shadow-lg shadow-purple-900/30">
              <MapPin className="w-6 h-6" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Endereço Oficial · Academia Thanos
                </span>
                <span className="text-zinc-600">·</span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Guaranésia - MG
                </span>
              </div>

              {/* Exact Street, Number and City specified by user */}
              <div className="text-base sm:text-lg font-bold text-white leading-snug">
                <span className="text-white font-extrabold">{GYM_INFO.location.street}</span>{' '}
                <span className="bg-purple-900/60 border border-purple-500/40 px-2.5 py-0.5 rounded text-purple-300 font-mono font-bold">
                  N ° {GYM_INFO.location.number}
                </span>{' '}
                — <span className="text-purple-300 font-bold">{GYM_INFO.location.city} - {GYM_INFO.location.state}</span>
              </div>

              <div className="text-xs sm:text-sm text-zinc-400 mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-purple-300 font-medium">Contato / WhatsApp: <strong className="text-white">{GYM_INFO.whatsapp.formattedNumber}</strong></span>
                <span>·</span>
                <span className="font-mono text-zinc-400">CEP {GYM_INFO.location.zipCode}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions for directions & WhatsApp */}
          <div className="lg:col-span-5 flex flex-wrap items-center justify-start lg:justify-end gap-2.5">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-black/60 hover:bg-purple-950/40 border border-purple-900/50 rounded-lg transition-colors active:scale-95 whitespace-nowrap"
              title="Copiar endereço para GPS"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Endereço Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-purple-400" />
                  <span>Copiar Endereço</span>
                </>
              )}
            </button>

            <a
              href={GYM_INFO.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-black/60 hover:bg-purple-950/50 border border-purple-900/50 rounded-lg transition-colors active:scale-95 whitespace-nowrap"
            >
              <Navigation className="w-3.5 h-3.5 text-purple-400" />
              <span>Ver no Maps</span>
              <ExternalLink className="w-3 h-3 text-zinc-400 ml-0.5" />
            </a>

            <button
              onClick={() => openWhatsApp(`Olá Professor! Gostaria de saber como chegar na Academia Thanos na ${GYM_INFO.location.street} Nº ${GYM_INFO.location.number} em ${GYM_INFO.location.city} - MG.`)}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg transition-colors active:scale-95 shadow-md shadow-purple-900/40 whitespace-nowrap border border-purple-400/30"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
              <span>WhatsApp: (35) 99135-9857</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
