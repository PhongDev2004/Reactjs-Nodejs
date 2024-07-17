import instance from './api';

export const getCart = async () => {
  try {
    const { data } = await instance.get('/cart');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = async (productId: string | undefined, quantity: number) => {
  try {
    const { data } = await instance.post('/cart', {
      productId,
      quantity,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = async (productId: string | undefined) => {
  try {
    const { data } = await instance.patch(`/cart/${productId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCart = async (productId: string | undefined, quantity: number) => {
  try {
    const { data } = await instance.patch(`/cart`, {
      quantity,
      productId,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
