import React from "react";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
const Player = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img
        src={back_arrow_icon}
        alt=""
        className="absolute top-5 left-5 w-12 cursor-pointer"
      />
      <iframe
        src="https://www.youtube.com/embed/hkHHwA-vEyQ"
        width={"90%"}
        height={"90%"}
        frameborder="0"
        allowFullScreen
        className="rounded-[10px]"
      ></iframe>

      <div className="flex items-center justify-between w-[90%]">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  );
};

export default Player;
