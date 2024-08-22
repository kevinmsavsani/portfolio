import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown as faArrowDownSolid } from '@fortawesome/free-solid-svg-icons'; // Solid arrow up icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-scroll";

const Content: React.FC = () => (
  <div className="bg-black w-screen h-screen relative">
    <section className="flex justify-center items-center h-full relative font-extrabold">
      <div className="text-center z-20">
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-white text-3xl font-semibold mb-4"
        >
          Hello
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="800"
          className="text-cyan-500 text-4xl mb-4"
        >
          I am Kevin Savsani
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="1000"
          className="text-white text-2xl mb-8"
        >
          Full-stack developer
        </p>

        <div className="flex justify-center space-x-4">
          <a
            className="flex items-center space-x-2 bg-cyan-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-300"
            href="https://www.linkedin.com/in/kevin1998/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-600 rounded-full">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </div>
            <span>Linkedin</span>
          </a>
          <a
            className="flex items-center space-x-2 bg-cyan-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-300"
            href="https://github.com/kevinmsavsani/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-600 rounded-full">
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </div>
            <span>Github</span>
          </a>
          <a
            className="flex items-center space-x-2 bg-cyan-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-300"
            href="https://api.whatsapp.com/send?phone=9537960559"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-600 rounded-full">
              <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
            </div>
            <span>Whatsapp</span>
          </a>
        </div>

        <Link
          to="about"
          smooth={true}
          duration={500}
          className="absolute bottom-10 left-1/2 cursor-pointer border-2 border-white rounded-full h-12 w-8 flex items-center justify-center"
          data-aos="fade-up"
        >
          <FontAwesomeIcon icon={faArrowDownSolid} className="text-white" />
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
