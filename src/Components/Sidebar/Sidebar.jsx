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
      className={`border-r-1 h-full border-gray-200 transition-width duration-300  hidden md:block ${
        isOpenSidebar ? "w-64" : "w-24"
      }`}
    >
      <div className={`${isOpenSidebar ? "p-3" : "p-1.5"}`}>
        <div className="h-12 relative">
          <div className={` flex   ${isOpenSidebar ? "" : "justify-center"}`}>
            <img src="logo.png" alt="" className="w-12 mt-2" />
          </div>
          <span
            className={`absolute bg-white p border-gray-200 border hover:bg-gray-100 rounded-full
              ${isOpenSidebar ? "-right-6" : "-right-4"}  cursor-pointer top-2`}
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
          >
            <GoChevronRight size={20} className="text-gray-600 p-px " />
          </span>
        </div>
        <div className="flex flex-col ">
          <ul className="flex mt-2 flex-col gap-y-1  child-hover:bg-gray-100 ">
            {/*App Item*/}
            <a
              className={` text-gray-500  rounded-md hover:bg-gray-100  active-sidebar-item ${
                isOpenSidebar
                  ? "flex items-center gap-x-2 p-2.5"
                  : " flex flex-col items-center  p-2.5 text-xs gap-y-1 "
              }`}
            >
              <FaTachometerAlt className="text-xl  text-gray-600" />
              <span className="">App</span>
            </a>
            {/*Products Item*/}
            <a
              className={` text-gray-500 p-2.5 group  rounded-md hover:bg-gray-100
                 ${
                   isOpenSidebar
                     ? "flex justify-between items-center "
                     : "relative "
                 }`}
            >
              <div
                className={`${
                  isOpenSidebar
                    ? "flex gap-x-2 items-center"
                    : "flex flex-col items-center gap-y-1  text-xs"
                }`}
              >
                <FaShop className="text-xl   text-gray-600" />
                Products
              </div>
              <div>
                <GoChevronRight
                  className={`${
                    isOpenSidebar ? "" : " absolute top-2.5 right-0 "
                  }`}
                />
                <div className="absolute top-3 shadow-sm -right-42 submenue-sidebar-active p-1 rounded-lg w-40 invisible opacity-0 group-hover:opacity-100 delay-75 group-hover:visible ">
                  <li className="p-1.5  text-gray-500   text-[14px] rounded-md hover:bg-gray-100/60 cursor-pointer  z-10">
                    User
                  </li>
                  <li className="p-1.5  text-gray5600  text-[14px] rounded-md hover:bg-gray-100/60    cursor-pointer ">
                    Order
                  </li>
                  <li className="p-1.5 text-gray-500   text-[14px] rounded-md hover:bg-gray-100/60   cursor-pointer ">
                    Mail
                  </li>
                  <li className="p-1.5 text-gray-500   text-[14px] rounded-md hover:bg-gray-100/60   cursor-pointer ">
                    Mail
                  </li>
                </div>
              </div>
            </a>
            {/*Products Submenu Items*/}
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
            {/* User Items*/}
            <a
              className={`group text-gray-500 p-2.5 rounded-md hover:bg-gray-100
                 ${
                   isOpenSidebar
                     ? "flex justify-between items-center "
                     : "relative"
                 }`}
            >
              <div
                className={`${
                  isOpenSidebar
                    ? "flex gap-x-2 items-center"
                    : "flex flex-col items-center gap-y-1 text-xs"
                }`}
              >
                <PiUserSwitchDuotone className="text-xl   text-gray-600" />
                Users
              </div>
              <div>
                <GoChevronRight
                  className={`${
                    isOpenSidebar ? "" : " absolute top-2.5 right-0 "
                  }`}
                />
                <div className="absolute top-3 shadow-sm -right-42 submenue-sidebar-active p-1 rounded-lg w-40 invisible opacity-0 group-hover:opacity-100 delay-75 group-hover:visible ">
                  <li className="p-1.5  text-gray-500   text-[14px] rounded-md hover:bg-gray-100/60 cursor-pointer  z-10">
                    User
                  </li>
                  <li className="p-1.5  text-gray5600  text-[14px] rounded-md hover:bg-gray-100/60    cursor-pointer ">
                    Order
                  </li>
                  <li className="p-1.5 text-gray-500   text-[14px] rounded-md hover:bg-gray-100/60   cursor-pointer ">
                    Mail
                  </li>
                  <li className="p-1.5 text-gray-500   text-[14px] rounded-md hover:bg-gray-100/60   cursor-pointer ">
                    Mail
                  </li>
                </div>
              </div>
            </a>
            {/*User Submenu Items */}
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
              <li className="p-1.5 text-gray-600  text-[14px] rounded-md hover:bg-gray-100   relative branch-img">
                Mail
              </li>
            </div>
            {/* Order Item */}
            <a
              className={`group text-gray-500 p-2.5  rounded-md hover:bg-gray-100
                 ${
                   isOpenSidebar
                     ? "flex justify-between items-center "
                     : "relative"
                 }`}
            >
              <div
                className={`${
                  isOpenSidebar
                    ? "flex gap-x-2 items-center"
                    : "flex flex-col items-center gap-y-1  text-xs"
                }`}
              >
                <MdShoppingCart className="text-xl   text-gray-600" />
                Order
              </div>
              <div>
                <GoChevronRight
                  className={`${
                    isOpenSidebar ? "" : " absolute top-2.5 right-0 "
                  }`}
                />
                <div className="absolute top-3 shadow-sm -right-42 submenue-sidebar-active p-1 rounded-lg w-40 invisible opacity-0 group-hover:opacity-100 delay-75 group-hover:visible ">
                  <li className="p-1.5  text-gray-500   text-[14px] rounded-md hover:bg-gray-100/60 cursor-pointer  z-10">
                    User
                  </li>
                  <li className="p-1.5  text-gray5600  text-[14px] rounded-md hover:bg-gray-100/60    cursor-pointer ">
                    Order
                  </li>
                  <li className="p-1.5 text-gray-500   text-[14px] rounded-md hover:bg-gray-100/60   cursor-pointer ">
                    Mail
                  </li>
                  <li className="p-1.5 text-gray-500   text-[14px] rounded-md hover:bg-gray-100/60   cursor-pointer ">
                    Mail
                  </li>
                </div>
              </div>
            </a>
            {/* Order Submenue Items */}
            <div className="submenu flex flex-col gap-y-1 ml-6 bg-white  branch relative mb-2 hidden">
              <li className="p-1.5  text-gray-600  text-[14px] rounded-md hover:bg-gray-100 relative branch-img z-10">
                User
              </li>
              <li className="p-1.5  text-gray-600 text-[14px] rounded-md hover:bg-gray-100    relative branch-img">
                Order
              </li>
            </div>
            {/* Comment Item */}
            <a
              className={` text-gray-500 p-2.5 rounded-md hover:bg-gray-100
                 ${isOpenSidebar ? "flex justify-between items-center " : ""}`}
            >
              <div
                className={`${
                  isOpenSidebar
                    ? "flex gap-x-2 items-center"
                    : "flex flex-col items-center gap-y-1 text-xs"
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
              className={` text-gray-500 p-2.5 rounded-md hover:bg-gray-100
                 ${isOpenSidebar ? "flex justify-between items-center " : ""}`}
            >
              <div
                className={`${
                  isOpenSidebar
                    ? "flex gap-x-2 items-center"
                    : "flex flex-col items-center gap-y-1 text-xs"
                }`}
              >
                <MdDiscount className="text-xl   text-gray-600" />
                Discount
              </div>
              {/* <GoChevronRight
                className={`${isOpenSidebar ? "block" : "hidden"}`}
              /> */}
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
