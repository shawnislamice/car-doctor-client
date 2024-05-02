import login from "../assets/images/login/login.svg";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Login = () => {
  return (
    <div className="md:my-10 my-5 flex justify-around items-center">
      <div className="">
        <img src={login} alt="" />
      </div>
      <div className="border rounded-lg p-10 md:basis-1/2">
        <h1 className="text-3xl font-bold md:pb-8 text-center">Login</h1>
        <form action="" className="space-y-4">
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
          <p className="text-center font-medium md:py-3">Or Sign In with</p>
          <div className="flex items-center justify-center gap-5">
            <FaFacebook size={35}></FaFacebook>
            <FaLinkedinIn size={35}></FaLinkedinIn>
            <FaGoogle size={30}></FaGoogle>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
