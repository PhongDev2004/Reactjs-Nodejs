import { Fragment } from "react/jsx-runtime";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Fragment>
        <Outlet />
      </Fragment>
      <Footer />
    </>
  );
};

export default Layout;
