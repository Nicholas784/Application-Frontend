import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className="container">
        <Link to={`/products/${id}`} className="link">
          <img src={image} alt={name} />
        </Link>
        <footer>
          <h4>{name}</h4>
          <p>{formatPrice(price)}</p>
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    display: grid;
    justify-content: center;
    // position: relative;
    border-radius: var(--radius);
  }
  img {
    height: 300px;
    border-radius: var(--radius);
  }
  h4 {
    letter-spacing: 0;
    margin-bottom: 0;
  }

  p {
    font-size: 1rem;
  }

  @media (min-width: 650px) {
    img {
      width: 250px;
      object-fit: cover;
    }
  @media (min-width: 850px) {
    img {
      height: 400px;
      object-fit: cover;
    }

  }

  footer {
    display: grid;
    justify-content: space-between;
    align-items: center;
  }

  
  
`;

export default Product;
