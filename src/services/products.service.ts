import { IProduct } from '../interfaces';
import * as productsModel from '../models/products.model';

export const getAll = async ():Promise<IProduct[]> => {
  const products = await productsModel.getAll();
  return products as IProduct[];
};

export const createProduct = async (product: IProduct) => {
  const newProduct = await productsModel.createProduct(product);
  return newProduct;
};