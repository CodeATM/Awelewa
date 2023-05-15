import React from "react";
import FlashCard from "./FlashCard";
import Slider from "react-slick";
// import { productItems } from "../../../Data/dummy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FlashProduct = ({ product }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  return (
    <section className="  my-10">
      <div className="container mx-auto">
        <h1 className="capitalize text-4xl font-bold">Flash Sales!</h1>
      </div>
      <div className="space-x-1">
      <Slider {...settings}>
        {product?.map((product, i) => (
          <div className="mx-[25%] md:mx-10" key={i}>
            <FlashCard product={product} />
          </div>
        ))}
        </Slider>
      </div>
    </section>
  );
};

export default FlashProduct;
