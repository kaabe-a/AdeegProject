import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { vegetables } from "../components/product";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch(
      "https://adeeg-oragnic.onrender.com/api/product/report/list_new_products"
    )
      .then((res) => res.json())
      .then((data) => setProductData(data["data"]));
  }, []);

  // console.log(productData)
  // console.log(vegetables.length)
  
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < productData.length + 1; i++) {
      // console.log(i)
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removerFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = { cartItems, addToCart, removerFromCart };
  // console.log(cartItems,"cart items");
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
