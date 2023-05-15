import React from "react";
import Awelewa from "../../Data/Awelewa.png";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-12 bg-white py-6 buttom-0">
      <div className=" container mx-auto space-y-5 md:flex justify-between items-center">
        <div className="logo space-y-1">
          <a href="/">
            <img src={Awelewa} alt="" className="w-12" />
          </a>
          <h1 className="font-bold text-xl text-black">Awelewa Stitches</h1>
          <p className="text-sm text-black pr-22">
            Lorem ipsum dolor sit, <br />
            amet consectetur adipisicing elit. Lorem ipsum
          </p>
        </div>
        <div className="links uppercase space-y-4 md:flex justify-between md:space-y-0 md:space-x-8">
          <div className="flex flex-col space-y-2 text-black font-semibold">
            <Link to="./">faq</Link>
            <Link to="./">shipping</Link>
            <Link to="./">returns</Link>
          </div>
          <div className="flex flex-col space-y-2 text-black font-semibold">
            <Link to="./">contact</Link>
            <Link to="./">company</Link>
            <Link to="./">about</Link>
          </div>
          <div className="flex flex-col space-y-2 text-black font-semibold">
            <Link to="./">careers</Link>
            <Link to="./">terms</Link>
            <Link to="./">policy</Link>
          </div>
        </div>
        <div className="newsletter space-y-2 relative">
          <h1 className="text-xl font-bold uppercase text-black">join our newsletter</h1>
          <FiArrowRight className="absolute right-2 text-lg"/>
          <input
            type="text"
            placeholder="enter your email address"
            className="w-full capitalize bg-transparent border-b-[1px] border-black outline-none pr-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
