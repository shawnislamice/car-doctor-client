import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import team1 from '../assets/images/team/1.jpg'
import team2 from '../assets/images/team/2.jpg'
import team3 from '../assets/images/team/3.jpg'
import { AiOutlineInstagram } from "react-icons/ai";
const MeetOurTeam = () => {
    return (
      <div className="md:my-5 my-3 space-y-3">
        <p className="font-bold text-[#FF3811] text-center ">Team</p>
        <h1 className="font-bold text-center  text-4xl">Meet Our Team</h1>
        <p className="opacity-90 text-center max-w-2xl mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <div className=" carousel rounded-box relative w-full flex justify-around items-center">
          <div
            id="#team1"
            className="flex flex-col justify-center items-center carousel-item shadow-lg p-4  md:w-[310px]  "
          >
            <img src={team1} className="md:size-[300px] rounded-xl" alt="" />
            <div>
              <h1 className="text-[#444444] text-xl text-center font-bold pb-2 pt-4 ">
                Car Engine Plug
              </h1>
              <p className="font-semibold opacity-90 text-center">
                Engine Expert
              </p>
              <div className="flex items-center space-x-3 justify-between text-[#FF3811] font-bold py-3 ">
                <img src="./facebook.svg" className="size-[40px]" alt="" />
                <img src="./twitter.svg" className="size-[40px]" alt="" />
                <img src="./linkedin.svg" className="size-[40px]" alt="" />
                <div className="bg-url('./instagram.svg')">
                  <AiOutlineInstagram size={40} />
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#team2"
                className="btn btn-circle bg-opacity-30 border-none outline-none text-black hover:bg-[#FF3811]"
              >
                <GoArrowLeft size={20}></GoArrowLeft>
              </a>
              <a
                href="#team1"
                className="btn btn-circle bg-opacity-30 border-none outline-none text-black hover:bg-[#FF3811]"
              >
                <GoArrowRight size={20} className=""></GoArrowRight>
              </a>
            </div>
          </div>
          <div
            id="#team2"
            className="flex flex-col justify-center items-center carousel-item shadow-lg p-4  md:w-[310px]  "
          >
            <img src={team2} className="md:size-[300px] rounded-xl" alt="" />
            <div>
              <h1 className="text-[#444444] text-xl text-center font-bold pb-2 pt-4 ">
                Car Engine Plug
              </h1>
              <p className="font-semibold opacity-90 text-center">
                Engine Expert
              </p>
              <div className="flex items-center space-x-3 justify-between text-[#FF3811] font-bold py-3 ">
                <img src="./facebook.svg" className="size-[40px]" alt="" />
                <img src="./twitter.svg" className="size-[40px]" alt="" />
                <img src="./linkedin.svg" className="size-[40px]" alt="" />
                <div className="bg-url('./instagram.svg')">
                  <AiOutlineInstagram size={40} />
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#team2"
                className="btn btn-circle bg-opacity-30 border-none outline-none text-black hover:bg-[#FF3811]"
              >
                <GoArrowLeft size={20}></GoArrowLeft>
              </a>
              <a
                href="#team3"
                className="btn btn-circle bg-opacity-30 border-none outline-none text-black hover:bg-[#FF3811]"
              >
                <GoArrowRight size={20} className=""></GoArrowRight>
              </a>
            </div>
          </div>
          <div
            id="#team3"
            className="flex flex-col justify-center items-center carousel-item shadow-lg p-4  md:w-[310px]  "
          >
            <img src={team3} className="md:size-[300px] rounded-xl" alt="" />
            <div>
              <h1 className="text-[#444444] text-xl text-center font-bold pb-2 pt-4 ">
                Car Engine Plug
              </h1>
              <p className="font-semibold opacity-90 text-center">
                Engine Expert
              </p>
              <div className="flex items-center space-x-3 justify-between text-[#FF3811] font-bold py-3 ">
                <img src="./facebook.svg" className="size-[40px]" alt="" />
                <img src="./twitter.svg" className="size-[40px]" alt="" />
                <img src="./linkedin.svg" className="size-[40px]" alt="" />
                <div className="bg-url('./instagram.svg')">
                  <AiOutlineInstagram size={40} />
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#team3"
                className="btn btn-circle bg-opacity-30 border-none outline-none text-black hover:bg-[#FF3811]"
              >
                <GoArrowLeft size={20}></GoArrowLeft>
              </a>
              <a
                href="#team1"
                className="btn btn-circle bg-opacity-30 border-none outline-none text-black hover:bg-[#FF3811]"
              >
                <GoArrowRight size={20} className=""></GoArrowRight>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MeetOurTeam;