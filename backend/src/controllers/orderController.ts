import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import Order from '../models/Order';
import catchAsync from '../Utils/catchAsync';
import ApiError from '../Utils/ApiError';

export const createOrder = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { orderItems, totalAmount, shippingAddress } = req.body;

  if (!orderItems || orderItems.length === 0) {
    return next(new ApiError(StatusCodes.BAD_REQUEST, 'No order items provided'));
  }

  const order = await Order.create({
    user: req.user._id,
    orderItems,
    totalAmount,
    shippingAddress,
  });

  res.status(StatusCodes.CREATED).json({
    status: 'success',
    data: {
      order,
    },
  });
});

export const getAllOrders = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const orders = await Order.find().populate('orderItems.product').exec();

  if (!orders) {
    return next(new ApiError(404, 'No orders found'));
  }

  res.status(200).json({
    status: 'success',
    data: {
      orders,
    },
  });
});

export const getOrderById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const order = await Order.findById(req.params.id).populate('orderItems.product');

  if (!order) {
    return next(new ApiError(StatusCodes.NOT_FOUND, 'Order not found'));
  }

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: {
      order,
    },
  });
});

export const updateOrderStatus = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { status } = req.body;

    if (!['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].includes(status)) {
      return next(new ApiError(StatusCodes.BAD_REQUEST, 'Invalid status'));
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!order) {
      return next(new ApiError(StatusCodes.NOT_FOUND, 'Order not found'));
    }

    res.status(StatusCodes.OK).json({
      status: 'success',
      data: {
        order,
      },
    });
  }
);
