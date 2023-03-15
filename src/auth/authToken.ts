import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces';

const secret = process.env.JWT_SECRET || 'batatinha';

const jwtConfig: SignOptions = { expiresIn: '7d', algorithm: 'HS256' };

export const createToken = (payload: IUser) => jwt.sign({ payload }, secret, jwtConfig);

export const verifyToken = (token: string) => jwt.verify(token, secret);

const auth = { createToken, verifyToken };

export default auth;
