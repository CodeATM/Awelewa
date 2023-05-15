import React from "react";
import { Link, NavLink } from "react-router-dom";
import icon from "../Data/avatar3.png";
import { RxExit } from "react-icons/rx";
import { MdOutlineCancel, MdExitToApp } from "react-icons/md";
import { FiAlignLeft, FiSearch } from "react-icons/fi";

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="index lg:hidden bg-white w-full h-full">
      <MdOutlineCancel
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute"
      />
      <ul className="flex flex-col items-center space-y-8 justify-center h-full font-serif">
        <div>
          <input type="text" placeholder="Search" className="w-[80%] border-b-[1px] border-black outline-none px-4 py-2  text-black mx-2"/>
        </div>

        <li className="text-lg">
          <Link to="/home">Home</Link>
        </li>
        <li className="text-lg">
          <Link to="/Shop">Shop</Link>
        </li>
        <li className="text-lg">
          <Link to="/Blog">Blog</Link>
        </li>
        <li className="text-lg">
          <Link to="/Policy">Policy</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
