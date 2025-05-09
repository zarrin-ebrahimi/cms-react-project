import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import { SidebarProvider } from "./Contexts/SidebarContext";
import { menuItems } from "./Components/Sidebar/menuItems";
import { Routes, Route } from "react-router-dom";
import Comments from "./Components/Comments/Comments";
import Products from "./Components/Products/Products";
import Users from "./Components/Users/Users";
import Orders from "./Components/Orders/Orders";
import Offs from "./Components/Off/Offs";
import AddNewProduct from "./Components/Products/AddNewProduct";

export default function App() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar menuItems={menuItems} />
        <div className="flex flex-col flex-grow">
          <Topbar />
          <div className="content flex-grow bg-white px-5 md:px-8 ">
            <Routes>
              <Route path="/product" element={<Products />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="/users" element={<Users />} />
              <Route path="/offs" element={<Offs />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/product/add" element={<AddNewProduct />} />
            </Routes>

          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
