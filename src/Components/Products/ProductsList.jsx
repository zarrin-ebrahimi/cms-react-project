import React from "react";
import { Link } from "react-router-dom";
import { HiMiniStop } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa6";
export default function ProductsList() {
  return (
    <div className=" mb-20 ">
      <h2 className="font-bold text-xl tracking-wide md:text-2xl mb-2">
        product List
      </h2>
      <div className="flex items-center text-gray-600 gap-x-4 ">
        <Link to={"/"}>Dashbord</Link>
        <HiMiniStop size={6} />
        <Link to={"/prodcut"}>Product</Link>
      </div>
      <div className=" items-center flex flex-col  ">
        <div className="   max-w-6xl flex  w-full flex-col  mt-4 ">
          <div className=" shadow-lg rounded-2xl">
            {/* Search and Filter Container */}
            <div  className="flex m-3 gap-3">
              {/* Search Input Group */}
              <div  className="flex items-center px-3 border border-gray-200 rounded-xl">
                <CiSearch size={30} className="text-gray-400  cursor-pointer"/>
                <input
                  placeholder="Search product ..."
                  type="text"
                  className=" p-4 w-full rounded-md border-gray-200 "
                />
              </div>
              {/* Filtered Product */}
              <div  className="flex items-center px-3 border border-gray-200 rounded-xl">
                <FaFilter size={30} className="text-gray-800  cursor-pointer"/>
                <input
                  type="text"
                  className=" p-4 w-full rounded-md border-gray-200 "
                />
              </div>
            </div>
            <tbody>
                
            </tbody>
          </div>
        </div>
      </div>
    </div>
  );
}
