import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="py-16 text-white">
      <div data-aos="fade-up" className="container mx-auto px-4">
        <h2 className="font-bold text-4xl lg:text-5xl text-center mb-8 text-[#495c48]">
          How It Works
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          <div className="p-8 bg-white rounded-lg shadow-2xl text-center flex flex-col items-center border-t-4 border-[#7b956a] hover:scale-105 transition-transform duration-200 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-[#495c48] mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-[#495c48]">
              Search & Filter
            </h3>
            <p className="text-gray-600 text-sm">
              Quickly find verified properties using advanced filters for
              location, price, and category. Get results that matter.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-2xl text-center flex flex-col items-center border-t-4 border-[#7b956a] hover:scale-105 transition-transform duration-200 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-[#495c48] mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.155A9.76 9.76 0 0112 16c4.97 0 9-3.582 9-8s-4.03-8-9-8-9 3.582-9 8h2c0-3.354 3.06-6 7-6s7 2.646 7 6-3.06 6-7 6z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-[#495c48]">
              Connect Directly
            </h3>
            <p className="text-gray-600 text-sm">
              Contact property owners instantly via secure direct chat. No
              middlemen, no extra fees, just transparent talks.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-2xl text-center flex flex-col items-center border-t-4 border-[#7b956a] hover:scale-105 transition-transform duration-200 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-[#495c48] mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.103A.996.996 0 0017 12h.01c.26 0 .51.1.7.29l1.62 1.62.7-.71a1 0 000-1.414l-2.618-2.618z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-[#495c48]">
              Finalize The Deal
            </h3>
            <p className="text-gray-600 text-sm">
              Complete the necessary paperwork and move in. We help simplify the
              closing process for a smooth transition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
