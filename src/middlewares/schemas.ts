import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.required': '"username" is required',
  }),
  password: Joi.string().required().messages({
    'string.required': '"password" is required',
  }),
});

const createProducSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const createUserSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),

});

const schemas = { loginSchema, createProducSchema, createUserSchema };

export default schemas;