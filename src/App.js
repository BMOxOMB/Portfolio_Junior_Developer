import { useState } from 'react';
import PortfolioHeader from './components/PortfolioHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import Footer from './components/Footer';

const App = () => {
  return (
    
    <div className="font-sans text-gray-800">
      <PortfolioHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

// DONE