import Product from '../../models/Product.js';

export const getAllProducts = async (req, res) => {
  try {
    let filters = {}; 
    
    if (req.query.name) { 
      console.log('REQEEEE',req.query.name)
      filters.name = new RegExp(req.query.name, 'i'); 
    }
    if (req.query.category) filters['category_id'] = req.query.category.split(",");
   console.log('holiiiii',req.query._id)
    // Consulta los productos con los filtros aplicados
    const products = await Product.find(filters).populate("category", "name");

    res.status(200).json({
      products: products
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};


// Obtener un producto por ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params._id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};


