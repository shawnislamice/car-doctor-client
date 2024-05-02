import { CiCircleRemove } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

const OrderCard = () => {
    return (
      <div>
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between items-center">
          <div className="flex w-full items-center space-x-2 sm:space-x-4">
            <button className="hover:scale-95 duration-300">
              <CiCircleRemove size={30}></CiCircleRemove>
            </button>
            <img
              className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
              alt="Polaroid camera"
            />
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col justify-center ">
                <p className="text-[#444444]  font-semibold">Martha Knit Top</p>
                <p className="opacity-60 text-xs md:pt-2">Color : Green </p>
                <p className="opacity-60 text-xs md:pt-2">Size: S </p>
              </div>
              <h2 className="text-[#444444] font-semibold">info@gmail.com</h2>
              <p className="text-[#444444] font-semibold">22-10-2022</p>
              <button className="btn btn-outline text-[#29B170]">
                Approved
                <FaAngleDown></FaAngleDown>
              </button>
            </div>
          </div>
        </li>
      </div>
    );
};

export default OrderCard;