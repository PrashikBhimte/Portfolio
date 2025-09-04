import React from 'react';
import quote from "../Images/quote.png";

export default function TestimonialBox(props) {
  return (
    <div className='w-full h-[500px] text-white m-0 flex flex-col justify-center items-center shrink-0'>
        <img src={quote} alt={quote} />
        <p className='text-[1rem] p-5'>{props.testimonial}</p>
        <img className='w-12 h-12 rounded-full m-2.5' src={props.pic} alt='pic' />
        <h4 className='text-[1.1rem] m-0'>{props.name}</h4>
        <h5 className='text-[1rem] m-0'>{props.relation}</h5>
    </div>
  )
}
