import React, { useState, useEffect } from 'react';
import "./Home.css";
import profile_pic from "../Images/IMG_20240928_130335_256.png";
import grid from "../Images/grid.png";
import github from "../Images/github.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";

export default function Home() {

  // const [text, setText] = useState('');
  // const [isWriting, setIsWriting] = useState(true);
  // const textRef = useRef('Hello, World!'); // Replace with your desired text

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (isWriting) {
  //       setText((prevText) => prevText + textRef.current[prevText.length]);
  //       if (prevText.length === textRef.current.length - 1) {
  //         setIsWriting(false);
  //       }
  //     } else {
  //       setText((prevText) => prevText.slice(0, -1));
  //       if (prevText.length === 0) {
  //         setIsWriting(true);
  //       }
  //     }
  //   }, 100); // Adjust the interval time as needed

  //   return () => clearInterval(intervalId);
  // }, []);


  const array = ['Machine Learning Developer', 'Web Developer', 'Python Developer'];
  var index = 0;
  var textIndex = 0;
  const [ text, setText ] = useState(array[index][textIndex]);

  useEffect(() => {
    setInterval(() => {
      const word = array[index];
      if ( index < 2 ) {
        index++;
        setInterval(() => {
          if ( textIndex < word.length - 1 ) {
            textIndex++;
            setText((prevText) => { return prevText + word[textIndex] })
          }
        }, 100);
        textIndex = 0;
        setText(word[textIndex]);
      }
      else {
        index = 0;
      }
    }, 2000);
  }, []);

  return (
    <div id='home'>
        <img alt='profile_pic' src={profile_pic} id='profile_pic'/>
        <div id="home_circle"></div>
        <img alt='grid' src={grid} id='grid' />
        <div id="home_header">
          <h1>Hello! I am Prashik</h1>
          <p>{text}</p>
        </div>
        <div id="social_links">
          <a href='https://www.github.com/PrashikBhimte/' target='blank' ><img src={github} alt="github" /></a>
          <a href='https://www.instagram.com/prashikbhimte29/' target='blank'><img src={instagram} alt='instagram' /></a>
          <a href='https://www.linkedin.com/in/prashikbhimte29/' target='blank'><img src={linkedin} alt="linkedin" /></a>
        </div>
    </div>
  )
}
