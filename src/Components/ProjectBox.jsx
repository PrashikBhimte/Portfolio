import React from 'react';
import "./ProjectBox.css";

export default function ProjectBox(props) {

  let description = props.description;
  let formatted_des = description.split("\n");
  console.log(formatted_des);

  return (
    <div className='project_box'>
      <h2>{props.name}</h2>
      <h3>{props.duration}</h3>
      <div className="project_desc">
        {formatted_des.map((key, i) => { return <p key={i}>{key}</p> })}
      </div>
      <p><span>Skills : </span>{props.skills}</p>
      <div className="project_align">
        <a href={props.github} target='blank'>GitHub</a>
        <a href={props.report} target='blank'>Report</a>
      </div>
    </div>
  )
}
