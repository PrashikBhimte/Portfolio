import React, { useState, useEffect } from 'react';
import "./Home.css";
import profile_pic from "../Images/IMG_20240928_130335_256.png";
import grid from "../Images/grid.png";
import github from "../Images/github.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";

export default function Home() {

  const array = ['ML Developer', 'Web Developer', 'Python Developer'];
  var index = 0;
  var textIndex = 0;
  var word = '';
  var lengthFoWord = 0;
  const [ isFirstTime, setIsFirstTime ] = useState(true);
  const [text, setText] = useState('');

  useEffect(() => {
    const intervalID = setInterval(() => {
      word = array[index];
      lengthFoWord = word.length;
      if (isFirstTime) {
        setText(array[index][textIndex]);
        setIsFirstTime(false);
      }
      if (index < 3) {
        const interval = setInterval(() => {
          if (textIndex < lengthFoWord - 1) {
            textIndex++;
            setText((prevText) => { return prevText + word[textIndex] });
          }
          else {
            clearInterval(interval);
          }
        }, 100);
        index++;
        textIndex = 0;
        setText(word[textIndex]); 
      }
      if (index === 3) {
        index = 0;
      }
    }, 3000);

    return () => clearInterval(intervalID); 
  }, []);

  const [ header, setHeader ] = useState('');

  useEffect(() => {
    const heading = "Heello! I am Prashik";
    const headingLength = heading.length;
    var headingIndex = 0;
    const headingInterval = setInterval(() => {
      if (headingIndex < headingLength - 1) {
        setHeader((prevHeader) => { return prevHeader + heading[headingIndex] });
        headingIndex++;
      }
      else {
        clearInterval(headingInterval);
      }
    }, 100);

    return () => clearInterval(headingInterval);
  }, []); 

  return (
    <div id='home'>
      <img data-aos="zoom-in-right" data-aos-delay="3000" alt='profile_pic' src={profile_pic} id='profile_pic' />
      <div data-aos="zoom-in-left" data-aos-delay="3000" id="home_circle"></div>
      <img alt='grid' src={grid} id='grid' />
      <div id="home_header">
        <h1>{header}</h1>
        <p>{text}</p>
      </div>
      <div id="social_links" data-aos='fade-left' data-aos-delay='3000'>
        <a href='https://www.github.com/PrashikBhimte/' target='blank' ><img src={github} alt="github" /></a>
        <a href='https://www.instagram.com/prashikbhimte29/' target='blank'><img src={instagram} alt='instagram' /></a>
        <a href='https://www.linkedin.com/in/prashikbhimte29/' target='blank'><img src={linkedin} alt="linkedin" /></a>
      </div>
    </div>
  )
}
