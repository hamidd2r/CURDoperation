import React, { useEffect, useState } from 'react'
import {NavLink, useNavigate, useParams} from 'react-router-dom';

const UpdateProduct = () => {
  const [name ,setName] = useState("")
  const [price ,setPrice] = useState("")
  const [category ,setCategory] = useState("")
  const [company ,setCompany] = useState("")
  const params = useParams()
  const navigate  = useNavigate();


  useEffect(() => {
  getProductDetails();
 // eslint-disable-next-line
 }, []);

const getProductDetails = async()=>{
 
  console.warn(params)
  let result = await fetch(`http://localhost:5000/product/${params.id}`, {
    headers:{
      authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  })
  result = await result.json()
 setName(result.name)
 setPrice(result.price)
 setCategory(result.category)
 setCompany(result.company)
 
}

  const updateProduct1 = async ()=>{
    navigate('/')
    console.warn(name , price , category , company);
    let result = fetch(`http://localhost:5000/product/${params.id}` ,{
      method:'PUT' , 
      body: JSON.stringify({name , price , category , company}),
     headers:{
      'Content-Type' :'application/json',
      authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
     }
    
    })

     result = await (await result).json()
     console.warn(result)
    
    

  }
 
  return (
    <>
  <div id="container">
        <div className="app-wrapper">
          <div>
            <h2 className="title">Update Product</h2>
          </div>
          <form className="form-wrapper">

            <div className="name">
              <input
                className="input"
                type="text"
                placeholder='Enter product name'
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
              />
            </div>

            <div className="email">
              <input
                className="input"
               placeholder='Enter product price'
               value={price}
               onChange={(e)=>{setPrice(e.target.value)}}
              />
            </div>

            <div className="password">
              <input
                className="input"
                type="text"
                placeholder='enter product category'
                value={category}
                onChange={(e)=>{setCategory(e.target.value)}}
              />
            </div>

            <div className="name">
              <input
                className="input"
                type="text"
                placeholder='enter product company'
                value={company}
                onChange={(e)=>{setCompany(e.target.value)}}
              />
            </div>

             


            <div>
              <button  className="submit" onClick={updateProduct1}>
               Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
  // navigate('/')

}

export default UpdateProduct