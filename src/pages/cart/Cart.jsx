import React, { useState } from "react";
import Header from "./Header";
import {Link } from 'react-router-dom';

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct,}) => {
  const [count, setCount] = useState(1);

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="container mx-auto">
      <Header/>

      <div className="flex flex-col md:flex-row justify-between mt-10 space-y-4">
        {cartItems.length === 0 && <div className=" w-[80%] bg-white h-20 text-center capitalize space-y-2 mx-auto rounded-md">
          <h1 className="text-xl font-bold">oops your cart is empty </h1>
          <button className="px-3 py-1 bg-red-500 text-center text-white rounded-md">
            <Link to = '/Shop'> Shop Now</Link>
          </button>
          
        </div>}

        <div className="w-full md:w-[60%] space-y-5 rounded-md">
          {cartItems.map((item) => (
            <div className="flex bg-white space-x-5" key={item.id}>
              <img src={item.cover} alt={item.name} className="w-36" />
              <div className="my-auto space-y-3">
                <div className="text-xl font-bold capitalise">{item.name}</div>
                <div className="flex space-x-5">
                  <button className="bg-red-500 px-2 text-white font-bold rounded-md text-center" onClick={() => handleAddProduct(item)} >
                    +
                  </button>
                  <p className="border border-gray-300 px-2 rounded-sm">{item.quantity}</p>
                  <button
                    className="bg-red-500 px-2 text-white font-bold rounded-md text-center"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </button>
                </div>
                <div className="text-lg font-semibold">${item.price}.00</div>
              </div>
            </div>
          ))}
        </div>
        <div className="totalprice w-full md:w-[35%] h-40 bg-white px-4 space-y-4 rounded-md py-2">
          <h1 className="font-bold text-center text-xl capitalize ">
            Cart Summary
          </h1>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-lg">Total Price:</h1>
            <h3 className="text-lg">${totalPrice}.00</h3>
          </div>
          <button className="px-3 py-2 bg-red-500 text-center text-white rounded-md text-lg w-full">
            <Link to = '/Shop'>Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
