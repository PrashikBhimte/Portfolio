import React from 'react';
import address from "../Images/address.png";
import phone from "../Images/phone.png";
import email from "../Images/email.png";
import Form from './Form';

export default function Footer() {
  return (
    <div id='footer' className='w-screen h-auto bg-[_#001D38]'>
        <div className='w-screen flex justify-center items-center flex-col text-white'>
            <h2 className='text-3xl max-w-2xl w-full p-5 text-center box-border'>Let's discuss for a project</h2>
            <p className='text-xl m-0 max-w-2xl w-full p-5 text-center box-border'>Ready to bring your vision to life? Let's make it happen together.</p>
        </div>
        <div className='w-full flex flex-col lg:flex-row justify-evenly items-center p-0 sm:px-12'>
            <ul className='w-auto flex flex-col justify-center items-start list-none p-0'>
                <li className='sm:p-7 p-0 flex flex-row justify-center items-center gap-12'>
                    <img src={address} alt='address' className='w-12 h-12 rounded-full border-r-2 border-white'/>
                    <ul>
                        <h3 className='text-2xl p-0 m-0 text-white'>Address</h3>
                        <p className='text-xl text-white p-0 m-0'>300E, Dasiy-I, VST-5, Dewada, Chandrapur 442406</p>
                    </ul>
                </li>
                <li className='sm:p-7 p-0 flex flex-row justify-center items-center gap-12'>
                    <img src={phone} alt='phone'  className='w-12 h-12 rounded-full border-r-2 border-white'/>
                    <ul>
                        <h3 className='text-2xl p-0 m-0 text-white'>Call me</h3>
                        <p className='text-xl text-white p-0 m-0'>+91 84590 58302</p>
                    </ul>
                </li>
                <li className='sm:p-7 p-0 flex flex-row justify-center items-center gap-12'>
                    <img src={email} alt='email'  className='w-12 h-12 rounded-full border-r-2 border-white'/>
                    <ul>
                        <h3 className='text-2xl p-0 m-0 text-white'>Email me</h3>
                        <p className='text-xl text-white p-0 m-0'>prashikbhimte29@gmail.com</p>
                    </ul>
                </li>
            </ul>
            <div className='w-[90%] lg:w-[40%]'>
                <Form />
            </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center text-white m-0 p-2.5 box-border'>
            <h3 className='text-3xl m-0'>Prashik Bhimte</h3>
            <p className='text-xl text-center'>AI/ML & Web Development-Focused B.Tech Student | 3+ Proficiency in Python, JavaScript & Frameworks.</p>
            <hr className='w-[90%]'/>
            <p className='text-xl text-center'>Copyright ©2024 All rights reserved</p>
        </div>
    </div>
  )
}
