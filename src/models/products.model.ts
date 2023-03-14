import { IProduct } from '../interfaces';
import connection from './connection';

export const getAll = async (): Promise<IProduct[]> => {
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.products',
  );

  return result as IProduct[];
};

export const createProduct = async () => {

};