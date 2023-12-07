import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name:String,
  last_name:String,
  email:{type:String, unique:true, required:true},
  phone:String,
  password:String,
}, { timestamps: true });

mongoose.models = {};
const User = mongoose.model("users", userSchema);

export default User;