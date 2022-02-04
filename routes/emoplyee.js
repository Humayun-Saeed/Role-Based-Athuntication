var express=require('express')
var app=express()
var mongoose=require('mongoose')
var router=express.Router()
var auth=require('../controlers/athorization')
var emp=require('../controlers/empolyee_controler')

router.post('/empolye',auth.verify_token,auth.role(["empolyee"],emp.emolyee_seeder))

module.exports=router