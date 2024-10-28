import React from 'react';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div id='navbar'>
        <h1>Prashik</h1>
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#education'>Education</a></li>
            <li><a href='#projects'>projects</a></li>
            <li><a href='#certificates'>Certificates</a></li>
        </ul>
        <button>Contact Me</button>
    </div>
  )
}
