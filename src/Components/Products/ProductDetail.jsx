import React from 'react'
import { GoChevronLeft } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

export default function ProductDetail() {
  return (
    <div className='md:max-w-4/5 m-auto '>
        {/* Header Container */}
        <div  className='flex items-center justify-between  '>
            <div className='flex items-center gap-x-1.5  font-bold'>
                <GoChevronLeft size={20}/>
                Back
            </div>
            <div  className='flex  items-center gap-x-3.5'>
                <FaHeart size={25} className='text-gray-500'/>
                <MdEdit size={25}  className='text-gray-500' />
                <span className='cursor-pointer bg-gray-950 text-white py-1.5 px-3 tracking-wide rounded-md'>Published</span>
            </div>
        </div>
    </div>
  )
}
