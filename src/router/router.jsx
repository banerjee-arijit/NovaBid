// src/routes/router.js
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthPage from "@/pages/AuthPage";
import DashBoard from "@/pages/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "auth/:type",
    element: <AuthPage />,
  },
  { path: "/dashboard", element: <DashBoard /> },
]);

export default router;
