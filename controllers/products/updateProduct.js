import Product from '../../models/Product.js'

// Controlador para actualizar un Product por ID
const updateProduct = async (req, res, next) => {
    try {

        console.log("este es el body", req.body)

        const product = await Product.findOneAndUpdate(req.params, req.body, { new: true });
        console.log(Product)
        res.status(200).json({
            message: 'Product actualizado correctamente.',
            response: product,
            success: true,
        });
        console.log(res)
    } catch (error) {
        return res.status(404).json({ message: 'Product no encontrado.' });
    }
};

export default updateProduct;