import React from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    return (
      <div className="md:mt-8 mb-4  my-3 space-y-4">
        <p className="font-bold text-[#FF3811] text-center ">Service</p>
        <h1 className="font-bold text-center  text-4xl">Our Service Area</h1>
        <p className="opacity-90 text-center max-w-2xl mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <ServiceCard></ServiceCard>
        <button className="btn btn-outline text-[#FF3811] block mx-auto">More Services</button>
      </div>
    );
};

export default Service;