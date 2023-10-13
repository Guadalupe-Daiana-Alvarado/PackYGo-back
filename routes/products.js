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

/* 
import Product from '../../models/Product.js';

export const getAllProducts  = async (req, res) => {
  try {
    const category = req.query.category; // Obtén el ID de categoría desde la solicitud
    console.log('CAAAAT', category);

    // Consulta los productos que pertenecen a la categoría específica
    const products = await Product.find({ category: category }).populate("category", "name");
    console.log('PROOOO', products);
    
    res.status(200).json({
      products: products
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos por categoría' });
  }
};
 */