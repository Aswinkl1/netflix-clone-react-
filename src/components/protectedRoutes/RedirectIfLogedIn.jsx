import { useContext } from "react";
import { UserAuth } from "../../context/userAuthContext";
import { Navigate, Outlet } from "react-router";

export default function () {
  const user = useContext(UserAuth);

  if (user) {
    return <Navigate to={"/"} replace />;
  }
  console.log("nonono");

  return <Outlet />;
}
