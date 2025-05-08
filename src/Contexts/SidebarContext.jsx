import { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});
  const [isMobile, setIsMobile] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const toggleSubMenu = (menu) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };
 
  useEffect(()=>{
    const handleResize = ()=>{
          setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  },[])
   
  useEffect(()=>{
    if(!isSidebarOpen && !isMobile){
      setOpenSubMenus({})
    }
  }, [isSidebarOpen, isMobile])

 

  return (
    <SidebarContext.Provider
      value={{
         isSidebarOpen,
         toggleSidebar,
         isMobile,
         openSubMenus,
         toggleSubMenu }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
