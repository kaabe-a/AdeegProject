import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

export const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://adeeg-oragnic.onrender.com/api/product/report/list_new_products"
      );
      const data = await response.json();
      setProducts(data["data"]);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{products}}>
      {props.children}
    </ProductContext.Provider>
  );
};
