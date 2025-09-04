import React, { useState, useEffect } from 'react';
import profile_pic from "../Images/IMG_20240928_130335_256.png";
import grid from "../Images/grid.png";
import github from "../Images/github.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";

// --- Data ---
const ROLES = ['ML Engineer', 'Web Developer', 'Python Developer'];
const SOCIAL_LINKS = [
  { name: 'github', href: 'https://www.github.com/PrashikBhimte/', icon: github },
  { name: 'instagram', href: 'https://www.instagram.com/prashikbhimte29/', icon: instagram },
  { name: 'linkedin', href: 'https://www.linkedin.com/in/prashikbhimte29/', icon: linkedin },
];
const HEADING_TEXT = "Hello! I am Prashik";

// --- Custom Hooks for Animation ---
const useTypingEffect = (textToType, interKeyStrokeDurationInMs) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (currentText.length === textToType.length) return;

    const timeoutId = setTimeout(() => {
      setCurrentText(textToType.slice(0, currentText.length + 1));
    }, interKeyStrokeDurationInMs);

    return () => clearTimeout(timeoutId);
  }, [currentText, textToType, interKeyStrokeDurationInMs]);

  return currentText;
};

const useRotatingTextEffect = (words, typeInterval, delay) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let newText = '';
      const word = words[index % words.length];
      let i = 0;

      const typingInterval = setInterval(() => {
        if (i < word.length) {
          newText += word[i];
          setText(newText);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, typeInterval);

      setIndex(prevIndex => prevIndex + 1);
    }, delay);

    return () => clearInterval(intervalId);
  }, [words, typeInterval, delay, index]);

  return text;
};

export default function Home() {
  const header = useTypingEffect(HEADING_TEXT, 100);
  const text = useRotatingTextEffect(ROLES, 100, 3000);

  return (
    <div className='w-full h-full bg-[linear-gradient(135deg,_#4537D0,_#B557EC)]'>
      <img data-aos="zoom-in-right" data-aos-delay="3000"  alt='profile_pic' src={profile_pic} className='w-2xl max-w-none lg:w-3xl rounded-full absolute bottom-[-200px] left-[-200px] md:bottom-[-130px] md:left-[-110px]' />
      <div data-aos="zoom-in-left" data-aos-delay="3000" className='w-3xl h-[768px] bg-[_#ffffff1a] rounded-full absolute top-[-384px] right-[-384px] z-0'></div>
      <img alt='grid' src={grid} className='w-300px h-auto absolute bottom-0 right-40 hidden md:block' />
      <div className='w-full h-full bg-black absolute inset-0 m-auto text-white text-center flex md:justify-center justify-start items-start md:items-center flex-col select-none pt-40 md:pt-0 lg:pt-0 px-[10px] md:px-0 animate-loading'>
        <h1 className='mb-0 text-5xl sm:text-6xl font-bruno-ace font-normal not-italic text-left sm:text-center'>{header}</h1>
        <p className='h-7 mt-0 text-3xl sm:text-4xl md:text-5xl font-medium not-italic font-caveat optical-sizing-auto'>{text}</p>
      </div>
      <div data-aos='fade-left' data-aos-delay='3000' className='w-14 h-64 flex flex-col justify-evenly items-center absolute right-5 sm:right-14 md:right-24 top-0 bottom-0 m-auto' >
        {SOCIAL_LINKS.map(link => (
          <a key={link.name} href={link.href} target='_blank' rel="noopener noreferrer">
            <img className='w-14 h-14 rounded-full hover:scale-105 active:scale-95 scale-75 sm:scale-100' src={link.icon} alt={link.name} />
          </a>
        ))}
      </div>
    </div>
  )
}
