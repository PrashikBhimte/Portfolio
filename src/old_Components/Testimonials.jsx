import React from 'react';
import Data from "./testimonials.json";
import TestimonialBox from './TestimonialBox';
import pic1 from "../Images/pranav.jpg";
import pic2 from "../Images/saymak.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage from "../Images/banner.png";

export default function Testimonials() {

  const array = Data.Data;
  const pics = [pic1, pic2]

  const settings = {
    className : "max-w-6xl w-full h-full max-h-[500px] p-2.5",
    dots : false, 
    infinite : true,
    speed : 500,
    autoplay : true,
    autoplayspeed : 300,
    slidesToShow: 1,
    swipeToSlide: true,
    cssEase : "linear",
    arrows : false
  };

  const backgroungStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  return (
    <div id='testimonials' className='w-screen bg-cover h-[600px] flex justify-center items-center' style={backgroungStyle}>
      <Slider {...settings}>
        {array.map((key, i) => { return <TestimonialBox testimonial={key['testimonial']} name={key['name']} relation={key['relation']} pic={pics[i]} /> })}
      </Slider>
    </div>
  )
}