import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import * as Joi from "joi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { handleAddProduct } from "src/service/product";
import { IProduct } from "src/interfaces/Product";

const schemaProduct = Joi.object({
  name: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null, ""),
  countInStock: Joi.number(),
  brand: Joi.string(),
  image: Joi.any().optional(),
});

const ProductAdd = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: joiResolver(schemaProduct),
  });

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const onSubmit = async (data: IProduct) => {
    if (data.image && (data.image as unknown as FileList).length > 0) {
      const file = (data.image as unknown as FileList)[0];
      try {
        data.image = await convertFileToBase64(file);
      } catch (error) {
        console.error("Failed to convert image to base64", error);
      }
    }

    const newProduct = await handleAddProduct(data);

    if (newProduct) {
      toast.success("Product added successfully!");
      navigate("/admin");
    }
  };

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
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="add-product-form"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="add-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="add-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                    placeholder="Type product name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <span
                      id="add-name-error"
                      className="error-message text-xs text-red-500"
                    >
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="add-price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    id="add-price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                    placeholder="$2999"
                    {...register("price")}
                  />
                  {errors.price && (
                    <span
                      id="add-price-error"
                      className="error-message text-xs text-red-500"
                    >
                      {errors.price.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="add-category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Stock
                  </label>
                  <input
                    type="number"
                    id="add-product-qty"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                    placeholder="12"
                    {...register("countInStock")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="add-product-qty"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Brand
                  </label>
                  <input
                    type="text"
                    id="add-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                    placeholder="Brand"
                    {...register("brand")}
                  />
                </div>
              </div>

              <div>
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
                  {...register("description")}
                ></textarea>
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Cover photo
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                  id="file_input"
                  type="file"
                  {...register("image")}
                />
                {errors.image && (
                  <span
                    id="add-image-error"
                    className="error-message text-xs text-red-500"
                  >
                    {errors.image.message}
                  </span>
                )}
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
