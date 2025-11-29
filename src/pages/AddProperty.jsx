import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddProperty = () => {
  const { user } = use(AuthContext);
  const handelSubmit = (e) => {
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
      .post("http://localhost:3000/add-properties", propertyData)
      .then(() => {
        Swal.fire({
          title: "Property added successfully!",
          text: "You clicked the button!",
          icon: "success",
        });
        e.target.reset();
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: `Something went wrong: ${err.message}`,
          icon: "error",
        });
      });
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-violet-700 to-black">
        <div className="relative">
          <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-900 via-violet-900 to-black shadow-lg animate-pulse"></div>
          <div className="bg-[#FFFFF4] p-6 rounded-xl shadow-2xl w-[340px] lg:w-[480px] relative z-10">
            <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
              Add Property
            </h2>
            <form className="space-y-5" onSubmit={handelSubmit}>
              <input
                className="w-full h-12 border-2 border-cyan-600 px-3 rounded-lg"
                placeholder="Property Name"
                name="propertyName"
                type="text"
              />
              <textarea
                className="w-full h-24 border-2 border-cyan-600 px-3 py-2 rounded-lg"
                placeholder="Description"
                name="description"
              ></textarea>
              <select
                className="w-full h-12 border-2 border-cyan-600 px-3 rounded-lg"
                name="category"
              >
                <option value="">Select Category</option>
                <option value="Rent">Rent</option>
                <option value="Sale">Sale</option>
                <option value="Commercial">Commercial</option>
                <option value="Land">Land</option>
              </select>
              <input
                className="w-full h-12 border-2 border-cyan-600 px-3 rounded-lg"
                placeholder="Price"
                name="price"
                type="number"
              />
              <input
                className="w-full h-12 border-2 border-cyan-600 px-3 rounded-lg"
                placeholder="Location"
                name="location"
                type="text"
              />
              <input
                className="w-full h-12 border-2 border-cyan-600 px-3 rounded-lg"
                placeholder="Image Link"
                name="image"
                type="text"
              />
              <input
                className="w-full h-12 border border-amber-500 px-3 rounded-lg bg-gray-100"
                placeholder="User Email"
                readOnly
                name="userEmail"
                type="text"
                value={user?.email || ""}
              />
              <input
                className="w-full h-12 border border-amber-500 px-3 rounded-lg bg-gray-100"
                placeholder="User Name"
                readOnly
                name="userName"
                type="text"
                value={user?.displayName || ""}
              />

              <button className="w-full button justify-center" type="submit">
                Add Property
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
