import { IOrder } from '../interfaces';
import * as OrderModel from '../models/orders.model';

const getAllOrders = async (): Promise<IOrder[]> => {
  const orders = await OrderModel.getAllOrders();
  return orders;
};

const OrderService = { getAllOrders };

export default OrderService;