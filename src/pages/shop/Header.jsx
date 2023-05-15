import React, { useState } from "react";
import {
  FiShoppingBag,
  FiSearch,
  FiChevronDown,
  FiHeart,
  FiChevronUp,
} from "react-icons/fi";

const Header = ({setWishlist, likeItems}) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="space-y-5">
      <div className="flex space-x-4 items-center">
        <FiShoppingBag className="text-6xl text-red-500" />
        <h1 className="text-5xl font-bold uppercase">Shop</h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-[60%] md:-[w-full]">
          <FiSearch className="absolute text-xl mb-0" />
          <input
            type="text"
            placeholder="search"
            className="w-full capitalize bg-transparent border-b-[1px] border-black outline-none pl-7"
          />
        </div>
        <div className="flex space-x-3 justify-between">
          <div>
            <button className="flex items-center border-2 px-3 py-1 space-x-1">
              Sort by{" "}
              {dropdown ? (
                <FiChevronUp
                  className="text-xl"
                  onClick={() => setDropdown(false)}
                />
              ) : (
                <FiChevronDown
                  className="text-xl"
                  onClick={() => setDropdown(true)}
                />
              )}
            </button>
            <div
              className={`${
                dropdown ? "block" : "hidden"
              } fixed transition-all index`}
            >
              <ul className="bg-white mt-1 space-y-2 px-5 py-1 capitalize">
                <li
                  className="border-b-[1px] cursor-pointer"
                  onClick={() => setDropdown(false)}
                >
                  Price
                </li>
                <li
                  className="border-b-[1px] cursor-pointer"
                  onClick={() => setDropdown(false)}
                >
                  Men
                </li>
                <li
                  className="border-b-[1px] cursor-pointer"
                  onClick={() => setDropdown(false)}
                >
                  women
                </li>
                <li
                  className="border-b-[1px] cursor-pointer"
                  onClick={() => setDropdown(false)}
                >
                  kids
                </li>
                <li
                  className="border-b-[1px] cursor-pointer"
                  onClick={() => setDropdown(false)}
                >
                  Size
                </li>
                <li
                  className="border-b-[1px] cursor-pointer"
                  onClick={() => setDropdown(false)}
                >
                  Rating
                </li>
                <li className= "cursor-pointer "onClick={() => setDropdown(false)}>Colour</li>
              </ul>
            </div>
          </div>
          <div className="cursor-pointer">
            <span className="absolute bg-red-500 px-[4px] rounded-full text-sm text-center text-white ml-5 -mt-2 ">
              {likeItems.length}
            </span>
            <FiHeart className="text-3xl" 
            onClick={() => setWishlist(true)}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
