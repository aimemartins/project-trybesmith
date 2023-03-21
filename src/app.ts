import express from 'express';
import OrderController from './controllers/orders.controller';
import productsController from './controllers/products.controller';
import * as usersController from './controllers/users.controller';
import validateLogin from './middlewares/login.validation';
import validateOrder from './middlewares/orders.validation';
import validateProduct from './middlewares/products.validation';
import validateToken from './middlewares/token.validation';
import validateUser from './middlewares/users.validation';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAll);

app.post('/products', validateProduct, productsController.createProduct);

app.post('/users', validateUser, usersController.createUser);

app.post('/login', validateLogin, usersController.userLogin);

app.get('/orders', OrderController.getAllOrders);

app.post('/orders', validateToken, validateOrder, OrderController.create);

export default app;
