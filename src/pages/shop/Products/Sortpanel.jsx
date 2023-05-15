import React from "react";
import { sort } from "../../../Data/dummy";
import { FiStar } from "react-icons/fi";

const Sortpanel = () => {
  return (
    <div className="bg-white py-4 px-3 rounded-lg">
      <div className="flex justify-between items-center border-b-[1px] pb-2">
        <p className="capitalize font-bold">filter</p>
        <button className="text-sm border-[1px] rounded-full bg-transparent px-4">
          Reset
        </button>
      </div>
      <div className="py-2 border-b-[1px] space-y-4">
        <div className="flex justify-between items-center ">
          <p className="capitalize font-bold">Price</p>
          <button className="text-sm border-[1px] rounded-full bg-transparent px-4">
            Reset
          </button>
        </div>
        <div className="flex justify-between items-center w-full">
          <input
            type="text"
            placeholder="max"
            className="w-[45%] border-[1px] bg-[ hsl(250, 60%,98%)] pl-2 outline-none rounded-lg"
          />
          <input
            type="text"
            placeholder="min"
            className="w-[45%] border-[1px] bg-[ hsl(250, 60%,98%)] pl-2 outline-none rounded-lg"
          />
        </div>
      </div>
      <div className="py-2 border-b-[1px] space-y-2">
        <div className="flex justify-between items-center ">
          <p className="capitalize font-bold">Categories</p>
          <button className="text-sm border-[1px] rounded-full bg-transparent px-4">
            Reset
          </button>
        </div>
        <div className="w-full space-y-2">
          <div className="flex space-x-2">
            <input type="checkbox" name="home" id="home" />
            <p className="text-sm">WOMEN</p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" name="home" id="home" />
            <p className="text-sm">MEN</p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" name="home" id="home" />
            <p className="text-sm">KIDS</p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" name="home" id="home" />
            <p className="text-sm">LUXURY</p>
          </div>
          <div className="">
            <p className="text-red-500 text-sm cursor-pointer">
              Clear selected
            </p>
          </div>
        </div>
      </div>
      <div className="py-2 border-b-[1px] space-y-2">
        <div className="flex justify-between items-center ">
          <p className="capitalize font-bold">Size</p>
          <button className="text-sm border-[1px] rounded-full bg-transparent px-4">
            Reset
          </button>
        </div>
        <div className="w-full space-y-2">
          <div className="flex space-x-2">
            <input type="checkbox" name="home" id="home" />
            <p className="text-sm">XS</p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" name="home" id="home" />
            <p className="text-sm">SM</p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" name="home" id="home" />
            <p className="text-sm">M</p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" name="home" id="home" />
            <p className="text-sm">L</p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" name="home" id="home" />
            <p className="text-sm">XL</p>
          </div>
          <div className="">
            <p className="text-red-500 text-sm cursor-pointer">
              Clear selected
            </p>
          </div>
        </div>
      </div>
      <div className="py-2 border-b-[1px] space-y-2">
        <div className="flex justify-between items-center ">
          <p className="capitalize font-bold">Rating</p>
          <button className="text-sm border-[1px] rounded-full bg-transparent px-4">
            Reset
          </button>
        </div>
        <div className="w-full space-y-2">
          <div className="flex space-x-2">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </div>
          <div className="flex space-x-2">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </div>
          <div className="flex space-x-2">
            <FiStar />
            <FiStar />
            <FiStar />
          </div>
          <div className="flex space-x-2">
            <FiStar />
            <FiStar />
          </div>
          <div className="flex space-x-2">
            <FiStar />
          </div>
          <div className="">
            <p className="text-red-500 text-sm cursor-pointer">
              Clear selected
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <button className="bg-red-500 px-8 py-1 mt-4 item-center text-white text-xl w-full rounded-lg">
          clear All
        </button>
      </div>
    </div>
  );
};

export default Sortpanel;
