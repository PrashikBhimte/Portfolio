import React from 'react';
import "./SkillBox.css";

export default function SkillBox(props) {

  return (
    <div className='skill_box'>
        {props.icon}
        <h2>{props.head}</h2>
        <p>{props.skills}</p>
    </div>
  )
}
