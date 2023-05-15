import React from "react";
import { bannerData } from "../../../Data/dummy";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSliderCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <>
      <Slider {...settings}>
        {bannerData.map((items, index) => {
          return (
            <div className="mx-4">
              <div className="flex justify-between items-center">
                <div className="space-y-2 md:px-6">
                  <div>
                    <h1 className="text-lg md:text-6xl font-bold capitalize font-serif tracking-wide">
                      {items.title}
                    </h1>
                    <button className="btn color">
                      <Link to="./Shop">Explore Products</Link>
                    </button>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-base md:text-3xl font-semibold capitalize font-serif">
                      {items.description}
                    </h1>
                    <p className="text-md md:text-xl font-bold capitalize">
                      {items.price}
                    </p>
                    <button className="btn color">
                      <Link to="./Shop">Product Details</Link>
                    </button>
                  </div>
                </div>
                <div className="">
                  <img src={items.image} alt="" className="" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default BannerSliderCard;
