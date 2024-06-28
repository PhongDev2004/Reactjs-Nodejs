import { Fragment } from "react/jsx-runtime";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
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

export default LayoutAdmin;
