import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  FILTER_OPEN,
  FILTER_CLOSE,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, size, price } = state.filters;
    let tempProducts = [...all_products];
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().includes(text);
      });
    }

    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }

    if (size !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.size.find((s) => s === size);
      });
    }

    tempProducts = tempProducts.filter((product) => product.price <= price);

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        size: "all",
        price: state.filters.max_price,
      },
    };
  }
  if (action.type === FILTER_OPEN) {
    console.log("opening");
    return { ...state, isFilterOpen: true };
  }

  if (action.type === FILTER_CLOSE) {
    console.log("closing");
    return { ...state, isFilterOpen: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
