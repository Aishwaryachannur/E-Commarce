import { useEffect, useState } from "react";

const useProducts = (id) => {
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    getSingleProduct();
  },[]);
  async function getSingleProduct() {
    const data = await fetch("https://fakestoreapi.com/products/" + id);
    const json = await data.json();
    json.quantity=1;
    console.log(json);
    setSelected(json);
  }
  return selected;
};

export default useProducts;
