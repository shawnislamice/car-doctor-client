import product from '../assets/images/products/1.png'
const ProductCard = () => {
  return (
    <div>
      <div className="shadow-lg p-4 border rounded-lg md:w-[310px] hover:scale-95 duration-300 ">
        <div className="bg-[#F3F3F3] rounded-lg md:py-3">
          <img
            src={product}
            className="md:w-[150px] mx-auto rounded-xl"
            alt=""
          />
        </div>
        <div className="rating flex justify-center items-center mt-4">
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
        <h1 className="text-[#444444] text-xl font-bold py-2 text-center">
          Car Engine Plug
        </h1>
        <div className="flex items-center flex-col text justify-between text-[#FF3811] font-bold pb-3 ">
          <p>$20.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
