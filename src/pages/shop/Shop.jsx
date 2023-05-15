import React from "react";
import DiscountContainer from "./Discount/DiscountContainer";
import Header from "./Header";
// import OnhighDemandContainer from "./OnhighDemnd/OnhighDemandContainer";
import Product from "./Products/Product";

const Shop = ({ mainshopItems, handleAddProduct, handleAddProductLike, setWishlist, likeItems, product}) => {
  return (
    <div className="container mx-auto my-4">
      <Header setWishlist={setWishlist} likeItems={likeItems}/>
      <Product
        mainshopItems={mainshopItems}
        handleAddProduct={handleAddProduct}
        handleAddProductLike={handleAddProductLike}
        product={product}
        
      />
      {/* <DiscountContainer
        mainDiscountItems={mainDiscountItems}
        handleAddProduct={handleAddProduct}
      /> */}
      {/* <OnhighDemandContainer
        // mainDiscountItems={mainDiscountItems}
        handleAddProduct={handleAddProduct}
      /> */}
    </div>
  );
};

export default Shop;
