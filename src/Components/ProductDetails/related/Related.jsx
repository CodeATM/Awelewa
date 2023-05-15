import React from 'react';
import { FiChevronDown, FiHeart, FiHelpCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Related = ({ product }) => {
  const discount = product.discount;

  return (
    <div className="box mt-8 w-52">
      <div className="product space-y-4">
        <div className="flex flex-col space-y-3 ">
          <div className="w-full relative rounded ">
            <div className="right-1 top-1 absolute m-2 space-y-1">
              <FiHeart className="text-xl hover:text-red-600" />
              <BsCart3 className="text-xl hover:text-red-600" />
              <a href={`/productDetails/${product.id}`}>
                <FiHelpCircle className="text-xl hover:text-red-600 mt-1"/>
              </a>
            </div>
            <div className="absolute top-0">
              <div
                className={`${
                  discount
                    ? "bg-red-500 text-md text-white px-1 py-1 rounded-br-md"
                    : "hidden"
                }`}
              >
                {discount}%
              </div>
            </div>
            <div className="">
            <img src={product.cover} alt="" className="" />
            </div>
          </div>
          <div className="flex  justify-between mt-3">
            <div>
              <h1 className="font-bold text-sm">{product.name}</h1>
              <p>{product.designer}</p>
            </div>
            <div className="font-bold">
              <h4>${product.price}.00 </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Related