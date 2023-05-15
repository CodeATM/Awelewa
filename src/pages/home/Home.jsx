import React from "react";

import NewArrivals from "./NewArrival/NewArrivals";
import BannerSlider from "./BannerSlider/BannerSlider";
import FlashProduct from "./FlashSales/FlashProduct";
import TrendingContainer from "./Trending/TrendingContainer";
import Topfooter from "./Topfooter";

const Home = ({ product }) => {
  return (
    <div className="gap-y-10">
      <BannerSlider />
      <NewArrivals product={product} />
      <FlashProduct product={product} />
      {/* <TrendingContainer/> */}
      <div className="">
        <Topfooter />
      </div>
    </div>
  );
};

export default Home;
