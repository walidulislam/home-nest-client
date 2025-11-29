import { MapPinCheckInside, User } from "lucide-react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const PropertiesCard = ({ property }) => {
  const { imageLink, propertyName, category, price, location, userName } =
    property;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" className="card h-120 md:h-150">
      <div className="p-4 md:p-6 space-y-4">
        <img
          className="w-full h-45 md:h-75 rounded-lg border-2 border-white shadow-sm"
          src={imageLink}
          alt=""
        />
        <h2 className="font-semibold text-2xl lg:text-3xl text-gray-800">
          {propertyName}
        </h2>
        <div className="flex justify-between items-center">
          <p className="font-medium md:text-lg badge badge-soft badge-primary">
            {category}
          </p>
          <p className="font-medium textarea-md md:text-lg">৳ {price}</p>
        </div>
        <p className="font-medium textarea-md md:text-lg flex">
          <MapPinCheckInside /> {location}
        </p>
        <p className="font-medium textarea-md md:text-lg flex">
          <User /> {userName}
        </p>
        <div className="flex justify-center">
          <button className="button" type="submit">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
