import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <Wrapper className="scroll">
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id}>
            <Link to={`/products/${id}`}>
              <img src={image} alt={name} />
            </Link>
            <div>
              <h3>{name}</h3>
              <h4 className="price">{formatPrice(price)}</h4>
              <p>{description.substring(0, 200)}...</p>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  img {
    height: 300px;
    border-radius: var(--radius);
  }
  article {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    align-items: center;
  }
  h3 {
    letter-spacing: 0;
    color: var(--clr-grey-1);
  }
  h4 {
    letter-spacing: 0;
    color: var(--clr-primary);
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    // overflow-x: scroll;
  }

  @media (min-width: 600px) {
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1.25rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 700px) {
    img {
      height: 400px;
      widht: 350px;
      object-fit: cover;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    img {
      height: 350px;
      width: 300px;
      object-fit: cover;
    }
  }

  @media (min-width: 992px) {
    img {
      height: 450px;
    }
    h4 {
      font-size: 1.5rem;
    }
  }
`;

export default ListView;
