import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

export default function Footer() {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in",
            delay: 100
        });
    }, []);

    return (
        <footer id='contact'>
            <div className='footer' data-aos="zoom-in">
                <div className='contactdiv'>
                    <div>
                        <h2>Contact Me</h2>
                        <p>Feel free to reach out!</p>
                    </div>
                    <div>
                        <button>Email Me<MdEmail /></button>
                    </div>
                </div>
                <div className='footerdiv'>
                    <div>
                        <h4>Prashik Gajanan Bhimte</h4>
                        <p>Ⓒ2022-All rights are reserved.</p>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#linkedin"><FaLinkedin /></a></li>
                            <li><a href="#github"><FaSquareGithub /></a></li>
                            <li><a href="#instagram"><FaInstagramSquare /></a></li>
                            <li><a href="#hackerrank"><SiHackerrank /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
