import express from 'express';
import productsRouter from './products.js';
import UserRouter from "./users.js"
import categoriesRouter from './categories.js'
import cartRouter from "./cart.js"

let router = express.Router();

router.use('/products', productsRouter)
router.use('/users', UserRouter);
router.use('/categories',categoriesRouter)
router.use('/cart',cartRouter)

export default router;
