import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const { title, description, technologies, liveLink, githubLink, image, report } = project;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-surface border border-accent rounded-lg w-full max-w-4xl h-full max-h-[90vh] flex flex-col relative overflow-hidden">
        <button onClick={onClose} className="absolute top-4 right-4 text-text-secondary hover:text-accent transition-colors z-10">
          <FaTimes size={24} />
        </button>
        <div className="flex-grow overflow-y-auto">
          <div className="p-8">
            <h2 className="text-4xl font-bold font-mono text-text-primary mb-4">{title}</h2>
            <div className="w-full h-64 bg-background-dark rounded-md mb-4 overflow-hidden flex items-center justify-center">
            {liveLink ? (
              <iframe
                src={liveLink}
                title={title}
                className="w-full h-full"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            ) : (
              image ? (
                <img src={image} alt={title} className="w-full h-full object-cover" />
              ) : (
                <FaCode className="text-text-dark text-4xl" />
              )
            )}
          </div>
          {/* <img src={image} alt={title} className="w-full h-auto max-h-96 object-contain rounded-md mb-6"/> */}

          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-accent bg-opacity-10 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <p className="text-text-secondary mb-6" style={{ whiteSpace: 'pre-wrap' }}>{description}</p>

          <div className="flex items-center space-x-4 mb-6">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors">
                <FaExternalLinkAlt /> <span>Live Demo</span>
              </a>
            )}
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors">
              <FaGithub /> <span>View Source</span>
            </a>
          </div>

          {report && (
            <div>
              <h3 className="text-2xl font-bold font-mono text-text-primary mb-4">Project Report</h3>
              <div className="w-full h-[600px] rounded-md overflow-hidden">
                <iframe src={report} width="100%" height="100%" title={`${title} Report`}></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div >
  );
};

export default ProjectModal;