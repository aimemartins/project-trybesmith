import express from 'express';
import productsController from './controllers/products.controller';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAll);

app.post('/products', productsController.createProduct);

export default app;
