var express=require('express')
var mongoose=require('mongoose')
var jsw=require('jsonwebtoken')
var user=require('../user_schema')
//const { _logFunc } = require('nodemailer/lib/shared')
var secert_key='ad'
module.exports.verify_token=async(req,res,next)=>{
    
    const bearer_token=req.headers['authorization']
    if(bearer_token){
        const token=bearer_token.split(" ")[1]
        req.token=token
        await jsw.verify(req.token,secert_key,(err)=>{ //Varify the token
            if(!err){
             let d=jsw.decode(req.token)
             req.user=d.data;
             console.log(d);
           next();
            }
           else{
           res.send(err)
           }
        })
    }
}
module.exports.create_token=async(data)=>{
return await jsw.sign({data},secert_key,{expiresIn:'50000s'})


}
module.exports.role=(roles=>{
return (req,res,next)=>{

    if(roles.includes(req.user.role)){
    next()
    }
    else{
        console.log("unathurized user ");
    }
}

})







