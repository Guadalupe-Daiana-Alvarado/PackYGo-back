import Product from "../../models/Product.js";

async function deleteProduct(req, res, next) {
    try {
        console.log(req.params);
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                response: null,
                message: "Product not found",
            });
        }
        await Product.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            response: product,
            message: "Product deleted",
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            response: null,
            message: err.message,
        });
    }}
export default deleteProduct;