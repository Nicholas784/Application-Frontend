import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter-context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: { text, category, size, min_price: min, price, max_price: max },
    updateFilters,
    resetFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const sizes = getUniqueValues(all_products, "size");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end search input */}
          {/* categories */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="category"
                    type="button"
                    className={`${category === c ? "active" : null}`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories */}
          {/* package */}
          <div className="form-control">
            <h5>package</h5>
            <div className="packages">
              {sizes.map((s, index) => {
                return (
                  <div className="btn-container" key={index}>
                    <button
                      name="size"
                      className={`${
                        size === s ? "size-btn active" : "size-btn"
                      }`}
                      data-package={s}
                      onClick={updateFilters}
                    >
                      {size === s ? <FaCheck /> : null}
                    </button>
                    <span>{s}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* end of package */}
          {/* price */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min}
              max={max}
              value={price}
            />
          </div>
          {/* end of price */}
        </form>
        <button type="button" className="reset-btn" onClick={resetFilters}>
          reset filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      text-transform: capitalize;
      font-size: 1rem;
      font-family: var(--ff-primary);
      color: var(--clr-grey-1);
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .packages {
    display: grid;
    align-items: center;
  }

  .btn-container {
    display: flex;
    span {
      text-transform: capitalize;
    }
  }
  .size-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    // border-radius: 50%;
    background: var(--clr-white);
    margin-right: 0.5rem;
    border: 1px solid var(--clr-grey-1);
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .size-btn.active {
    background: var(--clr-primary);
  }
  .active {
    opacity: 1;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .reset-btn {
    background: var(--clr-red-dark);
    letter-spacing: 0.15rem;
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }

  .content {
    padding-top: 2rem;
  }

  @media (min-width: 992px) {
    .content {
      position: sticky;
      top: 4.5rem;
      padding-top: 0;
    }
  }
`;

export default Filters;
