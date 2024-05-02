import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const CustomerSays = () => {
  return (
    <div className="md:my-10 my-5 space-y-2">
      <p className="font-bold text-[#FF3811] text-center ">Testimonial</p>
      <h1 className="font-bold text-center  text-4xl">What Customer Says</h1>
      <p className="opacity-90 text-center max-w-2xl mx-auto">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="md:pt-5 pt-3 carousel rounded-box relative w-full flex justify-around items-center">
        <div
          id="#team1"
          className="flex flex-col justify-center items-center carousel-item border rounded-lg p-4  md:w-[558px]  "
        >
          <div className=" container carousel-item flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="./customer1.svg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Awlad Hossain</h4>
                  <span className=" dark:text-gray-600">Businessman</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-700">
                <img src="./comma.svg" alt="" />
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p className="opacity-80 leading-20 text-justify">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
            <div className="rating pt-3">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#team2"
              className="btn btn-circle bg-opacity-30 border-none outline-none text-black hover:bg-[#FF3811] hover:text-white"
            >
              <GoArrowLeft size={20}></GoArrowLeft>
            </a>
            <a
              href="#team3"
              className="btn btn-circle bg-opacity-30 border-none outline-none text-black hover:bg-[#FF3811] hover:text-white"
            >
              <GoArrowRight size={20} className=""></GoArrowRight>
            </a>
          </div>
        </div>
        <div
          id="#team1"
          className="flex flex-col justify-center items-center carousel-item border rounded-lg p-4  md:w-[558px]  "
        >
          <div className=" container carousel-item flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="./Ellipse 2.svg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Awlad Hossain</h4>
                  <span className=" dark:text-gray-600">Businessman</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-700">
                <img src="./comma.svg" alt="" />
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p className="opacity-80 leading-20 text-justify">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
            <div className="rating pt-3">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#team2"
              className="btn btn-circle bg-opacity-30 border-none outline-none text-black hover:bg-[#FF3811] hover:text-white"
            >
              <GoArrowLeft size={20}></GoArrowLeft>
            </a>
            <a
              href="#team3"
              className="btn btn-circle bg-opacity-30 border-none outline-none text-black hover:bg-[#FF3811] hover:text-white"
            >
              <GoArrowRight size={20} className=""></GoArrowRight>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CustomerSays;
