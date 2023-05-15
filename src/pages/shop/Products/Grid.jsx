import React from "react";
import { FiChevronDown, FiHeart, FiHelpCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const grid = ({
  mainshopItems,
  handleAddProduct,
  handleAddProductLike,
  product,
}) => {
  const discount = product.discount;

  return (
    <div className="box" key={product.id}>
      <div className="product">
        <div className="w-full relative rounded hover:opacity-75">
          <div className="right-1 top-1 absolute m-2 space-y-2">
            <FiHeart
              className="text-xl hover:text-red-600"
              onClick={() => handleAddProductLike(product)}
            />
            <BsCart3
              className="text-xl hover:text-red-600 cursor-pointer"
              onClick={() => handleAddProduct(product)}
            />
            <Link to={`/productDetails/${product.id}`}>
              <FiHelpCircle className="text-xl hover:text-red-600"/>
            </Link>
          </div>
          <div className="absolute top-0">
            <div
              className={`${
                discount
                  ? "bg-red-500 text-md text-white px-1 py-1 rounded-br-md"
                  : "hidden"
              }`}
            >
              {discount}%
            </div>
          </div>

          {/* <div className="absolute top-0">
                  <p className="bg-red-500 text-md text-white px-1 py-1 rounded-br-md">
                    {product.discount}%
                  </p>
                </div> */}
          <img src={product.cover} alt="" className="" />
        </div>
        <div className="flex justify-between mt-3">
          <div>
            <h1 className="font-bold text-sm">{product.name}</h1>
            <p>{product.designer}</p>
          </div>
          <div className="font-bold">
            <h4>${product.price}.00 </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default grid;
