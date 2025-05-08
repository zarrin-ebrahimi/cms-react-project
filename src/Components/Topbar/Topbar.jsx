import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { useSidebar } from '../../Contexts/SidebarContext';

export default function Topbar () {
  
  const {toggleSidebar, isMobile} = useSidebar()

  return (
    <>
        <div  className='p-3  w-full  '>
      <div  className='flex items-center justify-between'>
        {/*Left Items*/}
        <div  className='flex gap-x-4 items-center  '>
          {isMobile && (
             <FaBarsStaggered  onClick={toggleSidebar}  size={23}   className='text-gray-500 '/>
          )}
          <img src="logo.png" alt=""  className='w-8 md:hidden'/>
        </div>
        {/*Right Items */}
         <div  className='flex  items-center gap-x-3'>
          <div>
            <img src="/images/Flags/England.png" alt="" className='w-8 h-5  rounded-md' />
          </div>
          <div  className='w-9 h-9 hover:bg-gray-100 transition-transform transform hover:scale-110 duration-300   cursor-pointer  flex items-center justify-center rounded-full'>
             <IoNotifications  size={23}  className='text-gray-500'/>
          </div>
          <div  className='w-9 h-9 hover:bg-gray-100 transition-transform transform hover:scale-110 duration-300 cursor-pointer  flex items-center justify-center rounded-full'>
            <HiUsers  size={23}  className='text-gray-500'/>
          </div>
          <div  className='w-9 h-9 transition-transform transform spin hover:scale-110 duration-300 hover:bg-gray-100  cursor-pointer  flex items-center justify-center rounded-full'>
            <IoSettings  size={23}  className='text-gray-500'/>
          </div>
          <div  className='transition-transform transform hover:scale-110  duration-300 cursor-pointer'>
            <img src="/images/Icons/face-2.png" alt=""  className='w-10  ' />
          </div>
         </div>
      </div>
    </div>

    </>

  )
}
