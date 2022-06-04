import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper className="scroll">
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  // overflow-x: scroll;
  .products-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    .products-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem 2rem;
    }
  }
`;

export default GridView;
