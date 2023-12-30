import React, { useEffect } from 'react';
import img from "../Images/2.jpg";
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
    <section data-aos="zoom-in" id='home' className='w-screen h-screen'>
        <div className='h-3/4 flex justify-center items-center'>
            <div className='w-1/4'>
                <h1 className='text-5xl'><span>Hey,</span>I'm Prashik</h1>
                <p>I am student at SGGS, Nanded.</p>
                <button>
                    Explore <BsFillSendFill />
                </button>
            </div>
            <div className='w-1/4'>
                <img className='w-full' src={img} alt='animage' />
            </div>
        </div>
        <div className='w-full flex justify-center items-center'>
            <ul className='w-3/4 flex justify-evenly items-center'>
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
