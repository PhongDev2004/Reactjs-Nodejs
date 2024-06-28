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
