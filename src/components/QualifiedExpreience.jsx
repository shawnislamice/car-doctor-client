import person  from '../assets/images/about_us/person.jpg'
import parts from '../assets/images/about_us/parts.jpg'
const QualifiedExpreience = () => {
    return (
      <div className="md:mt-5 md:mb-24 mb-10 mt-3 flex flex-col md:flex-row justify-between items-center">
        <div className="relative md:basis-[48%]">
          <img
            className="  rounded-lg md:w-[460px] md:h-[470px] -z-10"
            src={person}
            alt=""
          />
          <img
            src={parts}
            className="md:size-[340px] absolute md:top-[200px] md:z-10 border-[8px] right-20  border-white rounded-lg"
            alt=""
          />
        </div>
        <div className="space-y-4 md:basis-[48%]">
          <p className="text-[#FF3811]  font-bold">About Us</p>
          <h1 className="font-bold text-4xl md:pb-6 pb-4">
            We are qualified & of experience in this field
          </h1>
          <p className="opacity-90 max-w-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="opacity-90 max-w-lg md:pb-6 pb-4">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn bg-[#FF3811] hover:scale-95 duration-300 hover:bg-transparent border-none outline-none  text-white">
            Get More Info
          </button>
        </div>
      </div>
    );
};

export default QualifiedExpreience;