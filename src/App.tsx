import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LocationBanner } from './components/LocationBanner';
import { Modalities } from './components/Modalities';
import { Coaches } from './components/Coaches';
import { Schedule } from './components/Schedule';
import { BmiCalculator } from './components/BmiCalculator';
import { PricingPlans } from './components/PricingPlans';
import { Testimonials } from './components/Testimonials';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
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
    <div className="min-h-screen bg-[#09090d] text-zinc-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar onOpenTrialModal={() => handleOpenTrialModal()} />

      <main className="flex-1">
        {/* Hero Section in Thanos Purple & Black with direct WhatsApp action */}
        <Hero onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* Location Banner: Rua Francisco Monteiro Dias N° 380, Guaranésia - MG & WhatsApp (35) 99135-9857 */}
        <LocationBanner />

        {/* Modalities & Equipment in Guaranésia */}
        <Modalities onOpenTrialModal={(mod) => handleOpenTrialModal(mod)} />

        {/* Coaches Section with Direct WhatsApp per teacher */}
        <Coaches onOpenTrialModal={(coach) => handleOpenTrialModal(coach)} />

        {/* Dynamic Class Timetable */}
        <Schedule />

        {/* Interactive BMI & Training Prescription Calculator */}
        <BmiCalculator />

        {/* Transparent Membership Plans: Plano Mensal 80,00 and Plano Thanos VIP 90,00 */}
        <PricingPlans />

        {/* Testimonials */}
        <Testimonials />

        {/* Detailed Location Section */}
        <LocationSection />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

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
