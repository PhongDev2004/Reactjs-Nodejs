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
import userRouter from './routes/userRoutes';
import productRouter from './routes/productRoutes';
import cartRouter from './routes/cartRoutes';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
	cloud_name: CLOUDINARY_CLOUD_NAME,
	api_key: CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET,
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use('/api/auth', userRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);

app.listen(PORT, (): void => {
	connectDB();
	console.log(`Server is running on ${PORT}`);
});
