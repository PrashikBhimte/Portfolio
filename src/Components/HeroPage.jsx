import React, { useEffect } from "react";
import img from "../Images/2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillSendFill } from "react-icons/bs";

export default function HeroPage() {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-out",
            delay: 100,
        });
    }, []);

    return (
        <section data-aos="zoom-in" id="home" className="w-screen h-screen z-0">
            <div className="xl:h-3/4 w-full flex flex-col xl:flex-row justify-center items-center">
                <div className="w-full xl:w-1/4 pt-16 flex justify-center">
                    <div className="h-full">
                        <h1 className="text-5xl">
                            <span>Hey,</span>I'm Prashik
                        </h1>
                        <p>I am student at SGGS, Nanded.</p>
                        <button className="w-32 h-11 rounded-xl text-xm text-white bg-blue-700 flex justify-evenly items-center">
                            Explore <BsFillSendFill />
                        </button>
                    </div>
                </div>
                <div className="w-full max-w-xs xl:max-w-none xl:w-1/4">
                    <img className="w-full" src={img} alt="animage" />
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <ul className="w-3/4 flex flex-col md:flex-row h-48 md:h-auto justify-evenly items-center">
                    <li>
                        <a href="#linkedin">LINKEDIN</a>
                    </li>
                    <li>
                        <a href="#github">GITHUB</a>
                    </li>
                    <li>
                        <a href="#instagram">INSTAGRAM</a>
                    </li>
                    <li>
                        <a href="#hackerrank">HACKERRANK</a>
                    </li>
                </ul>
            </div>
            {/* <div className='absolute w-1/2 h-1/2 bg-blue-700 -right-60 -top-36 rotate-45'></div> */}
        </section>
    );
}
