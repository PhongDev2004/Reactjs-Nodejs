import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Button from 'src/components/ui/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const CategoriesList = () => {
  return (
    <div>
      <h3 className="font-bold text-3xl">Categories</h3>
      <div className="flex justify-end">
        <Link to="/admin/categories-add" className="mb-5">
          <Button className="font-extrabold" title="Add new category" endIcon={<AddIcon />}></Button>
        </Link>
      </div>
      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="list-category" role="tabpanel" aria-labelledby="list-category-tab">
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
            <tbody id="table-category-list">
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4">id</td>
                <td className="px-6 py-4">name</td>
                <td className="px-6 py-4 flex flex-nowrap space-x-4">
                  <button className="font-medium text-blue-600 dark:text-blue-500" bg-red-500>
                    <EditIcon className="edit-category-btn text-lg w-full" />
                  </button>
                  <button className="font-medium text-red-600 dark:text-red-500">
                    <DeleteIcon className="edit-category-btn text-lg w-full" />
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

export default CategoriesList;
