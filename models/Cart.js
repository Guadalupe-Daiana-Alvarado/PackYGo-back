import mongoose from "mongoose"
import {Schema,model,Types} from mongoose

let cartCollection = "cart"

let cartSchema = new Schema({
  user:{type:mongoose.Schema.Types.ObjectId,ref:"Users"},
  products: {type:mongoose.Schema.Types.ObjectId, ref:"Product"},
  amount: {type:Number}
})

let Cart = mongoose.model(cartCollection,cartSchema)
export default Cart