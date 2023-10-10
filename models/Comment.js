import { Schema, model, Types } from "mongoose";

const commentSchema = new Schema({
  text: { type: String, required: true }, 
  user: { type: Types.ObjectId, ref: "User", required: true }, 
  product: { type: Types.ObjectId, ref: "Product", required: true }, 

});

// Crea el modelo de comentario
const Comment = model("Comment", commentSchema);

export default Comment;
