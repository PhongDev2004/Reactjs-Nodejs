import express from 'express';
import { protect, restrictTo } from '../middlewares/auth';
import { getUser } from '../controllers/userController';

const router = express.Router();

router.route('/:id').get(protect, getUser);

export default router;
