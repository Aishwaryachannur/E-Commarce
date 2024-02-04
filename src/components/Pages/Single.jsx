import React from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../utils/useProduct";
import ShimmerPitems from "../utils/ShimmerPitems";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Single = () => {
  const dispath = useDispatch();
  const { id } = useParams();
  const selected = useProducts(id);

  function HandleAdd(items) {
    dispath(addItem(items));
  }

  return selected.length === 0 ? (
    <ShimmerPitems />
  ) : (
    <div className="flex justify-center  font-sans">
      <div className="mt-[100px] p-12 flex justify-center overflow-hidden ">
        <div className=" mt-12">
        <img src={selected.image} alt="" className="h-60" />
        </div>
        <div className="ml-11 mt-11">
          <p className="text-3xl font-bold uppercase max-w-lg text-gray-700">
            {selected.title}
          </p>
          <p className="text-md font-bold uppercase my-3 text-gray-500">
            {selected.category}
          </p>
          <p className="text-xs capitalize max-w-md text-gray-700 text-justify">
            {selected.description}
          </p>
          <p className="text-lg uppercase my-3 font-bold text-gray-800">
            {"$" + selected.price}
          </p>

          <div className="flex gap-2">
            <Link to={"/"}>
              <button className="bg-gray-800  p-1 text-white w-40 h-10 font-semibold hover:text-gray-800 hover:bg-white hover:border hover:border-gray-800 ">
                Home
              </button>
            </Link>
            <button
              className="bg-gray-800  p-1 text-white w-40 font-semibold hover:text-gray-800 hover:bg-white hover:border hover:border-gray-800  "
              onClick={() => HandleAdd(selected)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
