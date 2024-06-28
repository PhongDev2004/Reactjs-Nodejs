import express from 'express';
import {
	createProduct,
	deleteProduct,
	getAllProducts,
	getProduct,
	updateProduct,
} from '../controllers/productController';
import { protect, restrictTo } from '../controllers/authController';
import multer from 'multer';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 1024 * 1024 * 5 } });

router
	.route('/')
	.get(getAllProducts)
	.post(upload.single('image'), protect, restrictTo('admin'), createProduct);

router
	.route('/:id')
	.get(getProduct)
	.patch(upload.single('image'), protect, restrictTo('admin'), updateProduct)
	.delete(protect, restrictTo('admin'), deleteProduct);

export default router;
