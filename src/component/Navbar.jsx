import React, { use } from "react";
import logoImg from "/logo.png";
import { Link, NavLink } from "react-router";
import toast from "react-hot-toast";
import { PropagateLoader } from "react-spinners";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, loading, logOutUser } = use(AuthContext);
  const handelLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("LogOut Successful..➜]");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-4 md:px-10 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-35 p-2 space-y-1 shadow font-semibold"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 border-1 border-blue-200" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-properties"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 border-1 border-blue-200" : ""
                  }
                >
                  All Properties
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-properties"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 border-1 border-blue-200" : ""
                  }
                >
                  Add Properties
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-properties"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 border-1 border-blue-200" : ""
                  }
                >
                  My Properties
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-ratings"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 border-1 border-blue-200" : ""
                  }
                >
                  My Ratings
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img className="w-12" src={logoImg} alt="" />
            <h2 className="font-bold text-lg md:text-xl pl-2 hidden md:block">
              Home<span className="text-[#2353ce]">Nest</span>
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 border-1 border-blue-200" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-properties"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 border-1 border-blue-200" : ""
                }
              >
                All Properties
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-properties"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 border-1 border-blue-200" : ""
                }
              >
                Add Properties
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-properties"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 border-1 border-blue-200" : ""
                }
              >
                My Properties
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-ratings"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 border-1 border-blue-200" : ""
                }
              >
                My Ratings
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {loading ? (
            <PropagateLoader color="#9F62F2" />
          ) : user ? (
            <div className="dropdown dropdown-end">
              <img
                tabIndex={0}
                className="h-12 w-12 mx-auto rounded-full border-gray-300 border-2 shadow-md shadow-cyan-800 cursor-pointer "
                src={user?.photoURL || "https://avatar.iran.liara.run/public/3"}
              />
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-gradient-to-br from-purple-600 via-indigo-400 to-purple-900 rounded-box z-50 w-60 p-3 shadow-lg space-y-1.5"
              >
                <li className="font-semibold text-white">
                  {" "}
                  {user?.displayName}
                </li>
                <li className=" text-white"> {user?.email}</li>
                <button
                  onClick={handelLogOut}
                  className="button w-full justify-center"
                >
                  Logout
                </button>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/login" className="button">
                Login
              </Link>
              <Link to="/signup" className="button">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
