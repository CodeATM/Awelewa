import React from 'react'
import { FiArrowUpCircle } from "react-icons/fi";
import OnhighDemandcard from './OnhighDemandcard';

const OnhighDemandContainer = ({ handleAddProduct }) => {
  return (
    <section className="my-10 mb-16">
      <div className="container mx-auto">
        <h1 className="capitalize text-4xl font-bold flex space-x-4"> <FiArrowUpCircle className='text-red-500'/>Products On high demand!</h1>
      </div>
      <div className="gap-y-3">
        {/* <OnhighDemandcard 
        // mainDiscountItems ={mainDiscountItems } 
        handleAddProduct={handleAddProduct}/> */}
      </div>
    </section>
  )
}

export default OnhighDemandContainer