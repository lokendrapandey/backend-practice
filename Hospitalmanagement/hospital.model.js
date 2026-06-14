import mongoose from 'mongoose';


const hospitalschema = new mongoose.Schema({ 
     name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    experiencein:{
        type:Number,
        default:0
    },
},{timestamps:true});


export const hospital  = mongoose.model("hospital", hospitalschema);