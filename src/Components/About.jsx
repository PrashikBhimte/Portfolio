import React from 'react';
import "./About.css";
import color_grid from "../Images/color_grid.png";
import resume from "./resume.pdf";

export default function About() {

  return (
    <div id='about'>
      <div id="about_info">
        <h1>About Me</h1>
        <p>Hi there! I'm Prashik Bhimte, a machine learning enthusiast with a passion for building innovative AI applications. With a strong foundation in Python, I've developed a solid understanding of machine learning concepts and have completed several projects in the field.
        </p>
        <a id='about_but' href="https://drive.google.com/uc?export=view&id=1NRoByFcMU4w3IONGgdmw0wnsnrNghSY0" target='blank'>Download CV</a>
      </div>
      <div id="about_pic">
        <div id="about_pic_img"></div>
      </div>
      <h1 className='watermark'>About</h1>
      <img id='color_grid' src={color_grid} alt='color grid' />
    </div>
  )
}
