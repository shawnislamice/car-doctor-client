import { GoArrowRight } from "react-icons/go";
import service from "../assets/images/services/1.jpg";
const ServiceCard = () => {
  return (
    <div className="shadow-lg p-4 border rounded-lg md:w-[310px] hover:scale-95 duration-300 ">
      <img src={service} className="md:w-[300px] rounded-xl" alt="" />
      <h1 className="text-[#444444] text-xl font-bold py-4 ">
        Electrical System
      </h1>
      <div className="flex items-center justify-between text-[#FF3811] font-bold pb-3 ">
        <p>Price : $20.00</p>
        <p>
          <GoArrowRight size={20} className=""></GoArrowRight>
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
