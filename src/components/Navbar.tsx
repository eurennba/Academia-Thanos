import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { MobileLateralMenu } from './MobileLateralMenu';

export const Navbar: React.FC = () => {
  const [lateralMenuOpen, setLateralMenuOpen] = useState(false);
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
    <>
      <header className="fixed w-full top-0 z-40 bg-[#07050d]/95 backdrop-blur-md border-b border-purple-900/50 shadow-2xl transition-all">
        <div className="w-[96%] max-w-[1240px] mx-auto py-2.5 sm:py-3 md:py-3.5 flex justify-between items-center">
          {/* Título da Aba Principal com Letras de Espaço Curto (tracking-tight) para Celular e Outros Aparelhos */}
          <a
            href="#home"
            className="flex items-center select-none hover:opacity-90 transition-opacity"
            aria-label="Academia Thanos Início"
          >
            <div className="text-lg sm:text-xl md:text-2xl font-black flex items-center tracking-tight leading-none">
              <span className="text-white tracking-tight">ACADEMIA</span>
              <span className="text-purple-400 tracking-tight ml-1">THANOS</span>
            </div>
          </a>

          {/* Links da Aba Principal no Desktop - Letras com Espaço Curto (tracking-tight) */}
          <nav className="hidden lg:block">
            <ul className="flex list-none items-center gap-4 xl:gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`text-xs uppercase tracking-tight transition-all duration-200 font-semibold ${
                        isActive
                          ? 'text-purple-400 border-b-2 border-purple-400 pb-0.5 opacity-100'
                          : 'text-zinc-300 hover:text-white opacity-90 hover:opacity-100'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Botão de Menu para Celular e Outros Aparelhos - SEM O NOME TÓPICOS */}
          <div className="flex items-center">
            <button
              onClick={() => setLateralMenuOpen(true)}
              className="p-2 sm:p-2.5 bg-[#171026] hover:bg-purple-900/60 text-white rounded-xl border border-purple-800/60 focus:outline-none transition-colors duration-200 cursor-pointer shadow-md active:scale-95"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5 text-purple-400" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu Lateral Drawer para Celular e Acesso Rápido */}
      <MobileLateralMenu
        isOpen={lateralMenuOpen}
        onClose={() => setLateralMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};
