import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "../route.js";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/userAuthContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer theme="dark" />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
