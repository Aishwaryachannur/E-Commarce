import React from "react";
import { BsSearch } from "react-icons/bs";

const ShimmerProducts = () => {
  return (
    <div className="mt-[100px] flex flex-col items-center p-2 ">
      <div className="flex">
        <input
          className="p-1 border w-72 border-gray-400 rounded-l-full 
              text-center outline-gray-400 active:pl-5"
          type="text"
          placeholder="Search"
        />
        <BsSearch
          className="border  border-gray-400 rounded-r-full 
                    text-md h-9 w-9 p-2  cursor-pointer text-gray-400"
        />
      </div>
      <div className="flex flex-wrap mt-[20px]">
        <div className="h-[300px] w-[200px] mt-11 m-5 flex flex-col bg-gray-200 rounded-md "></div>
        <div className="h-[300px] w-[200px] mt-11 m-5 flex flex-col bg-gray-200 rounded-md "></div>
        <div className="h-[300px] w-[200px] mt-11 m-5 flex flex-col bg-gray-200 rounded-md "></div>
        <div className="h-[300px] w-[200px] mt-11 m-5 flex flex-col bg-gray-200 rounded-md "></div>
        <div className="h-[300px] w-[200px] mt-11 m-5 flex flex-col bg-gray-200 rounded-md "></div>
        <div className="h-[300px] w-[200px] mt-11 m-5 flex flex-col bg-gray-200 rounded-md "></div>
        <div className="h-[300px] w-[200px] mt-11 m-5 flex flex-col bg-gray-200 rounded-md "></div>
        <div className="h-[300px] w-[200px] mt-11 m-5 flex flex-col bg-gray-200 rounded-md "></div>
        <div className="h-[300px] w-[200px] mt-11 m-5 flex flex-col bg-gray-200 rounded-md "></div>
        <div className="h-[300px] w-[200px] mt-11 m-5 flex flex-col bg-gray-200 rounded-md "></div>
        <div className="h-[300px] w-[200px] mt-11 m-5 flex flex-col bg-gray-200 rounded-md "></div>
        <div className="h-[300px] w-[200px] mt-11 m-5 flex flex-col bg-gray-200 rounded-md "></div>
        <div className="h-[300px] w-[200px] mt-11 m-5 flex flex-col bg-gray-200 rounded-md "></div>
        <div className="h-[300px] w-[200px] mt-11 m-5 flex flex-col bg-gray-200 rounded-md "></div>
        <div className="h-[300px] w-[200px] mt-11 m-5 flex flex-col bg-gray-200 rounded-md "></div>
      </div>
    </div>
  );
};

export default ShimmerProducts;
