import React, { useState, useContext, useReducer } from "react";
import { sublinks } from "../data";
import reducer from "../reducers/nav-reducer";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";

const initialState = {
  isSidebarOpen: false,
};

const NavContext = React.createContext();

export const NavProvider = ({ children }) => {
  const [isPromobarOpen, setIsPromobarOpen] = useState(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const closePromobar = () => {
    setIsPromobarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <NavContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        closePromobar,
        isPromobarOpen,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  return useContext(NavContext);
};
