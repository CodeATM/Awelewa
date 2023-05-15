import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { FiTrash2, FiHeart } from "react-icons/fi";

// the milloniaire"s hat

const LikeCart = ({
  handleAddProductLike,
  likeItems,
  setWishlist,
  handleRemoveProductLike,
}) => {
  return (
    <div className="index bg-white w-full h-full top-0 scroll">
      <div className="bg-white absolute index w-full h-20">
        <MdOutlineCancel
          onClick={() => setWishlist(false)}
          className="text-3xl absolute right-4 top-6 "
        />
        <div className="flex items-center container mx-auto pt-6">
          <FiHeart className="text-red-500 text-3xl mr-2" />{" "}
          <h1 className="text-2xl font-bold">WishList</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between space-y-4">
        {likeItems.length === 0 && (
          <div className=" w-[80%] bg-white h-20 text-center capitalize space-y-2 mx-auto rounded-md">
            <h1 className="text-xl font-bold">oops your cart is empty </h1>
            <button className="px-3 py-1 bg-red-500 text-center text-white rounded-md">
              <Link to="/Shop"> Shop Now</Link>
            </button>
          </div>
        )}

        <div className="mx-auto container space-y-5 mt-20">
          {likeItems.map((item) => (
            <div
              className="flex bg-[#fdfdfd] space-x-5 border-[1px] relative"
              key={item.id}
            >
              <img src={item.cover} alt={item.name} className="w-24" />

              <div className="my-auto space-y-3 text-center">
                <div className="text-xl font-bold capitalise">{item.name}</div>
                <div className="text-lg font-semibold">${item.price}.00</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center capitalize py-5 container mx-auto">
        <button
          className="bg-red-500 px-2 py-1 text-white text-md rounded-md font-bold"
          // onClick={() => handleRemoveProductLike(item)}
        >
          Clear Wishlist
        </button>
        <button className="bg-red-500 px-2 py-1 text-white text-md rounded-md font-bold">
          Add all to cart
        </button>
      </div>
    </div>
  );
};

export default LikeCart;
