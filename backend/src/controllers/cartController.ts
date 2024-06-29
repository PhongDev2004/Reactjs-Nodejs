import { NextFunction, Request, Response } from 'express';
import catchAsync from '../Utils/catchAsync';
import Cart from '../models/Cart';

export const getCart = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const userId = req.user._id;

		const cart = await Cart.findOne({ userId });

		if (!cart) {
			return res.status(404).json({
				status: 'fail',
				message: 'Cart not found',
			});
		}

		return res.status(200).json({
			status: 'success',
			data: {
				result: cart.products.length,
				cart,
			},
		});
	}
);

export const addItemToCart = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const userId = req.user._id;
		const { productId, quantity } = req.body;

		const cart = await Cart.findOne({ userId });

		if (!cart) {
			const newCart = await Cart.create({
				userId,
				products: [{ productId, quantity }],
			});

			return res.status(201).json({
				status: 'success',
				data: {
					result: newCart.products.length,
					cart: newCart,
				},
			});
		}

		const product = cart.products.find(
			(p) => p.productId?.toString() === productId
		);

		if (product) {
			product.quantity += quantity;
		} else {
			cart.products.push({ productId, quantity });
		}

		await cart.save();

		return res.status(200).json({
			status: 'success',
			data: {
				result: cart.products.length,
				cart,
			},
		});
	}
);

export const removeItemFromCart = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const userId = req.user._id;
		const productId = req.params.id;

		const cart = await Cart.findOne({ userId });

		if (!cart) {
			return res.status(404).json({
				status: 'fail',
				message: 'Cart not found',
			});
		}

		const product = cart.products.find(
			(p) => p.productId?.toString() === productId
		);

		if (!product) {
			return res.status(404).json({
				status: 'fail',
				message: 'Product not found in cart',
			});
		}

		cart.products.forEach((product, index) => {
			if (product.productId?.toString() === productId) {
				cart.products.pull(product); // Using pull method to remove by subdocument
			}
		});

		await cart.save();

		return res.status(200).json({
			status: 'success',
			data: {
				result: cart.products.length,
				cart,
			},
		});
	}
);

export const updateQuantity = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const userId = req.user._id;
		const { productId, quantity } = req.body;

		const cart = await Cart.findOne({ userId });

		if (!cart) {
			return res.status(404).json({
				status: 'fail',
				message: 'Cart not found',
			});
		}

		const product = cart.products.find(
			(p) => p.productId?.toString() === productId
		);

		if (!product) {
			return res.status(404).json({
				status: 'fail',
				message: 'Product not found in cart',
			});
		}

		product.quantity = quantity;

		if (quantity <= 0) {
			cart.products.forEach((product, index) => {
				if (product.productId?.toString() === productId) {
					cart.products.pull(product);
				}
			});
		}

		await cart.save();

		return res.status(200).json({
			status: 'success',
			data: {
				result: cart.products.length,
				cart,
			},
		});
	}
);
