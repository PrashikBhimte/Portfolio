import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { HiMenuAlt1 } from "react-icons/hi";

export default function Navbar() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
      delay: 100
  });
  }, []);

  function openMenu() {
    document.getElementById("ul").style.display = "flex";
  }

  function closeMenu() {
    document.getElementById("ul").style.display = "none";
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (windowWidth > 1280) {
      document.getElementById("ul").style.display = "flex";
    }
    else {
      document.getElementById("ul").style.display = "none";
    }
  }, [windowWidth]);

  return (
    <nav data-aos="fade-down" className='bg-blue-700 w-screen h-8 xl:bg-transparent fixed flex items-center justify-center '>
        <ul id='ul' className='absolute inset-y-0 left-0 xl:relative xl:bg-transparent xl:flex-row bg-black/40 flex-col w-screen max-w-xs h-screen xl:h-full xl:max-w-none xl:w-1/2 hidden justify-evenly items-center text-lg xl:flex'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#qualifications'>Qualifications</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#certifications'>Certifications</a></li>
            <li><a href='#contact'>Contact</a></li>
            <li><a onClick={closeMenu} className='xl:hidden' href='#none'>Close</a></li>
        </ul>
        <div onClick={openMenu} className='w-1/2 md:w-3/4 xl:hidden text-3xl text-white'><HiMenuAlt1 /></div>
        <h3 className='w-1/2 md:w-1/4 text-white text-center xl:text-right text-lg'>Prashik Bhimte</h3>
    </nav>
  )
}
