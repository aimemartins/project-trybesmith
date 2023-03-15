import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.required': '"username" is required',
  }),
  password: Joi.string().required().messages({
    'string.required': '"password" is required',
  }),
});

const schemas = { loginSchema };

export default schemas;