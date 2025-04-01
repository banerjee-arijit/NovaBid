import ProtectedAuthRoute from "@/components/ui/ProtectedAuthRoute";
import Sidebar from "@/components/ui/Sidebar";
import React from "react";

const DashBoard = () => {
  return (
    <div className="bg-black h-screen">
      <Sidebar />
      <ProtectedAuthRoute />
    </div>
  );
};

export default DashBoard;
