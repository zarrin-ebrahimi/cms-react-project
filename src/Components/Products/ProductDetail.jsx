import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
export default function ProductDetail() {
  return (
    <div className="md:max-w-5/6 m-auto  ">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 my-6 items-start gap-x-16  ">
        {/* Product Images*/}
        <div className="flex flex-col gap-y-4  ">
          <div className=" w-full">
            <img
              src="/images/Products/product-1.webp"
              alt=""
              className="h-[400px] rounded-2xl  w-full"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 justify-center px-10">
            <img src="/watch-7.jpg" alt="" className="   rounded-xl" />
            <img src="/watch-7.jpg" alt="" className="   rounded-xl" />
            <img src="/watch-7.jpg" alt="" className="   rounded-xl" />
            <img src="/watch-7.jpg" alt="" className="   rounded-xl" />
          </div>
        </div>
        {/* Description */}
        <div className=" flex flex-col gap-y-4 mt-5">
          <span className=" bg-blue-400/40 w-10 text-blue-950 text-sm text-center rounded p-px">
            NEW
          </span>
          <span className="text-orange-600 text-sm font-bold">
            OUT OF STOCK
          </span>
          <span className="font-bold text-xl">Urban Explorer Sneakers</span>
          {/* Stars */}
          <div className="flex">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <span className="text-gray-400">(1.95k reviews)</span>
          </div>
          <span className="font-bold text-2xl  text-gray-900">$83.74</span>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sit
            dicta quo numquam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Natus eveniet eum dolorum aperiam.
          </p>
          <div className="border-gray-200 py-10  border-y my-8">
            <div className="grid grid-cols-2 gap-x-2 w-full  justify-stretch   ">
              <button className="bg-gray-300 flex items-center justify-center gap-x-3  px-10 py-3 rounded-md text-gray-500">
                <FaCartPlus />
                Add to cart
              </button>
              <button className="bg-gray-300 px-10 py-3 rounded-md  flex items-center justify-center gap-x-3 text-gray-500">
                <FaCartPlus />
                Add to cart
              </button>
            </div>
            {/* Actions */}
            <div className="flex justify-center gap-x-6 mt-5">
              <div className="flex items-center gap-x-2 text-gray-700">
                <FaPlus />
                Compare
              </div>
              <div className="flex items-center gap-x-2 text-gray-700">
                <FaHeart />
                Favorite
              </div>
              <div className="flex items-center gap-x-2 text-gray-700">
                <IoMdShare />
                Share
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
