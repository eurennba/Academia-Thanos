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
import { TrialModal } from './components/TrialModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedModality, setSelectedModality] = useState<string | undefined>(undefined);
  const [selectedCoach, setSelectedCoach] = useState<string | undefined>(undefined);

  const handleOpenTrialModal = (modalityOrCoach?: string) => {
    if (modalityOrCoach) {
      if (
        modalityOrCoach.includes('Prof') ||
        modalityOrCoach.includes('Vinicius') ||
        modalityOrCoach.includes('Presley')
      ) {
        setSelectedCoach(modalityOrCoach);
        setSelectedModality(undefined);
      } else {
        setSelectedModality(modalityOrCoach);
        setSelectedCoach(undefined);
      }
    } else {
      setSelectedModality(undefined);
      setSelectedCoach(undefined);
    }
    setTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-light antialiased selection:bg-purple-600 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* Fixed Header in BinhoBeatz layout */}
      <Navbar onOpenTrialModal={() => handleOpenTrialModal()} />

      {/* Main Single-Page Sections in BinhoBeatz layout */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* Sobre a Thanos */}
        <AboutSection />

        {/* Modalidades */}
        <Modalities onOpenTrialModal={(mod) => handleOpenTrialModal(mod)} />

        {/* Horários & Feriados (Feriado das 09 às 12) */}
        <Schedule />

        {/* Planos & Valores (Mensal R$ 80 | VIP R$ 90 - Sem Trimestral) */}
        <PricingPlans />

        {/* Professores Responsáveis */}
        <Coaches onOpenTrialModal={(coach) => handleOpenTrialModal(coach)} />

        {/* Onde Estamos - Rua Francisco Monteiro Dias Nº 380 */}
        <LocationSection />

        {/* Calculadora IMC */}
        <BmiCalculator />

        {/* Dúvidas Frequentes */}
        <FaqSection />

        {/* Entre em Contato (BinhoBeatz Form + Direct WhatsApp/Maps) */}
        <ContactSection />
      </main>

      {/* Footer in BinhoBeatz style */}
      <Footer />

      {/* Free Trial Class Modal */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        defaultModality={selectedModality}
        defaultCoach={selectedCoach}
      />
    </div>
  );
}
