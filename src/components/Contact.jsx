import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl font-mono font-bold text-text-light mb-4">Get In Touch</h2>
      <p className="text-text-dark mb-8">My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
      <div className="flex justify-center items-center space-x-6">
        <a href="mailto:your.email@example.com" className="text-4xl text-text-dark hover:text-accent transition-colors transform hover:-translate-y-1">
          <FaEnvelope />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-4xl text-text-dark hover:text-accent transition-colors transform hover:-translate-y-1">
          <FaLinkedin />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-4xl text-text-dark hover:text-accent transition-colors transform hover:-translate-y-1">
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;