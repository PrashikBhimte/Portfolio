import React, { useEffect } from 'react';
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPython } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Skills() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id='skills' className='skills'>
            <h3 data-aos="zoom-out">Skills</h3>
            <ul data-aos="fade-down"> 
                <li>
                    <FaPython />Python 
                    <progress value={80} max={100}></progress>
                </li>
                <li>
                    <TbBrandMysql />MySql 
                    <progress value={40} max={100}></progress>
                </li>
                <li>
                <FaHtml5 />HTML
                    <progress value={80} max={100}></progress>
                </li>
                <li>
                <IoLogoCss3 />CSS
                    <progress value={80} max={100}></progress>
                </li>
                <li>
                <FaReact />React js
                    <progress value={80} max={100}></progress>
                </li>
                <li>
                <FaNodeJs />Node js
                    <progress value={40} max={100}></progress>
                </li>
                <li>
                <SiExpress />Express
                    <progress value={40} max={100}></progress>
                </li>
                <li>
                <FaGithub />git
                    <progress value={30} max={100}></progress>
                </li>
            </ul>
        </section>
    )
}
