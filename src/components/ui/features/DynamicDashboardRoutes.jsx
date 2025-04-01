import React from "react";
import { useParams } from "react-router-dom";
import UserDashBoard from "@/components/ui/subPages/UserDashBoard";
import AuctionDashboard from "@/components/ui/subPages/AuctionDashboard";

const DynamicDashboardRoutes = () => {
  const { page } = useParams();

  const renderDynamicDashBoardPage = () => {
    switch (page) {
      case "auction":
        return <AuctionDashboard />;
      case "/dashboard":
        return <UserDashBoard />;
    }
  };

  return <div>{renderDynamicDashBoardPage()}</div>;
};

export default DynamicDashboardRoutes;
