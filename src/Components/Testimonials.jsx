import React, { useEffect } from 'react';
import "./Testimonials.css";
// import quote from "../Images/quote.png";
import Data from "./testimonials.json";
import TestimonialBox from './TestimonialBox';
import pic from "../Images/IMG_20231204_001209.jpg";

export default function Testimonials() {

  useEffect(() => {
    setInterval(() => {
      const element = document.getElementById('test_div');
      element.scrollLeft += 500;
    }, 2000);
  }, []);

  let array = Data.Data;

  return (
    <div id='testimonials'>
        <div className="test_div" id='test_div'>
          {array.map((key) => {return <TestimonialBox testimonial={key['testimonial']} name={key['name']} relation={key['relation']} pic={pic}/>})}
        </div>
    </div>
  )
}
