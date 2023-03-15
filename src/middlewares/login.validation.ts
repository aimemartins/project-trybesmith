import { Request, Response, NextFunction } from 'express';
import { ILogin } from '../interfaces';
import schemas from './schemas';

// function validateFields(username: string, password: string){
//   if(typeof username !== 'string' || username.length === 0) {
//     const message = 
//   }
// }
export default function validateLogin(
  req: Request, 
  res: Response, 
  next: NextFunction,
) {
  const login: ILogin = req.body;
  const { error } = schemas.loginSchema.validate(login);

  if (error) return res.status(400).json({ message: error.message });
  next();
}