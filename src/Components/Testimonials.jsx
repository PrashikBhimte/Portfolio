import React from 'react';
import "./Testimonials.css";
import Data from "./testimonials.json";
import TestimonialBox from './TestimonialBox';
import pic1 from "../Images/pranav.jpg";
import pic2 from "../Images/saymak.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {

  const array = Data.Data;
  const pics = [pic1, pic2]

  const settings = {
    className : "test_div",
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

  return (
    <div id='testimonials'>
      <Slider {...settings}>
        {array.map((key, i) => { return <TestimonialBox testimonial={key['testimonial']} name={key['name']} relation={key['relation']} pic={pics[i]} /> })}
      </Slider>
    </div>
  )
}