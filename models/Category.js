
import {Schema,Types,model} from "mongoose"

let categoryCollection = "categories";

let categorySchema = new Schema ({
 name:{type:String, required:true}
})

let Category = model(categoryCollection,categorySchema)
export default Category

