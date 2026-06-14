import mongoose from 'mongoose';

const medicalrecordschema = new mongoose.Schema({},{timestamps:true});


export const medical = mongoose.model("medical", medicalrecordschema);