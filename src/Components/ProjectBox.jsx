import React from 'react';
import "./ProjectBox.css";

export default function ProjectBox(props) {
  return (
    <div className='project_box'>
        <h2>{props.name}</h2>
        <h3>{props.duration}</h3>
        <p>{props.description}</p>
        <h3><span>Skills : </span>{props.skills}</h3>
        <div className="project_align">
            <a href={props.github} >GitHub</a>
            <a href={props.report} >Report</a>
        </div>
    </div>
  )
}
 