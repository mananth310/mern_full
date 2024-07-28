const { type } = require("@testing-library/user-event/dist/type");
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
let CustomerSchema=new Schema({
    customername:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contactno:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
    
}, {
    collection:"customers"
})
module.exports=mongoose.model("Customers",CustomerSchema);