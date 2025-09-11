import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-bg py-6 mt-auto">
      <div className="container mx-auto text-center text-text-dark">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/prashikbhimte29/" className="text-2xl hover:text-accent transition-colors"><FaLinkedin /></a>
          <a href="https://github.com/PrashikBhimte" className="text-2xl hover:text-accent transition-colors"><FaGithub /></a>
          <a href="mailto:prashikbhimte29@gmail.com" className="text-2xl hover:text-accent transition-colors"><FaEnvelope /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Prashik Bhimte. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;