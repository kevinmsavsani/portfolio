// src/components/AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" data-aos="fade-up" className="py-96 bg-white dark:bg-gray-800 text-center">
    <h2 className="text-3xl font-bold text-blue-600 dark:text-red-600">About Me</h2>
    <p className="mt-4 text-gray-700 dark:text-gray-300">This is the About Me section. Learn more about me!</p>
  </section>
  );
};

export default AboutSection;
