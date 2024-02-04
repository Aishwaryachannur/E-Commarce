import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const cartItems = useSelector((store) => store.ttb.items);

  let totalQuantity = 0;
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className="w-72 flex flex-col gap-3 justify-center">
      <p className="text-center font-bold text-lg mb-11">Order Summery</p>
      <div className="flex justify-between">
        <span className="font-semibold text-sm">Total Quantity </span>
        <span className="font-bold text-sm">{totalQuantity}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold text-sm">Total Price</span>
        <span className="font-bold text-sm">{"$" + totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-center text-xs items-center text-white font-bold">
        <button className="h-8 bg-blue-600 px-3 uppercase text-center rounded-md shadow-md">
          go to checkout
        </button>
      </div>
    </div>
  );
};

export default Total;
