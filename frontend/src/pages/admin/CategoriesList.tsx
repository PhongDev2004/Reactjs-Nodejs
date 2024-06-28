import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Button from "src/components/ui/Button";

const CategoriesList = () => {
  return (
    <div>
      <h3 className="font-bold text-3xl">Categories</h3>
      <div className="flex justify-end">
        <Link to="/admin/categories-add" className="mb-5">
          <Button
            className="font-extrabold"
            title="Add new category"
            endIcon={<AddIcon />}
          ></Button>
        </Link>
      </div>
      <div
        className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="list-category"
        role="tabpanel"
        aria-labelledby="list-category-tab"
      >
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Category ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Category Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody id="table-category-list"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
