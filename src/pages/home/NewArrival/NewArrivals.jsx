import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  FiChevronDown,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import Categories from "./Categories";
import Products from "./Products";
import Border from "../../../Components/Border";

const NewArrivals = ({product}) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row my-10 justify-between">
          <div className="md:w-[20%]">
            <h1 className="capitalize text-4xl font-bold">New Arrivals</h1>
            <div>
              <Categories />
            </div>
          </div>
          <div className="">
            <div className="relative w-full flex items-center px-2 py-1  border-b-[1px] border-gray-600">
              <FiSearch className="absolute text-xl" />
              <button className="absolute flex right-1 items-center   py-1 px-5">
                Categories <FiChevronDown />
              </button>
              <input
                type="text"
                placeholder="Search"
                className="pl-6 py-1 bg-transparent outline-none w-[80%]"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1">
              {product?.map((product, i) => (
                <div className="lg:w-52" key={i}>
                   <Products product={product}/>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button className="bg-red-500 px-5 py-2 font-bold capitalize rounded-full text-white">
                <Link to="/Shop">Explore Products</Link>
              </button>
              <div className="flex space-x-2 text-2xl">
                <FiArrowLeftCircle />
                <FiArrowRightCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Border />
    </>
  );
};

export default NewArrivals;
