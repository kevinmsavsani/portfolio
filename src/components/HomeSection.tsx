// src/components/HomeSection.tsx
import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section id="home" data-aos="fade-up" className="py-96 bg-blue-50 dark:bg-gray-900 text-center">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-red-600">Welcome to My Website</h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">This is the Home section. Scroll down to see more!</p>
    </section>
  );
};

export default HomeSection;
