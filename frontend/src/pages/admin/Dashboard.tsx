import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import { Link } from "react-router-dom";
import Button from "src/components/ui/Button";
import { IProduct } from "src/interfaces/Product";
import { useEffect, useState } from "react";
import { getProducts, handleDeleteProduct } from "src/service/product";
import Loading from "src/components/ui/Loading";
import Pagination from "@mui/material/Pagination";

const Dashboard = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 10;

  const onDelete = async (id: string) => {
    (async () => {
      const isConfirm = window.confirm("Are you sure?");
      if (isConfirm) {
        await handleDeleteProduct(id);
        setProducts(products.filter((item) => item._id !== id && item));
      }
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getProducts();
        setProducts(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const startIndex = (page - 1) * itemsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(products.length / itemsPerPage);

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
      <Loading isShow={loading} />
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
                  brand
                </th>
                <th scope="col" className="px-6 py-3">
                  numReviews
                </th>
                <th scope="col" className="px-6 py-3">
                  description
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody id="table-product-list">
              {visibleProducts.map((product) => (
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center space-x-3 w-[200px] md:w-[400px]"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-md w-8 h-8"
                    />
                    <p className="line-clamp-1">{product.name}</p>
                  </td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4">{product.countInStock}</td>
                  <td className="px-6 py-4">{product.brand}</td>
                  <td className="px-6 py-4">{product.numReviews}</td>
                  <td className="px-6 py-4 truncate-3">
                    {product.description}
                  </td>
                  <td className="px-6 py-4 flex flex-nowrap space-x-4">
                    <Link to={`/admin/product-edit/${product._id}`}>
                      <button
                        className="font-medium text-blue-600 dark:text-blue-500"
                        bg-red-500
                      >
                        <EditIcon className="edit-product-btn text-lg w-full" />
                      </button>
                    </Link>

                    <button
                      onClick={() => onDelete(product._id!)}
                      className="font-medium text-red-600 dark:text-red-500"
                    >
                      <DeleteIcon className="delete-product-btn text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        className="mt-4 flex justify-end items-center"
        count={totalPages}
        color="primary"
        page={page}
        onChange={(event, value) => setPage(value)}
      />
    </div>
  );
};

export default Dashboard;
