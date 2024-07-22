import { IProduct } from "./Product";

export type ICart = {
   result: number;
   cart: {
      createAt: string;
      updateAt: string;
      userId: string;
      __v: number;
      _id: string;
      products: IProduct[];
   }
}