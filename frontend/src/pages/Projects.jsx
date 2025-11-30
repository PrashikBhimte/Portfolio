import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`);
        const data = await response.json();
        setProjects(data.reverse());
      } catch (error) {
        console.error('Failed to fetch projects', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects/categories`);
        const data = await response.json();
        setCategories(['All', ...data]);
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    };

    fetchProjects();
    fetchCategories();
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-mono font-bold text-center text-text-light mb-12">My Projects</h1>
      
      <div className="flex justify-center space-x-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`font-bold py-2 px-4 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-primary-light text-background-dark'
                : 'bg-surface text-text-light hover:bg-primary-dark'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={handleOpenModal} />
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};

export default Projects;