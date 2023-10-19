import {Schema,model,Types }from "mongoose";
import Category from "../models/Category.js";

let productCollection = "products"

let productSchema = new Schema ({
  name:{type:String, required:true},
  price: {type:Number, required:true},
  description: {type:String, required:true},
  stock: {type:Number, required:true },
  quanty: {type:Number, required:false },
  photo:{type:String, required:true},
  category:{
    type:Types.ObjectId,
    ref:Category, 
    required:true}
  
})

let Product = model(productCollection,productSchema)

export default Product

/* import Product from '../../models/Product.js';
import Category from '../../models/Category.js';

export const getAllProducts = async (req, res) => {
  try {
    const filters = {};

    if (req.query.name) {
      filters.name = new RegExp(req.query.name, 'i');
    }

    if (req.query.category) {
      const category = await Category.findById(req.query.category);
          console.log('CATTTT',category)
      if (category) {
        filters.category_id = category._id;
      }
    }


    const products = await Product.find(filters).populate("category", "name");

    res.status(200).json({
      products: products
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

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