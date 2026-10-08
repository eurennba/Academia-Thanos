import React from 'react';
import { UserCheck, GraduationCap, CheckCircle2, Clock, Phone, MapPin, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';

interface TopicSummaryCardProps {
  topic: 'modalidades' | 'planos' | 'horarios' | 'professores' | 'localizacao' | 'calculadora';
}

export const TopicSummaryCard: React.FC<TopicSummaryCardProps> = ({ topic }) => {
  const getTopicData = () => {
    switch (topic) {
      case 'modalidades':
        return {
          title: 'Tópicos Rápidos · Modalidades de Treino',
          forStudent: [
            'Musculação livre e guiada com orientação contínua',
            'Atendimento de Personal Trainer individualizado',
            'Ficha e adaptação progressiva para iniciantes e avançados'
          ],
          forCoach: [
            'Acompanhamento de postura e execução correta nas máquinas',
            'Periodização de carga e suporte a objetivos específicos'
          ],
          actionText: 'Dúvidas sobre treino no WhatsApp',
          actionMsg: 'Olá Professor! Gostaria de tirar dúvidas sobre as modalidades da Academia Thanos.'
        };
      case 'planos':
        return {
          title: 'Tópicos Rápidos · Planos & Mensalidades',
          forStudent: [
            'Plano Mensal: apenas R$ 80,00/mês (sem taxa de adesão ou fidelidade)',
            'Plano Thanos VIP: apenas R$ 90,00/mês (todas as modalidades inclusas)',
            'Pagamento fácil via Pix, Dinheiro ou Cartão de Débito/Crédito'
          ],
          forCoach: [
            'Matrícula rápida via WhatsApp oficial sem burocracia',
            'Acesso liberado imediatamente após confirmação'
          ],
          actionText: 'Matricular no WhatsApp (R$ 80 ou R$ 90)',
          actionMsg: 'Olá Professor! Gostaria de me matricular na Academia Thanos de Guaranésia.'
        };
      case 'horarios':
        return {
          title: 'Tópicos Rápidos · Horários Oficiais de Treino',
          forStudent: [
            'Segunda a Sexta: 05:30 às 22:00 (treino contínuo o dia todo)',
            'Sábados: 05:00 às 12:00 (abertura cedo para seu treino do fim de semana)',
            'Feriados: 09:00 às 12:00 (horário especial para feriados)',
            'Domingos: Fechado (dia reservado para recuperação muscular)'
          ],
          forCoach: [
            'Professores em salão durante todos os turnos de funcionamento',
            'Orientação e auxílio técnico direto'
          ],
          actionText: 'Confirmar horário com o Professor',
          actionMsg: 'Olá Professor! Gostaria de confirmar os horários de treino de hoje na Academia Thanos.'
        };
      case 'professores':
        return {
          title: 'Tópicos Rápidos · Professores Responsáveis',
          forStudent: [
            'Prof. Vinicius — CREF/MG | WhatsApp: (35) 99135-9857',
            'Prof. Presley — CREF/MG | WhatsApp: (35) 99775-7577',
            'Acompanhamento de perto no salão: você nunca treina sozinho'
          ],
          forCoach: [
            'Canal direto de comunicação com cada aluno',
            'Avaliação de condicionamento e ajustes de séries'
          ],
          actionText: 'Chamar Professor Vinicius ou Presley',
          actionMsg: 'Olá Professores da Academia Thanos! Gostaria de conversar sobre meu treino.'
        };
      case 'localizacao':
        return {
          title: 'Tópicos Rápidos · Localização & Estrutura',
          forStudent: [
            'Endereço: Rua Francisco Monteiro Dias Nº 380 - Guaranésia - MG',
            'Fácil acesso, estacionamento no local, duchas quentes e armários',
            'Ambiente seguro, higienizado e climatizado'
          ],
          forCoach: [
            'Ponto de referência fácil no Bairro Bom Jesus',
            'Recepção direta e suporte para novos alunos'
          ],
          actionText: 'Pedir localização no WhatsApp',
          actionMsg: `Olá Professor! Como posso chegar na Academia Thanos na ${GYM_INFO.location.street} Nº ${GYM_INFO.location.number}?`
        };
      case 'calculadora':
        return {
          title: 'Tópicos Rápidos · Calculadora de IMC & Metas',
          forStudent: [
            'Calcule seu IMC e gasto calórico diário estimado',
            'Descubra qual a modalidade recomendada para seu objetivo',
            'Envie seus dados direto para o professor planejar seu treino'
          ],
          forCoach: [
            'Recebimento rápido das medidas do aluno via WhatsApp',
            'Ponto de partida para montar o treino personalizado'
          ],
          actionText: 'Enviar medidas pro Professor',
          actionMsg: 'Olá Professor! Calculei meu IMC no site e gostaria de agendar uma avaliação.'
        };
    }
  };

  const data = getTopicData();

  return (
    <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#140e24] via-[#0f0b1a] to-[#140e24] border border-purple-500/40 shadow-xl shadow-purple-950/40">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-purple-900/40 mb-3.5">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
          <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
            {data.title}
          </h4>
        </div>
        <span className="text-[11px] text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded border border-purple-800/40 self-start sm:self-auto font-medium">
          Guia Simplificado: Aluno & Professor
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* Para o Aluno */}
        <div className="bg-black/50 p-3 sm:p-3.5 rounded-xl border border-purple-900/30">
          <div className="flex items-center gap-1.5 font-bold text-purple-300 mb-2">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span>Para o Aluno:</span>
          </div>
          <ul className="space-y-1.5 text-zinc-300">
            {data.forStudent.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5 leading-snug">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Para o Professor */}
        <div className="bg-black/50 p-3 sm:p-3.5 rounded-xl border border-purple-900/30">
          <div className="flex items-center gap-1.5 font-bold text-purple-300 mb-2">
            <UserCheck className="w-4 h-4 text-purple-400" />
            <span>Para o Professor:</span>
          </div>
          <ul className="space-y-1.5 text-zinc-300">
            {data.forCoach.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5 leading-snug">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
