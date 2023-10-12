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
      // Mapea el nombre de la categoría al ID
      const category = await Product.find({ _id: req.query.category});
      console.log('CATTTTT',category)

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

