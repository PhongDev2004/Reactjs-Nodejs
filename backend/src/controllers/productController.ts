import Product from '../models/Product';
import {
	createOne,
	deleteOne,
	getAll,
	getOne,
	updateOne,
} from './handlerFactory';

export const getAllProducts = getAll(Product);

export const getProduct = getOne(Product);

export const createProduct = createOne(Product);

export const updateProduct = updateOne(Product);

export const deleteProduct = deleteOne(Product);
