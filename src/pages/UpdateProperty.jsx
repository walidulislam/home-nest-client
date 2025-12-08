import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

const UpdateProperty = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState("");
  const {
    propertyName,
    description,
    price,
    location,
    imageLink,
    userEmail,
    userName,
  } = data;
  useEffect(() => {
    axios
      .get(`https://home-nest-server-ashen.vercel.app/properties/${id}`)
      .then((res) => {
        setData(res.data);
        setCategories(res.data.category || "");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [id]);

  const handelUpdate = (e) => {
    e.preventDefault();
    const propertyName = e.target.propertyName.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const price = Number(e.target.price.value);
    const location = e.target.location.value;
    const imageLink = e.target.image.value;
    const userEmail = user?.email;
    const userName = user?.displayName;
    const userProfilePhoto = user?.photoURL;

    const propertyData = {
      propertyName,
      description,
      category,
      price,
      location,
      imageLink,
      userEmail,
      userName,
      userProfilePhoto,
    };
    axios
      .put(`https://home-nest-server-ashen.vercel.app/update-property/${id}`, propertyData)
      .then(() => {
        toast.success("Property updated successfully!");
        navigate(`/details/${id}`);
      })
      .catch((err) => {
       toast.error(err.message);
      });
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-violet-700 to-black">
        <div className="relative">
          <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-900 via-violet-900 to-black shadow-lg animate-pulse"></div>
          <div className="bg-[#FFFFF4] dark:bg-[#1c1c1c] p-6 rounded-xl shadow-2xl w-[340px] lg:w-[480px] relative z-10">
            <h2 className="text-center text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
              Update Property
            </h2>
            <form className="space-y-5" onSubmit={handelUpdate}>
              <input
                className="w-full h-12 border-2 border-cyan-600 dark:text-white px-3 rounded-lg"
                placeholder="Property Name"
                name="propertyName"
                type="text"
                defaultValue={propertyName}
              />
              <textarea
                className="w-full h-24 border-2 border-cyan-600 dark:text-white px-3 py-2 rounded-lg"
                placeholder="Description"
                name="description"
                defaultValue={description}
              ></textarea>
              <select
                className="w-full h-12 border-2 border-cyan-600 dark:text-gray-500 px-3 rounded-lg"
                name="category"
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Rent">Rent</option>
                <option value="Sale">Sale</option>
                <option value="Commercial">Commercial</option>
                <option value="Land">Land</option>
              </select>
              <input
                className="w-full h-12 border-2 border-cyan-600 dark:text-white px-3 rounded-lg"
                placeholder="Price"
                name="price"
                type="number"
                defaultValue={price}
              />
              <input
                className="w-full h-12 border-2 border-cyan-600 dark:text-white px-3 rounded-lg"
                placeholder="Location"
                name="location"
                type="text"
                defaultValue={location}
              />
              <input
                className="w-full h-12 border-2 border-cyan-600 dark:text-white px-3 rounded-lg"
                placeholder="Image Link"
                name="image"
                type="text"
                defaultValue={imageLink}
              />
              <input
                className="w-full h-12 border border-amber-500 dark:text-gray-900 px-3 rounded-lg bg-gray-100"
                placeholder="User Email"
                readOnly
                name="userEmail"
                type="text"
                defaultValue={userEmail}
              />
              <input
                className="w-full h-12 border border-amber-500 dark:text-gray-900 px-3 rounded-lg bg-gray-100"
                placeholder="User Name"
                readOnly
                name="userName"
                type="text"
                defaultValue={userName}
              />

              <button className="w-full button justify-center" type="submit">
                Update Property
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProperty;
