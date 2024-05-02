import { useContext } from "react";
import CartCard from "../components/CartCard";
import { AuthContext } from "../contexts/AuthProvider";

const CartDetails = () => {
    const {name}=useContext(AuthContext)
    console.log(name);
  return (
    <div className="my-5">
      <div className="md:h-[300px] relative rounded-lg bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.9)),url(./b4.jpg)] bg-no-repeat bg-cover bg-center flex flex-col justify-center ">
        <h1 className="text-white font-bold text-4xl pl-5 md:pl-20">
          Cart Details
        </h1>
        <p className="text-[#FF3811]  pl-5 md:pl-20">Home - Product Details</p>
      </div>
      <div>
        <CartCard></CartCard>
      </div>
      <div className="flex items-center justify-between md:pt-5 pt-3">
        <div className="flex items-center gap-4">
          <img className="size-[15px]" src="./back.svg" alt="" />
          <p>Continue Shopping</p>
        </div>
        <div className="flex items-center gap-4">
          <img className="size-[15px]" src="./delete.svg" alt="" />
          <p>Clear Shopping Cart</p>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
