import styled from "styled-components";
import {
  PageHero,
  Filters,
  ProductsList,
  Sort,
  FiltersSidebar,
} from "../components";

const Products = () => {
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <div className="filters">
            <Filters />
          </div>
          <FiltersSidebar />
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

const Wrapper = styled.section`
  .products {
    position: relative;
    display: grid;
    margin: 4rem auto;
  }
  .filters {
    display: none;
  }

  @media (min-width: 992px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
    .filters {
      display: grid;
    }
  }
`;

export default Products;
