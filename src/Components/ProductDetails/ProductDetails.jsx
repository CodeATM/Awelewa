import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Images from "./Images";
import Details from "./Details";
import Quantity from "./Quantity";
import RelatedContainer from "./related/RelatedContainer";


const ProductDetails = ({ product }) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      console.log("my", id);
      const results = await fetch(`http://localhost:3000/shop.json`);
      const response = await results.json();
      if (results.ok) {
        response.map((res) => {
          if (res.id == id) {
            console.log(res);
            setDetails(res);
          }
        });
      } else {
        console.log(results.error);
      }
    };
    getProduct();
  }, [id]);

  console.log(details);
  return (
    <div className="mx-auto container my-20">
      <div className="flex flex-col md:flex-row justify-between mt-36 items-center md:items-start gap-y-10">
        <div className="img  w-[80%] md:w-[25%] ">
          <Images details={details} />
        </div>
        <div className="details w-[90%] md:w-[45%] ">
          <Details details={details} />
        </div>
        <div className="quantity w-[90%] md:w-[28%] ">

          <Quantity details={details} />
        </div>
      </div>
      <div className="mt-20 align-center">
        <RelatedContainer  product ={product }/>
      </div>
    </div>
  );
};

export default ProductDetails;
