import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/ui/Sidebar";

const DashBoard = () => {
  return (
    <div className="flex max-h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-grow p-4 min-h-screen  overflow-scroll   bg-black">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
