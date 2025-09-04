import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-primary-bg bg-opacity-80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between p-4 text-text-light">
        <Link to="/" className="text-2xl font-bold font-mono text-accent">
          [Your Name]
        </Link>
        <ul className="hidden md:flex items-center space-x-6">
          {isHomePage ? (
            <>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </>
          ) : null}
          <li>
            <NavLink to="/projects" className={({ isActive }) =>
              `border border-accent rounded px-4 py-2 hover:bg-accent hover:bg-opacity-10 transition-colors ${isActive ? 'bg-accent bg-opacity-10' : ''}`
            }>
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;