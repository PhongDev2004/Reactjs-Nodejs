import express from 'express';
import {
	addItemToCart,
	getCart,
	removeItemFromCart,
	updateQuantity,
} from '../controllers/cartController';
import { protect } from '../middlewares/auth';

const router = express.Router();

router
	.route('/')
	.get(protect, getCart)
	.post(protect, addItemToCart)
	.patch(protect, updateQuantity);

router.route('/:id').patch(protect, removeItemFromCart);

export default router;
