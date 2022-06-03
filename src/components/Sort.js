import { useFilterContext } from "../context/filter-context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="line"></div>
      <div className="btn-container">
        <button
          type="button"
          className={`${grid_view ? "active" : null}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`${!grid_view ? "active" : null}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <div className="line"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto 1fr;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  .line {
    height: 1px;
    width: auto;
    background-color: var(--clr-grey-1);
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      display: grid;
      width: 50px;
      margin: 0 auto;
    }
    p {
      width: auto;
      margin: 0 auto;
    }
    .line {
      height: 1px;
      width: auto;
      background-color: var(--clr-grey-1);
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-grey-1);
      color: var(--clr-grey-1);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-primary);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;
