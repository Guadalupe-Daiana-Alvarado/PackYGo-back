import {Schema,model,Types }from "mongoose";

let productCollection = "products"

let productSchema = new Schema ({
  name:{type:String, required:true},
  price: {type:Number, required:true},
  description: {type:String, required:true},
  stock: {type:Number, required:true },
  images:{type:String, required:true},
  categories:{type:Types.ObjectId, ref:"Category", required:true},
  color: {type:"String"}

})

let Product = model(productCollection,productSchema)

export default Product
