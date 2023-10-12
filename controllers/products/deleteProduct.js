import Product from "../../models/Product.js";

const deleteProduct = async (req, res) => {
    try {
        
        const product = await Product.findOneAndDelete(req.params);
        res.status(200).json({
        message: "Product eliminado correctamente.",
        response: product,
        success: true,
        });
    } catch (error) {
        return res.status(404).json({ 
            message: "Product no encontrado.",
            response: null,
            success: false,
    });
    }
    }
    export default deleteProduct;