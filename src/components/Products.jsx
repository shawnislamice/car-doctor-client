import ProductCard from "./ProductCard";

const Products = () => {
    return (
      <div className="md:my-8 space-y-3 my-3">
        <p className="font-bold text-[#FF3811] text-center ">
          Popular Products
        </p>
        <h1 className="font-bold text-center  text-4xl">Browse Our Products</h1>
        <p className="opacity-90 text-center max-w-2xl mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <div>
            <ProductCard></ProductCard>
        </div>
      </div>
    );
};

export default Products;