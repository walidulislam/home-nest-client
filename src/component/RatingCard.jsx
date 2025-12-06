import React, { useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { MessageCircleMore } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const RatingCard = ({ rate }) => {
  const {
    reviewerName,
    propertyName,
    rating,
    reviewText,
    reviewDate,
    propertyThumbnail,
  } = rate;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="bg-gradient-to-br from-purple-100 via-white to-blue-100 shadow-md rounded-xl p-5  gap-4 hover:shadow-xl transition-shadow hover:scale-105 transition-transform duration-200 ">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            {propertyName}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Reviewed by <span className="font-semibold">{reviewerName}</span>
          </p>
          <div className="mt-2 flex items-center">
            <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
            <span className="ml-2 text-sm font-medium text-red-800">
              {rating}/5
            </span>
          </div>
          <p className="mt-2 text-gray-700 flex gap-2">
            <MessageCircleMore />
            {reviewText}
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-semibold">Date:</span>{" "}
            {new Date(reviewDate).toLocaleDateString()}
          </p>
        </div>
        <img
          src={propertyThumbnail || "https://via.placeholder.com/120"}
          alt={propertyName}
          className="w-full h-36 md:h-48 object-cover rounded-lg border"
        />
      </div>
    </div>
  );
};

export default RatingCard;
