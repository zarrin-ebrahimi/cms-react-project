import React, { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { FaTachometerAlt } from "react-icons/fa";
import { PiUserSwitchDuotone } from "react-icons/pi";
import { MdShoppingCart } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { MdComment } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";

export default function Sidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div
      className={`fixed  border-r-1  h-full border-gray-200 transition-width duration-400 w-20  ${
        isOpenSidebar ? "w-64" : "w-22"
      }`}
    >
      <div className={`${isOpenSidebar ? "p-3.5" : "p-1.5"}`}>
        <div className="h-10 relative">
          <div className={` flex ${isOpenSidebar ? "" : "justify-center"}`} >
          <img src="logo.png" alt="" className="w-12" />
          </div>
          <span
            className="absolute  -right-6 cursor-pointer top-2"
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
          >
            <IoIosArrowDropright className="text-2xl text-gray-300 " />
          </span>
        </div>
        <div className="flex flex-col ">
          <ul className="flex mt-2 flex-col gap-y-1  child-hover:bg-gray-100 ">
            <li
              className={` text-gray-500  rounded-md hover:bg-gray-100  active-sidebar-item ${
                isOpenSidebar
                  ? "flex items-center gap-x-2 p-2.5"
                  : " flex flex-col items-center  p-2 text-xs "
              }`}
            >
              <FaTachometerAlt className="text-xl  text-gray-600" />
              <a className="">App</a>
            </li>
            <a
              className={` text-gray-500  rounded-md hover:bg-gray-100
                 ${
                  isOpenSidebar
                  ? 'flex justify-between items-center p-2.5'
                  : ''
                }`}
            >
              <div
                className={`${
                  isOpenSidebar
                    ? "flex gap-x-2 items-center"
                    : "flex flex-col items-center  p-2 text-xs"
                }`}
              >
                <FaShop className="text-xl   text-gray-600" />
                Products
              </div>
              <GoChevronRight
                className={`${isOpenSidebar ? "block" : "hidden"}`}
              />
            </a>
            <div className="submenu flex flex-col gap-y-1 ml-6 bg-white  branch relative mb-2 hidden">
              <li className="p-1.5  text-gray-600  text-[14px] rounded-md hover:bg-gray-100 relative branch-img z-10">
                User
              </li>
              <li className="p-1.5  text-gray-600 text-[14px] rounded-md hover:bg-gray-100    relative branch-img">
                Order
              </li>
              <li className="p-1.5 text-gray-600  text-[14px] rounded-md hover:bg-gray-100   relative branch-img">
                Mail
              </li>
            </div>
            <a
              className={` text-gray-500  rounded-md hover:bg-gray-100
                 ${
                  isOpenSidebar
                  ? 'flex justify-between items-center p-2.5'
                  : ''
                }`}
            >
              <div
                className={`${
                  isOpenSidebar
                    ? "flex gap-x-2 items-center"
                    : "flex flex-col items-center  p-2 text-xs"
                }`}
              >
                <PiUserSwitchDuotone className="text-xl   text-gray-600" />
                Users
              </div>
              <GoChevronRight
                className={`${isOpenSidebar ? "block" : "hidden"}`}
              />
            </a> 
            <div className="submenu flex flex-col gap-y-1 ml-6 bg-white  branch relative mb-2 hidden">
              <li className="p-1.5  text-gray-600  text-[14px] rounded-md hover:bg-gray-100 relative branch-img z-10">
                User
              </li>
              <li className="p-1.5  text-gray-600 text-[14px] rounded-md hover:bg-gray-100    relative branch-img">
                Order
              </li>
              <li className="p-1.5 text-gray-600  text-[14px] rounded-md hover:bg-gray-100   relative branch-img">
                Mail
              </li>
            </div>

            <a
              className={` text-gray-500  rounded-md hover:bg-gray-100
                 ${
                  isOpenSidebar
                  ? 'flex justify-between items-center p-2.5'
                  : ''
                }`}
            >
              <div
                className={`${
                  isOpenSidebar
                    ? "flex gap-x-2 items-center"
                    : "flex flex-col items-center  p-2 text-xs"
                }`}
              >
                <MdShoppingCart className="text-xl   text-gray-600" />
                Order
              </div>
              <GoChevronRight
                className={`${isOpenSidebar ? "block" : "hidden"}`}
              />
            </a> 
            
            <div className="submenu flex flex-col gap-y-1 ml-6 bg-white  branch relative mb-2 hidden">
              <li className="p-1.5  text-gray-600  text-[14px] rounded-md hover:bg-gray-100 relative branch-img z-10">
                User
              </li>
              <li className="p-1.5  text-gray-600 text-[14px] rounded-md hover:bg-gray-100    relative branch-img">
                Order
              </li>
            </div>

            <a
              className={` text-gray-500  rounded-md hover:bg-gray-100
                 ${
                  isOpenSidebar
                  ? 'flex justify-between items-center p-2.5'
                  : ''
                }`}
            >
              <div
                className={`${
                  isOpenSidebar
                    ? "flex gap-x-2 items-center"
                    : "flex flex-col items-center  p-2 text-xs"
                }`}
              >
                <MdComment className="text-xl   text-gray-600" />
                Comments
              </div>
              <GoChevronRight
                className={`${isOpenSidebar ? "block" : "hidden"}`}
              />
            </a>
            <a
              className={` text-gray-500  rounded-md hover:bg-gray-100
                 ${
                  isOpenSidebar
                  ? 'flex justify-between items-center p-2.5'
                  : ''
                }`}
            >
              <div
                className={`${
                  isOpenSidebar
                    ? "flex gap-x-2 items-center"
                    : "flex flex-col items-center  p-2 text-xs"
                }`}
              >
                <MdDiscount className="text-xl   text-gray-600" />
                Discount
              </div>
              <GoChevronRight
                className={`${isOpenSidebar ? "block" : "hidden"}`}
              />
            </a>
          </ul>
        </div>
      </div>

      {/* <div  class="overlay"></div> */}
    </div>
  );
}
