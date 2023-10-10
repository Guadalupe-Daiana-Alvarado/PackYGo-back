import express from 'express';
import { getAllProducts, getProductById } from '../controllers/products/productController.js';

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:_id', getProductById);

export default router;
