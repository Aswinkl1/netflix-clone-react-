import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { login, signup } from "../../../firebase.js";
import { useLogin } from "../../../auth.jsx";

const classForInput =
  "w-full border-0 h-12 bg-[#333] text-white my-3 rounded py-4 px-5 text-[16px] font-medium outline-0 placeholder:text-base placeholder:font-medium";
const Login = () => {
  useLogin();
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = (e) => {
    e.preventDefault();
    if (signState === "Sign Up") {
      signup(email, name, password);
    } else {
      login(email, password);
    }
  };

  return (
    <div className="h-screen bg-[url('/background_banner.jpg')] py-5 px-[8%]">
      <img className="w-[150px]" src={logo} alt="" />
      <div className="w-full max-w-[450px] bg-black rounded p-14 m-auto">
        <h1 className="font-bold text-3xl mb-7">{signState}</h1>
        <form>
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={classForInput}
              type="text"
              placeholder="Your name"
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classForInput}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classForInput}
            type="password"
            name=""
            placeholder="password"
          />
          <button
            onClick={user_auth}
            type="submit"
            className="w-full p-4 bg-[#e50914] text-white rounded font-medium text-sm mt-5 cursor-pointer"
          >
            {signState}
          </button>
          <div className="flex items-center justify-between text-[#b3b3b3] text-sm mt-3">
            <div className="flex items-center gap-1.5">
              <input className="w-4.5 h-4.5" type="checkbox" name="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="mt-10 text-[#737373] ">
          {signState === "Sign In" ? (
            <p className="">
              New to Netflix?
              <span
                onClick={(e) => setSignState("Sign Up")}
                className="ml-1.5 text-white font-medium cursor-pointer"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?
              <span
                onClick={(e) => setSignState("Sign In")}
                className="ml-1.5 text-white font-medium cursor-pointer"
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
