import Joi from "joi";

export const createProductValidation = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": `Name cannot be an empty field`,
    "any.required": `Name is a required field`,
  }),
  description: Joi.string().required().messages({
    "string.empty": `Description cannot be an empty field`,
    "any.required": `Description is a required field`,
  }),
  price: Joi.number().required().messages({
    "number.base": `Price must be a number`,
    "any.required": `Price is a required field`,
  }),
  countInStock: Joi.number().required().messages({
    "number.base": `countInStock must be a number`,
  }),
  image: Joi.string().messages({
    "string.empty": `Image cannot be an empty field`,
    "any.required": `Image is a required field`,
  }),
  brand: Joi.string().required().messages({
    "string.empty": `Brand cannot be an empty field`,
    "any.required": `Brand is a required field`,
  }),
});
