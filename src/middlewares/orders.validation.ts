import { Request, Response, NextFunction } from 'express';

import schemas from './schemas';

export default function validateOrder(req:Request, res: Response, next: NextFunction) {
  const products = req.body;
  console.log('VALIDATE', products);
  const { error } = schemas.createOrderSchema.validate(products);
  if (error) {
    if (error.message.includes('required')) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(422).json({ message: error.message });
  }
  next();
}