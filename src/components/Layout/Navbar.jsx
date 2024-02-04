import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiHandbagSimpleFill } from "react-icons/pi";
const Navbar = () => {
  const cartItems = useSelector((store) => store.ttb.items);
  return (
    <div>
      <div
        className="w-full flex items-center justify-between py-3 px-11 absolute shadow-md
                    bg-gradient-to-bl from-slate-900/90 to-gray-400/90 h-24 "
      >
        <Link to={"/"}>
          <img  src="https://cdn.dribbble.com/users/4843167/screenshots/14540242/media/a3147b494cb28f4a874ebebea0370844.jpg" alt="" className="ml-8 w-20 rounded-full h-20 cursor-pointer border-r" />
        </Link>
        <Link to={"/"}>
        <h1 className="text-stone-50 text-xl font-bold ml-[80px]">Home</h1>
        </Link>
        <Link to={"/Product"}>
        <h1 className="text-stone-50 text-xl font-bold ">Products</h1>
        </Link>
        
        
        <div className="flex  items-center gap-1">
          <Link to={"/cart"}>
            <PiHandbagSimpleFill className="text-white cursor-pointer text-2xl" />
          </Link>
          <p className="text-sm text-white font-bold">{cartItems.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
