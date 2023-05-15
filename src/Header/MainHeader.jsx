import React, { useState } from "react";

import Navbar from "./Navbar";
import NavMobile from "./NavMobile";
import { UserProfile } from "../Components";

import Awelewa from "../Data/Awelewa.png";
import icon from "../Data/avatar3.png";
import { FiAlignLeft, FiSearch, FiChevronDown } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { MdHelpOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const MainHeader = ({ setNavMobile, setUserProfile, cartItems, setSearch}) => {
  return (
    <section className=" fixed py-3 w-full top-0 h-13 bg-white index2 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/">
            <img src={Awelewa} alt="" className="w-10" />
          </a>
          

          <Navbar setNavMobile={setNavMobile}/>
          <div className="flex space-x-3">
            <div className="flex space-x-3">
              <Link to="/cart">
                <div>
                  <span className="absolute bg-red-500 px-[4px] rounded-full text-sm text-center text-white ml-4 -mt-2 ">
                    {cartItems.length}
                  </span>
                  <BsCart3 className="text-2xl" />
                </div>
              </Link>

              <FiSearch
                onClick={() => setSearch(true)}
                className=" hidden md:block text-2xl"
              />
              <FiAlignLeft
                onClick={() => setNavMobile(true)}
                className="lg:hidden text-3xl cursor-pointer"
              />
            </div>
            <div className="flex space-x-2 items-center"></div>
            <div
              className="flex items-center space-x-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              onClick={() => setUserProfile(true)}
            >
              <img src={icon} alt="" className="w-6 h-6 rounded-full" />
              <p className=" hidden md:block text-sm font-serif">
                Hi,<span className="font-bold">Matthew</span>
              </p>
              <FiChevronDown className="text-gray-400 text-14" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
