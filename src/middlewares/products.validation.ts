import { Request, Response, NextFunction } from 'express';
import { IProduct } from '../interfaces';
import schemas from './schemas';

export default function validateProduct(req:Request, res: Response, next: NextFunction) {
  const product: IProduct = req.body;
  const { error } = schemas.createProducSchema.validate(product);
  if (error) {
    if (error.message.includes('required')) {
      return res.status(400).json({ message: error.message });
    } 
    return res.status(422).json({ message: error.message });
  }
  next();
}