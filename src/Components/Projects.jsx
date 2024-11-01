import React from 'react';
import "./Projects.css";
import pdf1 from "../pdf/1.pdf";
import pdf2 from "../pdf/2.pdf";
import pdf3 from "../pdf/3.pdf";
import Data from "./projects.json";

export default function Projects() {

  const array = [pdf1, pdf2, pdf3];
  const projects = Data.projects;

  return (
    <div id='projects'>
        <div className="heading pro_h">
            <h1>P R O J E C T S</h1>
        </div>
        <div id="project_con">
          <div id="pro_hed">
            <h1>Some of my awesome stuffs here</h1> 
          </div>
          <div id="list_pro">

          </div>
        </div>
    </div>
  )
}
