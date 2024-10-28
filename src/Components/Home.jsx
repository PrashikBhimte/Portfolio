import React from 'react';
import "./Home.css";
import profile_pic from "../Images/IMG_20240928_130335_256.png";
import grid from "../Images/grid.png";
import github from "../Images/github.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";

export default function Home() {
  return (
    <div id='home'>
        <img alt='profile_pic' src={profile_pic} id='profile_pic'/>
        <div id="home_circle"></div>
        <img alt='grid' src={grid} id='grid' />
        <div id="home_header">
          <h1>Hello! I am Prashik</h1>
          <p>Machine Learning Developer</p>
        </div>
        <div id="social_links">
          <a href='https://www.github.com/PrashikBhimte/' target='blank' ><img src={github} alt="github" /></a>
          <a href='https://www.instagram.com/prashikbhimte29/' target='blank'><img src={instagram} alt='instagram' /></a>
          <a href='https://www.linkedin.com/in/prashikbhimte29/' target='blank'><img src={linkedin} alt="linkedin" /></a>
        </div>
    </div>
  )
}
