import React from 'react';
import { 
  X, 
  Home, 
  Info, 
  Dumbbell, 
  Clock, 
  CreditCard, 
  Users, 
  MapPin, 
  Calculator, 
  HelpCircle, 
  Phone,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface MobileLateralMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

export const MobileLateralMenu: React.FC<MobileLateralMenuProps> = ({
  isOpen,
  onClose,
  activeSection = 'home',
}) => {
  const menuTopics = [
    {
      id: 'home',
      label: 'Início',
      desc: 'Página inicial da academia',
      icon: <Home className="w-4 h-4" />,
    },
    {
      id: 'about',
      label: 'Sobre a Thanos',
      desc: 'História, estrutura e diferenciais',
      icon: <Info className="w-4 h-4" />,
    },
    {
      id: 'modalidades',
      label: 'Modalidades & Treinos',
      desc: 'Musculação pesada e personal 1-on-1',
      icon: <Dumbbell className="w-4 h-4" />,
      badge: 'Treinos',
    },
    {
      id: 'horarios',
      label: 'Horários & Funcionamento',
      desc: 'Seg a Sáb e Feriados das 09h às 12h',
      icon: <Clock className="w-4 h-4" />,
      badge: 'Oficial',
    },
    {
      id: 'planos',
      label: 'Planos & Valores',
      desc: 'Mensal R$ 80 | VIP R$ 90 (Sem fidelidade)',
      icon: <CreditCard className="w-4 h-4" />,
      badge: 'R$ 80 / 90',
    },
    {
      id: 'professores',
      label: 'Professores no Salão',
      desc: 'Prof. Vinicius e Prof. Presley (CREF)',
      icon: <Users className="w-4 h-4" />,
      badge: 'CREF',
    },
    {
      id: 'localizacao',
      label: 'Localização & Rotas',
      desc: 'Rua Francisco Monteiro Dias, 380',
      icon: <MapPin className="w-4 h-4" />,
      badge: 'Guaranésia',
    },
    {
      id: 'calculadora',
      label: 'Calculadora de IMC',
      desc: 'Calcule seu índice corporal',
      icon: <Calculator className="w-4 h-4" />,
      badge: 'Aluno',
    },
    {
      id: 'faq',
      label: 'Dúvidas Frequentes',
      desc: 'Perguntas e respostas rápidas',
      icon: <HelpCircle className="w-4 h-4" />,
    },
    {
      id: 'contact',
      label: 'Contato & Informações',
      desc: 'Localização, horários e atendimento',
      icon: <Phone className="w-4 h-4" />,
    },
  ];

  const handleNavigate = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Dark backdrop overlay with blur */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lateral Menu Drawer (Sliding in from Left) */}
      <aside
        className="relative w-80 max-w-[85vw] h-full bg-[#0a0614] border-r border-purple-500/40 p-4 sm:p-5 overflow-y-auto z-10 flex flex-col justify-between shadow-2xl shadow-purple-950 text-white transform transition-transform duration-300 ease-out"
        aria-label="Menu Lateral de Navegação"
      >
        <div>
          {/* Header do Menu Lateral - SEM LOGO, Tipografia Limpa com Espaço Curto */}
          <div className="flex items-center justify-between pb-4 border-b border-purple-900/50 mb-4">
            <div>
              <div className="text-lg font-black text-white tracking-tight flex items-center leading-none">
                ACADEMIA <span className="text-purple-400 ml-1.5">THANOS</span>
              </div>
              <div className="text-[10px] text-purple-300 font-semibold tracking-tight uppercase mt-1">
                Menu Principal
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#181028] text-zinc-300 hover:text-white hover:bg-purple-900/50 border border-purple-800/40 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Notice for Student */}
          <div className="mb-4 p-2.5 rounded-xl bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Toque para navegar pelas seções:</span>
          </div>

          {/* Lista Completa de Seções do Site */}
          <nav className="space-y-1.5">
            {menuTopics.map((topic) => {
              const isActive = activeSection === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => handleNavigate(topic.id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all cursor-pointer group ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/60 border border-purple-400/50 font-bold'
                      : 'bg-[#120b22]/90 text-zinc-200 hover:text-white hover:bg-purple-950/60 border border-purple-950/50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div
                      className={`p-1.5 rounded-lg shrink-0 ${
                        isActive
                          ? 'bg-white text-purple-700'
                          : 'bg-[#1c1236] text-purple-400 group-hover:bg-purple-900/60 group-hover:text-white'
                      }`}
                    >
                      {topic.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold leading-tight truncate">
                        {topic.label}
                      </div>
                      <div className={`text-[10px] truncate leading-normal ${
                        isActive ? 'text-purple-100 font-normal' : 'text-zinc-400 font-light'
                      }`}>
                        {topic.desc}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5">
                    {topic.badge && (
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                          isActive
                            ? 'bg-purple-950 text-purple-200'
                            : 'bg-purple-900/40 text-purple-300'
                        }`}
                      >
                        {topic.badge}
                      </span>
                    )}
                    <ChevronRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isActive ? 'text-white translate-x-0.5' : 'text-zinc-500 group-hover:text-purple-300'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Rodapé do Menu Lateral: Endereço & Horários */}
        <div className="pt-4 mt-4 border-t border-purple-900/50 space-y-2">
          <div className="p-3 rounded-xl bg-[#140c24] border border-purple-900/40 text-[11px] text-zinc-300 space-y-1">
            <div className="font-semibold text-white">Academia Thanos - Guaranésia</div>
            <div className="text-[10px] text-zinc-400">Rua Francisco Monteiro Dias, 380</div>
            <div className="text-[10px] text-purple-300 font-medium">Seg a Sex: 05:30 às 22:00 · Sáb: 05:00 às 12:00</div>
          </div>
        </div>
      </aside>
    </div>
  );
};
