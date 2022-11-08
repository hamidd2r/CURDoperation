// const express = require('express');
// const { default: mongoose} = require('mongoose');
// const employee = require('../model/employeeSchema');
// const User = require('../model/userSchema');
// const router = express.Router();
// require("../db/conn");
// const multer = require('multer')

// // check server
// router.get('/', (req, res) => {
//     res.send(`hello world from the server router js `)
// });

// //  ....................................POST addemployee Data api ................................................
// router.post('/Addemployee', async (req, res, next) => {

//     const {name , email , mobile , age , work , address , desc} = req.body;
//     if(!name, !email , !mobile , !age , !work , !address , !desc){
//         res.status(404).json("fill the all data")
//     }
//     const user = new User({
//         _id: new mongoose.Types.ObjectId,
//         name: req.body.name,
//         email: req.body.email,
//         mobile: req.body.mobile,
//         age : req.body.age,
//         work : req.body.work,
//         address : req.body.address,
//         desc : req.body.desc
        
//     })
//     user.save()
//         .then(result => {
//             res.status(200).json({
//                 newUser: result
//             })
//         }).catch(err => {
//             res.status(422).json({
//                 error: err
//             })
//         })


// })

// // .................................................get individual employeeData ....................................

// router.get('/getuser/:id', (req, res) => {
//     // console.log(req.params.id)
//     User.findById(req.params.id)
//         .then(result => {
//             res.status(200).json({
//                 user: result
//             })
//         }).catch(err => {
//             console.log(err)
//             res.status(422).json({
//                 error: err
//             })
//         })
// })

// // ........................................................getallemployeedata Api..........................................
// router.get('/getallemployeedata', (req, res) => {
//     User.find(req.params.id)
//         .then(result => {
//             res.status(200).json({
//                 user: result
//             })
//         }).catch(err => {
//             console.log(err)
//             res.status(422).json({
//                 error: err
//             })
//         })
// })

// //.......................................................... update addemployeedata..............................................

// router.patch('/:id' , async(req,res)=>{

//  try {
//      const {id} = req.params;

//      const updateduser = await User.findByIdAndUpdate(id,req.body , {
//         new:true
//      });
//      console.log(updateduser)
//      res.status(201).json(updateduser)
//  } catch (error) {
//     res.status(422).json(error)
//  }  

// })





// // ........................................DELETE addemployeedata Api..............................................

// router.delete('/:id' , async(req,res)=>{

//     try {
//         const {id} = req.params;
   
//         const deleteuser = await User.findByIdAndDelete({_id:id} , {
//            new:true
//         });
//         console.log(deleteuser)
//         res.status(201).json(deleteuser)
//     } catch (error) {
//        res.status(422).json(error)
//     }  
   
//    })



//    // login....
// //   .....................................................POST login data........................................................
//    router.post('/employee', async (req, res, next) => {
//     const user = new employee({
//         _id: new mongoose.Types.ObjectId,
//         name: req.body.name,
//         email: req.body.email,
//         phone: req.body.phone
        
//     })
//     user.save()
//         .then(result => {
//             res.status(200).json({
//                 newUser: result
//             })
//         }).catch(err => {
//             res.status(422).json({
//                 error: err
//             })
//         })
   

// })



// // ......................................................get login data........................................................

// router.get('/:id', (req, res) => {
//     // console.log(req.params.id)
//     employee.findById(req.params.id)
//         .then(result => {
//             res.status(200).json({
//                 user: result
//             })
//         }).catch(err => {
//             console.log(err)
//             res.status(422).json({
//                 error: err
//             })
//         })
// })





// //...........................................................GetEmployeeDetails


// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function (req, file , cb){
//             cb(null , "upload")

//         },
//         filename:function (req ,file, cb){
//             cb(null , file.filename+"-" + Date.now()+ ".jpg") 
//         }
//     })
// }).single("user_file")

// router.post("/upload" , upload, (req , res) =>{
//     res.send("file upload ...")
// })




// module.exports = router;