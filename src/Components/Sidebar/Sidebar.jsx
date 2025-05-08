import { GoChevronRight } from "react-icons/go";
import { useSidebar } from "../../Contexts/SidebarContext";
import  SidebarItem  from "./SidebarItem";

export default function Sidebar({ menuItems }) {
  const { isSidebarOpen, toggleSidebar,isMobile } = useSidebar();



  return (
    <div
      // className={`border-r-1 h-full  border-gray-200 transition-width duration-300  hidden md:block ${
      //   isSidebarOpen ? "w-64" : "w-24"
      // }`}

      className={`border-r-1 h-full  border-gray-200 transition-width duration-300
       ${ isMobile 
        ? isSidebarOpen 
        ? "w-64"
        : "w-0 overflow-hidden" 
        : isSidebarOpen
        ? 'w-64' 
        : "w-24"
      }`}
    >
      <div className={`${isSidebarOpen ? "p-3" : "p-1.5"}`}>
        <div className="h-12 relative">
          <div className={` flex   ${isSidebarOpen ? "" : "justify-center"}`}>
            <img src="logo.png" alt="" className="w-12 mt-2" />
          </div>
          <span
            className={`absolute bg-white p border-gray-200 border hidden md:block hover:bg-gray-100 rounded-full
              ${isSidebarOpen ? "-right-6" : "-right-4"}  cursor-pointer top-2`}
            onClick={toggleSidebar}
          >
            <GoChevronRight size={20} className="text-gray-600 p-px " />
          </span>
        </div>
        <div className="flex flex-col ">
          <ul className="flex mt-2 flex-col gap-y-1  child-hover:bg-gray-100 ">
            {menuItems.map(item => (
              <SidebarItem key={item.id}  item={item}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


