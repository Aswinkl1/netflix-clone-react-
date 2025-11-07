import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { useLogin } from "../auth";
import { WatchlistProvider } from "./context/WatchListContext";
const App = () => {
  // useLogin();
  console.log("you know i am runnig");
  return (
    <WatchlistProvider>
      <div>
        <Home />
      </div>
    </WatchlistProvider>
  );
};

export default App;
