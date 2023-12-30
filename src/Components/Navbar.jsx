import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
      delay: 100
  });
  }, []);

  return (
    <nav data-aos="fade-down" className='w-screen flex items-center justify-evenly'>
        <ul className='w-1/2 justify-evenly items-center text-lg xl:flex'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#qualifications'>Qualifications</a></li>
            {/* <li><a href='#projects'>Projects</a></li>
            <li><a href='#certifications'>Certifications</a></li> */}
            <li><a href='#contact'>Contact</a></li>
        </ul>
        <h3 className='w-1/4 hidden justify-center items-center text-lg xl:flex'>Prashik Bhimte</h3>
    </nav>
  )
}
