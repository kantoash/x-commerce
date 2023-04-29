"use client";


import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  return (
    <div className="flex justify-center overflow-hidden ">
      <div
        className={`h-[400px] w-[350px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] mx-auto  `}
      >
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={3000}
          className=" bg-gray-200 h-full w-full  rounded-xl"
        >
          <img
            className="h-[400px] w-full object-fill object-center rounded-xl"
            src="/images/banner/slider1.jpeg"
          />
          <img
            className="h-[400px] w-full object-fill object-center rounded-xl"
            src="/images/banner/slider2.jpeg"
          />
          <img
            className="h-[400px] w-full object-fill object-center rounded-xl"
            src="/images/banner/slider3.jpeg"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
