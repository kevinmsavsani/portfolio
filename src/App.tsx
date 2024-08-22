// src/App.tsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations
      once: true, // Animation should happen only once
    });
  }, []);

  return (
    <div>
      <Header />

      <main className="mx-auto mt-16">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
