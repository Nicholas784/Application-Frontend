import styled from "styled-components";
import { useCartContext } from "../context/cart-context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const Cart = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            shop
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="pg-20">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    padding: 2rem 0;
    h2 {
      text-transform: none;
    }
  }
`;

export default Cart;
