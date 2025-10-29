import React from "react";

const Player = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => navigate(-2)}
        className="absolute top-5 left-5 w-12 cursor-pointer"
      />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        width={"90%"}
        height={"90%"}
        frameborder="0"
        allowFullScreen
        className="rounded-[10px]"
      ></iframe>

      <div className="flex items-center justify-between w-[90%]">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
