// src/components/HomeSection.tsx
import React from 'react';
import Content from './Content';
import ParticleBackground from './ParticleBackground';

const HomeSection: React.FC = () => {
  return (
    <>
      <section
        id="home"
        data-aos="fade-up"
        className=" bg-blue-50 dark:bg-gray-900 text-center"
      >
        <ParticleBackground />
        <Content />
      </section>
    </>
  );
};

export default HomeSection;
