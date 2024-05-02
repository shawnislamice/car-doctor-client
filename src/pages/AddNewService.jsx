
const AddNewService = () => {
    return (
      <div className="my-5">
        <div className="md:h-[300px] relative rounded-lg bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.9)),url(./b4.jpg)] bg-no-repeat bg-cover bg-center flex items-center">
          <h1 className="text-white font-bold text-4xl pl-5 md:pl-20">
            Add New Service
          </h1>
          <div className="bg-[#FF3811] absolute bottom-0 py-4 px-8 rounded-lg text-white mx-auto left-[45%] ">
            <p className="">Home/Add New Service</p>
          </div>
        </div>
        <form
          action=""
          className="bg-[#F3F3F3] p-14 rounded-lg md:my-8 my-4 space-y-4"
        >
          <div className="flex justify-between items-center gap-6">
            <input
              type="text"
              placeholder="Service Name"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="Service Price"
              className="input w-full"
            />
          </div>
          <div className="flex justify-between items-center gap-6">
            <input type="text" placeholder="Photo" className="input w-full" />
            <input
              type="text"
              placeholder="Service Type"
              className="input w-full"
            />
          </div>
          <textarea
            placeholder="Product Description"
            rows={5}
            className="textarea textarea-bordered textarea-lg w-full "
          ></textarea>
          <button type="submit" className="text-white btn w-full bg-[#FF3811]">
           Submit
          </button>
        </form>
      </div>
    );
};

export default AddNewService;