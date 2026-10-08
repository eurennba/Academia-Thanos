import React from 'react';
import { 
  Dumbbell, 
  Flame, 
  Target, 
  CreditCard, 
  Clock, 
  Users, 
  MapPin, 
  Calculator, 
  HelpCircle, 
  Layers, 
  MessageCircle,
  X,
  ChevronRight
} from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';

export type TopicKey = 
  | 'todos'
  | 'musculacao'
  | 'personal'
  | 'planos'
  | 'horarios'
  | 'professores'
  | 'localizacao'
  | 'calculadora'
  | 'faq';

interface TopicSidebarProps {
  activeTopic: TopicKey;
  onSelectTopic: (topic: TopicKey) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  onOpenTrialModal: () => void;
}

export const TopicSidebar: React.FC<TopicSidebarProps> = ({
  activeTopic,
  onSelectTopic,
  mobileOpen,
  onCloseMobile,
  onOpenTrialModal,
}) => {
  const modalityItems: { key: TopicKey; label: string; icon: React.ReactNode; badge?: string }[] = [
    { key: 'musculacao', label: 'Musculação & Hipertrofia', icon: <Dumbbell className="w-4 h-4" />, badge: 'Força' },
    { key: 'personal', label: 'Personal Trainer', icon: <Target className="w-4 h-4" />, badge: '1-on-1' },
  ];

  const infoItems: { key: TopicKey; label: string; icon: React.ReactNode; badge?: string }[] = [
    { key: 'planos', label: 'Planos & Valores', icon: <CreditCard className="w-4 h-4" />, badge: 'R$ 80 / 90' },
    { key: 'horarios', label: 'Horários de Treino', icon: <Clock className="w-4 h-4" />, badge: 'Feriado: 09h' },
    { key: 'professores', label: 'Professores no Salão', icon: <Users className="w-4 h-4" />, badge: 'Vinicius & Presley' },
    { key: 'localizacao', label: 'Localização & Mapa', icon: <MapPin className="w-4 h-4" />, badge: 'Nº 380' },
    { key: 'calculadora', label: 'Calculadora IMC', icon: <Calculator className="w-4 h-4" /> },
    { key: 'faq', label: 'Dúvidas Frequentes', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  const handleSelect = (key: TopicKey) => {
    onSelectTopic(key);
    onCloseMobile();
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const sidebarContent = (
    <div className="flex flex-col h-full justify-between">
      <div className="space-y-6">
        {/* Cabeçalho da Lateral Esquerda */}
        <div className="pb-3 border-b border-purple-900/40">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
              Menu por Tópicos
            </span>
            <span className="text-[10px] text-zinc-500 font-mono">Guaranésia - MG</span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Escolha o tópico para ver o resumo direto sem enrolação.
          </p>
        </div>

        {/* Ver Tudo */}
        <button
          onClick={() => handleSelect('todos')}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTopic === 'todos'
              ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md shadow-purple-900/40 border border-purple-400/40'
              : 'bg-black/60 text-zinc-300 hover:text-white hover:bg-purple-950/40 border border-purple-900/30'
          }`}
        >
          <span className="flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Ver Tudo (Página Completa)</span>
          </span>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeTopic === 'todos' ? 'translate-x-0.5' : 'text-zinc-600'}`} />
        </button>

        {/* Grupo 1: MODALIDADES (conforme pedido: todas as modalidades na lateral esquerda) */}
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-purple-300/80 mb-2 px-1 flex items-center justify-between">
            <span>Modalidades Principais</span>
            <span className="text-[9px] bg-purple-950/80 px-1.5 py-0.5 rounded text-purple-400">3 tipos</span>
          </div>
          <div className="space-y-1">
            {modalityItems.map((item) => {
              const isActive = activeTopic === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => handleSelect(item.key)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer text-left ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md shadow-purple-900/50 border border-purple-400/50 font-bold'
                      : 'bg-black/40 text-zinc-300 hover:text-white hover:bg-purple-950/40 border border-purple-900/30'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={isActive ? 'text-white' : 'text-purple-400'}>{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </span>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono shrink-0 ${
                      isActive ? 'bg-purple-950 text-purple-200' : 'bg-purple-900/40 text-purple-300'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grupo 2: INFORMAÇÕES DA ACADEMIA */}
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-purple-300/80 mb-2 px-1">
            Informações & Serviços
          </div>
          <div className="space-y-1">
            {infoItems.map((item) => {
              const isActive = activeTopic === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => handleSelect(item.key)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer text-left ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md shadow-purple-900/50 border border-purple-400/50 font-bold'
                      : 'bg-black/40 text-zinc-300 hover:text-white hover:bg-purple-950/40 border border-purple-900/30'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={isActive ? 'text-white' : 'text-purple-400'}>{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </span>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono shrink-0 ${
                      isActive ? 'bg-purple-950 text-purple-200' : 'bg-purple-900/40 text-purple-300'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ações Rápidas no Rodapé da Lateral Esquerda */}
      <div className="pt-4 border-t border-purple-900/40 mt-6 space-y-2">
        <button
          onClick={onOpenTrialModal}
          className="w-full py-2.5 px-3 text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-all shadow-md shadow-purple-900/40 border border-purple-400/40 text-center cursor-pointer"
        >
          Aula Experimental Grátis
        </button>

        <button
          onClick={() => openWhatsApp(GYM_INFO.whatsapp.defaultMessage)}
          className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-[11px] font-semibold text-zinc-200 hover:text-white bg-black/70 hover:bg-purple-950/50 rounded-xl border border-purple-900/50 transition-colors cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp: (35) 99135-9857</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* 1. Desktop Sticky Left Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 self-start sticky top-20 bg-[#0c0915] border border-purple-900/40 rounded-2xl p-4 shadow-2xl shadow-black/60">
        {sidebarContent}
      </aside>

      {/* 2. Mobile Floating Drawer Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={onCloseMobile}
          />

          {/* Drawer Menu from Left */}
          <div className="relative w-72 max-w-[85vw] h-full bg-[#0d0918] border-r border-purple-500/40 p-5 overflow-y-auto z-10 flex flex-col justify-between shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-purple-900/40 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                Tópicos da Academia
              </span>
              <button
                onClick={onCloseMobile}
                className="p-1 rounded-lg bg-black/60 text-zinc-400 hover:text-white border border-purple-900/40"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
