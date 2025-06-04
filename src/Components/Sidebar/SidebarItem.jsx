import { useSidebar } from "../../Contexts/SidebarContext";
import { GoChevronRight } from "react-icons/go";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
const SidebarItem = ({ item }) => {
  const { isSidebarOpen, isMobile, openSubMenus, toggleSubMenu } = useSidebar();
  const isOpen = openSubMenus[item.id] || false;
  const location = useLocation();
  const isActiveMenuParent = item.submenu?.length
    ? location.pathname.startsWith(item.path)
    : location.pathname === item.path;

  useEffect(() => {
    console.log(isActiveMenuParent ? "active" : "not active");
  }, [isActiveMenuParent]);

  return (
    <>
      <NavLink
        to={item.path}
        className={` text-gray-500 p-2.5 group cursor-pointer rounded-md hover:bg-gray-100
                 ${
                   isSidebarOpen
                     ? "flex justify-between items-center "
                     : "relative "
                 }
                 ${isActiveMenuParent ? "bg-green-500/10  text-black " : ""}
                 `}
        onClick={() => {
          if (item.submenu && isSidebarOpen) {
            toggleSubMenu(item.id);
          }
        }}
      >
        <div
          className={` group ${
            isSidebarOpen
              ? "flex gap-x-2 items-center "
              : "flex flex-col items-center gap-y-1 group-hover:text-black text-xs"
          }`}
        >
          {item.icon("text-xl   text-gray-600 group-hover:text-black ")}
          {item.label}
        </div>
        <div>
          {item.submenu ? (
            <GoChevronRight
              className={`${isSidebarOpen ? "" : " absolute top-2.5 right-0 "}`}
            />
          ) : (
            ""
          )}

          {/* SubMenu List Show Whit Hover */}
          {item.submenu && !isSidebarOpen && !isMobile && (
            <div
              className="absolute top-3 shadow-sm -right-42 submenue-sidebar-active p-1 rounded-lg w-40 
              invisible opacity-0 group-hover:opacity-100 delay-75 group-hover:visible z-50"
            >
              {item.submenu.map((subItem) => (
                <NavLink to={subItem.path}
                    key={subItem.id}
                >
                  <li
                    className="p-1.5 cursor-pointer text-gray-500   text-[14px] rounded-md hover:bg-gray-100/90   z-10"
                  >
                    {subItem.label}
                  </li>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </NavLink>
      {/* Show SubMenu With Click User*/}
      {item.submenu && isSidebarOpen && isOpen && (
        <div className="submenu flex flex-col gap-y-1 ml-6 bg-white  branch   relative mb-2 ">
          {item.submenu.map((subItem) => (
            <NavLink  to={subItem.path}>
              <li
                key={subItem}
                className="p-1.5 cursor-pointer text-gray-600  text-[14px] rounded-md hover:bg-gray-100 relative branch-img z-10"
              >
                {subItem.label}
              </li>
            </NavLink>
          ))}
        </div>
      )}
     
    </>
  );
};

export default SidebarItem;
