import { GoChevronRight } from "react-icons/go";
import { useSidebar } from "../../Contexts/SidebarContext";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ menuItems }) {
  const { isSidebarOpen, toggleSidebar, isMobile } = useSidebar();

  return (
    <>
      {/* Overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`bg-white border-r border-gray-200 h-full transition-all duration-300
        ${isMobile
          ?  `fixed top-0 left-0 z-40 
          ${isSidebarOpen ? "w-64" : "w-0 overflow-hidden"}`
          : isSidebarOpen
          ? "w-64"
          : "w-24"
        }`}
      >
        <div className={`${isSidebarOpen ? "p-3" : "p-1.5"}`}>
          {/* Logo */}
          <div className="h-12 relative">
            <div className={`flex ${isSidebarOpen ? "" : "justify-center"}`}>
              <img src="/logo.png" alt="logo" className="w-12 mt-2" />
            </div>

            {/* Toggle Desctop */}
            {!isMobile && (
              <span
                className={`absolute bg-white border border-gray-200 hidden md:block hover:bg-gray-100 rounded-full
                ${isSidebarOpen ? "-right-6" : "-right-4"} cursor-pointer top-2`}
                onClick={toggleSidebar}
              >
                <GoChevronRight size={20} className="text-gray-600 p-px" />
              </span>
            )}
          </div>

          {/* Items */}
          <ul className="mt-2 flex flex-col gap-y-1 child-hover:bg-gray-100">
            {menuItems.map(item => (
              <SidebarItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}