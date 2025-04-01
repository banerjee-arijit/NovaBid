import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthPage from "@/pages/AuthPage";
import DashBoard from "@/pages/DashBoard";
import ProtectedAuthRoute from "@/components/ui/ProtectedAuthRoute";

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
  { path: "/dashboard", element: <DashBoard /> },
]);

export default router;
