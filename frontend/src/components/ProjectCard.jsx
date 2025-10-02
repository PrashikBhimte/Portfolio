import React from 'react';
import { FaCode } from 'react-icons/fa';

const ProjectCard = ({ project, onOpen }) => {
  const { title, description, technologies, image, liveLink } = project;

  // Truncate description to a certain length
  const truncatedDescription = description.length > 100 
    ? description.substring(0, 100) + '...' 
    : description;

  return (
    <div 
      className="bg-surface p-6 rounded-lg border border-transparent hover:border-accent transition-all duration-300 flex flex-col h-full cursor-pointer shadow-lg shadow-text-dark/10"
      onClick={() => onOpen(project)}
    >
      <div className="w-full h-48 bg-background-dark rounded-md mb-4 overflow-hidden flex items-center justify-center">
        {liveLink ? (
          <iframe 
            src={liveLink} 
            title={title} 
            className="w-full h-full" 
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        ) : (
          image ? (
            <img src={image} alt={title} className="w-full h-full object-cover"/>
          ) : (
            <FaCode className="text-text-dark text-4xl" />
          )
        )}
      </div>
      <h3 className="text-2xl font-bold font-mono text-text-light mb-3">{title}</h3>
      <p className="text-text-dark mb-4 flex-grow" style={{ whiteSpace: 'pre-wrap' }}>{truncatedDescription} <span className="text-accent">more</span></p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-accent bg-opacity-10 text-white text-sm font-semibold px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
