import React, { useEffect } from 'react';
import "./Qualifications.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Qualifications() {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-out",
            delay: 100
        });
    }, []);

  return (
    <section id='qualifications' className='qualifications'>

        <h3 data-aos="zoom-out" >Qualifications</h3>
        <div data-aos="fade-left" className='qualificationsinfo'>
            <div>
                <h4>B.Tech, Computer Science and Engineering</h4>
                <hr></hr>
                <p>Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIET), Nanded</p>
                <p className='italic'>NOVEMBER 2022 - JUNE 2026 <br></br>  CGPA: 8.5</p>
            </div>
            <div>
                <h4>HSC, General Science</h4>
                <hr></hr>
                <p>Shree Maharishi Vidya Mandir Chandrapur</p>
                <p className='italic'>JANUARY 2023 - FEBRUARY 2023 <br></br> Percentage: 87.00% </p>
            </div>
            <div>
                <h4>SSC</h4>
                <hr></hr>
                <p>St. Michael's English School, Chandrapur</p>
                <p className='italic'>DECEMBER 2022 - JANUARY 2023 <br></br> Percentage: 89.20% </p>
            </div>
        </div>
    </section>
  )
}
