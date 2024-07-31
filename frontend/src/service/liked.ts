import instance from "./api";

export const getLiked = async () => {
   try {
      const { data } = await instance.get('/favorites');
      return data;
   } catch (error) {
      console.log(error);
   }
}

export const addToFavorite = async (productId: string | undefined) => {
   try {
      const { data } = await instance.post('/favorites', { productId });
      return data;
   } catch (error) {
      console.log(error);
   }
}

export const removeFromFavorite = async (productId: string | undefined) => {
   try {
      const { data } = await instance.delete(`/favorites/${productId}`);
      return data;
   } catch (error) {
      console.log(error);
   }
}