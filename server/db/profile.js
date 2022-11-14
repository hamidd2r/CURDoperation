const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    
    name : String,
    age : Number,
    email:String,
    employee:String,
    mobile :Number,
    location:String,
    
})



module.exports = mongoose.model("Profile" , profileSchema)