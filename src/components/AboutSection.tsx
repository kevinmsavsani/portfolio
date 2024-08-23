import React from "react";
import { FormattedMessage } from "react-intl";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="bg-white text-gray-700 dark:bg-black dark:text-white "
    >
      <h2 className="text-center text-4xl font-semibold mb-8 text-white">
        About me
      </h2>
      <section className="p-6" id="sobre-mi">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="flex flex-col p-4 shadow-lg rounded-lg"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h3 className="text-3xl text-cyan-500 font-bold">
              <FormattedMessage id="im" defaultMessage="who I am" />
            </h3>
            <h4 className="pt-8 text-4xl font-bold ">
              <FormattedMessage
                id="description"
                defaultMessage="My name is Kevin Savsani and I am a full stack developer."
              />
            </h4>
            <p className="text-xl mb-4 text-gray-500 py-8 leading-loose">
              <FormattedMessage
                id="my-description"
                defaultMessage="I have been working on web designing and web development for 4 years. Constantly updating the technologies I already master, but also looking to learn new technologies to enrich my skills and improve my good practices as a developer."
              />
            </p>
            <ul className="flex flex-col pl-5 text-gray-500 text-xl gap-4">
              <li className="mb-2">
                <span className=" font-bold text-gray-700  dark:text-white">
                  <FormattedMessage id="years" defaultMessage="Age:" />
                </span>
                26
              </li>
              <li className="mb-2">
                <span className="font-bold text-gray-700  dark:text-white">
                  Hobbies:{" "}
                </span>
                Chess, Football and Programming
              </li>
              <li className="mb-2">
                <span className="font-bold text-gray-700  dark:text-white">
                  Email:
                </span>{" "}
                kevinmsavsani@gmail.com
              </li>
              <li className="mb-2">
                <span className="font-bold text-gray-700  dark:text-white">
                  <FormattedMessage id="from" defaultMessage="From:" />
                </span>{" "}
                Gujarat, India
              </li>
            </ul>
            <div className="flex flex-col py-16 gap-8">
              <a
                href={"cv"}
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
            className="flex flex-col p-4 shadow-lg rounded-lg"
            data-aos="fade-left"
            data-aos-delay="650"
          >
            <h3 className="text-xl ">Skills</h3>
            <h4 className="text-2xl ">Front-End</h4>
            <div className="flex flex-wrap">
              <div className="flex flex-col items-center p-4">
                <img
                  alt="HTML"
                  className="w-20 h-20 mb-2"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                />
                <h5 className="text-lg font-semibold">HTML</h5>
              </div>
            </div>
            <h4 className="text-2xl mt-4">Back-End</h4>
            <div className="flex flex-wrap">
              <div className="flex flex-col items-center p-4">
                <img
                  alt="NodeJs"
                  className="w-20 h-20 mb-2"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                />
                <h5 className="text-lg font-semibold">NodeJs</h5>
              </div>
            </div>
            <h4 className="text-2xl mt-4">
              <FormattedMessage id="tools" defaultMessage="Tools" />
            </h4>
            <div className="flex flex-wrap">
              <div className="flex flex-col items-center p-4">
                <img
                  alt="Figma"
                  className="w-20 h-20 mb-2"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                />
                <h5 className="text-lg font-semibold">Figma</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
