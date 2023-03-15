import { Request, Response } from 'express';
import { ILogin } from '../interfaces';
import userService from '../services/users.service';

export const userLogin = async (req:Request <object, object, ILogin>, res:Response) => {
  const body = req.body as ILogin;
  const { status, token, message } = await userService.userLogin(body);

  return message
    ? res.status(status).json({ message })
    : res.status(status).json({ token });
};

export const getAll = () => {

};

const userController = { userLogin };

export default userController;
