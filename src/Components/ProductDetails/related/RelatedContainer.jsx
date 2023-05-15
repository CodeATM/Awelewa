import React from 'react'
import Related from './Related'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatedContainer = ({ product }) => {
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
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
      };
  return (
    <div>
        <div className="">
        <h1 className="capitalize text-4xl font-bold">Related Products</h1>
      </div>
        <Slider {...settings}>
        {product?.map((product, i) => (
          <div className="" key={i}>
            <Related product={product} />
          </div>
        ))}
        </Slider>
    </div>
  )
}

export default RelatedContainer