import { Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "../admin/NavbarAdmin";
import SidebarAdmin from "../admin/SidebarAdmin";

const LayoutAdmin = () => {
  return (
    <>
      <NavbarAdmin />
      <SidebarAdmin />
      <Fragment>
        <Outlet />
      </Fragment>
    </>
  );
};

export default LayoutAdmin;
