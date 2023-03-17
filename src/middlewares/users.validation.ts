import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces';
import schemas from './schemas';

export default function validateUser(req:Request, res: Response, next: NextFunction) {
  const user: IUser = req.body;
  const { error } = schemas.createUserSchema.validate(user);

  if (error) {
    if (error.message.includes('required')) {
      return res.status(400).json({ message: error.message });
    } 
    return res.status(422).json({ message: error.message });
  }
  next();
}