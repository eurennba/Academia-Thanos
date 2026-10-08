import React, { useState } from 'react';
import { RotateCcw, MessageCircle } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { openWhatsApp } from '../utils/whatsapp';

export const BmiCalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [goal, setGoal] = useState<string>('hipertrofia');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight.replace(',', '.'));
    const h = parseFloat(height.replace(',', '.')) / 100; // cm to m

    if (w > 0 && h > 0) {
      const result = w / (h * h);
      setBmi(parseFloat(result.toFixed(1)));
    }
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
  };

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { label: 'Abaixo do Peso', color: 'text-purple-300', desc: 'Foco em ganho de massa muscular magra e superávit calórico orientado.' };
    if (val < 25) return { label: 'Peso Saudável', color: 'text-purple-400', desc: 'Excelente ponto de partida para hipertrofia e definição muscular.' };
    if (val < 30) return { label: 'Sobrepeso', color: 'text-purple-300', desc: 'Indicação de treinos de musculação focados em gasto calórico e definição.' };
    return { label: 'Obesidade', color: 'text-purple-200', desc: 'Recomendado acompanhamento individualizado com nossos professores no salão.' };
  };

  const handleSendToCoach = () => {
    if (!bmi) return;
    const cat = getBmiCategory(bmi);
    const goalText = goal === 'hipertrofia' ? 'Hipertrofia & Massa Muscular' : goal === 'emagrecimento' ? 'Emagrecimento & Definição' : 'Condicionamento Físico Geral';
    const message = `Olá Professor! Calculei meu IMC no site da Academia Thanos:
- Peso: ${weight} kg
- Altura: ${height} cm
- IMC: ${bmi} (${cat.label})
- Meu Objetivo: ${goalText}
Gostaria de agendar uma avaliação física e começar meus treinos em Guaranésia!`;
    openWhatsApp(message);
  };

  return (
    <section id="calculadora" className="py-24 bg-black border-b border-purple-950/40">
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        <SectionHeader
          title="CALCULADORA DE IMC"
          subtitle="Ferramenta prática para alunos e professores. Calcule seu índice corporal e envie diretamente ao professor."
        />

        <div className="max-w-3xl mx-auto bg-[#100c1c] rounded-2xl p-6 sm:p-8 border border-purple-950/60 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
          <form onSubmit={calculateBmi} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Peso (kg)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: 75.5"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-[#181326] border border-purple-950 focus:border-purple-400 rounded-xl px-4 py-3.5 text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Altura (cm)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: 175"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-[#181326] border border-purple-950 focus:border-purple-400 rounded-xl px-4 py-3.5 text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Sexo Biológico
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                      gender === 'male'
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-950'
                        : 'bg-[#181326] text-zinc-300 border border-purple-950'
                    }`}
                  >
                    Masculino
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                      gender === 'female'
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-950'
                        : 'bg-[#181326] text-zinc-300 border border-purple-950'
                    }`}
                  >
                    Feminino
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Objetivo Principal
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-[#181326] border border-purple-950 focus:border-purple-400 rounded-xl px-4 py-3.5 text-base sm:text-sm text-white focus:outline-none transition-colors"
                >
                  <option value="hipertrofia">Hipertrofia & Ganho de Massa</option>
                  <option value="emagrecimento">Emagrecimento & Queima</option>
                  <option value="condicionamento">Condicionamento Físico</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all cursor-pointer shadow-md shadow-purple-950 border border-purple-400/40"
              >
                Calcular Meu IMC
              </button>
              {bmi && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-[#181326] text-zinc-300 hover:text-white px-4 py-3.5 rounded-xl border border-purple-950 text-xs font-semibold"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>

          {/* Result Card */}
          {bmi && (
            <div className="mt-8 pt-6 border-t border-purple-950/60 animate-fadeIn">
              <div className="bg-[#181326] rounded-xl p-5 border border-purple-900/60 text-center mb-5">
                <span className="text-xs text-zinc-400 font-light block mb-1">Seu IMC Calculado</span>
                <span className="text-4xl font-extrabold text-white block mb-2">{bmi}</span>
                <span className={`text-sm font-bold uppercase tracking-wider ${getBmiCategory(bmi).color}`}>
                  {getBmiCategory(bmi).label}
                </span>
                <p className="text-xs text-zinc-300 font-light mt-3 max-w-md mx-auto leading-relaxed">
                  {getBmiCategory(bmi).desc}
                </p>
              </div>

              <button
                onClick={handleSendToCoach}
                className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-purple-950 border border-purple-400/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar Resultado para o Professor no WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
