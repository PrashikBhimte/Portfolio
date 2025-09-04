import React from 'react';
import color_grid from "../Images/color_grid.png";
import resume from "./resume.pdf";
import backgroundImage from "../Images/IMG_20231204_001041.jpg";

export default function About() {

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "0 -50px",
  }

  return (
    <div className='w-full h-full flex flex-col lg:flex-row justify-center items-center'>
      <div className='w-full lg:w-lg h-96 max-w-lg z-10 m-0 p-2.5 flex flex-col justify-center items-start '>
        <h1 className='text-3xl lg:text-5xl m-2.5 lg:mx-0 lg:my-8'>About Me</h1>
        <p className='text-[1rem] my-2.5 mx-8'>Hi there! I'm Prashik Bhimte, a machine learning enthusiast with a passion for building innovative AI applications. With a strong foundation in Python, I've developed a solid understanding of machine learning concepts and have completed several projects in the field.
        </p>
        <a className='w-40 h-14 bg-[_#615CFD] flex justify-center items-center text-white border-none text-[1rem] my-5 mx-8  no-underline hover:scale-105 active:scale-95' href={resume} target='blank'>Download CV</a>
      </div>
      <div className='w-screen max-w-lg h-14 p-0 lg:w-lg lg:h-[512px] flex justify-end items-end m-0 lg:p-2.5'>
        <div className='w-full h-full lg:w-96 lg:h-96 z-10 bg-cover' style={backgroundStyle}></div>
      </div>
      <h1 className='watermark'>About</h1>
      <img className='right-0 top-[40vh] absolute w-72 h-auto lg:top-[25vh] lg:right-[35vh]' src={color_grid} alt='color grid' />
    </div>
  )
}
