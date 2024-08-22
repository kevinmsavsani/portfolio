// src/components/ContactSection.tsx
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" data-aos="fade-up" className="py-96 bg-blue-50 dark:bg-gray-900 text-center">
    <h2 className="text-3xl font-bold text-blue-600 dark:text-red-600">Contact Me</h2>
    <p className="mt-4 text-gray-700 dark:text-gray-300">This is the Contact section. Get in touch with me!</p>
  </section>
  );
};

export default ContactSection;
