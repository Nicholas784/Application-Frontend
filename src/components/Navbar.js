import styled from "styled-components";
import logo from "../images/Logo.jpeg";
import { FaBars, FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { useNavContext } from "../context/nav-context";
import { useCartContext } from "../context/cart-context";

const Navbar = () => {
  const { openSidebar } = useNavContext();
  const { total_items } = useCartContext();
  return (
    <NavContainer className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
          <Link to="/">
            <img src={logo} alt="SVBL" />
          </Link>
          <Link to="/cart" className="shopping-cart-1">
            <span className="cart-container">
              <FaShoppingCart />
              <span className="cart-value">{total_items}</span>
            </span>
          </Link>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url} className="nav-link">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to="/cart" className="shopping-cart">
          <span className="cart-container">
            <FaShoppingCart />
            <span className="cart-value">12</span>
          </span>
        </Link>
        <Link to="/login" className="login-btn">
          Login <FaUserPlus />
        </Link>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  height: 3.5rem;
  width: 100%;
  align-items: center;
  background: var(--clr-white);
  box-shadow: var(--dark-shadow);
  z-index: 2;

  .nav-center {
    width: 100%;
    height: 100%;
    max-width: 1170px;
    margin: 0 auto;
    padding: 0.25rem 0;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    font-size: 1.5rem;
    color: var(--clr-primary);
    cursor: pointer;
    transition: var(--transition);
  }

  .nav-toggle:hover {
    transform: scale(1.2);
  }

  .shopping-cart-1 {
    display: flex;
    background: transparent;
    border: transparent;
    color: var(--clr-primary);
    cursor: pointer;
    font-size: 1.25rem;
    padding: 0 0.5rem;
    transition: var(--transition);
  }

  .shopping-cart-1:hover {
    transform: scale(1.2);
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
  }

  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-secondary);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-grey-1);
    padding: 10px;
  }

  .nav-link {
    display: block;
    padding: 1rem 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: var(--clr-grey-1);
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 700;
    transition: var(--transition);
  }

  .nav-link:hover {
    color: var(--clr-white);
    background: var(--clr-primary);
    padding-left: 2.25rem;
  }

  .nav-links {
    display: none;
  }

  .shopping-cart {
    display: none;
  }

  .login-btn {
    display: none;
  }

  @media screen and (min-width: 992px) {
    .navbar {
      padding: 0 2rem;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding: 0 2rem;
    }

    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    .nav-links {
      height: auto;
      width: auto;
      display: flex;
      margin: 0 auto;
    }

    .nav-link {
      padding: 0 0;
      // margin-right: 3rem;
      margin: 0 2rem;
      text-transform: capitalize;
      font-size: 1rem;
    }

    .nav-link:hover {
      padding: 0;
      color: var(--clr-primary);
      background: transparent;
    }

    .nav-header {
      padding: 0 0;
    }

    .shopping-cart {
      display: flex;
      background: transparent;
      border: transparent;
      color: var(--clr-primary);
      cursor: pointer;
      font-size: 1.5rem;
      padding: 0 0.5rem;
      transition: var(--transition);
    }

    .shopping-cart:hover {
      transform: scale(1.2);
    }

    .shopping-cart-1 {
      display: none;
    }

    .login-btn {
      display: flex;
      align-items: center;
      background: transparent;
      border: transparent;
      color: var(--clr-primary);
      cursor: pointer;
      font-size: 1.5rem;
      padding: 0 0.5rem;
      margin-left: 1rem;
      transition: var(--transition);
    }

    .login-btn:hover {
      transform: scale(1.2);
    }
  }
`;

export default Navbar;
