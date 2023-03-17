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

const OrderModel = { getAllOrders };

export default OrderModel;