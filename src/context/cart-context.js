import React, { useState, useContext, useReducer } from "react";
import { sublinks } from "../data";
import reducer from "../reducers/nav-reducer";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";

const initialState = {};

const CartContext = React.createContext();

export const NavProvider = ({ children }) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
