import { Schema,model } from "mongoose";

const productSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    autor:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    genere:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    code:{
        type:String,
        required:true,
        unique:true
    }
})

const productModel = model('products',productSchema);
export default productModel;