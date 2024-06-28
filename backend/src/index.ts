import express from 'express';
import cors from 'cors';
import { PORT } from './Utils/env';
import connectDB from './Utils/connect';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoutes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/auth', userRouter);

app.listen(PORT, (): void => {
	connectDB();
	console.log(`Server is running on ${PORT}`);
});
