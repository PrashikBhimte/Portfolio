import React from 'react';
import "./About.css";
import color_grid from "../Images/color_grid.png";

export default function About() {
  return (
    <div id='about'>
      <div id="about_info">
        <h1>About</h1>
        <p>dskc hsd c dsh cd d c dc hds c ds c sd cbsd cb b  sdh cb dshcsdch hdc dshc hd sc dsh c dsc dsh ch dsc ds c dshc ds c
        dskc hsd c dsh cd d c dc hds c ds c sd cbsd cb b  sdh cb dshcsdch hdc dshc hd sc dsh c dsc dsh ch dsc ds c dshc ds c
        dskc hsd c dsh cd d c dc hds c ds c sd cbsd cb b  sdh cb dshcsdch hdc dshc hd sc dsh c dsc dsh ch dsc ds c dshc ds c
        dskc hsd c dsh cd d c dc hds c ds c sd cbsd cb b  sdh cb dshcsdch hdc dshc hd sc dsh c dsc dsh ch dsc ds c dshc ds c
        </p>
        <button>Download CV</button>
      </div>
      <div id="about_pic">
        <div id="about_pic_img"></div>
      </div>
      <h1 className='watermark'>About</h1>
      <img id='color_grid' src={color_grid} alt='color grid' />
    </div>
  )
}
