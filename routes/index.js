import express from 'express';
import productsRouter from './products.js';
let router = express.Router();

router.use('/products', productsRouter)

export default router;
