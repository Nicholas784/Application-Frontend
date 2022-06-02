import { Outlet } from "react-router-dom";
import Promobar from "./Promobar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const SharedLayout = () => {
  return (
    <>
      <Promobar />
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
