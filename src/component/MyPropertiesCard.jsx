import { CalendarDays, MapPinCheckInside } from "lucide-react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
const MyPropertiesCard = ({ property, properties, setProperties }) => {
  const {
    _id,
    imageLink,
    propertyName,
    category,
    price,
    location,
    postedDate,
  } = property;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://home-nest-server-ashen.vercel.app/delete-property/${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your property has been deleted.",
              icon: "success",
            });
            const filteredProperties = properties.filter((p) => p._id !== id);
            setProperties(filteredProperties);
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: `Something went wrong: ${err.message}`,
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div data-aos="fade-up" className="card h-120 md:h-150">
      <div className="p-4 md:p-6 space-y-3.5">
        <img
          className="w-full h-40 md:h-65 rounded-lg border-2 border-white shadow-sm"
          src={imageLink}
          alt=""
        />
        <h2 className="font-semibold text-2xl lg:text-3xl ">
          {propertyName}
        </h2>
        <div className="flex justify-between items-center">
          <p className="font-medium md:text-lg badge badge-soft badge-primary">
            {category}
          </p>
          <p className="font-medium textarea-md md:text-lg">৳ {price}</p>
        </div>
        <p className="font-medium textarea-md md:text-lg flex gap-1">
          <MapPinCheckInside /> {location}
        </p>
        <p className="font-medium textarea-md md:text-lg text-gray-700 gap-1 flex">
          <span className="font-semibold">
            <CalendarDays />
          </span>{" "}
          {new Date(postedDate).toLocaleDateString()}
        </p>
        <div className="flex justify-around items-center">
          {/* Update button.... */}
          <div className="flex justify-center">
            <Link to={`/update-property/${property?._id}`}>
              <button className="text-[8px] font-semibold cursor-pointer relative bg-white/10 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-11 max-h-12 flex items-center justify-start hover:bg-green-400 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]">
                <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                  <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]" />
                  <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-green-400 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black">
                    <div className="size-[0.8rem] text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 16"
                        height="100%"
                        width="100%"
                      >
                        <path
                          fill="currentColor"
                          d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-black text-teal-600">
                  Update
                </div>
              </button>
            </Link>
          </div>
          {/* Delete button.... */}
          <div className="flex justify-center">
            <button
              onClick={() => handelDelete(_id)}
              className="group relative flex h-11 w-14 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-red-800 bg-red-400 hover:bg-red-600"
            >
              <svg
                viewBox="0 0 1.625 1.625"
                className="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                height={15}
                width={15}
              >
                <path d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195" />
                <path d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033" />
                <path d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016" />
              </svg>
              <svg
                width={16}
                fill="none"
                viewBox="0 0 39 7"
                className="origin-right duration-500 group-hover:rotate-90"
              >
                <line strokeWidth={4} stroke="white" y2={5} x2={39} y1={5} />
                <line
                  strokeWidth={3}
                  stroke="white"
                  y2="1.5"
                  x2="26.0357"
                  y1="1.5"
                  x1={12}
                />
              </svg>
              <svg width={16} fill="none" viewBox="0 0 33 39" className>
                <mask fill="white" id="path-1-inside-1_8_19">
                  <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z" />
                </mask>
                <path
                  mask="url(#path-1-inside-1_8_19)"
                  fill="white"
                  d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                />
                <path strokeWidth={4} stroke="white" d="M12 6L12 29" />
                <path strokeWidth={4} stroke="white" d="M21 6V29" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to={`/details/${property._id}`}>
            <button className="button" type="submit">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPropertiesCard;
