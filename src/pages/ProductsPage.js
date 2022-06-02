import styled from "styled-components";
import { PageHero, Filters, ProductsList, Sort } from "../components";

const Products = () => {
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductsList />
          </div>
          {/* <div className="small">
            <Filters />
            <Sort />
          </div> */}
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default Products;
