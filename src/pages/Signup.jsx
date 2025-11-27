import React, { use, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";

const Signup = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { setLoading, createUser, logInGoogle, updateProfileUser } =
    use(AuthContext);
  const handelSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must have uppercase, lowercase & at least 6 characters..❗",
        {
          style: {
            border: "1px solid #713200",
            padding: "10px",
            color: "#713200",
          },
        }
      );
      return;
    }
    createUser(email, password)
      .then((res) => {
        console.log(res);
        updateProfileUser(displayName, photoURL)
          .then(() => {
            setLoading(false);
            toast.success("Registration Successful..🌸");
            e.target.reset();
            navigate("/");
          })
          .catch((e) => {
            toast.error(e.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handelGoogleLogIn = () => {
    logInGoogle()
      .then((res) => {
        setLoading(false);
        console.log(res);

        toast.success("Google Sign Up Successful..🌸");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-br from-[#94c9ad] to-[#053935] relative overflow-hidden">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
          Sign Up
        </h2>
        <form onSubmit={handelSignup} className="space-y-4 text-white">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Photo</label>
            <input
              type="text"
              name="photo"
              placeholder="Your photo URL here"
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <span
              onClick={() => setShow(!show)}
              className=" absolute top-[35px] right-[5px] cursor-pointer"
            >
              {show ? <FaEye></FaEye> : <IoEyeOff></IoEyeOff>}
            </span>
          </div>
          <button type="submit" className="button w-full justify-center">
            Register
          </button>
          <div className="flex items-center justify-center gap-2 my-2">
            <div className="h-px w-16 bg-white/30"></div>
            <span className="text-sm text-white/70">or</span>
            <div className="h-px w-16 bg-white/30"></div>
          </div>
          <button
            onClick={handelGoogleLogIn}
            type="button"
            className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-xl w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
          <div className="text-center mt-3">
            <p className="text-sm text-white/80">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-purple-200 hover:text-white font-medium underline"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
