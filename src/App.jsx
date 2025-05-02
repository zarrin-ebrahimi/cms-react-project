import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Topbar />
        <div className="content flex-grow bg-white p-3">
          hello
         </div>
      </div>
    </div>

  );
}
