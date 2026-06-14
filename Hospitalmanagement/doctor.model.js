import mongoose from 'mongoose';


const hospitalhours=new mongoose.Schema({},{timestamps:true});

const doctorschema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experiencein:{
        type:Number,
        default:0
    },
    worksinhospitals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        }
    ]

},{timestamps:true});


export const doctor = mongoose.model("doctor", doctorschema);