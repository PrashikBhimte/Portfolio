import React, { useState } from 'react';
import "./Form.css";

export default function Form() {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ message, setMessage ] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  }

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = async () => {
    await fetch("https://portfolio-server-five-theta.vercel.app", {
      method : "POST",
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        "name" : name,
        "email" : email,
        "subject" : subject,
        "message" : message
      })
    });
    alert("Message has been send!");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <div id='form'>
        <div>
            <input type='text' placeholder='Your Name' value={name} onChange={handleChangeName} />
            <input type='text' placeholder='Your Email' value={email} onChange={handleChangeEmail} />
        </div>
        <input type='text' placeholder='Subject' value={subject} onChange={handleChangeSubject} />
        <textarea placeholder='Message' value={message} onChange={handleChangeMessage} />
        <button onClick={handleSubmit}>Send Message</button>
    </div>
  )
}
