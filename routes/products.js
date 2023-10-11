import express from 'express';
import { getAllProducts } from '../controllers/products/productController.js';
import { getProductById } from '../controllers/products/productId.js';


import createProduct from '../controllers/products/createProduct.js';
import updateProduct from '../controllers/products/updateProduct.js';
import deleteProduct from '../controllers/products/deleteProduct.js';
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:_id', getProductById);
router.post('/', createProduct);
router.put('/:_id', updateProduct);
router.delete('/:_id', deleteProduct);





export default router;
