import React from "react";
import {FiShoppingBag,} from "react-icons/fi";
import { MdDriveFileMoveOutline } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <div className="space-y-5">
        <div className="flex space-x-4 items-center">
          <MdDriveFileMoveOutline className="text-6xl text-red-500" />
          <h1 className="text-5xl font-bold uppercase">Blog</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
