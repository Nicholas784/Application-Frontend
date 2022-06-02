import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart-context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const { id, inventory: stock, size: sizes } = product;
  const [mainSize, setMainSize] = useState(sizes[0]);
  const [amount, setAmount] = useState(1.0);

  const increase = () => {
    setAmount((oldAmount) => {
      if (mainSize === sizes[0]) {
        let tempAmount = oldAmount + 0.5;
        if (tempAmount > stock) {
          tempAmount = stock;
        }
        return tempAmount;
      } else {
        let tempAmount = oldAmount + 1;
        if (tempAmount > stock) {
          tempAmount = stock;
        }
        return tempAmount;
      }
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      if (mainSize === sizes[0]) {
        let tempAmount = oldAmount - 0.5;
        if (tempAmount < 1) {
          tempAmount = 1;
        }
        return tempAmount;
      } else {
        let tempAmount = oldAmount - 1;
        if (tempAmount < 1) {
          tempAmount = 1;
        }
        return tempAmount;
      }
    });
  };

  return (
    <Wrapper>
      <div className="sizes">
        <span> quantity : </span>
        <div>
          {sizes.map((size, index) => {
            return (
              <div className="select" key={index}>
                <span>{size}</span>
                <button
                  className={`${
                    mainSize === size ? "size-btn active" : "size-btn"
                  }`}
                  onClick={() => {
                    setMainSize(size);
                    setAmount(1);
                  }}
                >
                  {mainSize === size ? <FaCheck /> : null}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link to="/cart" className="btn">
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .sizes {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }

  .select {
    display: flex;
    align-items: center;
    color: var(--clr-grey-1);
    span {
      font-weight: 400;
    }
  }

  .size-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--clr-white);
    margin-right: 0.75rem;
    margin-left: 0.25rem;
    border: 1px solid #222;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }

  .active {
    background: var(--clr-primary-3);
  }

  .btn {
    letter-spacing: 0;
    text-transform: capitalize;
    border-radius: var(--radius);
  }

  // .btn-container {
  //   display: grid;
  // }
`;

export default AddToCart;
