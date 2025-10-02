import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = (
    <>
      {isHomePage && (
        <li><a href="#contact" className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
      )}
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `border border-accent rounded px-4 py-2 hover:bg-accent hover:bg-opacity-10 transition-colors ${isActive ? 'bg-accent bg-opacity-10' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `border border-accent rounded px-4 py-2 hover:bg-accent hover:bg-opacity-10 transition-colors ${isActive ? 'bg-accent bg-opacity-10' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary-bg bg-opacity-80 backdrop-blur-sm dark:bg-dark-bg dark:bg-opacity-80">
        <nav className="container mx-auto flex items-center justify-between p-4 text-text-light dark:text-text-dark">
          <Link to="/" className="text-2xl font-bold font-mono text-text-primary">
            Prashik Bhimte
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              {navLinks}
            </ul>
            <button onClick={toggleTheme} className="text-text-light dark:text-text-dark focus:outline-none">
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="text-text-light dark:text-text-dark focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-surface bg-opacity-95 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-text-primary focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-full space-y-6">
          {navLinks}
          <li>
            <button onClick={toggleTheme} className="text-text-primary focus:outline-none">
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </li>
        </ul>
      </div>

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-opacity"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Navbar;