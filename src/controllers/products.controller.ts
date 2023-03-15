import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import * as productsService from '../services/products.service';

const getAll = async (req:Request, res:Response) => {
  const result = await productsService.getAll();
  return res.status(200).json(result);
};

const createProduct = async (req:Request, res:Response) => {
  const newProduct = req.body as IProduct;
  const result = await productsService.createProduct(newProduct);
  return res.status(201).json(result);
};

const productsController = { getAll, createProduct };

export default productsController;