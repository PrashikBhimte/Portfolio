import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-bg py-6 mt-auto">
      <div className="container mx-auto text-center text-text-dark">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-2xl hover:text-accent transition-colors"><FaLinkedin /></a>
          <a href="#" className="text-2xl hover:text-accent transition-colors"><FaGithub /></a>
          <a href="#" className="text-2xl hover:text-accent transition-colors"><FaTwitter /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} [Your Name]. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;