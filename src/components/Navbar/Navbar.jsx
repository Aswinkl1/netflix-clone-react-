import React from "react";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="w-full py-4 px-[6%] flex justify-between fixed text-sm text-neutral-200 z-10 ">
      <div className="flex items-center gap-12">
        <img src={logo} alt="" srcset="" className="w-[90px]" />
        <ul className="flex  gap-5  [&>li]:cursor-pointer">
          <li>Home</li>
          <li>Tv shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse by language</li>
        </ul>
      </div>

      <div className="flex gap-5 items-center ">
        <img
          src={search_icon}
          alt=""
          srcset=""
          className="w-5 cursor-pointer"
        />
        <p>Childern</p>
        <img src={bell_icon} alt="" srcset="" className="w-5 cursor-pointer" />
        <div className="flex items-center gap-2.5 cursor-pointer relative group">
          <img
            src={profile_img}
            alt=""
            srcset=""
            className="rounded w-[35px]"
          />
          <img src={caret_icon} alt="" srcset="" className="" />

          <div className="hidden group-hover:block absolute top-full right-0 w-max py-[18px] px-[22px] underline z-10 bg-[#191919]">
            <p className="text-sm cursor-pointer">sign out Of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
