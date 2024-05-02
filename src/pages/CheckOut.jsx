
const CheckOut = () => {
    return (
      <div className="my-5">
        <div className="md:h-[300px] relative rounded-lg bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.9)),url(./b4.jpg)] bg-no-repeat bg-cover bg-center flex items-center">
          <h1 className="text-white font-bold text-4xl pl-5 md:pl-20">
            Check Out
          </h1>
          <div className="bg-[#FF3811] absolute bottom-0 py-4 px-8 rounded-t-lg text-white mx-auto left-[45%] ">
            <p className="">Home/Checkout</p>
          </div>
        </div>
        <form
          action=""
          className="bg-[#F3F3F3] p-14 rounded-lg md:my-8 my-4 space-y-4"
        >
          <div className="flex justify-between items-center gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input w-full"
            />
          </div>
          <div className="flex justify-between items-center gap-6">
            <input
              type="text"
              placeholder="Your Phone"
              className="input w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input w-full"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="textarea textarea-bordered textarea-lg w-full "
          ></textarea>
          <button type="submit" className="text-white btn w-full bg-[#FF3811]">
            Order Confirm
          </button>
        </form>
      </div>
    );
};

export default CheckOut;