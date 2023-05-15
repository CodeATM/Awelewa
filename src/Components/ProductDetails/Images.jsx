import React, { useEffect, useState } from "react";

const Images = ({ details }) => {

  // const  [{thumbnails}]  = details;

  // console.log(thumbnails);

  // console.log(thumbnails.img1)




  return (
    <div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-3 w-[90%]">
        <div className="col-span-3">
          <img src={details.cover} alt="" className="shadow-md" />
        </div>
        {/* <p>{thumb.img1}</p> */}
        <div>
          <img src={details.img1} alt="" className="shadow-md" />
        </div>
        <div>
          <img src={details.img2} alt="" className="shadow-md" />
        </div>
        <div>
          <img src={details.img3} alt="" className="shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Images;
