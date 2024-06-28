const CategoriesAdd = () => {
  return (
    <div
      className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
      id="add-category-view-tab"
      role="tabpanel"
      aria-labelledby="add-category-tab"
    >
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <section className="bg-white dark:bg-gray-900">
          <div className="p-4 mx-auto max-w-2xl">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Add a new category
            </h2>
            <form id="add-category-form" className="space-y-6">
              <div>
                <label
                  htmlFor="add-cate-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category Name
                </label>
                <input
                  type="text"
                  name="add-cate-name"
                  id="add-cate-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                  placeholder="Type category name"
                />
                <span
                  id="add-cate-name-error"
                  className="error-message text-xs text-red-500"
                ></span>
              </div>
              <button
                id="add-category-btn"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-700 rounded-lg focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-900 hover:bg-slate-800"
              >
                Add category
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CategoriesAdd;
