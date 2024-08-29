import {
  faGithubSquare,
  faLinkedinIn,
  faTelegram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Typical from 'react-typical';

const ContactSection: React.FC = () => (
  <section id="contact" className=" bg-white text-gray-700 dark:bg-black dark:text-white py-8">
    <h2 className="text-center text-4xl font-semibold mb-8 ">
      Contact
    </h2>
    <h3
      className="text-3xl font-normal mb-16 px-16"
      data-aos="fade-left"
      data-aos-delay="300"
    >
      Contact me by:
      <span className="pl-2 text-cyan-500">
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            'Gmail',
            1500,
            'WhatsApp',
            3000,
            'Instagram',
            4500,
            'Telegram',
            3000,
            'LinkedIn',
            4500,
            'GitHub',
            3000,
          ]}
        />
      </span>
    </h3>

    <div className="flex flex-wrap justify-center mt-24 gap-16">
      {contactLinks.map(({ href, iconClass, label, colorClass }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block transform transition-transform group"
          data-aos="zoom-in"
        >
          <div
            className={`relative ${colorClass} flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-[-35deg] group-hover:skew-y-[20deg]`}
          >
            <span
              className={`hidden group-hover:block absolute w-16 h-16 border-2 rounded-md ${colorClass} translate-x-0.5 translate-y-0.5 opacity-80`}
            />
            <span
              className={`hidden group-hover:block absolute w-16 h-16 border-2 rounded-md ${colorClass} translate-x-1 translate-y-1 opacity-60`}
            />
            <span
              className={`hidden group-hover:block absolute w-16 h-16 border-2 rounded-md ${colorClass} translate-x-1.5 translate-y-1.5 opacity-40`}
            />
            <span
              className={`hidden group-hover:block absolute w-16 h-16 border-2 rounded-md ${colorClass} translate-x-2 translate-y-2 opacity-20`}
            />
            <div className={`border-2 rounded-md p-3 ${colorClass}`}>
              <FontAwesomeIcon
                icon={iconClass}
                className={`text-4xl ${colorClass}`}
              />
            </div>
          </div>
          <div
            className={`absolute left-1/2 bottom-[-40px] transform -translate-x-1/2 text-lg font-semibold opacity-0 transition-opacity ease-in-out duration-300 group-hover:opacity-100 ${colorClass}`}
          >
            {label}
          </div>
        </a>
      ))}
    </div>
  </section>
);

const contactLinks = [
  {
    href: 'mailto:kevinmsavsani@gmail.com',
    iconClass: faEnvelope,
    label: 'Gmail',
    colorClass: 'text-red-600 border-red-600 hover:shadow-red-600',
  },
  {
    href: 'https://api.whatsapp.com/send?phone=9537960559',
    iconClass: faWhatsapp,
    label: 'WhatsApp',
    colorClass: 'text-green-500 border-green-500 hover:shadow-green-500',
  },
  {
    href: 'https://web.telegram.org/a/#816371304',
    iconClass: faTelegram,
    label: 'Telegram',
    colorClass: 'text-blue-500 border-blue-500 hover:shadow-blue-500',
  },
  {
    href: 'https://www.linkedin.com/in/kevin1998/',
    iconClass: faLinkedinIn,
    label: 'LinkedIn',
    colorClass: 'text-blue-700 border-blue-700 hover:shadow-blue-700',
  },
  {
    href: 'https://github.com/kevinmsavsani/',
    iconClass: faGithubSquare,
    label: 'GitHub',
    colorClass: 'dark:text-white dark:border-white dark:hover:shadow-white text-black border-black',
  },
];

export default ContactSection;
