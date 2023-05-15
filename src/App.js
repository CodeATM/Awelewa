import React, { useState, useEffect } from "react";
import "./App.css";
import MainHeader from "./Header/MainHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Shop, Cart, Policy, Blog } from "./pages";
import { Footer, ProductDetails, UserProfile, Search } from "./Components";
import NavMobile from "./Header/NavMobile";
import Data from "./Data/dummy";
import LikeCart from "./Components/LikeCart";
// import { getProduct } from '../src/Data';
import { FiMessageSquare, FiArrowUp } from "react-icons/fi";

function App() {
  const [product, setProduct] = useState([]);
  const URL = "http://localhost:3000/shop.json";

  useEffect(() => {
    const getProduct = async () => {
      const results = await fetch(URL);
      const response = await results.json();
      if (results.ok) {
        console.log(response);
        setProduct(response);
      } else {
        console.log(results.error);
      }
    };
    getProduct();
  }, []);

  const { mainshopItems, mainDiscountItems } = Data;

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const [likeItems, setLikeItems] = useState([]);

  const handleAddProductLike = (product) => {
    const ProductExist = likeItems.find((item) => item.id === product.id);

    if (ProductExist) {
      setLikeItems(
        likeItems.map((item) =>
          item.id === product.id ? { ...ProductExist } : item
        )
      );
    } else {
      setLikeItems([...likeItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProductLike = (product) => {
    const ProductExist = likeItems.find((item) => item.id === product.id);

    if (ProductExist.quantity === 1) {
      setLikeItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setLikeItems(
        likeItems.map((item) =>
          item.id === product.id ? { ...ProductExist } : item
        )
      );
    }
  };

  const [navMobile, setNavMobile] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <div>
      <BrowserRouter>
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <button
            type="button"
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray bg-red-500 rounded-full"
          >
            <FiMessageSquare/>
          </button>
          
        </div>
        <div className="">
          <MainHeader
            setNavMobile={setNavMobile}
            setUserProfile={setUserProfile}
            cartItems={cartItems}
            setSearch={setSearch}
          />
        </div>

        <div
          className={`${
            navMobile ? "left-0" : "-left-full"
          } fixed top-0 bottom-0 w- transition-all index`}
        >
          <NavMobile setNavMobile={setNavMobile} />
        </div>
        <div
          className={`${
            userProfile ? "right-0" : "-right-full"
          } fixed top-0 bottom-0 w- transition-all index`}
        >
          <UserProfile setUserProfile={setUserProfile} />
        </div>
        <div
          className={`${
            wishlist ? "left-0" : "-left-full"
          } fixed top-14 bottom-0 w-[65%] md:w-[25%] h-screen transition-all index`}
        >
          <LikeCart
            setWishlist={setWishlist}
            likeItems={likeItems}
            handleRemoveProductLike={handleRemoveProductLike}
          />
        </div>
        <div
          className={`${
            search ? "right-4" : "-right-full"
          } fixed bottom-0 w-[40%]  transition-all index pt-o h-full `}
        >
          <Search setSearch={setSearch} />
        </div>

        <div className="my-20">
          <Routes>
            <Route path="/" element={<Home product={product} />} />
            <Route path="/home" element={<Home product={product} />} />
            <Route
              path="/shop"
              element={
                <Shop
                  mainshopItems={mainshopItems}
                  mainDiscountItems={mainDiscountItems}
                  handleAddProduct={handleAddProduct}
                  handleAddProductLike={handleAddProductLike}
                  likeItems={likeItems}
                  setWishlist={setWishlist}
                  product={product}
                />
              }
            />
            <Route path="/policy" element={<Policy />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/ProductDetails/:id"
              element={<ProductDetails  product = {product}/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
