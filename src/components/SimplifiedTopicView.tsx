import React from 'react';
import { 
  Check, 
  Clock, 
  User, 
  MessageCircle, 
  Flame, 
  Zap, 
  ArrowLeft,
  Calendar,
  Sparkles
} from 'lucide-react';
import { MODALITIES, Modality, GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';
import { TopicKey } from './TopicSidebar';
import { TopicSummaryCard } from './TopicSummaryCard';

interface SimplifiedTopicViewProps {
  topicKey: 'musculacao' | 'personal';
  onBackToAll: () => void;
  onOpenTrialModal: (modalityTitle: string) => void;
}

export const SimplifiedTopicView: React.FC<SimplifiedTopicViewProps> = ({
  topicKey,
  onBackToAll,
  onOpenTrialModal,
}) => {
  const modality: Modality | undefined = MODALITIES.find((m) => m.id === topicKey);

  if (!modality) return null;

  const handleWhatsApp = () => {
    openWhatsApp(
      `Olá Professor! Gostaria de saber mais informações e valores para começar na modalidade *${modality.title}* na Academia Thanos de Guaranésia.`
    );
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Botão de Retorno e Título Rápido */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToAll}
          className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 font-semibold cursor-pointer py-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar para Todos os Tópicos</span>
        </button>
        <span className="text-xs text-zinc-400 font-mono">
          Categoria: <strong className="text-purple-300">{modality.category}</strong>
        </span>
      </div>

      {/* Resumo Rápido em Tópicos para Aluno & Professor */}
      <TopicSummaryCard topic="modalidades" />

      {/* Card Principal da Modalidade - Simplificado e com Menos Texto */}
      <div className="bg-[#0f0c18] border border-purple-500/50 rounded-2xl overflow-hidden shadow-2xl shadow-purple-950/40">
        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
          
          {/* Imagem */}
          <div className="md:col-span-5 relative min-h-[240px] md:min-h-full bg-black">
            <img
              src={modality.image}
              alt={modality.title}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4 bg-purple-950/90 border border-purple-400/50 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
              Intensidade: {modality.intensity}
            </div>
          </div>

          {/* Conteúdo em Tópicos Organizados */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Thanos Guaranésia - MG
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {modality.title}
              </h2>

              {/* Informações Rápidas em Linha */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-black/50 p-2.5 rounded-xl border border-purple-900/40 flex items-center gap-2">
                  <User className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-zinc-400 uppercase">Professores</div>
                    <strong className="text-white text-xs">{modality.coachName}</strong>
                  </div>
                </div>

                <div className="bg-black/50 p-2.5 rounded-xl border border-purple-900/40 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-zinc-400 uppercase">Horários</div>
                    <strong className="text-white text-xs">{modality.scheduleSummary}</strong>
                  </div>
                </div>
              </div>

              {/* Tópicos Práticos (Menos Textos, Mais Direto) */}
              <div className="mt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Pontos Principais para Aluno & Professor:</span>
                </div>
                <ul className="space-y-2 text-xs text-zinc-200">
                  {modality.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-black/30 p-2 rounded-lg border border-purple-950">
                      <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ações Diretas */}
            <div className="pt-4 border-t border-purple-900/40 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handleWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl transition-all shadow-md shadow-purple-900/30 active:scale-95 border border-purple-400/40 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20 shrink-0" />
                <span>Conversar no WhatsApp com o Professor</span>
              </button>

              <button
                onClick={() => onOpenTrialModal(modality.title)}
                className="py-3 px-4 text-xs font-semibold text-zinc-200 hover:text-white bg-black/60 hover:bg-purple-950/40 border border-purple-900/60 rounded-xl transition-colors cursor-pointer text-center"
              >
                Agendar Aula Grátis
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
