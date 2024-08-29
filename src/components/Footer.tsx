import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp as faArrowUpSolid } from '@fortawesome/free-solid-svg-icons'; // Solid arrow up icon

// Define the Footer component
const Footer: React.FC = () => {
  // Get the current year
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black dark:text-white border-t-3 border-gray-200 shadow-md py-8 px-32 opacity-[90]">
      <div className="flex justify-between items-center">
        <div className="text-sm py-8 px-8">
          <p>
            <footer>Page created by Kevin</footer>
          </p>
          <p>&copy; {year}. All Rights Reserved.</p>
        </div>
        <div className="flex py-8 gap-8 px-16">
          <a
            href="https://www.linkedin.com/in/kevin1998/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl px-4 text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/kevinmsavsani/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl px-4 text-white"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=9537960559"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl px-4 text-white"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <a
          href="#home" // Replace with the actual home URL or route if necessary
          className="flex text-3xl text-black rounded-full bg-white h-14 w-14 items-center justify-center"
        >
          <FontAwesomeIcon icon={faArrowUpSolid} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
