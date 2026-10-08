import React from 'react';
import { Dumbbell, CreditCard, Clock, Users, MapPin, Calculator, HelpCircle, Layers, CheckCircle2 } from 'lucide-react';

export type TabKey = 'todos' | 'modalidades' | 'planos' | 'horarios' | 'professores' | 'localizacao' | 'calculadora' | 'faq';

interface TopicNavigationProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
}

export const TopicNavigation: React.FC<TopicNavigationProps> = ({ activeTab, onSelectTab }) => {
  const tabs: { key: TabKey; label: string; icon: React.ReactNode; badge?: string }[] = [
    { key: 'todos', label: 'Ver Tudo', icon: <Layers className="w-3.5 h-3.5" /> },
    { key: 'modalidades', label: 'Modalidades', icon: <Dumbbell className="w-3.5 h-3.5" /> },
    { key: 'planos', label: 'Planos & Valores', icon: <CreditCard className="w-3.5 h-3.5" />, badge: 'R$ 80 / 90' },
    { key: 'horarios', label: 'Horários & Feriados', icon: <Clock className="w-3.5 h-3.5" />, badge: 'Feriado: 09h' },
    { key: 'professores', label: 'Professores', icon: <Users className="w-3.5 h-3.5" />, badge: 'WhatsApp' },
    { key: 'localizacao', label: 'Localização', icon: <MapPin className="w-3.5 h-3.5" />, badge: 'Nº 380' },
    { key: 'calculadora', label: 'Calculadora IMC', icon: <Calculator className="w-3.5 h-3.5" /> },
    { key: 'faq', label: 'Dúvidas', icon: <HelpCircle className="w-3.5 h-3.5" /> },
  ];

  return (
    <section className="bg-[#0b0814] border-y border-purple-900/40 py-4 px-4 sm:px-6 lg:px-8 sticky top-16 z-30 shadow-lg backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
              Navegação por Abas em Tópicos
            </span>
            <span className="text-[11px] text-zinc-400 hidden md:inline">
              · Fácil para Aluno e Professor
            </span>
          </div>

          {activeTab !== 'todos' && (
            <button
              onClick={() => onSelectTab('todos')}
              className="text-[11px] text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 self-start sm:self-auto cursor-pointer"
            >
              ← Mostrar todas as abas do site
            </button>
          )}
        </div>

        {/* Scrollable Tabs Row */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 touch-pan-x">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => onSelectTab(tab.key)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md shadow-purple-900/50 border border-purple-400/50 scale-[1.02]'
                    : 'bg-black/60 text-zinc-300 hover:text-white hover:bg-purple-950/40 border border-purple-900/40'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                      isActive ? 'bg-purple-950/80 text-purple-200' : 'bg-purple-900/40 text-purple-300'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Resumo Rápido em Tópicos para a Aba Ativa */}
        {activeTab !== 'todos' && (
          <div className="mt-3 pt-3 border-t border-purple-900/30 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>
                Visualizando tópico simplificado: <strong className="text-white capitalize">{activeTab}</strong>
              </span>
            </div>
            <button
              onClick={() => onSelectTab('todos')}
              className="px-2.5 py-1 text-[11px] font-semibold text-zinc-300 bg-purple-950/50 hover:bg-purple-900/60 rounded border border-purple-800/40 cursor-pointer"
            >
              Ver página completa
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
