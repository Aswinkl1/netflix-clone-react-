import React from "react";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="py-8 px-[6%] max-w-[1000px] my-0 mx-auto">
      <div className="flex gap-4 my-10 mx-0 [&>img]:w-8 cursor-pointer">
        <img src={youtube_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>

      <ul className="grid grid-cols-4 gap-4 mb-8 ">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className="text-gray-500 text-sm">© 1997–2023 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
