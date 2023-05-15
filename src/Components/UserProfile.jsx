import React from "react";
import icon from "../Data/avatar3.png";
import { MdOutlineCancel } from "react-icons/md";
import { FiUser, FiDollarSign, FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

const UserProfile = ({ setUserProfile }) => {
  return (
    <div className="index bg-white h-[60%] w-80 py-10 px-10 my-14 right-5">
      <div className=" space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="flex space-x-4 text-lg font-bold items-center">
            {" "}
            <FiUser className="text-red-500 text-2xl" /> User Profile
          </h1>
          <MdOutlineCancel
            className="text-xl"
            onClick={() => setUserProfile (false)}
          />
        </div>
        <div className="">
          <div className="flex items-center space-x-2 border-b-[1px] pb-2">
            <img src={icon} alt="" className="w-12 rounded-full" />
            <div>
              <h1 className="text-lg font-bold text-black">Matthews Adams</h1>
              <p></p>
            </div>
          </div>
          <div className="flex items-center border-b-[1px] py-2 space-x-4 hover:bg-gray-100 px-2 cursor-pointer">
            <div className="bg-red-400 text-white text-lg rounded-md p-3">
              <FaUser />{" "}
            </div>
            <div className="-space-y-1">
              <h1 className="text-bold text-md font-bold text-black">
                My Profile
              </h1>
              <p className="text-bold text-sm">Account Settings</p>
            </div>
          </div>
          <div className="flex items-center border-b-[1px] py-2 space-x-4 hover:bg-gray-100 px-2 cursor-pointer">
            <div className="bg-red-400 text-white text-lg rounded-md p-3">
              {" "}
              <FiDollarSign />{" "}
            </div>
            <div className="-space-y-1">
              <h1 className="text-bold text-md font-bold text-black">
                Transaction History
              </h1>
              <p className="text-bold text-sm">Account Settings</p>
            </div>
          </div>
          <div className="flex items-center border-b-[1px] py-2 space-x-4 hover:bg-gray-100 px-2 cursor-pointer">
            <div className="bg-red-400 text-white text-lg rounded-md p-3">
              {" "}
              <FiShoppingCart />{" "}
            </div>
            <div className="-space-y-1">
              <h1 className="text-bold text-sm font-bold text-black">
                My Cart
              </h1>
              <p className="text-bold text-sm">Cart History</p>
            </div>
          </div>
          <button className="text-white text-center bg-red-500 px-4 py-2 w-full mt-2 rounded-md text-xl font-bold">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
