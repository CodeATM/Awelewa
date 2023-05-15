import React from "react";
import { CategoriesData } from "../../../Data/dummy";

const Categories = () => {
  return (
    <div className="hidden md:block">
     {CategoriesData.map((value, index) => {
        return(
            <div className="mt-8 space-y-1">
                <div>
                    <h1 className="font-bold uppercase">{value.title}</h1>
                </div>
                <div>
                {value.cat.map((value, index) => (
                    <div className="flex justify-between spacey-y-1">
                        <p className=" uppercase">{value.name}</p>
                        <span>{value.number}</span>
                    </div>
                ))}
                </div>
            </div>
        )
    })}
    </div>
  );
};

export default Categories;
