import React from 'react'
import DiscountCard from './DiscountCard'

const DiscountContainer = ({mainDiscountItems, handleAddProduct }) => {
  return (
    <section className="my-10 mb-16">
      <div className="container mx-auto">
        <h1 className="capitalize text-4xl font-bold">Discount Sales!</h1>
      </div>
      <div className="gap-y-3">
        <DiscountCard mainDiscountItems ={mainDiscountItems } handleAddProduct={handleAddProduct}/>
      </div>
    </section>
  );
}

export default DiscountContainer