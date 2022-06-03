import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  Contact,
  Login,
} from "./pages";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
