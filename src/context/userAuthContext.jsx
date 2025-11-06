import { createContext, useState, useEffect } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const UserAuth = createContext(false);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setLoding(false);
      if (user) {
        console.log("loged in ");
        setUser(user.uid);
      } else {
        console.log("loged out ");
        setUser(null);
      }
    });
  }, []);

  const value = {
    user,
    loding,
  };

  return <UserAuth value={value}>{children}</UserAuth>;
};
