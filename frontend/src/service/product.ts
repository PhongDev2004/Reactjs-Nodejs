import { IProduct } from "src/interfaces/Product";
import instance from "./api";

export const getProducts = async () => {
  try {
    const { data } = await instance.get("/products");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id: string) => {
  try {
    const { data } = await instance.get("/products/" + id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const handleAddProduct = async (product: IProduct) => {
  try {
    const { data } = await instance.post("/products", product);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const handleEditProduct = async (product: IProduct) => {
  try {
    const req = JSON.parse(JSON.stringify(product));
    delete req._id;

    const { data } = await instance.patch(`/products/${product._id}`, req);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const handleDeleteProduct = async (id: string) => {
  try {
    const { data } = await instance.delete(`/products/` + id);
    return data;
  } catch (error) {
    console.log(error);
  }
};
