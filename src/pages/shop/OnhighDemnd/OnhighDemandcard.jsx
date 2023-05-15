// import React from 'react'
// import Slider from "react-slick";
// // import { mainDiscountItems} from "../../../Data/dummy";
// import { BsCart3 } from "react-icons/bs";
// import { FiChevronDown, FiHeart, FiHelpCircle } from "react-icons/fi";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const OnhighDemandcard = ({ handleAddProduct}) => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,     
//         autoplay: true,
//         arrows:false,  
//         responsive: [
//           {
//             breakpoint: 900,
//             settings: {
//               slidesToShow: 2,
//             },
//           },
//           {
//             breakpoint: 1150,
//             settings: {
//               slidesToShow: 3,
//             },
//           },
//           {
//             breakpoint: 1300,
//             settings: {
//               slidesToShow: 4,
//             },
//           },
//           ], 
//       };
//       return (
//         <div className="space-x-3">
//           <Slider {...settings}  >
//             {mainDiscountItems.map((item, index) => {
//               return (
//                 <div className="mt-8 " key={mainDiscountItems.id}>
//                   <div className="product p-2 m-3">
//                   <div className="relative rounded hover:opacity-75">
//                   <div className="right-1 top-1 absolute m-2 space-y-2">
//                     <FiHeart className="text-xl hover:text-red-600" />
//                     <BsCart3 className="text-xl hover:text-red-600 cursor-pointer" onClick={ ()=> handleAddProduct(mainDiscountItems)}/>
//                     <FiHelpCircle className="text-xl hover:text-red-600" />
//                   </div>
                  
//                   <img src={item.cover} alt="" className=""/>
//                 </div>
//                     <div className="space-y-2">
//                       <div className="">
//                       <div className="flex justify-between font-bold">
//                         <h1 className=''>{item.name}</h1>
//                         <p>${item.newPrice}.00</p>
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <p >{item.designer}</p>
//                       </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </Slider>
//         </div>
//       );
// }

// export default OnhighDemandcard