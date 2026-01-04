import React from 'react';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { AgitationSection } from './components/AgitationSection';
import { SolutionSection } from './components/SolutionSection';
import { ProductDetails } from './components/ProductDetails';
import { CertificateSection } from './components/CertificateSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
      <Hero />
      <PainSection />
      <AgitationSection />
      <SolutionSection />
      <ProductDetails />
      <CertificateSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;