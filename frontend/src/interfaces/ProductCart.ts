import { IProduct } from './Product';

export interface ProductCart {
	productId: IProduct;
	quantity: number;
}
