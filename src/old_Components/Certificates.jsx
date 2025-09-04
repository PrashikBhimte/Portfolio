import React from "react";
import Slider from "react-slick";
import certificate1 from "../Images/certifiacte1.jpg";
import certificate2 from "../Images/certifiacte2.jpg";
import certificate3 from "../Images/certificate3.jpg";
import certificate4 from "../Images/certificate4.png";
import certificate5 from "../Images/certificate5.png";

export default function Certificates() {
  const array = [
    certificate1,
    certificate2,
    certificate3,
    certificate4,
    certificate5,
  ];

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={array[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
  };

  return (
    <div id="certificates">
      <div className="heading">
        <h1>C E R T I F I C A T E S</h1>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-3xl w-full h-full">
          <Slider {...settings}>
            {array.map((key) => {
              return (
                <div>
                  <img className="max-w-3xl w-full" src={key} alt={key} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="absolute top-0 left-0 bottom-0 right-0 m-auto w-full -z-10 flex flex-col justify-center items-center">
        <h1 className="w-full text-[_#F1F1F1] text-[250px] m-0 text-center">Certificates</h1>
        <div className="w-full h-36 bg-[_#615CFD]"></div>
      </div>
    </div>
  );
}
