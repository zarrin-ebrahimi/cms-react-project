import React from 'react'
import { GoChevronLeft } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { FaHeart } from "react-icons/fa"; 
import { BsCameraFill } from "react-icons/bs";

export default function AddUser() {
  return (
    <div  className="md:max-w-5/6 m-auto">
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
       <div>
        <h2   className='text-2xl text-gray-900 font-bold  my-2'>Create a new user</h2>
       </div>
       <div className='flex flex-col lg:flex-row bg-red-400 w-full'>
          <div className='bg-white shadow lg:w-1/3 rounded-2xl flex items-center justify-center w-full  '>
              {/* Drop Image Product */}
              <div className="flex flex-col items-center ">
                <label
                  className="relative h-[120px]  cursor-pointer rounded-full
               bg-gray-100 border w-[120px]  mt-2 border-gray-200   "
                >
                  <input
                  
                    type="file"
                    className=" hidden"
                  />
                    <div className="absolute items-center inset-0 top-1/3">
                      <div className="flex flex-col text-center items-center">
                        <BsCameraFill   size={30} className='text-gray-400'/>
                        <span className="text-gray-400  text-xs">
                                Upload Photo
                        </span>
                      </div>
                    </div>
                  
                </label>
                <span  className='text-xs max-w-36 text-center text-gray-400  mt-5'>Allowed *.jpeg, *.jpg, *.png, *.gif
max size of 3 Mb</span>
              </div>
             
          </div>
          {/* Form */}
          <div  className=' w-full lg:w-2/3 '>

          </div>
       </div>
    </div>
  )
}
