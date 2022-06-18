import React, { useState, useContext, useReducer, useEffect } from "react";
import { sublinks } from "../data";
import reducer from "../reducers/cart-reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const checkLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: checkLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 0,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to cart function
  const addToCart = (id, size, amount, product, price) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, size, amount, product, price },
    });
  };
  // remove item
  const removeItem = (id) => {};
  // toggle Amount
  const toggleAmount = (id, value) => {};
  // clear cart
  const clearCart = () => {};

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
