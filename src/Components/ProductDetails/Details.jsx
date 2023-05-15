import React from "react";
import { MdStar } from "react-icons/md";

const Details = ({ details }) => {
  return (
    <div>
      <div className="space-y-5">
        <h1 className="font-bold  text-black text-4xl capitalize text-center md:text-left">
          {details.name}
        </h1>
        <div className=" flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <MdStar className="text-yellow-400 text-xl" />
            <p> {details.rating} Ratings</p>
          </div>
          <div className="bg-gray-400  h-[5px] w-[5px] rounded-full"></div>
          <div className="flex">{details.reviews}k+ Reviews</div>
          <div className="bg-gray-400  h-[5px] w-[5px] rounded-full"></div>
          <div className="flex">{details.sold}k+ Sold</div>
        </div>

        <div className="space-y-2">
          <h1 className="font-bold text-md text-black">Choose Size:</h1>
          <div className="flex space-x-3">
            <button className="border text-black px-3 py-2 rounded-md font-bold hover:bg-red-500 hover:text-white">
              S
            </button>
            <button className="border text-black px-3 py-2 rounded-md font-bold hover:bg-red-500 hover:text-white">
              M
            </button>
            <button className="border text-black px-3 py-2 rounded-md font-bold hover:bg-red-500 hover:text-white">
              L
            </button>
            <button className="border text-black px-3 py-2 rounded-md font-bold hover:bg-red-500 hover:text-white">
              XL
            </button>
          </div>
        </div>
        <div className="">
          <h1 className="capitalize font-bold text-red-500">About item</h1>
          <div className="bg-red-400  h-[2px] w-24 my-2 "></div>
          <div className="flex space-x-6">
            <div className="space-y-1">
              <div className="flex space-x-2 items-center ">
                <h1 className="text-md text-sm">Categories:</h1>
                <span className="text-md text-black font-bold capitalize">
                  {details.category}
                </span>
              </div>
              <div className="flex space-x-2 items-center">
                <h1 className="text-md text-sm">Colour:</h1>
                <span className="text-md text-black font-bold capitalize">
                  {details.Color}
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex space-x-2 items-center">
                <h1 className="text-md text-sm">Material:</h1>
                <span className="text-md text-black font-bold capitalize">
                  {details.Material}
                </span>
              </div>
              <div className="flex space-x-2 items-center">
                <h1 className="text-md text-sm">Condition:</h1>
                <span className="text-md text-black font-bold capitalize">
                  {details.condition}
                </span>
              </div>
            </div>
          </div>
        </div>



        <div className="">
          <h1 className="capitalize font-bold text-black text-xl">
            Descrition:
          </h1>
          <p className="text-md">{details.description}</p>
        </div>

        <div className="space-y-3 capitalize">
          <h1 className="font-bold text-black text-xl">Shipping information</h1>
          <div className="bg-red-400  h-[2px] w-52 my-1 "></div>

          <div className="space-y-2">
            <div className="flex space-x-2 items-center ">
              <h1 className="text-md text-sm">Delivery:</h1>
              <span className="text-md text-black font-bold capitalize">
                Shipping from Lagos Nigeria
              </span>
            </div>
            <div className="flex space-x-2 items-center">
              <h1 className="text-md text-sm">Shipping:</h1>
              <span className="text-md text-black font-bold capitalize">
                Free national shipping
              </span>
            </div>
            <div className="flex space-x-2 items-center">
              <h1 className="text-md text-sm">Arrive:</h1>
              <span className="text-md text-black font-bold capitalize">
                Estimated arrival on 25 - 27 Oct 2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
