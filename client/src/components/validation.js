
import React from 'react'

const Validation = (values) => {
    let error={};

    if(!values.fullname){
        error.fullname = "Name is Required.."
    }
    if(!values.email){
        error.email = "Email is Required..."
    } else if(!/\S+@\S+\.S+/.test(values.email)){
        error.email="Invalid email...."
    }

    if(!values.phone){
        error.phone = "Phone is Required.." 
    } 


  return error
   
  
}

export default Validation