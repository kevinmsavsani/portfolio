// src/components/ServicesSection.tsx
import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" data-aos="fade-up" className="py-96 bg-blue-50 dark:bg-gray-900 text-center">
    <h2 className="text-3xl font-bold text-blue-600 dark:text-red-600">My Services</h2>
    <p className="mt-4 text-gray-700 dark:text-gray-300">This is the Services section. Check out what I offer!</p>
  </section>
  );
};

export default ServicesSection;
