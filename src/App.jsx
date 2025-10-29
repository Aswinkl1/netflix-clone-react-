import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("loged in ");
        navigate("/");
      } else {
        console.log("loged out ");
        navigate("/login");
      }
    });
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
