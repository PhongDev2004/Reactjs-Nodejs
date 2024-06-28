const ProductAdd = () => {
  return (
    <section>
      <div
        className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="add-product"
        role="tabpanel"
        aria-labelledby="add-product-tab"
      >
        <section className="bg-white dark:bg-gray-900">
          <div className="p-4 mx-auto max-w-2xl">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Add a new product
            </h2>
            <form id="add-product-form" className="space-y-6">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <div className="">
                  <label
                    htmlFor="add-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="add-name"
                    id="add-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                    placeholder="Type product name"
                  />
                  <span
                    id="add-name-error"
                    className="error-message text-xs text-red-500"
                  ></span>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="add-price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="add-price"
                    id="add-price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                    placeholder="$2999"
                  />
                  <span
                    id="add-price-error"
                    className="error-message text-xs text-red-500"
                  ></span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="add-category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="add-category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                  >
                    <option value="">Select category</option>
                  </select>
                  <span
                    id="add-category-error"
                    className="error-message text-xs text-red-500"
                  ></span>
                </div>
                <div>
                  <label
                    htmlFor="add-product-qty"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="add-product-qty"
                    id="add-product-qty"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                    placeholder="12"
                  />
                  <span
                    id="add-qty-error"
                    className="error-message text-xs text-red-500"
                  ></span>
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="add-desc"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="add-desc"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                  placeholder="Your description here"
                ></textarea>
                <span
                  id="add-desc-error"
                  className="error-message text-xs text-red-500"
                ></span>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {" "}
                  Cover photo{" "}
                </label>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div className="aspect-square flex flex-col items-center justify-center border overflow-hidden rounded-md">
                    <img
                      id="add-preview-image"
                      src="assets/images/main.png"
                      alt=""
                    />
                  </div>
                  <div className="mt-1 flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <i className="bi bi-cloud-arrow-up text-xl text-slate-400"></i>
                      <div className="flex justify-center text-sm text-gray-600">
                        <label
                          htmlFor="add-file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span className="text-center">Upload a file</span>
                          <input
                            id="add-file-upload"
                            name="add-file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <span
                  id="add-image-error"
                  className="error-message text-xs text-red-500"
                ></span>
              </div>
              <button
                id="add-product-btn"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-700 rounded-lg focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-900 hover:bg-slate-800"
              >
                Add product
              </button>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProductAdd;
