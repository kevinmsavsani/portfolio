import {
  faGithubSquare,
  faLinkedinIn,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Typical from "react-typical";

const ContactSection: React.FC = () => (
  <section className="mt-12 bg-black" id="contactos">
    <h2 className="text-center text-4xl font-semibold mb-8 text-white">
      Contact
    </h2>
    <h3
      className="text-3xl font-normal text-white mb-16 px-16"
      data-aos="fade-left"
      data-aos-delay="300"
    >
      Contact me by:
      <span className="pl-2 text-cyan-500">
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "Gmail",
            1500,
            "WhatsApp",
            1500,
            "Instagram",
            1500,
            "Telegram",
            1500,
            "LinkedIn",
            1500,
            "GitHub",
            1500,
          ]}
        />
      </span>
    </h3>

    <div className="flex flex-wrap justify-center mt-24 mb-24 space-x-4">
      {contactLinks.map(({ href, iconClass, label, colorClass }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block m-10 text-white transform transition-transform hover:rotate-[-35deg] hover:skew-y-[20deg] group"
          data-aos="zoom-in"
        >
          <div
            className={`relative w-28 h-28 ${colorClass} flex items-center justify-center transform transition-transform duration-300 group-hover:translate-y-[-10px] group-hover:translate-x-[10px] group-hover:rotate-[5deg] group-hover:shadow-lg group-hover:shadow-black`}
          >
            {[...Array(5)].map((_, idx) => (
              <span
                key={idx}
                className="absolute inset-0 w-full h-full border-3 border-current rounded-md transition-transform duration-300"
                style={{
                  transform: `translate(${idx * 5}px, ${-idx * 5}px)`,
                  boxShadow: `${idx * 2}px ${
                    -idx * 2
                  }px 10px rgba(0, 0, 0, 0.2)`,
                }}
              ></span>
            ))}
            <FontAwesomeIcon icon={iconClass} className="text-2xl" />
            <div className="absolute left-1/2 bottom-[-10px] transform -translate-x-1/2 text-2xl font-semibold opacity-0 transition-opacity ease-in-out duration-300 group-hover:opacity-100">
              {label}
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

const contactLinks = [
  {
    href: "mailto:kevinmsavsani@gmail.com",
    iconClass: faEnvelope,
    label: "Gmail",
    colorClass: "text-red-600 border-red-600 hover:shadow-red-600",
  },
  {
    href: "https://api.whatsapp.com/send?phone=9537960559",
    iconClass: faWhatsapp,
    label: "WhatsApp",
    colorClass: "text-green-500 border-green-500 hover:shadow-green-500",
  },
  {
    href: "https://web.telegram.org/a/#816371304",
    iconClass: faTelegram,
    label: "Telegram",
    colorClass: "text-blue-500 border-blue-500 hover:shadow-blue-500",
  },
  {
    href: "https://www.linkedin.com/in/kevin1998/",
    iconClass: faLinkedinIn,
    label: "LinkedIn",
    colorClass: "text-blue-700 border-blue-700 hover:shadow-blue-700",
  },
  {
    href: "https://github.com/kevinmsavsani/",
    iconClass: faGithubSquare,
    label: "GitHub",
    colorClass: "text-black border-black hover:shadow-black",
  },
];

export default ContactSection;
