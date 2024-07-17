import { Fragment } from 'react/jsx-runtime';
import { Outlet } from 'react-router-dom';
import NavbarAdmin from '../admin/NavbarAdmin';
import SidebarAdmin from '../admin/SidebarAdmin';
import { useState } from 'react';

const LayoutAdmin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <NavbarAdmin toggleSidebar={toggleSidebar} />
      <SidebarAdmin isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Fragment>
        <div className="pb-10 pt-10">
          <Outlet />
        </div>
      </Fragment>
    </>
  );
};

export default LayoutAdmin;
