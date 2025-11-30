import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Award, HeartPlus, SearchCheck } from "lucide-react";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" className="p-4 lg:p-0">
      <h1 className="text-[#001931] font-bold text-4xl lg:text-5xl text-center">
        Why Choose Us
      </h1>
      <div className="container mx-auto text-center my-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20">
        <div className="flex flex-col items-center bg-gradient-to-t from-cyan-100 to-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-200 ">
          <Award className="text-green-900 mb-3" size={110} />
          <h3 className="text-xl font-semibold mb-2">Trusted Platform</h3>
          <p className="text-gray-600 text-sm">
            100% Verified Properties Guaranteed.
          </p>
        </div>
        <div className="flex flex-col items-center bg-gradient-to-t from-purple-100 to-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-200 ">
          <SearchCheck className="text-indigo-900 mb-3" size={110} />
          <h3 className="text-xl font-semibold mb-2">SMART SEARCH & FILTERS</h3>
          <p className="text-gray-600 text-sm">
            Find Your Perfect Match Instantly
          </p>
        </div>
        <div className="flex flex-col items-center bg-gradient-to-t from-orange-100 to-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-200 ">
          <HeartPlus className="text-amber-800 mb-3" size={110} />
          <h3 className="text-xl font-semibold mb-2">COMMUNITY & SUPPORT</h3>
          <p className="text-gray-600 text-sm">
            Expert Support, Every Step of the Way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
