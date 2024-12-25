import React from 'react';
import "./Certificates.css";
import certificate1 from "../Images/certifiacte1.jpg";
import certificate2 from "../Images/certifiacte2.jpg";
import certificate3 from "../Images/certificate3.jpg";
import certificate4 from "../Images/certificate4.png";
import certificate5 from "../Images/certificate5.png";

export default function Certificates() {

  const certi1 = () => {
    document.getElementById("certi_img").style.backgroundImage = `url(${certificate1})`;
  }

  const certi2 = () => {
    document.getElementById("certi_img").style.backgroundImage = `url(${certificate2})`;
  }

  const certi3 = () => {
    document.getElementById("certi_img").style.backgroundImage = `url(${certificate3})`;
  }

  const certi4 = () => {
    document.getElementById("certi_img").style.backgroundImage = `url(${certificate4})`;
  }

  const certi5 = () => {
    document.getElementById("certi_img").style.backgroundImage = `url(${certificate5})`;
  }

  return (
    <div id='certificates'>
        <div className="heading">
            <h1>C E R T I F I C A T E S</h1>
        </div>
        <div id="certi_con">
          <div id="certi_img"></div>
          <div id="all_certi">
            <img onClick={certi5} src={certificate5} alt={certificate5} />
            <img onClick={certi1} src={certificate1} alt={certificate1} />
            <img onClick={certi2} src={certificate2} alt={certificate2} />
            <img onClick={certi3} src={certificate3} alt={certificate3} />
            <img onClick={certi4} src={certificate4} alt={certificate4} />
          </div>
        </div>
        <div id="cert_back">
          <h1>Certificates</h1>
          <div></div>
        </div>
    </div>
  )
}
