const mongoose = require('mongoose');


// create a database...........

mongoose.connect("mongodb://localhost:27017/E-Dashboard" , {

    useNewUrlParser : true,
    useUnifiedTopology :true
}).then(() =>{
    console.log("connection is successful ...");
}).catch((error) =>{
    console.log(error)
})