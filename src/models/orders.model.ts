import { ResultSetHeader } from 'mysql2';
import { IOrder } from '../interfaces';
import connection from './connection';

export const getAllOrders = async (): Promise<IOrder[]> => {
  const [result] = await connection.execute(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p
    ON o.id = p.order_id
    GROUP BY o.id;`,
  );
  return result as IOrder[];
};

export const createOrder = async (userId:number):Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)', 
    [userId],
  );
  return insertId;
};

export const addOrderInProduct = async (orderId: number, productId: number) => {
  await connection.execute<ResultSetHeader>(
    'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?', 
    [orderId, productId],
  );
};

// `INSERT INTO Trybesmith.products (order_id)
// SELECT ?
// FROM Trybesmith.orders
// WHERE Trybesmith.products.id = ?`, 
// [orderId, productId],