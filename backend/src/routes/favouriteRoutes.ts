import express from 'express';
import {
  addProductToFavorite,
  removeProductFromFavorite,
  getFavorite,
} from './../controllers/favouriteController';
import { protect } from '../middlewares/auth';

const router = express.Router();

router.route('/').get(protect, getFavorite).post(protect, addProductToFavorite);

router.route('/:id').delete(protect, removeProductFromFavorite);

export default router;
