import React from "react";
import {BsCart3,} from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <div className="space-y-5">
        <div className="flex space-x-4 items-center">
          <BsCart3 className="text-6xl text-red-500" />
          <h1 className="text-5xl font-bold uppercase">Cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;