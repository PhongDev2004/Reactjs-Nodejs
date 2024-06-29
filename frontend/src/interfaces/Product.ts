export interface IProduct {
	_id?: string;
	name: string;
	price: number;
	countInStock?: number;
	brand?: string;
	description?: string;
	image?: string;
	numReviews: number;
}
