import express from 'express';
import OrderController from './controllers/orders.controller';
import productsController from './controllers/products.controller';
import * as usersController from './controllers/users.controller';
import validateLogin from './middlewares/login.validation';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAll);

app.post('/products', productsController.createProduct);

app.post('/login', validateLogin, usersController.userLogin);

app.get('/orders', OrderController.getAllOrders);

export default app;
