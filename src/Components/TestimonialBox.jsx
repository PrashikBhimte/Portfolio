import React from 'react';
import "./TestimonialBox.css";
import quote from "../Images/quote.png";

export default function TestimonialBox(props) {
  return (
    <div className='test_box'>
        <img src={quote} alt={quote} />
        <p>{props.testimonial}</p>
        <img src={props.pic} alt='pic' />
        <h4>{props.name}</h4>
        <h5>{props.relation}</h5>
    </div>
  )
}
