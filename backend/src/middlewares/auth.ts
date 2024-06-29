import { NextFunction, Request, Response } from 'express';
import catchAsync from '../Utils/catchAsync';
import User from '../models/User';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET } from '../Utils/env';

export const protect = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		let token;

		if (
			req.headers.authorization &&
			req.headers.authorization.startsWith('Bearer')
		) {
			token = req.headers.authorization.split(' ')[1];
		} else if (req.cookies.jwt) {
			token = req.cookies.jwt;
		}

		if (!token) {
			return res.status(401).json({ error: 'You are not logged in' });
		}

		const decoded: JwtPayload = jwt.verify(
			token,
			JWT_SECRET as string
		) as JwtPayload;

		const currentUser = await User.findById(decoded.id);

		if (!currentUser) {
			return res.status(401).json({ error: 'The user does not exist' });
		}

		req.user = currentUser;
		next();
	}
);

// export const isLoggedIn = async (
// 	req: Request,
// 	res: Response,
// 	next: NextFunction
// ) => {
// 	if (req.cookies.jwt) {
// 		try {
// 			const decoded: JwtPayload = jwt.verify(
// 				req.cookies.jwt,
// 				JWT_SECRET as string
// 			) as JwtPayload;

// 			const currentUser = await User.findById(decoded.id);

// 			if (!currentUser) {
// 				return next();
// 			}

// 			req.user = currentUser;
// 			return next();
// 		} catch (err) {
// 			return next();
// 		}
// 	}

// 	next();
// };

export const restrictTo = (...roles: string[]) => {
	return (req: Request, res: Response, next: NextFunction) => {
		if (!roles.includes(req.user.role)) {
			return res.status(403).json({ error: 'You do not have permission' });
		}

		next();
	};
};
