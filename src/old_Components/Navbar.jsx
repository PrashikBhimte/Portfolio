import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
  };

  const activeStyle = {
    ...navStyle,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: '1rem',
      backgroundColor: 'rgba(0, 29, 56, 0.7)', // Using a color from your Education page
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem'
    }}>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : navStyle)}>Home</NavLink>
      <NavLink to="/projects" style={({ isActive }) => (isActive ? activeStyle : navStyle)}>Projects</NavLink>
    </header>
  );
}