import {Schema,model,Types }from "mongoose";
import Category from "../models/Category.js";

let productCollection = "products"

let productSchema = new Schema ({
  name:{type:String, required:true},
  price: {type:Number, required:true},
  description: {type:String, required:true},
  stock: {type:Number, required:true },
  photo:{type:String, required:true},
  category:{
    type:Types.ObjectId,
    ref:Category, 
    required:true}
  
})

let Product = model(productCollection,productSchema)

export default Product
