'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';
import { Button } from "./ui/button";
// import hero1 from "/hero1";
const AutoplayCarousel = () => {
    const images = [
        '/hero1.png',
        "/hero2.png",
        "/hero3.png",
      ];

  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false
  };

  return (
    <div style={{maxWidth:'100%'}}>
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}  className="relative h-1/2-screen">
          <div
            className="w-full h-full bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${img})` }}
          >
          
            <Button>
              Start Shopping
            </Button>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default AutoplayCarousel;