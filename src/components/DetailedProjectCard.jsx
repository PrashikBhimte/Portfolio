import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const DetailedProjectCard = ({ title, description, technologies, liveDemo, sourceCode }) => {
  return (
    <div className="bg-blue-900 bg-opacity-20 p-6 rounded-lg border border-transparent hover:border-accent transition-all duration-300 flex flex-col h-full">
      <h3 className="text-2xl font-bold font-mono text-text-light mb-3">{title}</h3>
      <p className="text-text-dark mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-accent bg-opacity-10 text-accent text-sm font-semibold px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center space-x-4">
        <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-text-dark hover:text-accent transition-colors">
          <FaExternalLinkAlt /> <span>Live Demo</span>
        </a>
        <a href={sourceCode} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-text-dark hover:text-accent transition-colors">
          <FaGithub /> <span>View Source</span>
        </a>
      </div>
    </div>
  );
};

export default DetailedProjectCard;