import React, { useEffect } from "react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import testimonialBg from "../assets/testimonial-bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section
      className="py-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${testimonialBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div data-aos="fade-up" className="container mx-auto px-4 relative z-10">
        <h2 className="text-white font-bold text-4xl lg:text-5xl text-center mb-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#495c48] p-8 rounded-lg shadow-lg flex flex-col justify-between transform transition-transform duration-300 hover:scale-105">
            <div className="mb-6">
              <span className="text-6xl font-bold text-[#9db891] leading-none block -mb-4">
                “
              </span>
              <p className="text-lg italic leading-relaxed">
                "Finding my dream home through HomeNest was an absolute breeze!
                The platform's extensive listings and accurate filters made the
                search so efficient. I appreciate the transparency and the
                seamless communication with the property owner. Highly recommend
                for anyone looking to buy or rent!"
              </p>
            </div>
            <div className="flex items-center mt-auto">
              <img
                src={avatar1}
                alt="Client Name"
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-semibold text-[#b8cfac]">John Doe</p>
                <p className="text-sm text-gray-300">New York, NY</p>
              </div>
            </div>
          </div>
          <div className="bg-[#495c48] p-8 rounded-lg shadow-lg flex flex-col justify-between transform transition-transform duration-300 hover:scale-105">
            <div className="mb-6">
              <span className="text-6xl font-bold text-[#9db891] leading-none block -mb-4">
                “
              </span>
              <p className="text-lg italic leading-relaxed">
                "Listing my property on HomeNest was incredibly easy and
                effective. I received multiple quality inquiries within days,
                and the 'Owner Connect' feature was fantastic for managing
                communications. The entire process, from listing to closing, was
                straightforward and secure. A truly valuable platform for
                property owners!"
              </p>
            </div>
            <div className="flex items-center mt-auto">
              <img
                src={avatar2}
                alt="Client Name"
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-semibold text-[#b8cfac]">Jane Smith</p>
                <p className="text-sm text-gray-300">San Francisco, CA</p>
              </div>
            </div>
          </div>
          <div className="bg-[#495c48] p-8 rounded-lg shadow-lg flex flex-col justify-between transform transition-transform duration-300 hover:scale-105">
            <div className="mb-6">
              <span className="text-6xl font-bold text-[#9db891] leading-none block -mb-4">
                “
              </span>
              <p className="text-lg italic leading-relaxed">
                "I was hesitant about online real estate, but HomeNest exceeded
                all my expectations. The 'Verified Listings' truly gave me peace
                of mind, knowing I was viewing legitimate properties. Their
                customer support team was also very responsive and helpful with
                all my questions. A five-star experience!"
              </p>
            </div>
            <div className="flex items-center mt-auto">
              <img
                src={avatar3}
                alt="Client Name"
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-semibold text-[#b8cfac]">Michael Chen</p>
                <p className="text-sm text-gray-300">Austin, TX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
