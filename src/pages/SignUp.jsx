import login from "../assets/images/login/login.svg";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="md:my-10 my-5 flex justify-around items-center">
      <div className="">
        <img src={login} alt="" />
      </div>
      <div className="border rounded-lg p-10 md:basis-1/2">
        <h1 className="text-3xl font-bold md:pb-8 text-center">Sign Up</h1>
        <form action="" className="space-y-6">
          <div>
            <label className="text-[#444444] font-semibold " htmlFor="">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered mt-2"
            />
          </div>
          <div>
            <label className="text-[#444444] font-semibold " htmlFor="">
              Email
            </label>
            <input
              type="email"
              placeholder="You Email"
              className="input w-full input-bordered mt-2"
            />
          </div>
          <div>
            <label className="text-[#444444] font-semibold md:pb-2" htmlFor="">
              Confirm Password
            </label>
            <input
              type="password"
              className="input w-full input-bordered mt-2"
              placeholder="Your Password"
            />
          </div>
          <button className="btn w-full bg-[#FF3811] border-none outline-none text-white">
            Sign In
          </button>
          <p className="text-center font-semibold">
            Already have an account?{" "}
            <Link to="/login" className="text-[#FF3811]">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
