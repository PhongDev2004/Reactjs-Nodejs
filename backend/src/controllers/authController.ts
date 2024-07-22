import { NextFunction, Request, Response } from 'express';
import { JWT_SECRET } from '../Utils/env';
import jwt from 'jsonwebtoken';
import catchAsync from '../Utils/catchAsync';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import { loginValidation, registerValidation } from '../validations/auth';

const signToken = (id: string, role: string) => {
  return jwt.sign({ id, role }, JWT_SECRET as string, {
    expiresIn: '90d',
  });
};

const createSendToken = (user: any, statusCode: number, res: Response) => {
  const token = signToken(user._id, user.role);

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
    return res.status(400).json({ error: error.details[0].message });
  }

  const existUser = await User.findOne({ email: req.body.email });

  if (existUser) {
    return res.status(400).json({ error: 'Email already exists' });
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

export const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const { error } = loginValidation.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  createSendToken(user, 200, res);
});

export const logout = (req: Request, res: Response) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 5 * 1000),
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
