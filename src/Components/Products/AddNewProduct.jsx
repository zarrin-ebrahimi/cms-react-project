import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniStop } from "react-icons/hi2";
import Editore from "../TextEditore/Editore";
export default function AddNewProduct() {
  const [description, setDescription] = useState("");

  return (
    <div className=" mb-20 ">
      <h2 className="font-bold text-xl tracking-wide md:text-2xl mb-2">
        Create a new product
      </h2>
      <div className="flex items-center text-gray-600 gap-x-4 ">
        <Link to={"/"}>Dashbord</Link>
        <HiMiniStop size={6} />
        <Link to={"/prodcut"}>Product</Link>
      </div>
      <div className=" items-center flex flex-col  ">
        <form className="   max-w-3xl flex  w-full flex-col  mt-4 ">
        <div  className=" shadow-lg rounded-2xl ">
            {/* Form Header */}
            <div className=" border-b-1 border-gray-200 gap-y-2 flex flex-col p-5">
            <span className="fonr-bold md:text-xl">Details</span>
            <span className="text-gray-400  text-[14px]">
              Title, short description, image...
            </span>
          </div>
          <div className="p-4 flex flex-col gap-y-6">
            {/* Product Name */}
            <div className="w-full  flex-col flex  relative">
            <input
              required
              type="text"
              className="input-form p-4 border w-full rounded-md border-gray-200"
            />
            <label className="label-input-form px-px">Product Name</label>
            </div>

            {/*  Product  Description */}
            <div className="w-full  flex-col flex  relative" >
            <textarea
              required
              type="text"
              className="input-form p-4 border w-full resize-none h-36 rounded-md border-gray-200"
            />
            <label className="label-input-form px-px"> Sun description</label>
            </div>

            <div className="w-full max-w-full ">
              <Editore value={description} onChange={setDescription} />
            </div>

            {/* Drop Image Product */}
            <div className="flex flex-col">
              <span>Images</span>
              <label
                className="relative h-72 cursor-pointer
               bg-gray-100 border w-full mt-2 border-gray-200 rounded-md  "
              >
                <input type="file" className=" hidden" />
                <div className="absolute items-center top-1/5 flex flex-col text-center  left-1/2 transform -translate-x-1/2">
                  <img src="/drop-img.png" alt="" className="w-23" />
                  <span className="font-bold">Drop or select file</span>
                  <span className="text-gray-600">
                    Drop files here or click to browser through your machine
                  </span>
                </div>
              </label>
            </div>
          </div>
          {/* Form Header */}
          <div className=" border-b-1 border-gray-200 gap-y-2 flex flex-col p-5">
            <span className="fonr-bold md:text-xl">Properties</span>
            <span className="text-gray-400  text-[14px]">
              Additional functions and attributes...
            </span>
          </div>
          {/* Adotional attibutes */}
          <div className="p-4  w-full my-5 ">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5  gap-3">
            <div className="w-full  flex-col flex  relative">
            <input
              required
              type="text"
              className="input-form p-4 border w-full rounded-md border-gray-200"
            />
            <label className="label-input-form px-px">Product Name</label>
            </div>
            <div className="w-full  flex-col flex  relative">
            <input
              required
              type="text"
              className="input-form p-4 border w-full rounded-md border-gray-200"
            />
            <label className="label-input-form px-px">Product Name</label>
            </div>
            <div className="w-full  flex-col flex  relative">
            <input
              required
              type="text"
              className="input-form p-4 border w-full rounded-md border-gray-200"
            />
            <label className="label-input-form px-px">Product Name</label>
            </div>
            <div className="w-full  flex-col flex  relative">
            <input
              required
              type="text"
              className="input-form p-4 border w-full rounded-md border-gray-200"
            />
            <label className="label-input-form px-px">Product Name</label>
            </div>

            <div className="w-full md:col-span-2  col-span-1 flex-col flex  relative">
            <input
              required
              type="text"
              className="input-form p-4 border w-full rounded-md border-gray-200"
            />
            <label className="label-input-form px-px">Product Name</label>
            </div>
            </div>
            {/* Radio Box */}
            <div className="mt-6">
              <span>Gender</span>
              <div class="flex gap-10 mt-5">
                <div class="inline-flex items-center">
                  <label
                    class="relative flex items-center cursor-pointer"
                    for="html-custom-icon"
                  >
                    <input
                      name="framework-custom-icon"
                      type="radio"
                      class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-800 transition-all"
                      id="html-custom-icon"
                      checked
                    />
                    <span class="absolute w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path d="M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61c-.02.01-.038.017-.05.022l-.014.006-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003-.015-.006a5.528 5.528 0 0 1-.232-.107 14.395 14.395 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38L2 6.342Z" />
                      </svg>
                    </span>
                  </label>
                  <label
                    class="ml-2 text-slate-600 cursor-pointer text-sm"
                    for="html-custom-icon"
                  >
                    Men
                  </label>
                </div>
                <div class="inline-flex items-center">
                  <label
                    class="relative flex items-center cursor-pointer"
                    for="react-custom-icon"
                  >
                    <input
                      name="framework-custom-icon"
                      type="radio"
                      class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-800 transition-all"
                      id="react-custom-icon"
                    />
                    <span class="absolute w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path d="M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61c-.02.01-.038.017-.05.022l-.014.006-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003-.015-.006a5.528 5.528 0 0 1-.232-.107 14.395 14.395 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38L2 6.342Z" />
                      </svg>
                    </span>
                  </label>
                  <label
                    class="ml-2 text-slate-600 cursor-pointer text-sm"
                    for="react-custom-icon"
                  >
                    Woman
                  </label>
                </div>
                <div class="inline-flex items-center">
                  <label
                    class="relative flex items-center cursor-pointer"
                    for="react-custom-icon"
                  >
                    <input
                      name="framework-custom-icon"
                      type="radio"
                      class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-800 transition-all"
                      id="react-custom-icon"
                    />
                    <span class="absolute w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path d="M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61c-.02.01-.038.017-.05.022l-.014.006-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003-.015-.006a5.528 5.528 0 0 1-.232-.107 14.395 14.395 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38L2 6.342Z" />
                      </svg>
                    </span>
                  </label>
                  <label
                    class="ml-2 text-slate-600 cursor-pointer text-sm"
                    for="react-custom-icon"
                  >
                    Kids
                  </label>
                </div>
              </div>
            </div>           
          </div>
        </div>
        <div  className="p-4 flex justify-end w-full  mt-5">
            <button type="submit"  className="p-2  rounded-md text-white  tracking-wide
             bg-gray-800 flex cursor-pointer w-32">Create Product</button>
          </div> 
        </form>

      </div>
    </div>
  );
}
