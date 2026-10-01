import React, { useState } from 'react';
import { MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';
import { ThanosLogo } from './ThanosLogo';

interface NavbarProps {
  onOpenTrialModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Planos & Valores', href: '#planos' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Professores', href: '#professores' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Calculadora IMC', href: '#calculadora' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#09090d]/95 backdrop-blur-md border-b border-purple-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Wordmark & Logo (Compact & Organized) */}
        <a href="#" className="flex items-center gap-2.5 group shrink-0 mr-4">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-purple-500/60 shadow-md shadow-purple-600/30 group-hover:border-purple-400 transition-all bg-black flex items-center justify-center p-0.5 shrink-0">
            <ThanosLogo className="w-full h-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold tracking-tight font-display text-white group-hover:text-purple-400 transition-colors flex items-center gap-1 leading-tight">
              ACADEMIA <span className="text-purple-500">THANOS</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-mono -mt-0.5">
              Guaranésia - MG
            </span>
          </div>
        </a>

        {/* All Items Side-by-Side in One Organized, Compact Line */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-xs xl:text-[13px] font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-zinc-300 hover:text-purple-400 transition-colors py-1 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}

          {/* Aula Experimental Side-by-Side with the other links */}
          <button
            onClick={onOpenTrialModal}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-purple-600/80 hover:bg-purple-600 rounded-md transition-all active:scale-95 border border-purple-500/40 shadow-sm shadow-purple-900/40 whitespace-nowrap cursor-pointer"
          >
            Aula Experimental
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenTrialModal}
            className="px-2.5 py-1 text-[11px] font-semibold text-white bg-purple-600/90 rounded border border-purple-400/40"
          >
            Aula Grátis
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-400 hover:text-white bg-black/80 rounded-lg border border-purple-900/40 focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0b14] border-b border-purple-900/40 px-5 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col gap-2.5 mb-5 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-purple-400 py-1.5 border-b border-purple-950/60"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="text-left text-purple-400 font-semibold py-1.5 border-b border-purple-950/60"
            >
              Aula Experimental
            </button>
          </nav>

          <div className="flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp(GYM_INFO.whatsapp.defaultMessage);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg transition-colors shadow-md shadow-purple-600/30"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Falar no WhatsApp: {GYM_INFO.whatsapp.formattedNumber}</span>
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-purple-950/80 text-[11px] text-zinc-400 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>{GYM_INFO.location.street} Nº {GYM_INFO.location.number} - {GYM_INFO.location.city} - MG</span>
          </div>
        </div>
      )}
    </header>
  );
};
