import express from 'express';
import { protect } from '../middlewares/auth';
import { createCheckoutSession, createOrder, getOrderById } from '../controllers/orderController';

const router = express.Router();

router.post("/create-checkout-session", protect, createCheckoutSession)
router.post("/createOrder", protect, createOrder)
router.get("/getOrder/:id", protect, getOrderById)

export default router;
