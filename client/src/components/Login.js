import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email , setEmail]  = useState('')
    const [password , setPassword]  = useState('')
    const navigate = useNavigate()


    useEffect(()=>{
  const auth = localStorage.getItem("user")
  if(auth){
    navigate('/')
  }
    },[])

    const handleLogin = async()=>{
        console.warn("email , password" , email , password)
        let result = await fetch('http://localhost:5000/login' ,{
            method : 'POST',
            body : JSON.stringify({email , password}),
                headers:{
                    'Content-Type' : 'application/json'
                   }
        });
        result = await result.json()
        console.warn(result);

        if (result.auth) {
            localStorage.setItem("user",JSON.stringify(result.user));
            localStorage.setItem("token",JSON.stringify(result.auth));
            navigate("/")
        } else {
          alert('pls enter details..')  
        }

    }

  return (
    <>
       <div id="container">
        <div className="app-wrapper">
          <div>
            <h2 className="title">Login Account</h2>
          </div>
          <form className="form-wrapper">


            <div className="email">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder='Enter Name'
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
               
              />
             
            </div>

            <div className="password">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="Password"
                placeholder='Enter Password'
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
              
              />
             
            </div>

            <div>
              <button onClick={handleLogin} className="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login