var user=require('../controlers/user_controler')
var auth=require('../controlers/athorization')
//var user=require('../controlers/user_controler')
var express=require('express')
var app=express()
var router=express.Router()

router.post('/add',user.add_user)
router.post('/signin',user.signin_user)
router.get('/user',auth.verify_token,auth.role(["user"]),user.user_greeter)
module.exports=router