import OrderCard from "../components/OrderCard";

const ManageAllOrders = () => {
    return (
      <div className="my-5">
        <div className="md:h-[300px] relative rounded-lg bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.9)),url(./b4.jpg)] bg-no-repeat bg-cover bg-center flex flex-col justify-center ">
          <h1 className="text-white font-bold text-4xl pl-5 md:pl-20">
            Manage All Orders
          </h1>
          <p className="text-[#FF3811]  pl-5 md:pl-20">
            Home - Manage All Orders
          </p>
        </div>
        <div>
          <OrderCard></OrderCard>
        </div>
      </div>
    );
};

export default ManageAllOrders;