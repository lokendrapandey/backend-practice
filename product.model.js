import mongoose from 'mongoose';

const productsechema = new mongoose.Schema({
    description:{
        required:true,
        type:String,
    },
    name:{
        type:String,
        required:true,
    },
    productsechema:{
        type:String,
    },
    price:{
        type:Number,
        default:0,
    },
    stock:{
        type:Number,
        default:0,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",

    }
},{timestamps:true});

export const Pdctschema = mongoose.model("pdctschema", productsechema); 