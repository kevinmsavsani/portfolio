// src/components/ProjectsSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/autoplay';
import './swiper.css';
import { Button } from '@headlessui/react';

export const projects = [
  {
    title: 'CoinPlus',
    description: 'Trading platform for cryptocurrencies',
    technologies: [
      'React',
      'CSS',
      'Redux',
      'Bootstrap',
      'TypeScript',
      'Solidity',
      'NodeJS',
      'MongoDB',
    ],
    img: `./proyecto-13.jpg`,
    demoLink: 'https://coin-plus.vercel.app/',
    repoLink: 'https://github.com/Nahuel61920/CoinPlus',
  },
  {
    title: 'Justice',
    description: 'Lawyers website',
    technologies: ['HTML5', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    img: `./proyecto-14.jpg`,
    demoLink: 'https://nahuel61920.github.io/Justice/',
    repoLink: 'https://github.com/Nahuel61920/Justice',
  },
  {
    title: 'PI Dogs',
    description: 'Individual Project',
    technologies: [
      'React',
      'CSS',
      'Redux',
      'NodeJS',
      'ExpressJS',
      'Sequelize',
      'PostgreSQL',
    ],
    img: `./proyecto-15.jpg`,
    demoLink: 'https://pi-dogs-main-ashy.vercel.app/',
    repoLink: 'https://github.com/Nahuel61920/PI-DOGS-MAIN',
  },
  {
    title: 'Power Engine',
    description: 'Automobiles Website',
    technologies: ['HTML5', 'CSS', 'JavaScript'],
    img: `./proyecto-7.jpg`,
    demoLink: 'https://nahuel61920.github.io/Power-Engine/',
    repoLink: 'https://github.com/Nahuel61920/Power-Engine',
  },
  {
    title: 'Spider-Man fan page',
    description: 'Fan page Spider-Man',
    technologies: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap'],
    img: `./proyecto-6.jpg`,
    demoLink: 'https://nahuel61920.github.io/Spider-Man/',
    repoLink: 'https://github.com/Nahuel61920/Spider-Man',
  },
  {
    title: 'EveryRunning',
    description: 'Website shoes',
    technologies: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap'],
    img: `./proyecto-12.jpg`,
    demoLink: 'https://nahuel61920.github.io/EveryRunning/',
    repoLink: 'https://github.com/Nahuel61920/EveryRunning',
  },
  {
    title: 'Premier Food',
    description: 'Fast food',
    technologies: ['HTML5', 'CSS', 'JavaScript', 'Sass'],
    img: `./proyecto-5.jpg`,
    demoLink: 'https://nahuel61920.github.io/PremierFood/',
    repoLink: 'https://github.com/Nahuel61920/PremierFood',
  },
  {
    title: 'ShopTec',
    description: 'Ecommerce',
    technologies: ['HTML5', 'CSS', 'Sass', 'JavaScript'],
    img: `./proyecto-8.jpg`,
    demoLink: 'https://nahuel61920.github.io/shop-tec/',
    repoLink: 'https://github.com/Nahuel61920/shop-tec',
  },
  {
    title: 'Elegant Hand',
    description: 'Watch Shop',
    technologies: ['HTML5', 'CSS', 'JavaScript'],
    img: `./proyecto-10.jpg`,
    demoLink: 'https://nahuel61920.github.io/ElegantHand/',
    repoLink: 'https://github.com/Nahuel61920/ElegantHand',
  },
  {
    title: 'Vida en papel',
    description: 'Bookstore',
    technologies: ['HTML5', 'CSS', 'JavaScript'],
    img: `./proyecto-9.jpg`,
    demoLink: 'https://nahuel61920.github.io/vida-en-papel/',
    repoLink: 'https://github.com/Nahuel61920/vida-en-papel',
  },
  {
    title: 'Plus Anime',
    description: 'Anime website',
    technologies: ['HTML5', 'CSS', 'JavaScript'],
    img: `./proyecto-11.jpg`,
    demoLink: 'https://nahuel61920.github.io/PlusAnime/',
    repoLink: 'https://github.com/Nahuel61920/PlusAnime',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-white text-gray-700 dark:bg-black dark:text-white py-12">
      <h2 className="text-4xl font-bold text-center mb-8">
        <FormattedMessage id="projects" defaultMessage="Projects" />
      </h2>
      <div
        className="overflow-x-hidden"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Swiper
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="text-center w-80">
              <img
                src={project.img}
                alt={project.title}
                className="w-full opacity-50 transform scale-75 transition-transform duration-300 ease-in-out"
              />
              <div className="slide-content transform scale-0 pt-4 transition-transform duration-300 ease-in-out swiper-slide-active:transform flex flex-col gap-4">
                <div className='flex flex-col gap-1'>
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {project.description}
                  </p>
                </div>
                <p className="text-sm pt-2 text-gray-500">
                  {project.technologies.join(' - ')}
                </p>
                <div className='flex w-full items-center justify-center gap-2'>
                  <a
                    href={project.demoLink}
                    className="mx-2 px-4 py-2 bg-cyan-500 rounded hover:bg-cyan-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.repoLink}
                    className="mx-2 px-4 py-2 border-2 border-black dark:border-white rounded transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <Link to="/project">
          <Button />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
