import express from 'express';
import cors from 'cors';
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
  PORT,
} from './Utils/env';
import connectDB from './Utils/connect';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes';
import productRouter from './routes/productRoutes';
import cartRouter from './routes/cartRoutes';
import userRouter from './routes/userRoutes';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const app = express();

app.use(express.json({ limit: '5mb' }));
app.use(cors());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
    limit: '5mb',
  })
);

app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/users', userRouter);

app.listen(PORT, (): void => {
  connectDB();
  console.log(`Server is running on ${PORT}`);
});
