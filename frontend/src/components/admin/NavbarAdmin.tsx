import AdbIcon from "@mui/icons-material/Adb";

const NavbarAdmin = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <i className="bi bi-list text-xl w-6 h-6"></i>
            </button>
            <a
              href="/admin"
              className="md:flex items-center space-x-3 rtl:space-x-reverse hidden"
            >
              <AdbIcon
                className="h-8 text-white"
                sx={{ display: { xs: "flex" }, mr: 1 }}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                BEEMELY
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
