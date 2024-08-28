import { motion } from 'framer-motion';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const AboutSection = () => {
  return (
    <div className="bg-white text-gray-700 dark:bg-black dark:text-white ">
      <h2 className="text-center text-4xl font-semibold pt-8 pb-2 text-white">
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
            className="flex flex-col space-y-8"
            data-aos="fade-left"
            data-aos-delay="650"
          >
            <h3 className="text-2xl font-bold">Skills</h3>

            <motion.div>
              <h4 className="text-xl font-semibold">Front-End</h4>
              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex flex-col items-center w-16 h-16">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="HTML"
                    className=""
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    HTML
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="CSS"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    CSS
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="Js"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    JavaScript
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="Sass"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    Sass
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="Bootstrap"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    Bootstrap
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="jQuery"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    jQuery
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="React"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    React
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="Typescript"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    Typescript
                  </motion.h5>
                </div>
              </div>
            </motion.div>

            <motion.div>
              <h4 className="text-xl font-semibold">Back-End</h4>
              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="Nodejs"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    NodeJs
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="express"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    Express
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="php"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    PHP
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="laravel"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    Laravel
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="mysql"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    MySQL
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="postgresql"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    PostgreSQL
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="mongodb"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    MongoDB
                  </motion.h5>
                </div>
              </div>
            </motion.div>

            <motion.div>
              <h4 className="text-xl font-semibold">Tools</h4>
              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="figma"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    Figma
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="photoshop"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    Photoshop
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="Visual Studio Code"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    VS Code
                  </motion.h5>
                </div>
                <div className="flex flex-col items-center">
                  <motion.img
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    alt="git"
                    className="w-16 h-16 transition-transform transform hover:scale-110"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  />
                  <motion.h5
                    initial={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1, y: -96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black text-center py-2 px-2 text-xs rounded-lg"
                  >
                    Git
                  </motion.h5>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
