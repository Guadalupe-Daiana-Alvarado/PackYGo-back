import Product from "../../models/Product.js";

async function createProduct(req, res, next) {
  console.log('porfiiiiiiiiiiiiiiii',req.body)
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    return res.status(201).json({
      success: true,
      response: newProduct,
      message: "New Product created",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      response: null,
      message: err.message,
    });
    console.log(err)
  }
}
export default createProduct;
