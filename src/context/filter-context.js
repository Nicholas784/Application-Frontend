import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter-reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  FILTER_OPEN,
  FILTER_CLOSE,
} from "../actions";
import { useProductsContext } from "./products-context";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  filters: {
    text: "",
    category: "all",
    size: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
  },
  isFilterOpen: false,
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }

    if (name === "size") {
      value = e.target.dataset.package;
    }

    if (name === "price") {
      value = Number(value);
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const resetFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  const openFilters = () => {
    dispatch({ type: FILTER_OPEN });
  };

  const closeFilters = () => {
    console.log("close");
    dispatch({ type: FILTER_CLOSE });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateFilters,
        resetFilters,
        openFilters,
        closeFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
