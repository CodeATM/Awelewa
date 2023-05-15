import React from "react";
import { BsCart3 } from "react-icons/bs";
import { FiMessageSquare, FiShare2} from "react-icons/fi";

const Quantity = ({ details }) => {
  const discount = details.discount;

  return (
    <div>
      <div
        className={`${
          discount
            ? "bg-red-500 text-md text-white rounded-md w-full shadow-md"
            : "hidden"
        }`}
      >
        <div className="flex items-center justify-between py-2 px-3 ">
          <div className="">
            <h1 className="font-bold text-2xl">{discount}% OFF</h1>
            <p className="text-md">Order now at <span className="font-bold">${details.newPrice} </span> </p>
          </div>
          <button className="bg-red-300 text-white px-1 py-2 rounded-md">
            Until oct 30, 2022
          </button>
        </div>
      </div>

      <div className="bg-white rounded-md py-3 mt-2 shadow-md">
        <div className="container mx-auto ">
          <h1 className="font-bold text-lg text-black">Set Order</h1>
          <div className="containerwidth mx-auto bg-gray-400 my-2 h-[1px] w-[full]"></div>

          <div className="flex space-x-5 items-center py-4">
            <div className="img shadow-md">
              <img src={details.cover} alt="" className="w-16 " />
            </div>
            <div className="">
              <h1 className="font-semibold text-sm">Selected Size:</h1>
              <p className="font-bold text-md text-black">XL (Extra Large)</p>
            </div>
          </div>

          <div className="flex items-center justify-between pb-4">
            <h1 className="font-semibold text-sm">Total Price:</h1>
            <p className="font-bold text-md text-black">${details.newPrice}.00</p>
          </div>

          <div className="space-y-2 w-full">
            <div>
              <button className="text-white bg-red-500 rounded-md px-3 py-2 w-full">
                Buy Now
              </button>
            </div>
            <div>
              <button className="text-black bg-transparent border-[1px] border-red-500 rounded-md px-10 py-2 w-full text-center">
                <p className="flex space-x-1 items-center text-center"> <BsCart3/>Add to cart</p>
              </button>
            </div>
          </div>

          <div className="containerwidth mx-auto bg-gray-400 my-4 h-[1px] w-[full]"></div>

          <div className="flex justify-between text-red-500 font-bold py-2 text-sm">
            <div className="flex items-center space-x-1">
              <FiMessageSquare/>
              <p>Chat Seller</p>
            </div>
            <div className="flex items-center space-x-1">
              <FiShare2/>
              <p>Share Product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
