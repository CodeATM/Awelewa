import React, { useState } from "react";
import { FiChevronDown, FiHeart, FiHelpCircle  } from "react-icons/fi";
// import { shopItems } from "../../../Data/dummy";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
// import icon from "";

const Products = ({ product }) => {
  return (
    <div className="box mt-8">
      <div className="product space-y-4">
        <div className="flex flex-col space-y-3 ">
          <div className="w-full relative rounded">
            <div className="right-1 top-1 absolute m-2 space-y-1">
              <FiHeart className="text-xl hover:text-red-600" />
              <BsCart3 className="text-xl hover:text-red-600" />
              <Link to={`/productDetails`}>
                <FiHelpCircle className="text-xl hover:text-red-600 mt-2"/>
              </Link>
            </div>
            <img src={product.cover} alt="" className="" />
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
};

export default Products;
