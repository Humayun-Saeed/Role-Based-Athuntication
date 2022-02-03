
var express=require('express')
var app=express()
var user=require('../user_schema')
const { create_token } = require('./athorization')

module.exports.add_user=(req,res)=>{

    const add=new user()
    add.username=req.body.username
    add.password=req.body.password
    add.age=req.body.age
    add.role=req.body.role
    add.save().then((data)=>{
        console.log("account is generated");
    }).catch((err) => {
        console.log(err);
    })

    console.log("wellcome to the user");
}
module.exports.signin_user=async(req,res)=>{

const data= await user.findOne({username:req.body.username})
if(!data){
    console.log("there is no user: ");
}
else{
    if(data.password==req.body.password){
    
    console.log(data)
       res.send( await create_token(data))
        console.log("Welcome: ");
   
}
else{
    console.log("Password invalid: ");
}
}

}
module.exports.user_greeter=(req,res)=>{
    console.log("well come to user page: ");
}