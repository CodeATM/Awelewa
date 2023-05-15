import React, { useState } from "react";
import Sortpanel from "./Sortpanel";
import Grid from "./Grid";
import { FiArrowRight, FiChevronRight, FiChevronLeft, FiChevronsLeft } from "react-icons/fi";
const Product = ({
  mainshopItems,
  handleAddProduct,
  handleAddProductLike,
  likeItems,
  product,
}) => {
  return (
    <div className="">
      <div className="flex justify-between mt-10">
        <div className=" hidden md:block w-[28%]">
          <Sortpanel />
        </div>
        <div className="w-full md:w-[70%] grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2">
          {product?.map((product, i) => (
            <div className="" key={i}>
              <Grid
                product={product}
                mainshopItems={mainshopItems}
                handleAddProduct={handleAddProduct}
                handleAddProductLike={handleAddProductLike}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="cursor-pointer mt-3">
        <div className="flex justify-end space-x-2  items-center text-end  text-md font-bold capitalize space-x-5 text-xl">
          <div className="text-2xl text-black">
          <FiChevronLeft />
          </div>
          <p className=" text-white text-md fontbold px-2 rounded-full  bg-red-500 ">
            1
          </p>
          <p className="">
            2
          </p>
          <p className="">
            3
          </p>
          
          <p className=" text-black text-lg fontbold px-2 rounded-full space-x-4 flex">
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </p>
          <p className="">
            4
          </p>

          <div className="text-2xl text-black">
            <FiChevronRight /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
