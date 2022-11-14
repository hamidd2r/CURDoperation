import React, { useEffect } from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'
import imgpic from '../components/image/logo.jpeg'
const Navbar = () => {
  const auth = localStorage.getItem('user' )
  const navigate = useNavigate()

  const logout = ()=>{
   localStorage.clear()
   navigate('/signup')
  }
  return (
    <>
     <header>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img style={{width:60 , height:50}} src={imgpic} alt=""  /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
    { auth ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Products</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/add">Add Product</NavLink>
        </li>

        {/* <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/update">Update Product</NavLink>
        </li> */}

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/profile">Profile</NavLink>
        </li>
        

        
        <li className="nav-item">                      
                                                                                                {/* //({JSON.parse(auth).name}) */}
          <NavLink onClick={logout} className="nav-link active" aria-current="page" to="/signup">Logout</NavLink>
        </li>
       
        </ul>
           :
        <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/signup">Signup</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/signup">Login</NavLink>
        </li>
        </ul>
    }


    </div>
  </div>  
</nav>   
     </header>
    </>
  )
}

export default Navbar