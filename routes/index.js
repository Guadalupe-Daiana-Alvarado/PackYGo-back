import express from 'express';
import productsRouter from './products.js';
import UserRouter from "./users.js"
import categoriesRouter from './categories.js'

let router = express.Router();

router.use('/products', productsRouter)

router.use('/users', UserRouter);

router.use('/categories',categoriesRouter)

export default router;
