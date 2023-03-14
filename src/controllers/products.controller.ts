import { Request, Response } from 'express';
import * as productsService from '../services/products.service';

const getAll = async (req:Request, res:Response) => {
  const result = await productsService.getAll();
  return res.status(200).json(result);
};

const productsController = { getAll };

export default productsController;