import express, { Request, Response } from 'express';
import cors from 'cors';
import { PORT } from './Utils/env';
import connectDB from './Utils/connect';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!');
});

app.listen(PORT, (): void => {
	connectDB();
	console.log(`Server is running on ${PORT}`);
});
