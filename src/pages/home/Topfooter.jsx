import React from "react";
import { FiTruck, FiAperture, FiGlobe, FiShield } from "react-icons/fi";

const Topfooter = () => {
  return (
    <div className="my-20">
      <div className=" container mx-auto  md:flex justify-between items-center align-center gap-x-6 my-6 gap-y-3 md:gap-y-0">
        <div className="flex flex-col  items-center p-4 bg-white text-center rounded-xl space-y-2 my-2 shadow-xl">
          <FiGlobe className="text-5xl hover:text-red-600 text-red-500" />
          <h1 className="uppercase text-2xl font-bold text-black">Global Shipping</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur porro enim, maxime non nobis?</p>
        </div>
        <div className="flex flex-col  items-center p-4 bg-white text-center rounded-xl space-y-2 my-2 shadow-xl">
          <FiTruck className="text-5xl hover:text-red-600 text-red-500" />
          <h1 className="uppercase text-2xl font-bold text-black">30 days return policy</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur porro enim, maxime non nobis?</p>
        </div>
        <div className="flex flex-col  items-center p-4 bg-white text-center rounded-xl space-y-2 my-2 shadow-xl">
          <FiShield className="text-5xl hover:text-red-600 text-red-500" />
          <h1 className="uppercase text-2xl font-bold text-black">secure payment</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur porro enim, maxime non nobis?</p>
        </div>
      </div>
    </div>
  );
};

export default Topfooter;
