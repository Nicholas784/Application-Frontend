import styled from "styled-components";

const ProductImages = ({ image }) => {
  return (
    <Wrapper>
      <img src={image} alt="Drink Image" className="image" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .image {
    height: 600px;
    // width: 500px;
  }

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }

  @media (max-width: 576px) {
    .image {
      height: 300px;
    }
  }

  @media (max-width: 992px) {
    .image {
      height: 500px;
    }
  }
`;

export default ProductImages;
