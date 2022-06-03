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
      </div>
      <footer>
        <h4>{name}</h4>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  h4 {
    letter-spacing: 0;
    margin-bottom: 0;
  }
  p {
    color: var(--clr-primary);
  }
  img {
    border-radius: var(--radius);
  }
  img:hover {
    cursor: pointer;
  }
  @media (min-width: 900px) {
    h4 {
      font-size: 1.25rem;
    }
  }
`;

export default Product;
