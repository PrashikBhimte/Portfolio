import React from 'react';
import "./About.css";
import color_grid from "../Images/color_grid.png";

export default function About() {
  return (
    <div id='about'>
      <div id="about_info">
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus com odo viverra maecenas.
        </p>
        <button>Download CV</button>
      </div>
      <div id="about_pic">
        <div id="about_pic_img"></div>
      </div>
      <h1 className='watermark'>About</h1>
      <img id='color_grid' src={color_grid} alt='color grid' />
    </div>
  )
}
