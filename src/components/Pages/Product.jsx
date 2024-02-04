import React, { useEffect, useState } from "react";

function Product() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    getProductData();
  }, []);
  async function getProductData() {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setItem(json);
  }
  return (
    <div className="flex flex-wrap  justify-center gap-8 ">
      {console.log(item)}
      {item.map((list) => {
        return (
          <div className="flex w-96 h-48 border justify-between shadow-lg rounded-lg gap-2  items-center ">
            <img src={list.image} alt={list.title} className="w-32 h-36" />
            <div className="flex flex-col justify-between">
              <h1 className="w-40 font-bold">{list.title.slice(0, 35)}</h1>
              <h1 className="w-40 font-semibold">{"$"+list.price}</h1>
              <div className="flex gap-2">
                <button className="border  py-1 rounded-lg px-4 bg-gray-400">Add</button>
                <button className="border py-1 rounded-lg px-4 bg-gray-400">view</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
