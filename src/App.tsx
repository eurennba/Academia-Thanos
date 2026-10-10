import React from 'react';
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

export default function App() {
  return (
    <div className="min-h-screen bg-[#07050a] text-white flex flex-col font-light antialiased selection:bg-purple-600 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* Header com Navegação e Menu Superior (Sem botão na parte de baixo) */}
      <Navbar />

      {/* Main Single-Page Sections perfeitamente centralizadas e enquadradas para mobile */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        {/* Hero Section com Logo Oficial com Destaque Impressionante */}
        <Hero />

        {/* Sobre a Academia Thanos */}
        <AboutSection />

        {/* Modalidades de Treino */}
        <Modalities />

        {/* Horários de Funcionamento (Grade 100% Centralizada para Mobile e Desktop) */}
        <Schedule />

        {/* Planos & Valores (Cards Centralizados e Perfeitamente Enquadrados) */}
        <PricingPlans />

        {/* Professores Responsáveis com Botão Direto para WhatsApp */}
        <Coaches />

        {/* Localização - Rua Francisco Monteiro Dias Nº 380 em Guaranésia */}
        <LocationSection />

        {/* Calculadora IMC Interativa */}
        <BmiCalculator />

        {/* Dúvidas Frequentes */}
        <FaqSection />

        {/* Contato & Informações */}
        <ContactSection />
      </main>

      {/* Footer com Crédito do Criador e Logo Oficial */}
      <Footer />
    </div>
  );
}
