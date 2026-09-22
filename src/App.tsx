import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesSection } from './components/ServicesSection';
import { Facilities } from './components/Facilities';
import { MembershipPlans } from './components/MembershipPlans';
import { RegistrationForm } from './components/RegistrationForm';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { TestimonialsFaq } from './components/TestimonialsFaq';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { MEMBERSHIP_PLANS } from './data/gymData';
import { GymService } from './types';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(MEMBERSHIP_PLANS[0].id);
  const [selectedGoal, setSelectedGoal] = useState<string>('');

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
  };

  const handleSelectService = (service: GymService) => {
    if (service.recommendedPlanId) {
      setSelectedPlanId(service.recommendedPlanId);
    }
    setSelectedGoal(`${service.title} (${service.categoryLabel})`);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f0f0f0] flex flex-col selection:bg-[#d4af37] selection:text-black">
      {/* Navigation */}
      <Navbar onSelectPlan={handleSelectPlan} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <ServicesSection onSelectService={handleSelectService} />
        <Facilities />
        <MembershipPlans onSelectPlan={handleSelectPlan} />
        <RegistrationForm 
          selectedPlanId={selectedPlanId} 
          onPlanChange={setSelectedPlanId} 
          selectedGoal={selectedGoal}
        />
        <GoogleReviewsSection />
        <TestimonialsFaq />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingActions />
    </div>
  );
}

