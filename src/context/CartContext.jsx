import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount * currentItem.qty;
    },0);
    setTotal(total)
  });

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.qty;
      }, 0);
      setQty(amount);
    }
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, qty: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, qty: cartItem.qty + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  const increaseQty = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };
  const decreaseQty = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, qty: cartItem.qty - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.qty < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        removeFromCart,
        clearCart,
        increaseQty,
        decreaseQty,
        qty,
        total,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
