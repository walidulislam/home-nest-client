import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const {
    propertyName,
    description,
    category,
    price,
    location,
    imageLink,
    postedDate,
    userEmail,
    userName,
    userProfilePhoto,
  } = data;
  useEffect(() => {
    axios
      .get(`http://localhost:3000/properties/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const reviewData = {
      propertyId: id,
      propertyName,
      propertyThumbnail: imageLink,
      reviewerName: userName,
      reviewerEmail: userEmail,
      rating,
      reviewText,
      reviewDate: new Date(),
    };

    axios
      .post("http://localhost:3000/add-ratings", reviewData)
      .then(() => {
        toast.success("Review submitted!");
        setRating(3);
        setReviewText("");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <div className="card max-w-5xl mx-auto p-5 my-10">
        <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg border-amber-100 border-2">
          <img
            src={imageLink || "https://via.placeholder.com/800x400"}
            alt="{property Name}"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-6 bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-3xl font-bold mb-2">{propertyName}</h2>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-xl font-semibold text-green-600">৳ {price}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Location</p>
              <p className="text-lg font-semibold">{location}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Category</p>
              <p className="text-lg font-semibold">{category}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Posted Date</p>
              <p className="text-lg font-semibold">{postedDate}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-4 bg-gray-100 p-4 rounded-xl">
            <img
              src={userProfilePhoto || "https://avatar.iran.liara.run/public/3"}
              className="w-14 h-14 rounded-full border shadow"
            />
            <div>
              <p className="text-lg font-semibold">{userName}</p>
              <p className="text-gray-600 text-sm">{userEmail}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-amber-50 rounded-xl shadow-lg max-w-5xl mx-auto p-5 my-10">
        <h2 className="text-[#001931] font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-4 mt-3">Ratings & Reviews</h2>
        <form onSubmit={handleReviewSubmit}>
          <p className="text-sm font-semibold">Rating:</p>
          <Rating
            style={{ maxWidth: 180 }}
            value={rating}
            onChange={setRating}
          />
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review..."
            className="w-full border-2 border-cyan-800 p-2 rounded-lg mb-3 mt-4"
            rows="3"
            required
          ></textarea>
          <button type="submit" className="button">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetails;
