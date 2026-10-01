import React, { useState } from 'react';
import { Calculator, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { GYM_INFO } from '../data/gymData';

export const BmiCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(75);
  const [height, setHeight] = useState<number>(175);
  const [age, setAge] = useState<number>(28);
  const [gender, setGender] = useState<'masculino' | 'feminino'>('masculino');
  const [goal, setGoal] = useState<'hipertrofia' | 'emagrecimento' | 'definicao' | 'condicionamento'>('hipertrofia');
  const activity = 1.55;

  // Calculations
  const heightM = height / 100;
  const bmi = heightM > 0 ? Number((weight / (heightM * heightM)).toFixed(1)) : 0;

  // Basal Metabolic Rate (Harris-Benedict formula)
  let bmr = 0;
  if (gender === 'masculino') {
    bmr = Math.round(88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age));
  } else {
    bmr = Math.round(447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age));
  }

  const tdee = Math.round(bmr * activity);

  // Status and recommendations
  let bmiCategory = '';
  let bmiColor = '';
  if (bmi < 18.5) {
    bmiCategory = 'Abaixo do peso';
    bmiColor = 'text-yellow-400';
  } else if (bmi < 24.9) {
    bmiCategory = 'Peso Normal / Saudável';
    bmiColor = 'text-emerald-400';
  } else if (bmi < 29.9) {
    bmiCategory = 'Sobrepeso';
    bmiColor = 'text-purple-300';
  } else {
    bmiCategory = 'Obesidade';
    bmiColor = 'text-red-400';
  }

  const getRecommendation = () => {
    switch (goal) {
      case 'hipertrofia':
        return {
          title: 'Protocolo Hipertrofia & Força Thanos',
          modality: 'Musculação Pesada + Dieta Hipercalórica',
          focus: '4 a 5 dias por semana com ênfase em sobrecarga progressiva e execução correta.',
          dailyCal: tdee + 350
        };
      case 'emagrecimento':
        return {
          title: 'Protocolo Queima Extrema Thanos',
          modality: 'Treinamento Funcional + Musculação em Circuito',
          focus: 'Déficit calórico equilibrado, combinando exercícios compostos e cardio dinâmico.',
          dailyCal: tdee - 450
        };
      case 'definicao':
        return {
          title: 'Protocolo Recomposição Corporal',
          modality: 'Musculação Intensa + Treinamento Funcional',
          focus: 'Manutenção de massa muscular com perda de percentual de gordura.',
          dailyCal: tdee - 200
        };
      case 'condicionamento':
        return {
          title: 'Protocolo Endurance & Mobilidade',
          modality: 'Funcional Avançado + Circuito Cardio',
          focus: 'Aumento de fôlego, fortalecimento do core e agilidade articular.',
          dailyCal: tdee
        };
    }
  };

  const recommendation = getRecommendation();

  const handleSendToCoach = () => {
    const message = `Olá Professor da Academia Thanos em Guaranésia!
Fiz o teste na Calculadora do site:
- Peso: ${weight}kg
- Altura: ${height}cm
- Idade: ${age} anos (Sexo: ${gender})
- Meu IMC: ${bmi} (${bmiCategory})
- Objetivo: ${goal.toUpperCase()}
- Meta Calórica Estimada: ~${recommendation.dailyCal} kcal/dia
- Protocolo Recomendado: ${recommendation.title}

Gostaria de agendar uma avaliação física e começar os treinos na unidade da Rua Francisco Monteiro Dias Nº 380!`;
    openWhatsApp(message);
  };

  return (
    <section id="calculadora" className="py-20 bg-[#0d0a14] border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/40">
            <Calculator className="w-3.5 h-3.5 text-purple-400" />
            <span>Ferramenta Fitness Interativa</span>
            <span className="text-purple-600">·</span>
            <span>DIAGNÓSTICO INICIAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            CALCULE SEU IMC E DESCUBRA O <span className="text-purple-400">TREINO IDEAL</span>.
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Insira suas medidas para receber uma estimativa instantânea de calorias diárias e o plano recomendado pelos nossos professores em Guaranésia.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Column */}
          <div className="lg:col-span-6 bg-[#0f0c18] border border-purple-900/40 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              Seus Dados Físicos
            </h3>

            {/* Gender and Goal */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Sexo Biológico
                </label>
                <div className="flex gap-2">
                  {(['masculino', 'feminino'] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGender(g)}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all capitalize ${
                        gender === g
                          ? 'bg-purple-600 text-white border-purple-400'
                          : 'bg-black/60 text-zinc-400 border-purple-900/40 hover:text-white'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Objetivo Principal
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value as any)}
                  className="w-full bg-black/60 border border-purple-900/50 text-white rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:border-purple-400"
                >
                  <option value="hipertrofia">Ganho de Massa (Hipertrofia)</option>
                  <option value="emagrecimento">Emagrecimento / Queima</option>
                  <option value="definicao">Definição Muscular</option>
                  <option value="condicionamento">Condicionamento Físico</option>
                </select>
              </div>
            </div>

            {/* Weight Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold text-zinc-400 mb-1">
                <span className="uppercase tracking-wider">Peso Atual</span>
                <span className="text-white font-mono text-base font-bold">{weight} kg</span>
              </div>
              <input
                type="range"
                min="40"
                max="160"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer h-2 bg-zinc-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-zinc-400 mt-1 font-mono">
                <span>40 kg</span>
                <span>100 kg</span>
                <span>160 kg</span>
              </div>
            </div>

            {/* Height Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold text-zinc-400 mb-1">
                <span className="uppercase tracking-wider">Altura</span>
                <span className="text-white font-mono text-base font-bold">{height} cm</span>
              </div>
              <input
                type="range"
                min="130"
                max="215"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer h-2 bg-zinc-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-zinc-400 mt-1 font-mono">
                <span>130 cm</span>
                <span>175 cm</span>
                <span>215 cm</span>
              </div>
            </div>

            {/* Age Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold text-zinc-400 mb-1">
                <span className="uppercase tracking-wider">Idade</span>
                <span className="text-white font-mono text-base font-bold">{age} anos</span>
              </div>
              <input
                type="range"
                min="14"
                max="80"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer h-2 bg-zinc-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-zinc-400 mt-1 font-mono">
                <span>14 anos</span>
                <span>45 anos</span>
                <span>80 anos</span>
              </div>
            </div>
          </div>

          {/* Results & Recommendation Column */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#161026] to-[#0f0c18] border border-purple-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-purple-950/40">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-purple-900/40">
                <h3 className="text-lg font-bold text-white">Resultado do Diagnóstico</h3>
                <span className="text-xs font-semibold text-purple-300 bg-purple-900/60 px-2.5 py-1 rounded-md border border-purple-400/30">
                  Thanos Guaranésia
                </span>
              </div>

              {/* Numbers Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6">
                <div className="bg-black/50 p-3.5 rounded-xl border border-purple-900/40">
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400">Seu IMC</div>
                  <div className="text-2xl font-extrabold text-white font-mono tabular-nums mt-0.5">
                    {bmi}
                  </div>
                  <div className={`text-xs font-semibold mt-1 ${bmiColor}`}>
                    {bmiCategory}
                  </div>
                </div>

                <div className="bg-black/50 p-3.5 rounded-xl border border-purple-900/40">
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400">Gasto Basal (TMB)</div>
                  <div className="text-2xl font-extrabold text-white font-mono tabular-nums mt-0.5">
                    {bmr} <span className="text-xs font-normal text-zinc-400">kcal</span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">
                    Queima em repouso
                  </div>
                </div>

                <div className="bg-black/50 p-3.5 rounded-xl border border-purple-900/40 col-span-2 sm:col-span-1">
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400">Meta Sugerida</div>
                  <div className="text-2xl font-extrabold text-purple-400 font-mono tabular-nums mt-0.5">
                    ~{recommendation.dailyCal} <span className="text-xs font-normal text-zinc-400">kcal</span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">
                    Para seu objetivo
                  </div>
                </div>
              </div>

              {/* Suggested Training */}
              <div className="bg-black/40 border border-purple-900/50 rounded-xl p-4 mb-6">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
                  {recommendation.title}
                </div>
                <div className="text-sm font-semibold text-white mb-1.5">
                  Modalidade indicada: {recommendation.modality}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {recommendation.focus}
                </p>
              </div>
            </div>

            {/* Direct Send to Teacher Button */}
            <div className="pt-4 border-t border-purple-900/40">
              <button
                onClick={handleSendToCoach}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 text-sm font-extrabold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-500 hover:to-purple-600 rounded-xl transition-all shadow-lg shadow-purple-900/50 active:scale-95 border border-purple-400/40"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Enviar meu Perfil pro Professor no WhatsApp</span>
              </button>
              <div className="text-center text-[11px] text-zinc-400 mt-2">
                WhatsApp Oficial: {GYM_INFO.whatsapp.formattedNumber}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
