import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "animate.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="py-4 md:py-10">
          <div
            className="relative h-[30vh] md:h-[40vh] lg:h-[70vh] w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/banner1.jpg')" }}
          >
            <div className="absolute inset-0 backdrop-blur-xs bg-black/40"></div>
            <div className="space-y-2 md:space-y-4 lg:space-y-6 animate__animated animate__fadeInDown relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
              <h1 className="font-bold text-white text-xl md:text-4xl lg:text-5xl text-nowrap">
                Your Perfect Home Awaits
                <span className="text-[#d78717]"> !</span>
              </h1>
              <p className="text-gray-300 textarea-sm md:textarea-md lg:text-lg">
                Affordable, verified, and ready-to-move properties just for you.
              </p>
              <button type="button" className="button2">
                <span className="fold"></span>

                <div className="points_wrapper">
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                </div>

                <span className="inner">
                  <svg
                    className="icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  >
                    <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
                  </svg>
                  Credits
                </span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-4 md:py-10">
          <div
            className="relative h-[30vh] md:h-[40vh] lg:h-[70vh] w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/banner2.jpg')" }}
          >
            <div className="absolute inset-0 backdrop-blur-xs bg-black/40"></div>
            <div className="space-y-2 md:space-y-4 lg:space-y-6 animate__animated animate__fadeInDown relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
              <h1 className="font-bold text-white text-xl md:text-4xl lg:text-5xl text-nowrap">
                Discover Homes That Fit Your Life
              </h1>
              <p className="text-gray-300 textarea-sm md:textarea-md lg:text-lg">
                Explore rental & sale listings from trusted property owners.
              </p>
              <button type="button" className="button2">
                <span className="fold"></span>

                <div className="points_wrapper">
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                </div>

                <span className="inner">
                  <svg
                    className="icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  >
                    <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
                  </svg>
                  Credits
                </span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-4 md:py-10">
          <div
            className="relative h-[30vh] md:h-[40vh] lg:h-[70vh] w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/banner3.jpg')" }}
          >
            <div className="absolute inset-0 backdrop-blur-xs bg-black/40"></div>
            <div className="space-y-2 md:space-y-4 lg:space-y-6 animate__animated animate__fadeInDown relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
              <h1 className="font-bold text-white text-xl md:text-4xl lg:text-5xl text-nowrap">
                Search. Explore. Move In.
              </h1>
              <p className="text-gray-300 textarea-sm md:textarea-md lg:text-lg">
                Find properties that match your lifestyle and budget.
              </p>
              <button type="button" className="button2">
                <span className="fold"></span>

                <div className="points_wrapper">
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                </div>

                <span className="inner">
                  <svg
                    className="icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  >
                    <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
                  </svg>
                  Credits
                </span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
