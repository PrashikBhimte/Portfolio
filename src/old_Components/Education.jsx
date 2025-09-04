import React from 'react';

const educationData = [
  {
    institution: 'Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded',
    degree: 'B.tech in Computer Science and engineering',
    duration: 'Nov 2022 - June 2026',
  },
  {
    institution: 'Shri Maharshi Vidya Mandir English School, Chandrapur',
    degree: '12th in Science',
    duration: 'June 2021 - May 2022',
  },
  {
    institution: 'St. Michale English Medium School, Chandrapur',
    degree: '10th',
    duration: 'June 2019 - May 2020',
  },
];

const EducationItem = ({ item }) => (
  <li className="flex items-start">
    <span className="w-4 h-4 mt-2 mr-4 rounded-full bg-[linear-gradient(#4537D0_0%,_#B557EC_100%)] flex-shrink-0"></span>
    <div>
      <h2 className='text-2xl mb-2.5'>{item.institution}</h2>
      <p className='text-[1rem] m-0'>{item.degree}</p>
      <p className='text-[1rem] m-0'>{item.duration}</p>
    </div>
  </li>
);

export default function Education() {
  return (
    <div className='w-full h-full bg-[_#001D38]'>
        <div className='heading'>
            <h1 className='text-white'>E D U C A T I O N</h1>
        </div>
        <div className='w-full h-full flex justify-center items-start'>
            <div id='educ_info' className='w-full h-full max-w-4xl text-white flex flex-row justify-center items-center mt-[5%] px-5'>
                <div className='w-1.5 h-full ml-5 lg:ml-0 bg-[linear-gradient(0deg,_#4537D0,_#4537D0)]'></div>
                <ul className='h-full text-3xl ml-5 flex flex-col justify-evenly items-start gap-y-10'>
                    {educationData.map((item, index) => (
                      <EducationItem key={index} item={item} />
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
