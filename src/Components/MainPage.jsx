import React from 'react';
import "./MainPage.css";
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
    <div id="mainpage">
      <RiMenu4Fill id='menu_open' onClick={handleClickOpen}/>
      <RiCloseLargeFill id='menu_close'onClick={handleClickClose}/>
      <Navbar />
      <div className="mainpage_div">
        <Home />
      </div>
      <div className="mainpage_div">
        <About />
      </div>
      <Skills />
      <div className="mainpage_div">
        <Education />
      </div>
      <Projects />
      <div className="mainpage_div">
        <Certificates />
      </div>
      <div className="mainpage_test_div">
        <Testimonials />
      </div>
      <Footer />
    </div>
  )
}
