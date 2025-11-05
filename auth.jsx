// import { createContext, useContext } from "react";

import { useNavigate } from "react-router";
import { useEffect } from "react";
import { auth } from "./firebase";

import { onAuthStateChanged } from "firebase/auth";

// const userContext = createContext(null);

// function useUserContext() {
//   return useContext(userContext);
// }

// function mid() {
//   const a = useUserContext();
//   if (a == false) {
//     redirect("/login");
//   }
// }
// export { userContext, useUserContext, mid };

function useLogin() {
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
}

export { useLogin };
