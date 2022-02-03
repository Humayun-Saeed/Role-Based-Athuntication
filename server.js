var mongoose=require('mongoose')
var express=require('express')
var user=require('./routes/user')
var emp=require('./routes/emoplyee')
var app=express()
app.use(express.json())
mongoose.connect('mongodb+srv://Humayun-Saeed:s12345678@cluster0.p48xj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{
    console.log("connected to the database successfully: ");
})
.catch((err)=>{
    console.log(err);
})

app.use('/',user)
app.use('/',emp)
app.listen(3000,()=>{
    console.log("connected to the server successfully: ");
})