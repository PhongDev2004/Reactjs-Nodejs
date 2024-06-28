import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CategoryIcon from "@mui/icons-material/Category";
import AddHomeIcon from "@mui/icons-material/AddHome";

const SidebarAdmin = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 md:w-64 h-screen pt-20 pb-40 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul
          className="space-y-2 font-medium"
          id="default-tab"
          data-tabs-toggle="#product-data-view"
          role="tablist"
        >
          <li role="presentation">
            <button
              type="button"
              className="flex w-full items-center justify-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              id="list-product-tab"
              data-tabs-target="#product-list"
              role="tab"
              aria-controls="product-list"
              aria-selected="false"
            >
              <ShopTwoIcon className="text-lg" />
              <span className="ms-3 text-sm">Products</span>
            </button>
          </li>
          <li role="presentation">
            <button
              className="flex w-full items-center justify-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              id="add-product-tab"
              data-tabs-target="#add-product"
              type="button"
              role="tab"
              aria-controls="add-product"
              aria-selected="false"
            >
              <AddBoxIcon className="text-lg" />
              <span className="ms-3 text-sm">Add Products</span>
            </button>
          </li>
          <li role="presentation">
            <button
              className="flex w-full items-center justify-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              id="list-category-tab"
              data-tabs-target="#list-category"
              type="button"
              role="tab"
              aria-controls="list-category"
              aria-selected="false"
            >
              <CategoryIcon className="text-lg" />
              <span className="ms-3 text-sm">Categories</span>
            </button>
          </li>
          <li role="presentation">
            <button
              className="flex w-full items-center justify-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              id="add-category-tab"
              data-tabs-target="#add-category-view-tab"
              type="button"
              role="tab"
              aria-controls="add-category-view-tab"
              aria-selected="false"
            >
              <AddHomeIcon className="text-lg" />
              <span className="ms-3 text-sm">Add Category</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarAdmin;
