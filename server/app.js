const mongoose = require('mongoose')
const express  = require("express")
const cors = require("cors")
const dotenv = require('dotenv')
require('./db/conn')
const  User = require('./db/User')
const Product = require('./db/Product')
const Jwt = require('jsonwebtoken')
const Profile = require('./db/profile')
const jwtKey = 'e-comm'
const app = express();

app.use(express.json());
app.use(cors())
  
//register api
app.post('/register' , async(req , res)=>{
   const user = new User (req.body)

   User.findOne({
    email: req.body.email,
  }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        message: "user already registered",
      });

    })  

   const result = await user.save();
    Jwt.sign({result}, jwtKey, {expiresIn:"2h"}, (err , token)=>{
            if(err) {
                res.send({result:'something went wrong pls try after sometime'})  
            }
             res.send({result , auth:token})
          }) 
        
})

//login api
app.post('/login' ,  async(req ,res)=>{
    console.log(req.body)
    if(req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password")

        if (user) {
          Jwt.sign({user}, jwtKey, {expiresIn:"2h"}, (err , token)=>{
            if(err) {
                res.send({result:'something went wrong pls try after sometime'})  
            }
             res.send({user , auth:token})
          }) 
        } else {
         res.send({result:'No User found'})
        }
    } else {
        res.send({result:'No User found'})
    }
})

//product api

app.post('/add-product' ,verifyToken, async(req,res)=>{
    const product = new Product(req.body)
    let result = await product.save()
    res.send(result)
})


app.get('/products'  , verifyToken ,async (req,res)=>{
    let products = await Product.find();
    if(products.length>0){
        res.send(products)

    }
    else {
        res.send("no products find")
    }
})


app.delete('/product/:id' ,verifyToken, async(req , res)=>{
    const result = await Product.deleteOne({_id:req.params.id})
    res.send(result)
})



app.get('/product/:id' ,verifyToken, async (req ,res) =>{
    let result = await Product.findOne({_id:req.params.id})
    if(result){
        res.send(result)
    }
    else {
        res.send({result: " no record found"})
    }
})


app.put('/product/:id' ,verifyToken, async (req ,res)=>{
    let result = await Product.updateOne(
    {_id: req.params.id},

    {
        $set :req.body
    }
    
    )
    res.send(result)
})


app.get('/search/:key' , verifyToken, async(req ,res)=>{
let result = await Product.find({
    "$or" : [
        {name:{$regex:req.params.key}},
        {price:{$regex:req.params.key}},
        {category:{$regex:req.params.key}},
        {company:{$regex:req.params.key}}
    ]
})
res.send(result)
} )




function verifyToken(req , res , next){
    let token = req.headers['authorization'];

    if(token) {
        token = token.split(' ')[1];
        Jwt.verify(token , jwtKey , (err , valid)=>{
            if(err) {
                res.status(401).send({result:"pls provide valid token"})
            }
            else {
                next()
            }
        })

    }else{

        res.status(403).send({result:"pls add token with header"})

    }
   
}



app.post('/profile' ,verifyToken, async(req,res)=>{
    const profile = new Profile(req.body)
    let result = await profile.save()
    res.send(result)
})



app.listen(5000 , (req,res) =>{
    console.log(`server is running port 5000 `)
})     