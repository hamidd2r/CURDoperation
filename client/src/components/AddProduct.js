import React, { useState } from 'react'

const AddProduct = () => {
  const [name ,setName] = useState("")
  const [price ,setPrice] = useState("")
  const [category ,setCategory] = useState("")
  const [company ,setCompany] = useState("")
  const [error ,setErrors] = useState(false)

  const addProduct = async ()=>{
    console.warn(!name);
    if(!name,!price,!category,!company){
      setErrors(true)
      return false
    }
    console.warn(name , price , category , company)

    const userId =JSON.parse(localStorage.getItem('user'))._id;

    let result = await fetch('http://localhost:5000/add-product' , {
      method:'POST',
      body:JSON.stringify({name , price , category , company, userId}),
      headers:{
        'Content-Type': 'application/json',
        authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });

    result = await result.json()
    console.warn(result)

  }
  return (
    <>
  <div id="container">
        <div className="app-wrapper">
          <div>
            <h2 className="title">Add Product</h2>
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
             {error && !name && <span style={{color:"red"}}>enter valid name</span>}
            </div>

            <div className="email">
              <input
                className="input"
               placeholder='Enter product price'
               value={price}
               onChange={(e)=>{setPrice(e.target.value)}}
              />
              {error && !price && <span style={{color:"red"}}>enter valid price</span>}
            </div>

            <div className="password">
              <input
                className="input"
                type="text"
                placeholder='enter product category'
                value={category}
                onChange={(e)=>{setCategory(e.target.value)}}
              />
              {error && !category && <span style={{color:"red"}}>enter valid category</span>}
            </div>

            <div className="name">
              <input
                className="input"
                type="text"
                placeholder='enter product company'
                value={company}
                onChange={(e)=>{setCompany(e.target.value)}}
              />
              {error && !company && <span style={{color:"red"}}>enter valid company</span>}
            </div>

             


            <div>
              <button className="submit" onClick={addProduct}>
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddProduct