import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../auth/authToken';

export default function validateToken(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const payload = verifyToken(authorization);
    req.body.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
