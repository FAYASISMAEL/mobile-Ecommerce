import mongoose, { Schema } from "mongoose";

const mobileSchema = new mongoose.Schema({
    name:{type:String,required:true},
    brand:{type:String,required:true},
    ram:{type:String,required:true},
    Storage:{type:String,required:true},
    price:{type:String,required:true},
    quantity:{}
});

export default mongoose.model.Users || mongoose.model("Users",mobileSchema);