import styled from "styled-components";
import { useFilterContext } from "../context/filter-context";
import { FaTimes } from "react-icons/fa";
import { Filters } from "../components";

const FilterSidebar = () => {
  const { isFilterOpen, closeFilters } = useFilterContext();

  return (
    <SidebarContainer>
      <div className={`${isFilterOpen ? "show" : "hide"}`}>
        <aside
          className={`${isFilterOpen ? "sidebar show-sidebar" : "sidebar"}`}
        >
          <div className="sidebar-header">
            <button className="close-btn" onClick={closeFilters}>
              <FaTimes />
            </button>
          </div>
          <Filters />
        </aside>
      </div>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .show {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: grid;
    transform: translate(0);
    z-index: 3;
  }

  .sidebar {
    position: relative;
    height: 100%;
    width: 40vw;
    background: var(--clr-white);
    padding: 0 2rem;
    transition: var(--transition);
    transform: translate(-100%);
  }

  .show-sidebar {
    transform: translate(0);
  }

  .hide {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: grid;
    // transition: var(--transition);
    z-index: 3;
    transform: translate(-100%);
  }

  .sidebar-header {
    position: absolute;
    display: flex;
    justify-content: right;
    align-items: center;
    right: -35px;
    button {
      cursor: pointer;
    }
  }

  .close-btn {
    font-size: 1.75rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-white);
    right: 0;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default FilterSidebar;
