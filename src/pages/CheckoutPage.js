import styled from "styled-components";
import { PageHero } from "../components";

const Checkout = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page"></Wrapper>
    </main>
  );
};

const Wrapper = styled.div``;

export default Checkout;
