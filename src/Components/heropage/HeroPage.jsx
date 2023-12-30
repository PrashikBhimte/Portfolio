import React, { useEffect } from 'react';
import "./HeroPage.css";
import img from "../../Images/2.jpg";
import AOS from "aos";
import 'aos/dist/aos.css';
import { BsFillSendFill } from "react-icons/bs";

export default function HeroPage() {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-out",
            delay: 100
        });
    }, []);

  return (
    <section id='home' className='heropage'>
        <div data-aos="zoom-in" className='homeIntro'>
            <div>
                <h1><span>Hey,</span>I'm Prashik</h1>
                <p>I am student at SGGS, Nanded.</p>
                <button>
                    Explore <BsFillSendFill />
                </button>
            </div>
            <div>
                <img src={img} alt='animage' />
            </div>
        </div>
        <div data-aos="zoom-in" className='homeSocial'>
            <ul>
                <li><a href="#linkedin">LINKEDIN</a></li>
                <li><a href="#github">GITHUB</a></li>
                <li><a href="#instagram">INSTAGRAM</a></li>
                <li><a href='#hackerrank'>HACKERRANK</a></li>
            </ul>
        </div>
        <div className='tri'></div>
    </section>
  )
}
