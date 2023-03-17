import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

const getAllOrders = async (req:Request, res: Response) => {
  const result = await OrderService.getAllOrders();
  return res.status(200).json(result);
};

const OrderController = { getAllOrders };

export default OrderController;