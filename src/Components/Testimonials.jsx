import React, { useEffect, useState } from 'react';
import "./Testimonials.css";
// import quote from "../Images/quote.png";
import Data from "./testimonials.json";
import TestimonialBox from './TestimonialBox';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Testimonials() {

  let array = Data.Data;
  const i = array.length;
  const [mid, setMid] = useState(Math.floor(i / 2));

  const turnRight = () => {
    setMid(mid + 1);
    if (mid == i - 1) {
      setMid(0);
    }
  }

  const turnleft = () => {
    setMid(mid - 1);
    if (mid == 0) {
      setMid(i - 1);
    }
  }

  return (
    <div id='testimonials'>
        <div id="arrayes">
          <button onClick={turnleft}><FaArrowLeftLong /></button>
          <button onClick={turnRight}><FaArrowRightLong /></button>
        </div>
        <div id="test_div">
          <TestimonialBox text={array[mid]['test']}/>
        </div>
    </div>
  )
}
