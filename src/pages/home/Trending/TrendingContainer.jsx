import React from "react";
import BestSellers from "./BestSellers";
import BestValue from "./BestValue";
import Trending from "./Trending";

const TrendingContainer = () => {
  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="flex space-x-4 f0nt-bold font-serif text-lg md:text-4xl">
          <p>Trending</p>
          <p>BestSellers</p>
          <p>BestSellers</p>
        </div>
        <div className="">
          <Trending />
        </div>
        <div>
          <BestSellers />
        </div>
        <div className="grid grid-cols-2 md:grid-s-1 gap-x-4 gap-y-2">
          <BestValue />
        </div>
      </div>
    </div>
  );
};

export default TrendingContainer;
