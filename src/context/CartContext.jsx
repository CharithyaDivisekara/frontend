import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, size, quantity) => {
    setCartItems(prev => {
      const existing = prev.find(
        item => item.id === product.id && item.size === size
      );
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item 
        );
      } 
      return [...prev, { ...product, size, quantity }];
    });
  };

  const removeFromCart = (id, size) => {
    setCartItems(prev =>
      prev.filter(item => !(item.id === id && item.size === size))
    );
  };

  const updateQuantity = (id, size, quantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};