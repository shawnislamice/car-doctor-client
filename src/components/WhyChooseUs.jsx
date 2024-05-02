import { CiClock1 } from "react-icons/ci";

const WhyChooseUs = () => {
  return (
    <div className="md:my-10 my-5 space-y-3">
      <p className="font-bold text-[#FF3811] text-center ">Core Features</p>
      <h1 className="font-bold text-center  text-4xl">Why Choose Us</h1>
      <p className="opacity-90 text-center max-w-2xl mx-auto">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="flex justify-around items-center md:pt-8 pt-4">
        <div className="hover:scale-95 duration-300 flex flex-col justify-center items-center border px-3 py-6 md:w-[170px] rounded-lg">
          <img src="./team.svg" alt="" className="md:w-[73px]" />
          <p className="text-[#444444] font-semibold md:pt-2">Expert Team</p>
        </div>
        <div className="hover:scale-95 duration-300 flex flex-col justify-center items-center border px-3 py-6 md:w-[170px] rounded-lg">
          <CiClock1 size={50}></CiClock1>
          <p className="text-[#444444] font-semibold md:pt-2">
            Timely Delivery
          </p>
        </div>
        <div className="hover:scale-95 duration-300 flex flex-col justify-center items-center border px-3 py-6 md:w-[170px] rounded-lg">
          <img src="./support.svg" alt="" className="w-[40px] " />
          <p className="text-[#444444] font-semibold md:pt-2">24/7 Support</p>
        </div>
        <div className="hover:scale-95 duration-300 flex flex-col justify-center items-center border px-3 py-6 md:w-[170px] rounded-lg">
          <img src="./equipment.svg" alt="" className="w-[40px] " />
          <p className="text-[#444444] font-semibold md:pt-2">Best Equipment</p>
        </div>
        <div className="hover:scale-95 duration-300 flex flex-col justify-center items-center border px-3 py-6 md:w-[170px] rounded-lg">
          <img src="./guranty.svg" alt="" className="w-[40px] " />
          <p className="text-[#444444] font-semibold md:pt-2">100% Guranty</p>
        </div>
        <div className="hover:scale-95 duration-300 flex flex-col justify-center items-center border px-3 py-6 md:w-[170px] rounded-lg">
          <img src="./delivery2.svg" alt="" className="w-[60px] " />
          <p className="text-[#444444] font-semibold md:pt-2">
            Timely Delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
