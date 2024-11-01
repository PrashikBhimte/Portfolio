import React from 'react';
import "./Footer.css";
import address from "../Images/address.png";
import phone from "../Images/phone.png";
import email from "../Images/email.png";
import Form from './Form';

export default function Footer() {
  return (
    <div id='footer'>
        <div id="footer_header">
            <h2>Let's discuss for a project</h2>
            <p>Ready to bring your vision to life? Let's make it happen together.</p>
        </div>
        <div id="footer_mid">
            <ul id="mid_left">
                <li>
                    <img src={address} alt='address' />
                    <ul>
                        <h3>Address</h3>
                        <p>300E, Dasiy-I, VST-5, Dewada, Chandrapur 442406</p>
                    </ul>
                </li>
                <li>
                    <img src={phone} alt='phone' />
                    <ul>
                        <h3>Call me</h3>
                        <p>+91 84590 58302</p>
                    </ul>
                </li>
                <li>
                    <img src={email} alt='email' />
                    <ul>
                        <h3>Email me</h3>
                        <p>prashikbhimte29@gmail.com</p>
                    </ul>
                </li>
            </ul>
            <div id="mid_right">
                <Form />
            </div>
        </div>
        <div id="footer_bottom">
            <h3>Prashik Bhimte</h3>
            <p>AI/ML & Web Development-Focused B.Tech Student | 3+ Proficiency in Python, JavaScript & Frameworks.</p>
            <hr/>
            <p>Copyright ©2024 All rights reserved</p>
        </div>
    </div>
  )
}
