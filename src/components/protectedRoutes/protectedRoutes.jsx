import { useContext } from "react";
import { UserAuth } from "../../context/userAuthContext";
import { Navigate, Outlet, useNavigate } from "react-router";
import netflix_loding from "../../assets/netflix_spinner.gif";

export const ProtectedRoute = () => {
  const { user, loding } = useContext(UserAuth);

  if (loding) {
    return (
      <div className="w-full h-screen flex justify-center items-center ">
        <img className="w-20" src={netflix_loding} alt="" srcset="" />
      </div>
    );
  }
  if (!user) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};
