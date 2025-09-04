import React from 'react';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import { RiCloseLargeFill, RiMenu4Fill } from "react-icons/ri";
import Skills from './Skills.jsx';
import Education from './Education';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Certificates from "./Certificates.jsx";

export default function MainPage() {

  const handleClickOpen = () => {
    document.getElementById('navbar').style.display = "flex";
    document.getElementById('menu_close').style.display = "block";
    document.getElementById('menu_open').style.display = "none";
    document.body.style.overflowY = "hidden";
  }

  const handleClickClose = () => {
    document.getElementById('navbar').style.display = "none";
    document.getElementById('menu_close').style.display = "none";
    document.getElementById('menu_open').style.display = "block";
    document.body.style.overflowY = "scroll";
  }

  return (
    <div className="w-full h-full m-0 p-0">
      <RiMenu4Fill className='text-4xl z-[101] absolute top-7 right-7 text-white block lg:hidden' onClick={handleClickOpen}/>
      <RiCloseLargeFill className='z-[101] text-4xl absolute top-7 right-7 text-white hidden'onClick={handleClickClose}/>
      <Navbar />
      <div className="w-screen h-screen relative overflow-hidden">
        <Home />
      </div>
      <div className="w-screen h-screen relative overflow-hidden">
        <About />
      </div>
      <Skills />
      <div className="w-screen h-screen relative overflow-hidden">
        <Education />
      </div>
      <Projects />
      <div className="w-screen h-screen relative overflow-hidden">
        <Certificates />
      </div>
      <div className="relative">
        <Testimonials />
      </div>
      <Footer />
    </div>
  )
}
