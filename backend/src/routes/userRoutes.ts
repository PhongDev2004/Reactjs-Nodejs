import express from 'express';
import { protect, restrictTo } from '../middlewares/auth';
import { getUser, updateUser } from '../controllers/userController';
import multer from 'multer';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: Infinity },
});

router
  .route('/:id')
  .get(upload.single('image'), protect, getUser)
  .patch(upload.single('image'), protect, updateUser);

export default router;
