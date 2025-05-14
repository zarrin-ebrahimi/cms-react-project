import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
export default function ProductDetail() {
  return (
    <div className="md:max-w-4/5 m-auto ">
      {/* Header Container */}
      <div className="flex items-center justify-between mt-3  ">
        <div className="flex items-center gap-x-1.5  font-bold">
          <GoChevronLeft size={20} />
          Back
        </div>
        <div className="flex  items-center gap-x-3.5">
          <FaHeart size={25} className="text-gray-500" />
          <MdEdit size={25} className="text-gray-500" />
          <span className="cursor-pointer bg-gray-950 text-white py-1.5 px-3 tracking-wide rounded-md">
            Published
          </span>
        </div>
      </div>
      {/* Product And Description */}
      <div  className="grid grid-cols-1 lg:grid-cols-2  gap-4">
        {/* Product Images*/}
        <div className="flex flex-col gap-y-4 mt-5 ">
          <div className=" w-full">
          <img src="/watch-7.jpg" alt="" className=" rounded-2xl  w-full" />

          </div>
          <div className="grid grid-cols-4 gap-2 justify-center px-10">
            <img
              src="/watch-7.jpg"
              alt=""
              className="   rounded-xl"
            />
            <img
              src="/watch-7.jpg"
              alt=""
              className="   rounded-xl"
            />
            <img
              src="/watch-7.jpg"
              alt=""
              className="   rounded-xl"
            />
            <img
              src="/watch-7.jpg"
              alt=""
              className="   rounded-xl"
            />
          </div>
        </div>
        {/* Description */}
        <div className=" flex flex-col">
          <span className="text-orange-600">OUT OF STOCK</span>
          <span>Urban Explorer Sneakers</span>
           {/* Stars */}
           <div className="flex">
            <FaStar color="gold"/>
            <FaStar color="gold"/>
            <FaStar color="gold"/>
            <FaStar color="gold"/>
            <span className="text-gray-400">(1.95k reviews)</span>
           </div>
           <span>$83.74</span>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet eum dolorum aperiam.</p>
        </div>
      </div>
    </div>
  );
}
