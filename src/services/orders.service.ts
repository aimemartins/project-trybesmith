import { IOrder } from '../interfaces';
import * as OrderModel from '../models/orders.model';

const getAllOrders = async (): Promise<IOrder[]> => {
  const orders = await OrderModel.getAllOrders();
  return orders;
};

const createOr = async (order: IOrder) => {
  const { userId, productsIds } = order;
  const orderId = await OrderModel.createOrder(userId);
  productsIds.forEach((productId) => OrderModel.addOrderInProduct(orderId, productId));
  return order;
};

const OrderService = { getAllOrders, createOr };

export default OrderService;