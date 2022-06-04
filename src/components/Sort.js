import { useFilterContext } from "../context/filter-context";
import { BsFillGridFill, BsList, BsFilter } from "react-icons/bs";
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
      <div className="container">
        <div className="line"></div>
        <div className="all-btn-container">
          <div className="filter">
            <button type="button">
              <BsFilter />
            </button>
            <span>Filter</span>
          </div>
          <p className="small">{products.length} products found</p>
          <div className="view-btn-container">
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
        </div>
        <p className="large">{products.length} products found</p>
        <div className="line"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // .large-screen {
  //   display: none;
  // }

  .container {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    margin-bottom: 2rem;
  }

  .all-btn-container {
    display: flex;
    align-items: center;
    justify-content: space between;
    padding: 0.5rem 3rem;
  }

  .large {
    display: none;
  }

  .filter {
    display: flex;
    align-items: center;
    button {
      background: transparent;
      border: none;
      font-size: 1.5rem;
      margin-right: 0.25rem;
      cursor: pointer;
    }
  }

  p {
    width: auto;
    margin: 0 auto;
    font-size: 0.75rem;
  }

  .line {
    height: 1px;
    width: auto;
    background-color: var(--clr-grey-1);
  }

  @media (min-width: 600px) {
    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.15rem;
    }
  }

  @media (min-width: 992px) {
    .container {
      display: grid;
      grid-template-columns: 1fr auto auto 1fr;
      align-items: center;
      margin-bottom: 2rem;
      column-gap: 2rem;
    }
    .small {
      display: none;
    }
    .large {
      display: grid;
    }

    .filter {
      display: none;
    }

    .all-btn-container {
      padding: 0;
    }
  }

  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .view-btn-container {
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
`;

export default Sort;
