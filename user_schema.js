var express=require('express')
var mongoose=require('mongoose')

const user=new  mongoose.Schema({
username:{type:String},
password:{type:Number},
age:{type:Number},
role:{type:String,enum:["user","admin","empolyee"]}


})
module.exports=mongoose.model('user',user)