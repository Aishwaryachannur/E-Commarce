import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook, AiFillInstagram } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-tr from-slate-900 to-gray-400   
    text-white h-[200px] flex  flex-col justify-center items-center mt-9">
      <div className=" flex gap-5 justify-center   ">
        <p className="cursor-pointer">Cookie Settings </p>
        <p>|</p>
        <p className="cursor-pointer">Privacy Policy </p>
        <p>|</p>
        <p className="cursor-pointer">Terms and Conditions </p>
        <p>|</p>
        <p className="cursor-pointer">Cookies</p>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <p>Follow us on </p>
        <a href="https://www.instagram.com">
          <BsInstagram className="text-xl cursor-pointer " />
        </a>
        <AiOutlineFacebook className="text-3xl cursor-pointer " />
        <FiYoutube className="h-9 text-3xl cursor-pointer " />
      </div>
    </div>
  );
};

export default Footer;
