import { NextFunction, Request, Response } from 'express';
import { Model } from 'mongoose';
import catchAsync from '../Utils/catchAsync';
import APIFeatures from '../Utils/apiFeatures';
import AppError from '../Utils/appError';
import cloudinary from 'cloudinary';

export const deleteOne = <T extends Model<any>>(Model: T) =>
	catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		const doc = await Model.findByIdAndDelete(req.params.id);

		if (!doc) {
			return next(new AppError('No document found with that ID', 404));
		}

		return res
			.status(204)
			.json({ message: 'Successfully deleted', data: null });
	});

export const updateOne = <T extends Model<any>>(Model: T) =>
	catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});

		if (!doc) {
			return next(new AppError('No document found with that ID', 404));
		}

		if (req.file) {
			req.body.image = await uploadImage(req.file);
		}

		return res.status(200).json({
			status: 'success',
			data: {
				data: doc,
			},
		});
	});

export const createOne = <T extends Model<any>>(Model: T) =>
	catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		if (req.file) {
			req.body.image = await uploadImage(req.file);
		}

		const doc = await Model.create(req.body);

		res.status(201).json({
			status: 'success',
			data: {
				data: doc,
			},
		});
	});

export const getOne = <T extends Model<any>>(
	Model: T,
	populateOption?: string | string[]
) =>
	catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		let query = Model.findById(req.params.id);
		if (populateOption) query = query.populate(populateOption);

		const doc = await query;

		if (!doc) {
			return next(new AppError('No document found with that ID', 404));
		}

		res.status(200).json({
			status: 'success',
			data: {
				data: doc,
			},
		});
	});

export const getAll = <T extends Model<any>>(Model: T) =>
	catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		let filter = {};
		if (req.params.productId) filter = { tour: req.params.tourId };

		const features = new APIFeatures(Model.find(filter), req.query)
			.filter()
			.sort()
			.limitFields()
			.paginate();

		const doc = await features.query;

		res.status(200).json({
			status: 'success',
			results: doc.length,
			data: {
				data: doc,
			},
		});
	});

const uploadImage = async (file: Express.Multer.File) => {
	const image = file;
	const base64Image = Buffer.from(image.buffer).toString('base64');
	const dataURI = `data:${image.mimetype};base64,${base64Image}`;

	const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);
	return uploadResponse.url;
};
