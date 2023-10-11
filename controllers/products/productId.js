import Product from '../../models/Product.js';
// Obtener un producto por ID
export const getProductById = async (req, res) => {

    try {
      const product = await Product.findById(req.params._id);
      
    console.log('PARAM',req.params._id)
    
      res.status(200).json({
        product
    });
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el producto' });
    }
  };
  
  
  