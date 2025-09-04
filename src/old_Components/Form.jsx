import React, { useState } from "react";

export default function Form() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async () => {
    const responce = await fetch("https://portfolio-server-hoys.onrender.com/sendmessage", {
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
    if (!responce.ok) {
      alert("Error in sending message!");
    }
    else {
      alert("Message has been send!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-full flex flex-col sm:flex-row justify-between items-center p-0 m-0">
        <input
          className="md:w-[47.5%] w-full h-12 bg-transparent border-2 border-white text-white my-5 mx-0 text-xl px-2.5 box-border"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleChangeName}
        />
        <input
          className="md:w-[47.5%] w-full h-12 bg-transparent border-2 border-white text-white my-5 mx-0 text-xl px-2.5 box-border"
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>
      <input
        className="w-full h-12 bg-transparent border-2 border-white text-white my-5 mx-0 text-xl px-2.5 box-border"
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={handleChangeSubject}
      />
      <textarea
        className="w-full min-h-52 bg-transparent border-2 border-white text-white my-5 text-xl p-2.5 box-border"
        placeholder="Message"
        value={message}
        onChange={handleChangeMessage}
      />
      <button className="w-36 h-12 bg-[_#615CFD] flex justify-center items-center text-white text-xm border-none my-5 hover:scale-105 active:scale-95" onClick={handleSubmit}>Send Message</button>
    </div>
  );
}
