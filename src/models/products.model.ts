import { ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces';
import connection from './connection';

export const getAll = async (): Promise<IProduct[]> => {
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.products',
  );

  return result as IProduct[];
};

export const createProduct = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', 
    [name, amount],
  );
  return { id: insertId, ...product };
};
