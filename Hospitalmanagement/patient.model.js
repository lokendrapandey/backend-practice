import mongoose  from "mongoose";

const patientschema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    diagnosewith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["M","F","O"],
        required:true
    },
    admitedin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"hospital",
    },

},{timestamps:true});


export const patient = mongoose.model("patient", patientschema);