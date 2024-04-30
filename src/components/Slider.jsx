import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const Slider = () => {
  return (
    <div className="carousel w-full md:h-[600px] h-[400px] md:my-5 my-4 rounded-xl">
      <div
        id="slide1"
        className="carousel-item relative w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.9)),url(./1.jpg)] bg-no-repeat bg-cover bg-center"
      >
        <div className="flex flex-col justify-center md:pl-20 pl-10  text-white space-y-5">
          <h1 className="text-6xl font-bold max-w-md leading-[80px]">
            Affordable Price For Car Servicing
          </h1>
          <p className="max-w-md leading-[35px] opacity-90">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex items-center gap-6">
            <button className="btn bg-[#FF3811] hover:scale-95 duration-300 hover:bg-transparent border-none outline-none  text-white">
              Discover More
            </button>
            <button className="btn btn-outline bg-transparent outline-white text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute gap-3 flex justify-between transform -translate-y-1/2 bottom-2 right-8 ">
          <a
            href="#slide4"
            className="btn btn-circle bg-opacity-30 border-none outline-none text-white hover:bg-[#FF3811]"
          >
            <GoArrowLeft size={20}></GoArrowLeft>
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-opacity-30 border-none outline-none text-white hover:bg-[#FF3811]"
          >
            <GoArrowRight size={20} className=""></GoArrowRight>
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.9)),url(./2.jpg)] bg-no-repeat bg-cover bg-center"
      >
        <div className="flex flex-col justify-center md:pl-20 pl-10  text-white space-y-5">
          <h1 className="text-6xl font-bold max-w-md leading-[80px]">
            Affordable Price For Car Servicing
          </h1>
          <p className="max-w-md leading-[35px] opacity-90">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex items-center gap-6">
            <button className="btn bg-[#FF3811] hover:scale-95 duration-300 hover:bg-transparent border-none outline-none  text-white">
              Discover More
            </button>
            <button className="btn btn-outline bg-transparent outline-white text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute gap-3 flex justify-between transform -translate-y-1/2 bottom-2 right-8 ">
          <a
            href="#slide3"
            className="btn btn-circle bg-opacity-30 border-none outline-none text-white hover:bg-[#FF3811]"
          >
            <GoArrowLeft size={20}></GoArrowLeft>
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-opacity-30 border-none outline-none text-white hover:bg-[#FF3811]"
          >
            <GoArrowRight size={20} className=""></GoArrowRight>
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.9)),url(./3.jpg)] bg-no-repeat bg-cover bg-center"
      >
        <div className="flex flex-col justify-center md:pl-20 pl-10  text-white space-y-5">
          <h1 className="text-6xl font-bold max-w-md leading-[80px]">
            Affordable Price For Car Servicing
          </h1>
          <p className="max-w-md leading-[35px] opacity-90">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex items-center gap-6">
            <button className="btn bg-[#FF3811] hover:scale-95 duration-300 hover:bg-transparent border-none outline-none  text-white">
              Discover More
            </button>
            <button className="btn btn-outline bg-transparent outline-white text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute gap-3 flex justify-between transform -translate-y-1/2 bottom-2 right-8 ">
          <a
            href="#slide2"
            className="btn btn-circle bg-opacity-30 border-none outline-none text-white hover:bg-[#FF3811]"
          >
            <GoArrowLeft size={20}></GoArrowLeft>
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-opacity-30 border-none outline-none text-white hover:bg-[#FF3811]"
          >
            <GoArrowRight size={20} className=""></GoArrowRight>
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.9)),url(./4.jpg)] bg-no-repeat bg-cover bg-center"
      >
        <div className="flex flex-col justify-center md:pl-20 pl-10  text-white space-y-5">
          <h1 className="text-6xl font-bold max-w-md leading-[80px]">
            Affordable Price For Car Servicing
          </h1>
          <p className="max-w-md leading-[35px] opacity-90">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex items-center gap-6">
            <button className="btn bg-[#FF3811] hover:scale-95 duration-300 hover:bg-transparent border-none outline-none  text-white">
              Discover More
            </button>
            <button className="btn btn-outline bg-transparent outline-white text-white">
              Latest Project
            </button>
          </div>
          <div className="absolute gap-3 flex justify-between transform -translate-y-1/2 bottom-2 right-8 ">
            <a
              href="#slide3"
              className="btn btn-circle bg-opacity-30 border-none outline-none text-white hover:bg-[#FF3811]"
            >
              <GoArrowLeft size={20}></GoArrowLeft>
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-opacity-30 border-none outline-none text-white hover:bg-[#FF3811]"
            >
              <GoArrowRight size={20} className=""></GoArrowRight>
            </a>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Slider;
