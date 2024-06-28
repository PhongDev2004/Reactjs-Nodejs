import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import { Link } from "react-router-dom";
import Button from "src/components/ui/Button";

const Dashboard = () => {
  return (
    <div>
      <h3 className="font-bold text-3xl">Admin Dashboard</h3>
      <div className="flex justify-end">
        <Link to="/admin/product-add" className="mb-5">
          <Button
            className="font-extrabold"
            title="Add new product"
            endIcon={<AddIcon />}
          ></Button>
        </Link>
      </div>
      <div
        className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="product-list"
        role="tabpanel"
        aria-labelledby="list-product-tab"
      >
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody id="table-product-list">
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center space-x-3 w-[200px] md:w-[400px]"
                >
                  <img src="image" alt="image" className="rounded-md w-8 h-8" />
                  <p className="line-clamp-1">Product Name</p>
                </td>
                <td className="px-6 py-4">Price</td>
                <td className="px-6 py-4">Stock</td>
                <td className="px-6 py-4 flex flex-nowrap space-x-4">
                  <button
                    className="font-medium text-blue-600 dark:text-blue-500"
                    bg-red-500
                  >
                    <i
                      className="edit-product-btn bi bi-pen text-lg w-full"
                      data-modal-target="edit-product-modal"
                      data-modal-show="edit-product-modal"
                      aria-controls="edit-product-modal"
                    ></i>
                    <EditIcon className="edit-product-btn text-lg w-full" />
                  </button>
                  <button className="font-medium text-red-600 dark:text-red-500">
                    <i className="delete-product-btn bi bi-trash text-lg"></i>
                    <DeleteIcon className="delete-product-btn text-lg" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
