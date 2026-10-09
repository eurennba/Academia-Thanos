import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Modalities } from './components/Modalities';
import { Schedule } from './components/Schedule';
import { PricingPlans } from './components/PricingPlans';
import { Coaches } from './components/Coaches';
import { LocationSection } from './components/LocationSection';
import { BmiCalculator } from './components/BmiCalculator';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileLateralMenu } from './components/MobileLateralMenu';
import { Menu } from 'lucide-react';

export default function App() {
  const [lateralMenuOpen, setLateralMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07050a] text-white flex flex-col font-light antialiased selection:bg-purple-600 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* Fixed Header in Purple & White (Sem Logo, Sem WhatsApp e Sem Nome Tópicos) */}
      <Navbar />

      {/* Main Single-Page Sections enquadradas para todo tipo de celular */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        {/* Hero Section Centralizada */}
        <Hero />

        {/* Sobre a Thanos */}
        <AboutSection />

        {/* Modalidades de Alta Performance */}
        <Modalities />

        {/* Horários Oficiais & Feriados (Feriado das 09 às 12) */}
        <Schedule />

        {/* Planos & Valores (Mensal R$ 80 | VIP R$ 90 - Sem Trimestral) */}
        <PricingPlans />

        {/* Professores Responsáveis no Salão com Botão de Chamada Telefônica */}
        <Coaches />

        {/* Onde Estamos - Rua Francisco Monteiro Dias Nº 380 em Guaranésia */}
        <LocationSection />

        {/* Calculadora IMC Interativa para os Alunos */}
        <BmiCalculator />

        {/* Dúvidas Frequentes */}
        <FaqSection />

        {/* Entre em Contato & Informações */}
        <ContactSection />
      </main>

      {/* Footer Sem Logo e Sem WhatsApp */}
      <Footer />

      {/* Botão Flutuante de Menu Lateral para Celular (Sem Nome Tópicos) */}
      <button
        onClick={() => setLateralMenuOpen(true)}
        className="fixed bottom-5 right-4 sm:right-6 z-40 lg:hidden w-12 h-12 flex items-center justify-center bg-[#140b24]/95 hover:bg-purple-900 text-white rounded-full border border-purple-500/50 shadow-xl shadow-purple-950/80 backdrop-blur-md active:scale-95 transition-all cursor-pointer"
        aria-label="Abrir Menu"
      >
        <Menu className="w-5 h-5 text-purple-400" />
      </button>

      {/* Menu Lateral para Celular */}
      <MobileLateralMenu
        isOpen={lateralMenuOpen}
        onClose={() => setLateralMenuOpen(false)}
      />
    </div>
  );
}
