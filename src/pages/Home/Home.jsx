import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import btn_info from "../../assets/info_icon.png";
import play_icon from "../../assets/play_icon.png";
import TitleCard from "../../components/TitleCard/TitleCard";
import Footer from "../../components/Footer/Footer";
import { Modal } from "../../components/Modal/Modal";
import Watchlist from "../../components/Modal/Watchlist";

import { ComConetext, ComProvider } from "../../context";

const button_for_home =
  "border-0 outline-0 gap-2.5 px-5 py-2 inline-flex items-center text-sm font-semibold  rounded cursor-pointer ";
const Home = () => {
  const { value, setValue } = useContext(ComConetext);
  return (
    <div>
      <Navbar />
      {/* <Modal /> */}
      {/* <Watchlist /> */}
      <div className="relative ">
        <img
          src={hero_banner}
          alt=""
          className="w-full mask-[linear-gradient(to_right,transparent,black_75%)]"
        />
        <div className="absolute w-full pl-[6%] bottom-0">
          <img src={hero_title} alt="" className="w-[90%] max-w-[420px] mb-4" />
          <p className="max-w-[700px] text-[17px] mb-4">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="flex gap-2.5 mb-[50px] ">
            <button
              className={
                button_for_home + "bg-white text-black hover:bg-[#ffffffbf]"
              }
            >
              <img src={play_icon} alt="" className="w-[25px]" />
              Play
            </button>
            <button
              className={
                button_for_home + " bg-[#6d6d6eb3] hover:bg-[#6d6d6e66]"
              }
            >
              <img src={btn_info} alt="" className="w-[25px]" />
              More Info
            </button>
          </div>
          <TitleCard category={"now_playing"} />
        </div>
      </div>

      <div className="pl-[6%]">
        <TitleCard title={"Only on Netflix"} category={"popular"} />
        <TitleCard title={"Upcoming"} category={"upcoming"} />
        <TitleCard title={"Top Pics for You"} category={"top_rated"} />
        <TitleCard title={"BlockBustor Movies"} category={"now_playing"} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
