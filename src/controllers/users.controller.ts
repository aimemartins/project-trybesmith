import { Request, Response } from 'express';
import { ILogin, IUser } from '../interfaces';
import userService from '../services/users.service';

export const userLogin = async (req:Request <object, object, ILogin>, res:Response) => {
  const body = req.body as ILogin;
  const { status, token, message } = await userService.userLogin(body);

  return message
    ? res.status(status).json({ message })
    : res.status(status).json({ token });
};

export const createUser = async (req:Request, res:Response) => {
  const newUser = req.body as IUser;
  const result = await userService.createUser(newUser);
  return res.status(201).json(result);
};
