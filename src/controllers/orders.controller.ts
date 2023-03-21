import { Request, Response } from 'express';

import OrderService from '../services/orders.service';

const getAllOrders = async (req:Request, res: Response) => {
  const result = await OrderService.getAllOrders();
  return res.status(200).json(result);
};

const create = async (req:Request, res: Response) => {
  const { productsIds } = req.body;
  const { id } = req.body.user.payload;
  const response = {
    userId: id,
    productsIds,
  };
  console.log('CONTROLLER', response);
  const result = await OrderService.createOr(response);
  return res.status(201).json(result);
};

const OrderController = { getAllOrders, create };

export default OrderController;