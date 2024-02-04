import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return ( 
   <div className="bg-gradient-to-tr from-slate-900 to-gray-400  ">
    <form>
    <div className="shadow-lg ">
      <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-[740px] w-auto ml-[500px] " />
      <div className="text-white   ">
        <p
          className="m-11 p-11 absolute top-[180px] uppercase text-3xl
        //  bg-gray-800/60
        bg-gradient-to-tl from-slate-900/50 to-gray-400/50
          flex flex-col rounded-3xl w-96 shadow-2xl shadow-white"
        >
          the brands For
          <br />
          <span className="font-bold ">your trend</span>
          <Link to={"/Product"}>
            <button className=" my-5 border rounded-md text-2xl p-1 w-[180px]">
              Discover More
            </button>
          </Link>
        </p>
      </div>
    </div>
    </form>
   </div>
  );
};

export default Home;
