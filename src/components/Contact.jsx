import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#151515] rounded-lg md:py-20 flex items-center justify-around">
      <div className="flex items-center gap-2">
        <img className="size-[40px]" src="./calender.svg" alt="" />
        <div>
          <p className="font-medium text-white">We are open monday-friday</p>
          <p className="font-bold text-white text-2xl">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <img className="size-[40px]" src="./phone.svg" alt="" />
        <div>
          <p className="font-medium text-white">We are open monday-friday</p>
          <p className="font-bold text-white text-2xl">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <img className="size-[40px]" src="./location.svg" alt="" />
        <div>
          <p className="font-medium text-white">We are open monday-friday</p>
          <p className="font-bold text-white text-2xl">7:00 am - 9:00 pm</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
