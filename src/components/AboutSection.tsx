import { motion } from 'framer-motion';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const config = [
  {
    category: 'Front-End',
    items: [
      {
        name: 'HTML',
        imgSrc:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS',
        imgSrc:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
      },
      {
        name: 'JavaScript',
        imgSrc:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
      },
      {
        name: 'Sass',
        imgSrc:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      },
      {
        name: 'Bootstrap',
        imgSrc:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      },
      {
        name: 'jQuery',
        imgSrc:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg',
      },
      {
        name: 'React',
        imgSrc:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Typescript',
        imgSrc:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
    ],
  },
  {
    category: 'Back-End',
    items: [
      {
        name: 'NodeJs',
        imgSrc:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express',
        imgSrc:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        name: 'PHP',
        imgSrc:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      },
      {
        name: 'Laravel',
        imgSrc:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
      },
      {
        name: 'MySQL',
        imgSrc:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
      },
      {
        name: 'PostgreSQL',
        imgSrc:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
      },
      {
        name: 'MongoDB',
        imgSrc:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg',
      },
    ],
  },
  {
    category: 'Tools',
    items: [
      {
        name: 'Figma',
        imgSrc:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      },
      {
        name: 'Photoshop',
        imgSrc:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
      },
      {
        name: 'VS Code',
        imgSrc:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png',
      },
      {
        name: 'Git',
        imgSrc:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
    ],
  },
];

const AboutSection = () => {
  return (
    <div className="bg-white text-gray-700 dark:bg-black dark:text-white ">
      <h2 className="text-center text-4xl font-semibold pt-8 pb-2">
        About me
      </h2>
      <section className="p-4" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="flex flex-col p-4 shadow-lg rounded-lg"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h3 className="text-xl text-cyan-500 font-bold">
              <FormattedMessage id="im" defaultMessage="who I am" />
            </h3>
            <h4 className="pt-4 text-2xl font-bold ">
              <FormattedMessage
                id="description"
                defaultMessage="My name is Kevin Savsani and I am a full stack developer."
              />
            </h4>
            <p className="text-base mb-4 text-gray-500 py-8 leading-loose">
              <FormattedMessage
                id="my-description"
                defaultMessage="I have been working on web designing and web development for 4 years. Constantly updating the technologies I already master, but also looking to learn new technologies to enrich my skills and improve my good practices as a developer."
              />
            </p>
            <ul className="flex flex-col pl-5 text-gray-500 text-base gap-4">
              <li className="mb-2">
                <span className=" font-bold text-gray-700  dark:text-white">
                  <FormattedMessage id="years" defaultMessage="Age:" />
                </span>
                26
              </li>
              <li className="mb-2">
                <span className="font-bold text-gray-700  dark:text-white">
                  Hobbies:{' '}
                </span>
                Chess, Football and Programming
              </li>
              <li className="mb-2">
                <span className="font-bold text-gray-700  dark:text-white">
                  Email:
                </span>{' '}
                kevinmsavsani@gmail.com
              </li>
              <li className="mb-2">
                <span className="font-bold text-gray-700  dark:text-white">
                  <FormattedMessage id="from" defaultMessage="From:" />
                </span>{' '}
                Gujarat, India
              </li>
            </ul>
            <div className="flex flex-col py-8 gap-8">
              <a
                href={'cv'}
                target="_blank"
                rel="noopener noreferrer"
                download="cv.pdf"
                className=" py-2 px-2 text-xl text-center font-bold rounded-lg dark:hover:bg-gray-800 dark:border-white border-2 w-64"
              >
                <FormattedMessage id="btn-cv" defaultMessage="Download CV" />
              </a>
            </div>
          </div>

          <div
            className="flex flex-col space-y-4"
            data-aos="fade-left"
            data-aos-delay="650"
          >
            <h3 className="text-xl text-cyan-500 font-bold pt-4">Skills</h3>
            {config.map((section, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold">{section.category}</h3>
                <motion.div className="flex flex-wrap gap-6 m-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="flex flex-col items-center w-16 h-16"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.img
                        initial={{ filter: 'grayscale(100%)' }}
                        whileHover={{ filter: 'grayscale(0%)' }}
                        transition={{ duration: 0.3 }}
                        alt={item.name}
                        src={item.imgSrc}
                        className="w-16 h-16"
                      />
                      <motion.h5
                        initial={{ opacity: 0, translateY: 0 }}
                        animate={{ opacity: 0, translateY: 0 }}
                        whileHover={{ opacity: 1, translateY: -10 }} // Adjusted translateY for a smooth effect
                        transition={{ duration: 0.3 }}
                        className="absolute bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                        style={{ top: '0%', transform: 'translateY(-50%)' }} // Positioning the text below the image
                      >
                        {item.name}
                      </motion.h5>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
