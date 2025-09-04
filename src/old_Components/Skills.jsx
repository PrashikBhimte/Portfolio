import React from 'react';
import "./Skills.css";
import SkillBox from './SkillBox';
import Data from "./skills.json";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdOutlineScience } from "react-icons/md";
import { MdOutlineDevicesOther } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";
import { TbTools } from "react-icons/tb";

export default function Skills() {

  const icons = [<HiOutlineDesktopComputer />, <MdOutlineScience />, <MdOutlineDevicesOther />, <FaDatabase />, <GrSystem />, <TbTools />];

  return (
    <div id='skills'>
        <div className="heading">
            <h1>S K I L L S</h1>
        </div>
        <div id="skills_con">
          {Data.Data.map((key, i) => {return <SkillBox head={key['head']} skills={key['skills']} icon={icons[i]} />})}
        </div>
    </div>
  )
}
