// src/App.tsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PentagonBg from './components/PentagonBg';

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

      <main className="mt-12">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <PentagonBg />
      </main>
      <Footer />
    </div>
  );
};

export default App;
