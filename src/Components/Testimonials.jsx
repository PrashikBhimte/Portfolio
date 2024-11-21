import React, { useEffect, useState, useRef } from 'react';
import "./Testimonials.css";
// import quote from "../Images/quote.png";
import Data from "./testimonials.json";
import TestimonialBox from './TestimonialBox';
import pic from "../Images/IMG_20231204_001209.jpg";

export default function Testimonials() {

  const ourRef = document.getElementById('test_diiv');
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0
  });
  const [isScrolling, setIsScrolling] = useState(false);
  const handleDragStart = (e) => {
    if (!ourRef) return
    const slider = ourRef.current.children[0];
    const startX = e.pageX - slider.offsetTop;
    const startY = e.pageY - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop }
    setIsMouseDown(true)
    document.body.style.cursor = "grabbing"
  }
  const handleDragEnd = () => {
    setIsMouseDown(false)
    if (!ourRef) return
    document.body.style.cursor = "default"
  }
  const handleDrag = (e) => {
    if (!isMouseDown || !ourRef) return;
    e.preventDefault();
    const slider = ourRef;
    const x = e.pageX - slider.offsetTop;
    const y = e.pageY - slider.offsetLeft; 
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;
    console.log(walkX, walkY)
  }

  var array = Data.Data;
  // const total_count = array.length;
  // var count = 0;

  // useEffect(() => {
  //   setInterval(() => {
  //     const element = document.getElementById('test_div');
  //     if (count < total_count) {
  //       element.scrollLeft += 500;
  //       array.push(array.shift());
  //       count++;
  //     }
  //     else {
  //       element.scrollLeft -= total_count * 500;
  //       count = 0;
  //       console.log(array);
  //     }
  //   }, 2000);
  // }, []);

  return (
    <div id='testimonials'>
      <div className="test_div" id='test_div' ref={ourRef} onMouseDown={handleDragStart} onMouseUp={handleDragEnd} onMouseMove={handleDrag}>
        {array.map((key) => { return <TestimonialBox testimonial={key['testimonial']} name={key['name']} relation={key['relation']} pic={pic} /> })}
      </div>
    </div>
  )
}
