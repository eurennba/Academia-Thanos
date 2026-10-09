import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { ShieldCheck, MapPin, Clock, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05030a] border-t border-purple-950/60 py-12 sm:py-16 text-zinc-400 text-sm w-full max-w-full overflow-hidden">
      <div className="w-[94%] max-w-[1200px] mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand Info - SEM LOGO */}
          <div className="md:col-span-1 space-y-4">
            <a href="#home" className="inline-block tracking-tighter">
              <div className="text-2xl font-bold flex items-center leading-none">
                <span className="text-white font-light tracking-widest">ACADEMIA </span>
                <span className="font-extrabold text-purple-400 ml-1.5">THANOS</span>
              </div>
            </a>
            <p className="text-xs text-zinc-400 font-light leading-relaxed break-words">
              Musculação de alta performance, biomecânica e acompanhamento técnico contínuo em Guaranésia - MG.
            </p>
            <div className="flex items-center gap-2 text-xs text-purple-400 font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>100% Professores Credenciados CREF</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#home" className="hover:text-purple-400 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-colors">Sobre a Thanos</a></li>
              <li><a href="#modalidades" className="hover:text-purple-400 transition-colors">Modalidades</a></li>
              <li><a href="#horarios" className="hover:text-purple-400 transition-colors">Horários & Feriados</a></li>
              <li><a href="#planos" className="hover:text-purple-400 transition-colors">Planos & Valores</a></li>
              <li><a href="#professores" className="hover:text-purple-400 transition-colors">Professores no Salão</a></li>
              <li><a href="#calculadora" className="hover:text-purple-400 transition-colors">Calculadora IMC</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Horários Oficiais */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-purple-400" />
              <span>Horários de Treino</span>
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>Segunda a Sexta: <strong className="text-white font-normal">{GYM_INFO.hours.weekdays}</strong></li>
              <li>Sábados: <strong className="text-white font-normal">{GYM_INFO.hours.saturday}</strong></li>
              <li>Feriados: <strong className="text-purple-300 font-bold">{GYM_INFO.hours.holidays}</strong></li>
              <li>Domingos: <strong className="text-zinc-500 font-normal">Fechado</strong></li>
            </ul>
          </div>

          {/* Endereço & Contato */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Onde Estamos</span>
            </h4>
            <p className="text-xs font-light leading-relaxed break-words">
              {GYM_INFO.location.street}, Nº {GYM_INFO.location.number}<br />
              Bairro {GYM_INFO.location.neighborhood}<br />
              Guaranésia - MG · CEP {GYM_INFO.location.zipCode}
            </p>
            <div className="pt-1 text-xs text-zinc-300 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-purple-400" />
              <span>Telefone: {GYM_INFO.contact.phone}</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line in Purple & White */}
        <div className="pt-6 sm:pt-8 border-t border-purple-950/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-light text-zinc-500 text-center sm:text-left">
          <div>
            © {currentYear} Academia Thanos. Todos os direitos reservados. Guaranésia - MG.
          </div>
          <div>
            Rua Francisco Monteiro Dias Nº 380 · Guaranésia - MG
          </div>
        </div>
      </div>
    </footer>
  );
};
