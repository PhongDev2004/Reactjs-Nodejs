import express from 'express';
import {
	createProduct,
	deleteProduct,
	getAllProducts,
	getProduct,
	updateProduct,
} from '../controllers/productController';
import { protect, restrictTo } from '../controllers/authController';

const router = express.Router();

router
	.route('/')
	.get(getAllProducts)
	.post(protect, restrictTo('admin'), createProduct);

router
	.route('/:id')
	.get(getProduct)
	.patch(protect, restrictTo('admin'), updateProduct)
	.delete(protect, restrictTo('admin'), deleteProduct);

export default router;
