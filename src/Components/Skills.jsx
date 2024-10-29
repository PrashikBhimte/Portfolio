import React from 'react';
import "./Skills.css";
import SkillBox from './SkillBox';
import Data from "./skills.json";

export default function Skills() {
  return (
    <div id='skills'>
        <div className="heading">
            <h1>S K I L L S</h1>
        </div>
        <div id="skills_con">
            <div id="skills_white">
              {Data.Data1.map((key) => {return <SkillBox head={key['head']} skills={key['skills']} />})}
            </div>
            <div id="skills_blue">
              {Data.Data2.map((key) => {return <SkillBox head={key['head']} skills={key['skills']} />})}
            </div>
        </div>
    </div>
  )
}
