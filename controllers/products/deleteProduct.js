import Product from "../../models/Product.js";

async function deleteProduct(req, res, next) {
    try {
        console.log(req.params);
        const { _id } = req.params;
        console.log('mmm',_id)
        const product = await Product.findById(_id);
        if (!product) {
            return res.status(404).json({
                success: false,
                response: null,
                message: "Product not found",
            });
        }
        await Product.findByIdAndDelete(_id);
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