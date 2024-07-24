import express from 'express';
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
} from '../controllers/orderController';
import { protect } from '../middlewares/auth';

const router = express.Router();

router.route('/').get(protect, getAllOrders).post(protect, createOrder);

router.route('/:id').get(protect, getOrderById).patch(protect, updateOrderStatus);

export default router;
