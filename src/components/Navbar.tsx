import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';

interface NavbarProps {
  onOpenTrialModal: () => void;
  activeSection?: string;
  onSelectTopic?: (topic: any) => void;
  activeTopic?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Início', id: 'home' },
    { name: 'Sobre', id: 'about' },
    { name: 'Modalidades', id: 'modalidades' },
    { name: 'Horários', id: 'horarios' },
    { name: 'Planos', id: 'planos' },
    { name: 'Professores', id: 'professores' },
    { name: 'Localização', id: 'localizacao' },
    { name: 'Contato', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/95 backdrop-blur-md border-b border-purple-900/40 shadow-2xl transition-all">
      <div className="w-[92%] max-w-[1240px] mx-auto py-3.5 md:py-4 flex justify-between items-center">
        {/* Brand Logo with exact official image beside title */}
        <a
          href="#home"
          className="flex items-center gap-3 select-none hover:scale-105 transition-transform duration-300 group tracking-tighter"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-md">
            <img
              src="/images/thanos_gym_logo_1790776940958.jpg"
              alt="Logo Oficial Academia Thanos"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-xl md:text-2xl font-bold flex items-center">
            <span className="text-white font-thin tracking-widest">ACADEMIA </span>
            <span className="font-bold text-purple-400 ml-1.5">THANOS</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex list-none items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`text-xs uppercase tracking-widest transition-all duration-300 font-light ${
                      isActive
                        ? 'text-purple-400 font-semibold border-b-2 border-purple-400 pb-1 opacity-100'
                        : 'text-zinc-300 hover:text-white opacity-80 hover:opacity-100'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenTrialModal}
            className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.4)] cursor-pointer border border-purple-400/40"
          >
            Aula Grátis
          </button>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <button
            onClick={onOpenTrialModal}
            className="bg-purple-600 text-white px-3.5 py-1.5 rounded-full font-bold text-[11px] uppercase tracking-wider cursor-pointer border border-purple-400/30"
          >
            Aula Grátis
          </button>

          <button
            className="text-2xl text-white focus:outline-none hover:text-purple-400 transition-colors duration-300 p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      <nav
        className={`absolute top-full left-0 w-full bg-[#0a0712]/98 border-b border-purple-900/50 flex flex-col items-center py-4 shadow-2xl lg:hidden transition-all duration-300 origin-top transform ${
          mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden pointer-events-none'
        }`}
      >
        <ul className="flex flex-col list-none w-full text-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className="py-3 border-b border-purple-950/60 last:border-0 w-full">
                <a
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm block tracking-widest uppercase font-light transition-all duration-300 ${
                    isActive ? 'text-purple-400 font-bold' : 'text-zinc-200 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile WhatsApp Quick Callout */}
        <div className="w-[88%] mt-4 pt-3 border-t border-purple-950/60">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openWhatsApp(GYM_INFO.whatsapp.defaultMessage);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-full transition-colors shadow-lg shadow-purple-950"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Falar no WhatsApp: {GYM_INFO.whatsapp.formattedNumber}</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
