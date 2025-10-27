import React, { useState } from "react";
import logo from "../../assets/logo.png";
const classForInput =
  "w-full border-0 h-12 bg-[#333] text-white my-3 rounded py-4 px-5 text-[16px] font-medium outline-0 placeholder:text-base placeholder:font-medium";
const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  return (
    <div className="h-screen bg-[url('/background_banner.jpg')] py-5 px-[8%]">
      <img className="w-[150px]" src={logo} alt="" />
      <div className="w-full max-w-[450px] bg-black rounded p-14 m-auto">
        <h1 className="font-bold text-3xl mb-7">{signState}</h1>
        <form>
          {signState === "Sign Up" && (
            <input
              className={classForInput}
              type="text"
              placeholder="Your name"
            />
          )}

          <input className={classForInput} type="email" placeholder="Email" />
          <input
            className={classForInput}
            type="password"
            name=""
            id=""
            placeholder="password"
          />
          <button className="w-full p-4 bg-[#e50914] text-white rounded font-medium text-sm mt-5">
            {signState}
          </button>
          <div className="flex items-center justify-between text-[#b3b3b3] text-sm mt-3">
            <div className="flex items-center gap-1.5">
              <input className="w-4.5 h-4.5" type="checkbox" name="" id="" />
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
