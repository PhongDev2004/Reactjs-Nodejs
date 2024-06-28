import { NextFunction, Request, Response } from 'express';
import { JWT_SECRET } from '../Utils/env';
import jwt, { JwtPayload } from 'jsonwebtoken';
import catchAsync from '../Utils/catchAsync';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import AppError from '../Utils/appError';
import { loginValidation, registerValidation } from '../validations/auth';

const signToken = (id: string) => {
	return jwt.sign({ id }, JWT_SECRET as string, {
		expiresIn: '90d',
	});
};

const createSendToken = (user: any, statusCode: number, res: Response) => {
	const token = signToken(user._id);

	const cookieOptions = {
		expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
		httpOnly: true,
	};

	res.cookie('jwt', token, cookieOptions);

	user.password = undefined;

	res.status(statusCode).json({
		status: 'success',
		token,
		data: {
			user,
		},
	});
};

export const register = catchAsync(async (req, res, next) => {
	const { error } = registerValidation.validate(req.body);

	if (error) {
		return next(new AppError(error.details[0].message, 400));
	}

	const existUser = await User.findOne({ email: req.body.email });

	if (existUser) {
		return next(new AppError('User already exists', 400));
	}

	const hashedPassword = await bcrypt.hash(req.body.password, 12);

	const newUser = await User.create({
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword,
		role: req.body.role,
	});

	createSendToken(newUser, 201, res);
});

export const login = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const { email, password } = req.body;

		const { error } = loginValidation.validate(req.body);

		if (error) {
			return next(new AppError(error.details[0].message, 400));
		}

		const user = await User.findOne({ email }).select('+password');

		if (!user) {
			return next(new AppError('Incorrect email or password', 401));
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return next(new AppError('Incorrect email or password', 401));
		}

		createSendToken(user, 200, res);
	}
);

export const logout = (req: Request, res: Response) => {
	res.cookie('jwt', 'loggedout', {
		expires: new Date(Date.now() + 10 * 1000),
		httpOnly: true,
	});
	res.status(200).json({ status: 'success' });
};

declare global {
	namespace Express {
		interface Request {
			user?: any;
		}
	}
}

export const protect = catchAsync(
	async (req: Request, _res: Response, next: NextFunction) => {
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
			return next(new AppError('You are not logged in', 401));
		}

		const decoded: JwtPayload = jwt.verify(
			token,
			JWT_SECRET as string
		) as JwtPayload;

		const currentUser = await User.findById(decoded.id);

		if (!currentUser) {
			return next(
				new AppError(
					'The user belonging to this token does no longer exist.',
					401
				)
			);
		}

		req.user = currentUser;
		next();
	}
);

export const isLoggedIn = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (req.cookies.jwt) {
		try {
			const decoded: JwtPayload = jwt.verify(
				req.cookies.jwt,
				JWT_SECRET as string
			) as JwtPayload;

			const currentUser = await User.findById(decoded.id);

			if (!currentUser) {
				return next();
			}

			req.user = currentUser;
			return next();
		} catch (err) {
			return next();
		}
	}

	next();
};

export const restrictTo = (...roles: string[]) => {
	return (req: Request, _res: Response, next: NextFunction) => {
		if (!roles.includes(req.user.role)) {
			return next(
				new AppError(
					'You do not have permission to perform this action',
					403
				)
			);
		}

		next();
	};
};
