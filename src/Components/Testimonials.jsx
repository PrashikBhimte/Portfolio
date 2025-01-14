import React, { useEffect } from 'react';
import "./Testimonials.css";
// import quote from "../Images/quote.png";
import Data from "./testimonials.json";
import TestimonialBox from './TestimonialBox';
import pic from "../Images/pranav.jpg";

export default function Testimonials() {

  var array = Data.Data;
  const total_count = array.length;
  var count = 0;

  // useEffect(() => {

    // setInterval(() => {
    //   const element = document.getElementById('test_div');
    //   if (count < total_count) {
    //     element.scrollLeft += 500;
    //     array.push(array.shift());
    //     count++;
    //   }
    //   else {
    //     element.scrollLeft -= total_count * 500;
    //     count = 0;
    //     console.log(array);
    //   }
    // }, 2000);

  // }, []);

  return (
    <div id='testimonials'>
      <div className="test_div" id='test_div' >
        {array.map((key) => { return <TestimonialBox testimonial={key['testimonial']} name={key['name']} relation={key['relation']} pic={pic} /> })}
      </div>
    </div>
  )
}


// {
        //     "testimonial" : "Hi there! I'm Prashik Bhimte, a machine learning enthusiast with a passion for building innovative AI applications. With a strong foundation in Python, I've developed a solid understanding of machine learning concepts and have completed several projects in the field.",
        //     "name" : "yash",
        //     "relation" : "Owner"
        // },
        // {
        //     "testimonial" : "Hi there! I'm Prashik Bhimte, a machine learning enthusiast with a passion for building innovative AI applications. With a strong foundation in Python, I've developed a solid understanding of machine learning concepts and have completed several projects in the field.",
        //     "name" : "Pratik",
        //     "relation" : "Owner"
        // },
        // {
        //     "testimonial" : "Hi there! I'm Prashik Bhimte, a machine learning enthusiast with a passion for building innovative AI applications. With a strong foundation in Python, I've developed a solid understanding of machine learning concepts and have completed several projects in the field.",
        //     "name" : "rahul",
        //     "relation" : "Owner"
        // }