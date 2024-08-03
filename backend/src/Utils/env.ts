import { StatusCodes } from 'http-status-codes';
import dotenv from 'dotenv';

dotenv.config();

export const {
  PORT,
  NODE_ENV,
  DB_URI,
  JWT_SECRET,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  STRIPE_API_KEY,
  FRONTEND_URL
} = process.env;
