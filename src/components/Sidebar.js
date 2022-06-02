import styled from "styled-components";
import logo from "../images/Logo.jpeg";
import { Link } from "react-router-dom";
import { useNavContext } from "../context/nav-context";
import { links } from "../utils/constants";
import { FaTimes, FaUserPlus } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, isPromobarOpen } = useNavContext();
  const isOpen = false;
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar " : "sidebar"} ${
          isPromobarOpen ? "" : "move-sidebar"
        }`}
      >
        <div className="sidebar-header">
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url} className="nav-link" onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="login-btn-container">
          <button type="button" className="login-btn">
            <Link to="/login" className="login" onClick={closeSidebar}>
              <span>Login</span>
              <FaUserPlus />
            </Link>
          </button>
        </div>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .sidebar-header {
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 0 1rem;
  }

  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: #c80000;
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }

  .close-btn:hover {
    color: #ff0000;
  }

  .nav-link {
    display: block;
    padding: 1rem 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: var(--clr-grey-1);
    cursor: pointer;
    font-size: 1.5rem;
    transition: var(--transition);
  }

  .nav-link:hover {
    color: var(--clr-white);
    background: var(--clr-primary);
    padding-left: 2.25rem;
  }

  .login-btn-container {
    display: flex;
    justify-content: center;
  }

  .login-btn {
    background: transparent;
    border: transparent;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 1rem 0;
    transition: var(--transition);
  }

  .login {
    display: flex;
    align-items: center;
    color: var(--clr-grey-1);
  }

  .login:hover {
    color: var(--clr-grey-5);
  }

  .sidebar {
    position: fixed;
    top: 3rem;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-grey-10);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }

  .move-sidebar {
    top: 0;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }

  @media screen and (min-width: 750px) {
    .sidebar {
      width: 45vw;
    }
  }
`;

export default Sidebar;
