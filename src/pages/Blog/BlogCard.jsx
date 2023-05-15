import React from 'react'
import { Blogitems} from "../../Data/dummy";

const BlogCard = () => {
  return (
    <>
        {Blogitems.map((Items, index) => {
        return (
          <div className="box mt-8">
            <div className="bg-white rounded-md">
              <div className="w-fullrelative rounded">
                <img src={Items.cover} alt="" className=''/>
              </div>
              <div className="mt-3 px-4 py-3 space-y-6">
                <div>
                  <h1 className="font-bold text-2xl text-red-500 capitalize">{Items.title}</h1>
                  <p className='text-md '>{Items.description}</p>
                </div>
                <div className="">
                    <button className=' justify-right bg-red-500 text-center px-4 py-1 rounded-md text-white text-lg font-bold'>
                        <a href="/"> Learn More</a>
                    </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  )
}

export default BlogCard