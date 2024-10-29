import React from 'react';
import "./Form.css";

export default function Form() {
  return (
    <div id='form'>
        <div>
            <input type='text' placeholder='Your Name' />
            <input type='text' placeholder='Your Email' />
        </div>
        <input type='text' placeholder='Subject' />
        <textarea placeholder='Message' />
        <button>Send Message</button>
    </div>
  )
}
