// src/routes/router.js
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthPage from "@/pages/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth/:type",
    element: <AuthPage />,
  },
]);

export default router;
