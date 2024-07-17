import express from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from '../controllers/productController';
import multer from 'multer';
import { protect } from '../middlewares/auth';

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
});

// router
//   .route("/")
//   .get(getAllProducts)
//   .post(upload.single("image"), protect, restrictTo("admin"), createProduct);

// router
//   .route("/:id")
//   .get(getProduct)
//   .patch(upload.single("image"), protect, restrictTo("admin"), updateProduct)
//   .delete(protect, restrictTo("admin"), deleteProduct);

router.route('/').get(getAllProducts).post(upload.single('image'), createProduct);

router
  .route('/:id')
  .get(getProduct)
  .patch(upload.single('image'), updateProduct)
  .delete(deleteProduct);

export default router;
