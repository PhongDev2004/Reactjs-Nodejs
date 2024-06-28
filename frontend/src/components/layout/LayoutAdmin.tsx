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
        <div className="p-4 md:ml-64 pb-20 pt-20">
          <Outlet />
        </div>
      </Fragment>
    </>
  );
};

export default LayoutAdmin;
