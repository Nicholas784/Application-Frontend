import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 400px;
  }
  .products-container {
    display: grid;
    // grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1.5rem;
  }

  @media (min-width: 680px) {
    img {
      height: 300px;
    }
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 900px) {
    img {
      height: 400px;
      border-radius: var(--radius);
    }
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
