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
import Product from '../../models/Product.js';
import Category from '../../models/Category.js';

export const getAllProducts = async (req, res) => {
  try {
    let filters = {}; 

    if (req.query.name) { 
      filters.name = new RegExp(req.query.name, 'i'); 
    }

    if (req.query.category) {
      console.log('AAAAAAAA',req.query.category)
      const category = req.query.category; 

      const products = await Product.find({ category: category }).populate("category", "name");
      console.log('PROOOO', products);
      
      if (category) {
        filters.category_id = category._id;
      }
    }

    // Consulta los productos con los filtros aplicados
    const products = await Product.find(filters).populate("category", "name");

    res.status(200).json({
      
      products: products
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};