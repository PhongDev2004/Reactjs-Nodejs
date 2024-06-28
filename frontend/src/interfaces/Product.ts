export interface IProduct {
  id?: number | string;
  name: string;
  price: number;
  stock?: number;
  brand?: string;
  description?: string;
  thumbnail?: string;
  category: number | string;
  images?: string[];
}
