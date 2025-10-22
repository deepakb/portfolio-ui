import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: FaGithub, href: CONTACT_INFO.github, label: 'GitHub' },
    { icon: FaLinkedin, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, href: `mailto:${CONTACT_INFO.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Deepak Biswal. All rights reserved.
        </p>
        <div className="flex space-x-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;