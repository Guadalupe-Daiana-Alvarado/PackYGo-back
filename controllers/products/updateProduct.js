import Product from '../../models/Product.js'

// Controlador para actualizar un Product por ID
const updateProduct = async (req, res, next) => {
    const { id } = req.params;
    console.log(id);


    
    try {

        const product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
   
        res.status(200).json({
            message: 'Product actualizado correctamente.',
            response: product,
            success: true,
        });

    } catch (error) {
        return res.status(404).json({ message: 'Product no encontrado.' });
    }
};

export default updateProduct;