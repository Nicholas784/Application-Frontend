import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import React from "react";
import { NavProvider } from "./context/nav-context";
import { ProductsProvider } from "./context/products-context";
import { FilterProvider } from "./context/filter-context";
import { CartProvider } from "./context/cart-context";

ReactDOM.render(
  <NavProvider>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </NavProvider>,

  document.getElementById("root")
);
