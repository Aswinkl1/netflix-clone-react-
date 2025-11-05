import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { useLogin } from "../auth";
const App = () => {
  useLogin();
  console.log("you know i am runnig");
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
