import React from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import SponsorsSection from '@/components/landing/SponsorsSection';
import CTASection from '@/components/landing/CTASection';
import AboutSection from '@/components/landing/AboutSection';
import WhyChooseSection from '@/components/landing/WhyChooseSection';
import ServicesSection from '@/components/landing/ServicesSection';
import MetricsSection from '@/components/landing/MetricsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="bg-white relative flex flex-col overflow-hidden items-stretch">
      <Header />
      
      <main>
        <HeroSection />
        <SponsorsSection />
        <CTASection />
        <AboutSection />
        <WhyChooseSection />
        <ServicesSection />
        <MetricsSection />
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
