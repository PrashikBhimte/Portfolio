import React from 'react';
import "./Navbar.css";

export default function Navbar() {

  const handleClickClose = () => {
    if (window.innerWidth < 1000) {
      document.getElementById('navbar').style.display = "none";
      document.getElementById('menu_close').style.display = "none";
      document.getElementById('menu_open').style.display = "block";
      document.body.style.overflowY = "scroll";
    }
  }

  return (
    <div id='navbar'>
        <h1>Prashik</h1>
        <ul>
            <li><a onClick={handleClickClose} href='#home'>Home</a></li>
            <li><a onClick={handleClickClose} href='#about'>About</a></li>
            <li><a onClick={handleClickClose} href='#skills'>Skills</a></li>
            <li><a onClick={handleClickClose} href='#education'>Education</a></li>
            <li><a onClick={handleClickClose} href='#projects'>projects</a></li>
            <li><a onClick={handleClickClose} href='#certificates'>Certificates</a></li>
        </ul>
        <a id='nav_but' href='#footer'>Contact Me</a>
    </div>
  )
}
