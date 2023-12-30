import React, { useEffect } from 'react';
import "./Navbar.css";
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
    <nav data-aos="fade-down">
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#qualifications'>Qualifications</a></li>
            {/* <li><a href='#projects'>Projects</a></li>
            <li><a href='#certifications'>Certifications</a></li> */}
            <li><a href='#contact'>Contact</a></li>
        </ul>
        <h3>Prashik Bhimte</h3>
    </nav>
  )
}
