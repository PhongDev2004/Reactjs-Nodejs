import Joi from 'joi';

export const registerValidation = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.ref('password'),
});

export const loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
