import { Schema, model, Types } from "mongoose";

let collection = 'users'
let schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  photo: { type: String, required: true },
  name_user:  { type: String, required: true },
  name:  { type: String, required: true },
  surname:  { type: String, required: true },
  address:  { type: String, required: true },
  phone:  { type: Number, required: true },
  role: { type: Number, default: 0 },
  online: { type: Boolean, default: false }, 
  verified: { type: Boolean, default: false },
  verify_code: { type: String }
}, {
  timestamps: true 
})

let User = model(collection, schema) 

export default User
