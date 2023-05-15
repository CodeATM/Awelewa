import React from "react";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <div className="w-[40%] mx-auto flex flex-col items-center bg-white rounded-md shadow-lg py-10">
        <div className="">
          <h1 className="text-4xl font-bold  text-center capitalize my-8">
            contact us
          </h1>
        </div>
        <div className=" w-[80%] mx-auto space-y-8">
          <div className="">
            <FiUser className="absolute text-xl mb-0" />
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full uppercase bg-transparent border-b-[1px] pb-2 border-dotted border-black outline-none pl-7"
            />
          </div>
          <div className="">
            <FiMail className="absolute text-xl mb-0" />
            <input
              type="text"
              placeholder="Enter Email Address"
              className="w-full uppercase bg-transparent border-b-[1px] pb-2 border-dotted border-black outline-none pl-7"
            />
          </div>
          <div className="">
            <FiMessageSquare className="absolute text-xl mb-0" />
            <input
              type="text"
              placeholder="Message"
              className="w-full uppercase bg-transparent border-b-[1px] pb-2 border-dotted border-black outline-none pl-7"
            />
          </div>

          <button className="px-2 py-1 bg-red-500 w-full text-center py-2 rounded-sm text-2xl font-bold text-white">SUBMIT</button>
        </div>


      </div>
    </div>
  );
};

export default Contact;
