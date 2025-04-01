import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import AuthPage from "@/pages/AuthPage";
import DashBoard from "@/pages/DashBoard";
import ProtectedAuthRoute from "@/components/ui/ProtectedAuthRoute";
import UserDashBoard from "@/components/ui/subPages/UserDashBoard";
import DynamicDashboardRoutes from "@/components/ui/features/DynamicDashboardRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "auth/:type",
    element: (
      <ProtectedAuthRoute>
        <AuthPage />
      </ProtectedAuthRoute>
    ),
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      { index: true, element: <UserDashBoard /> },
      { path: ":page", element: <DynamicDashboardRoutes /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" replace />,
  },
]);

export default router;
