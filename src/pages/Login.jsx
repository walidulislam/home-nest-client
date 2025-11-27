import React, { use, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { setLoading, logInUser, logInGoogle } = use(AuthContext);
  const handelLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then(() => {
        setLoading(false);
        toast.success("Login Successful..🌸");
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };
  const handelGoogleLogIn = () => {
    logInGoogle()
      .then(() => {
        setLoading(false);
        toast.success("Login Successful..🌸");
        navigate(location.state || "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-700 to-purple-800 relative overflow-hidden">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        <form onSubmit={handelLogIn} className="space-y-5 text-white">
          <h2 className="text-2xl font-semibold mb-2 text-center text-white">
            Login
          </h2>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative">
            <label className="block text-sm mb-1">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span
              onClick={() => setShow(!show)}
              className=" absolute top-[35px] right-[5px] cursor-pointer"
            >
              {show ? <FaEye></FaEye> : <IoEyeOff></IoEyeOff>}
            </span>
          </div>
          <button className="hover:underline cursor-pointer" type="button">
            Forget password?
          </button>

          <button type="submit" className="button w-full justify-center">
            Login
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
          <p className="text-center text-sm text-white/80 mt-3">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-pink-300 hover:text-white underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
