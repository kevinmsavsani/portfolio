import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';

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
        {/* Home Section */}
        <section id="home" data-aos="fade-up" className="py-96 bg-blue-50 dark:bg-gray-900 text-center">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-red-600">Welcome to My Website</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">This is the Home section. Scroll down to see more!</p>
        </section>

        {/* About Section */}
        <section id="about" data-aos="fade-up" className="py-96 bg-white dark:bg-gray-800 text-center">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-red-600">About Me</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">This is the About Me section. Learn more about me!</p>
        </section>

        {/* Services Section */}
        <section id="services" data-aos="fade-up" className="py-96 bg-blue-50 dark:bg-gray-900 text-center">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-red-600">My Services</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">This is the Services section. Check out what I offer!</p>
        </section>

        {/* Projects Section */}
        <section id="projects" data-aos="fade-up" className="py-96 bg-white dark:bg-gray-800 text-center">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-red-600">Projects</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">This is the Projects section. Here are some of my works!</p>
        </section>

        {/* Contact Section */}
        <section id="contact" data-aos="fade-up" className="py-96 bg-blue-50 dark:bg-gray-900 text-center">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-red-600">Contact Me</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">This is the Contact section. Get in touch with me!</p>
        </section>
      </main>
    </div>
  );
};

export default App;
