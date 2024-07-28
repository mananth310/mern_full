const mongoose =require("mongoose");
const express=require('express');
const router=express.Router();
 
let CustomerSchema=require("../Models/Coustomer");

router.route("/NewCustomer").post(async(req,res, next)=>{
    await CustomerSchema
    .create(req.body)
    .then((result)=>{
        res.json({
            data: result,
            message:"New Customer added",
            status: 200
          });
    })
    .catch((err)=>{
        return next(err);
    })
})

router.route("/Login").post(async(req, res, next)=>{
    const {email,password}=req.body;
    await CustomerSchema
    .findOne({email:email})
    .then((result)=>{
        if(result.password==password){
            res.json({"status":"Done","name":result.customername});
        }else{
            res.json({"status":"Failed"});
        }
        return res;
    })
    .catch((err)=>{
        return next(err);
    })
})
   
module.exports = router;