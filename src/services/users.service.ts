import { ILogin, IUser } from '../interfaces';
import UserModel from '../models/users.model';
import { createToken } from '../auth/authToken';
// import HttpException from '../shared/http.exception';

const userLogin = async (login: ILogin) => {
  const users = await UserModel.userLogin(login);
  if (users.length === 0 || users[0].password !== login.password) {
    return { status: 401, message: 'Username or password invalid' };
  }
  const token = createToken(users[0]);
  return { status: 200, token };
};

const createUser = async (user: IUser) => {
  const newUser = await UserModel.createUser(user);
  const token = createToken(newUser[0]);
  return { token };
};

const userService = { userLogin, createUser };

export default userService;