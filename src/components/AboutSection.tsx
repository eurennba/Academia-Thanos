import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Dumbbell, Users, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black border-b border-purple-950/40">
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        <SectionHeader title="SOBRE A THANOS" />

        <div className="flex flex-col items-center">
          <div className="max-w-4xl text-center space-y-7">
            <h3 className="text-2xl md:text-4xl font-semibold text-purple-400">
              Força, Disciplina & Alta Performance em Guaranésia
            </h3>
            
            <p className="text-zinc-200 text-base md:text-xl leading-relaxed font-light opacity-95">
              A Academia Thanos foi pensada para quem leva seu treino a sério. Localizada na{' '}
              <strong className="text-white font-semibold">Rua Francisco Monteiro Dias, Nº 380</strong> em Guaranésia - MG, reunimos o que há de melhor em musculação pesada, biomecânica anatômica e acompanhamento técnico contínuo.
            </p>

            <p className="text-zinc-200 text-base md:text-xl leading-relaxed font-light opacity-95">
              Aqui nenhum aluno treina desamparado: nossos professores responsáveis{' '}
              <strong className="text-purple-300 font-semibold">Vinicius</strong> e{' '}
              <strong className="text-purple-300 font-semibold">Presley</strong> (100% credenciados pelo CREF) estão diariamente no salão para instruir suas execuções, ajustar cargas e garantir sua máxima evolução com total segurança.
            </p>

            <p className="text-zinc-300 text-base md:text-xl leading-relaxed font-light opacity-90">
              Ambiente focado, planos transparentes sem pegadinhas ou taxa de matrícula, e horários amplos de segunda a sábado e em feriados das 09h às 12h.
            </p>
          </div>

          {/* 3 Value Pillars in Purple & White aesthetic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-16 max-w-4xl">
            <div className="bg-[#100c1c] rounded-2xl p-6 border border-purple-950/60 hover:border-purple-500 transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-950/80 text-purple-400 flex items-center justify-center mx-auto mb-4 border border-purple-800/50">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Equipamentos de Ponta</h4>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Maquinário biomecânico articulado, área de halteres pesados e barras para máxima ativação muscular.
              </p>
            </div>

            <div className="bg-[#100c1c] rounded-2xl p-6 border border-purple-950/60 hover:border-purple-500 transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-950/80 text-purple-400 flex items-center justify-center mx-auto mb-4 border border-purple-800/50">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Professores Presentes</h4>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Prof. Vinicius e Prof. Presley prontos para orientar iniciantes e atletas experientes no salão.
              </p>
            </div>

            <div className="bg-[#100c1c] rounded-2xl p-6 border border-purple-950/60 hover:border-purple-500 transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-950/80 text-purple-400 flex items-center justify-center mx-auto mb-4 border border-purple-800/50">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Sem Taxa ou Fidelidade</h4>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Mensalidade justa a partir de R$ 80,00 com liberdade total e sem contratos burocráticos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
