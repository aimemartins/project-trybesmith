import express from 'express';
import productsController from './controllers/products.controller';
import * as usersController from './controllers/users.controller';
import validateLogin from './middlewares/login.validation';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAll);

app.post('/products', productsController.createProduct);

app.post('/login', validateLogin, usersController.userLogin);

export default app;
