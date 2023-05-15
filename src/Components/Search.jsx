import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="bg-white mt-16 py-4 px-6 rounded-sm container mx-auto">
      <div className="">
        <FiSearch className="absolute text-xl mb-0" />
        <input
          type="text"
          placeholder="search"
          className="w-full capitalize bg-transparent border-b-[1px] border-black outline-none pl-7"
        />
      </div>
    </div>
  );
};

export default Search;
