import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import React from "react";
import { NavProvider } from "./context/nav-context";
import { ProductsProvider } from "./context/products-context";

ReactDOM.render(
  <NavProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </NavProvider>,

  document.getElementById("root")
);
