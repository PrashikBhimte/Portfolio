import React, { useEffect } from 'react';
import img from "../Images/1.jpg";
import AOS from 'aos';
import "aos/dist/aos.css";
import { IoDocumentText } from "react-icons/io5";

export default function About() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
      delay: 100
  });
  }, []);

  return (
    <section id='about' className='about'>
        <h2 data-aos="zoom-out">ABOUT ME</h2>
        <div className='aboutinfo'>
            <div data-aos="fade-right">
                <img src={img} alt='aniamge' />
            </div>
            <div data-aos="fade-left">
                <p>
                Hello, I'm a second-year engineering 
                student deeply passionate about web 
                development. My journey began with 
                mastering the fundamentals of HTML and 
                CSS, and I quickly progressed to learning 
                and implementing React.js to create 
                dynamic and responsive user interfaces.
                </p>
                <p>
                Eager to broaden my skill set and delve
                into server-side development, I am 
                currently immersing myself in the world
                of Node.js and Express.
                </p>
                <button>
                  Resume <IoDocumentText />
                </button>
            </div>
        </div>
    </section>
  )
}
