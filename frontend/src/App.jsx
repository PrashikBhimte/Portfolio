import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeContext } from './contexts/ThemeContext';

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-dark-bg' : 'bg-primary-bg'}`}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}