import Product from '../models/Product';
import { createProductValidation } from '../validations/product';
import { createOne, deleteOne, getAll, getOne, updateOne } from './handlerFactory';

export const getAllProducts = getAll(Product);

export const getProduct = getOne(Product);

export const createProduct = createOne(Product, createProductValidation);

export const updateProduct = updateOne(Product, createProductValidation);

export const deleteProduct = deleteOne(Product);
