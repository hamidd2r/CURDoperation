import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name , setName] = useState("")
    const [password , setPassword] = useState("")
    const [email , setEmail] = useState("")
   
    const navigate  = useNavigate();
    useEffect(()=>{
     
      const auth = localStorage.getItem('user');
      if(auth)
      {
        navigate('/login')
        // <NavLink to='/'></NavLink>
      }

    })

    const collectData = async()=>{
        console.warn(name ,email, password)
        let result = await fetch('http://localhost:5000/register', {
           method :'POST',
           body: JSON.stringify({name ,email, password}),
           headers:{
            'Content-Type' : 'application/json'
           }
        })
        result = await result.json()
        console.warn(result)
        localStorage.setItem("user" , JSON.stringify(result.result)) // save localstorage
        localStorage.setItem("token" , JSON.stringify(result.auth)) // save localstorage
        if(result){
          navigate('/')
        }
    }
  return (
    <>
         <div id="container">
        <div className="app-wrapper">
          <div>
            <h2 className="title">Register</h2>
          </div>
          <form className="form-wrapper">
            <div className="name">
              <label className="label">Full Name</label>
              <input
                className="input"
                type="text"
                value={name}
             onChange={(e)=> setName(e.target.value)}
                placeholder='enter full name'
              />
            </div>

             <div className="email">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                value={email}
             onChange={(e)=> setEmail(e.target.value)}
                placeholder='enter email '
              />
            </div> 

            <div className="password">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                value={password}
             onChange={(e)=> setPassword(e.target.value)}
                placeholder='enter password'
              />
            </div> 
            <div>
              <button className="submit" onClick={collectData} >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup