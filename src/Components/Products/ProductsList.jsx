import React from "react";
import { Link } from "react-router-dom";
import { HiMiniStop } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa6";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";

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
            <div className="flex m-3 gap-3 justify-between">
              {/* Search Input Group */}
              <div className="flex items-center px-3 w-full border border-gray-200 rounded-xl">
                <CiSearch size={25} className="text-gray-800  cursor-pointer" />
                <input
                  placeholder="Search product ..."
                  type="text"
                  className=" focus:outline-none p-2.5 w-full rounded-md border-gray-200 "
                />
              </div>
              {/* Filtered Product */}
              <div className="flex items-center px-3 gap-x-2">
                <FaFilter size={20} className="text-gray-800  cursor-pointer" />
                <span className="tracking-wide">Filters</span>
              </div>
            </div>

            {/* Product Table */}
            <div className="max-h-[500px] overflow-y-auto ">
              <table className="min-w-full text-sm text-left text-gray-500"> 
                {/* Table Head */}
                <thead className="bg-gray-100  sticky top-0 z-10">
                  <tr className="h-16 tracking-wider">
                    <th className="px-6 py-3">Product</th>
                    <th className="px-6 py-3">Create at</th>
                    <th className="px-6 py-3">Count</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Publish</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {/* Product Row */}
                  <tr className="border-y  border-gray-200 hover:bg-gray-50">
                    <td className="flex items-center gap-3 px-6 py-4">
                      <img
                        src="/watch-7.jpg"
                        alt="shoe"
                        className="w-16 h-14 rounded-xl"
                      />
                      <div>
                        <p className="font-medium">Shoe</p>
                        <p className="text-gray-400 text-xs">Shoes</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      11 May 2025
                      <br />
                      <span className="text-xs text-gray-400">9:53 pm</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: "72%" }}
                        ></div>
                      </div>
                      <p className="text-xs mt-1 text-green-600">72 in stock</p>
                    </td>
                    <td className="px-6 py-4 font-medium">$97.14</td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                        Published
                      </span>
                    </td>
                    <td className=" relative group ">
                      <FiMoreVertical size={20} />
                      <div
                        className="absolute w-36  top-15 shadow-xl right-14 submenue-sidebar-active p-1.5 rounded-lg  flex flex-col gap-y-1
                           invisible opacity-0 group-hover:opacity-100 delay-75 group-hover:visible"
                      >
                        <Link className="p-1.5 flex items-center gap-x-4 cursor-pointer text-black   text-[14px] rounded-md hover:bg-gray-100/90   z-10">
                          <AiFillEdit size={20} />
                          <span> Edite </span>
                        </Link>
                        <Link className="p-1.5 flex items-center gap-x-4 cursor-pointer text-black   text-[14px] rounded-md hover:bg-gray-100/90   z-10">
                          <IoMdEye size={20} />
                          <span> View </span>
                        </Link>
                        <Link className="p-1.5 flex items-center gap-x-4 cursor-pointer text-orange-500   text-[14px] rounded-md hover:bg-gray-100/90   z-10">
                          <MdDelete size={20} />
                          <span> Delete </span>
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
