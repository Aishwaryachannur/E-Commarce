import React from "react";
import Total from "./Total";
import { AiOutlineClose } from "react-icons/ai";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, decreaseQuantity } from "../utils/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((store) => store.ttb.items);
  const dispatch = useDispatch();
  function handleAdd(items) {
    dispatch(addItem(items));
  }
  function handleRemove(items) {
    dispatch(removeItem(items));
  }
  function decreaseQty(items) {
    dispatch(decreaseQuantity(items));
  }
  return (
    <div className="mt-[100px] flex justify-center">
      <div
        className="w-96  border rounded-xl   flex justify-center 
                      flex-col items-center py-3 gap-5"
      >
        {cartItems.map((cart) => (
          <div key={cart.id} className="flex border">
            <div className="flex items-center ">
              <div
                className="h-32 w-24 items-center flex justify-center  
                              border-2 shadow-md"
              >
                <img src={cart.image} className="w-14 h-18 p-1" />
              </div>
              <div className="text-center">
                <div className="relative bottom-6">
                  <p className="font-semibold text-[10px] mt-2 w-48 pt-2">
                    {cart.title}
                  </p>
                  <p className="font-semibold text-xs pt-1">
                    Price :
                    <span className="font-bold ">
                      {"$ " + cart.price.toFixed(2)}
                    </span>
                  </p>
                </div>
                <div className="flex justify-center  gap-1  ">
                  <GrFormSubtract
                    onClick={() => decreaseQty(cart)}
                    className="cursor-pointer border rounded-full h-7 w-7 bg-gray-300 p-1  shadow-lg "
                  />
                  <input
                    type="text"
                    value={cart.quantity}
                    className="w-12 text-center  border-2 "
                  />
                  <GrFormAdd
                    onClick={() => handleAdd(cart)}
                    className="cursor-pointer border  h-7 w-7 p-1 rounded-full  bg-gray-300 shadow-lg"
                  />
                </div>
              </div>
            </div>
            <AiOutlineClose
              onClick={() => handleRemove(cart)}
              className=" relative bottom-3 left-3  cursor-pointer border  h-7 w-7 p-1 rounded-full  bg-gray-200 shadow-lg"
            />
          </div>
        ))}
      </div>
      <div className="ml-11 border p-5 border-gray-600 h-64 rounded-lg shadow-xl">
        <Total />
      </div>{" "}
    </div>
  );
};

export default CartPage;
