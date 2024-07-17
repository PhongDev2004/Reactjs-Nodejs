import Joi from 'joi';

export const updateUserValidation = Joi.object({
	username: Joi.string().messages({
		'string.base': 'Username must be a string',
		'string.min': 'Username must be at least 3 characters',
	}),
	email: Joi.string().email().messages({
		'string.base': 'Email must be a string',
		'string.email': 'Email must be a valid email',
	}),
	current_password: Joi.string().min(6).messages({
		'string.base': 'Password must be a string',
		'string.min': 'Password must be at least 6 characters',
	}),
	new_password: Joi.string().min(6).messages({
		'string.base': 'Password must be a string',
		'string.min': 'Password must be at least 6 characters',
	}),
	confirm_password: Joi.string().valid(Joi.ref('new_password')).messages({
		'any.only': 'Confirm password do not match',
	}),
	gender: Joi.string().valid('male', 'female', 'other'),
	image: Joi.string().messages({
		'string.base': 'Image must be a string',
	}),
	phone: Joi.string().messages({
		'string.base': 'Phone must be a string',
	}),
	address: Joi.string().messages({
		'string.base': 'Address must be a string',
	}),
});
