import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutForm from '../components/admin/AboutForm';
import ExperienceForm from '../components/admin/ExperienceForm';
import EducationForm from '../components/admin/EducationForm';
import CertificatesForm from '../components/admin/CertificatesForm';
import TestimonialsForm from '../components/admin/TestimonialsForm';
import ContactForm from '../components/admin/ContactForm';

const Admin = () => {
  const [hero, setHero] = useState({ title: '', subtitle: '' });
  const [about, setAbout] = useState({ title: '', description: '' });
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', imageUrl: '', link: '', technologies: '' });
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [contact, setContact] = useState({ email: '', phone: '', address: '' });
  const [activeSection, setActiveSection] = useState('Hero');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, aboutRes, projectsRes, experienceRes, educationRes, certificatesRes, testimonialsRes, contactRes] = await Promise.all([
          fetch('http://localhost:3001/api/hero'),
          fetch('http://localhost:3001/api/about'),
          fetch('http://localhost:3001/api/projects'),
          fetch('http://localhost:3001/api/experience'),
          fetch('http://localhost:3001/api/education'),
          fetch('http://localhost:3001/api/certificates'),
          fetch('http://localhost:3001/api/testimonials'),
          fetch('http://localhost:3001/api/contact'),
        ]);
        const heroData = await heroRes.json();
        const aboutData = await aboutRes.json();
        const projectsData = await projectsRes.json();
        const experienceData = await experienceRes.json();
        const educationData = await educationRes.json();
        const certificatesData = await certificatesRes.json();
        const testimonialsData = await testimonialsRes.json();
        const contactData = await contactRes.json();

        setHero(heroData);
        setAbout(aboutData);
        setProjects(Array.isArray(projectsData) ? projectsData : []);
        setExperiences(Array.isArray(experienceData) ? experienceData : []);
        setEducation(Array.isArray(educationData) ? educationData : []);
        setCertificates(Array.isArray(certificatesData) ? certificatesData : []);
        setTestimonials(Array.isArray(testimonialsData) ? testimonialsData : []);
        setContact(contactData);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  const handleHeroChange = (e) => {
    setHero({ ...hero, [e.target.name]: e.target.value });
  };

  const handleHeroSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await fetch('http://localhost:3001/api/hero', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(hero),
      });
      alert('Hero section updated!');
    } catch (error) {
      console.error('Failed to update hero data', error);
    }
  };

  const handleAboutChange = (e) => {
    setAbout({ ...about, [e.target.name]: e.target.value });
  };

  const handleAboutSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await fetch('http://localhost:3001/api/about', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(about),
      });
      alert('About section updated!');
    } catch (error) {
      console.error('Failed to update about data', error);
    }
  };

  const handleProjectChange = (e, id) => {
    const { name, value } = e.target;
    const updatedProjects = projects.map(p =>
      p.id === id ? { ...p, [name]: value } : p
    );
    setProjects(updatedProjects);
  };

  const handleProjectUpdate = async (e, id) => {
    e.preventDefault();
    const projectToUpdate = projects.find(p => p.id === id);
    const technologies = typeof projectToUpdate.technologies === 'string'
      ? projectToUpdate.technologies.split(',').map(t => t.trim())
      : projectToUpdate.technologies;

    try {
      const token = localStorage.getItem('token');
      await fetch(`http://localhost:3001/api/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ ...projectToUpdate, technologies }),
      });
      alert('Project updated!');
    } catch (error) {
      console.error('Failed to update project', error);
    }
  };

  const handleProjectDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`http://localhost:3001/api/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setProjects(projects.filter(p => p.id !== id));
      alert('Project deleted!');
    } catch (error) {
      console.error('Failed to delete project', error);
    }
  };

  const handleNewProjectChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleNewProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3001/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ ...newProject, technologies: newProject.technologies.split(',').map(t => t.trim()) }),
      });
      const data = await response.json();
      setProjects([...projects, data]);
      setNewProject({ title: '', description: '', imageUrl: '', link: '', technologies: '' });
      alert('Project added!');
    } catch (error) {
      console.error('Failed to add project', error);
    }
  };

  const handleEducationSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await fetch('http://localhost:3001/api/education', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(education),
      });
      alert('Education section updated!');
    } catch (error) {
      console.error('Failed to update education data', error);
    }
  };

  const handleCertificatesSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await fetch('http://localhost:3001/api/certificates', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(certificates),
      });
      alert('Certificates section updated!');
    } catch (error) {
      console.error('Failed to update certificates data', error);
    }
  };

  const handleTestimonialsSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await fetch('http://localhost:3001/api/testimonials', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(testimonials),
      });
      alert('Testimonials section updated!');
    } catch (error) {
      console.error('Failed to update testimonials data', error);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await fetch('http://localhost:3001/api/contact', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(contact),
      });
      alert('Contact section updated!');
    } catch (error) {
      console.error('Failed to update contact data', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'Hero':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Edit Hero Section</h3>
            <form onSubmit={handleHeroSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={hero.title}
                  onChange={handleHeroChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Subtitle</label>
                <input
                  type="text"
                  name="subtitle"
                  value={hero.subtitle}
                  onChange={handleHeroChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Save</button>
            </form>
          </div>
        );
      case 'About':
        return <AboutForm about={about} handleAboutChange={handleAboutChange} handleAboutSubmit={handleAboutSubmit} />;
      case 'Projects':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Manage Projects</h3>

            <div className="mb-8 p-4 border border-gray-200 rounded-lg">
              <h4 className="text-xl font-bold text-gray-700 mb-4">Add New Project</h4>
              <form onSubmit={handleNewProjectSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                  <input type="text" name="title" value={newProject.title} onChange={handleNewProjectChange} placeholder="Title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                  <textarea name="description" value={newProject.description} onChange={handleNewProjectChange} placeholder="Description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
                  <input type="text" name="imageUrl" value={newProject.imageUrl} onChange={handleNewProjectChange} placeholder="Image URL" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Link</label>
                  <input type="text" name="link" value={newProject.link} onChange={handleNewProjectChange} placeholder="Link" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Technologies (comma-separated)</label>
                  <input type="text" name="technologies" value={newProject.technologies} onChange={handleNewProjectChange} placeholder="Technologies (e.g., React, Node.js)" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Add Project</button>
              </form>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-700 mb-4">Existing Projects</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(projects.map(project => (
                  <div key={project.id} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                    <form onSubmit={(e) => handleProjectUpdate(e, project.id)} className="space-y-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                        <input type="text" name="title" value={project.title} onChange={(e) => handleProjectChange(e, project.id)} placeholder="Title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                        <textarea name="description" value={project.description} onChange={(e) => handleProjectChange(e, project.id)} placeholder="Description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
                        <input type="text" name="imageUrl" value={project.imageUrl} onChange={(e) => handleProjectChange(e, project.id)} placeholder="Image URL" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Link</label>
                        <input type="text" name="link" value={project.link} onChange={(e) => handleProjectChange(e, project.id)} placeholder="Link" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Technologies (comma-separated)</label>
                        <input type="text" name="technologies" value={Array.isArray(project.technologies) ? project.technologies.join(', ') : project.technologies} onChange={(e) => handleProjectChange(e, project.id)} placeholder="Technologies (e.g., React, Node.js)" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex justify-end space-x-2 mt-4">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Update</button>
                        <button type="button" onClick={() => handleProjectDelete(project.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Delete</button>
                    </div>
                  </form>
                </div>
              )))
            || (
              <p className="text-gray-600">No projects found.</p>
            )}
          </div>
        </div>
      </div>
        );
      case 'Experience':
        return <ExperienceForm experiences={experiences} setExperiences={setExperiences} />;
      case 'Education':
        return <EducationForm education={education} setEducation={setEducation} handleEducationSubmit={handleEducationSubmit} />;
      case 'Certificates':
        return <CertificatesForm certificates={certificates} setCertificates={setCertificates} handleCertificatesSubmit={handleCertificatesSubmit} />;
      case 'Testimonials':
        return <TestimonialsForm testimonials={testimonials} setTestimonials={setTestimonials} handleTestimonialsSubmit={handleTestimonialsSubmit} />;
      case 'Contact':
        return <ContactForm contact={contact} setContact={setContact} handleContactSubmit={handleContactSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Admin Dashboard</h2>
        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">Logout</button>
      </div>

      <div className="flex space-x-4 mb-8 border-b-2 pb-2">
        <button onClick={() => setActiveSection('Hero')} className={`font-bold py-2 px-4 rounded-lg ${activeSection === 'Hero' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Hero</button>
        <button onClick={() => setActiveSection('About')} className={`font-bold py-2 px-4 rounded-lg ${activeSection === 'About' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>About</button>
        <button onClick={() => setActiveSection('Projects')} className={`font-bold py-2 px-4 rounded-lg ${activeSection === 'Projects' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Projects</button>
        <button onClick={() => setActiveSection('Experience')} className={`font-bold py-2 px-4 rounded-lg ${activeSection === 'Experience' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Experience</button>
        <button onClick={() => setActiveSection('Education')} className={`font-bold py-2 px-4 rounded-lg ${activeSection === 'Education' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Education</button>
        <button onClick={() => setActiveSection('Certificates')} className={`font-bold py-2 px-4 rounded-lg ${activeSection === 'Certificates' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Certificates</button>
        <button onClick={() => setActiveSection('Testimonials')} className={`font-bold py-2 px-4 rounded-lg ${activeSection === 'Testimonials' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Testimonials</button>
        <button onClick={() => setActiveSection('Contact')} className={`font-bold py-2 px-4 rounded-lg ${activeSection === 'Contact' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Contact</button>
      </div>

      <div>
        {renderSection()}
      </div>
    </div>
  );
};

export default Admin;
