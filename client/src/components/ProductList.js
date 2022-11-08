import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';

const ProductList = () => {

    const [products , setProducts] = useState([]);
    useEffect(()=>{
        getProducts()
    },[])

    const getProducts= async ()=>{
        let result = await fetch('http://localhost:5000/products' , {
          headers:{
            authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        });
        result = await result.json();
        setProducts(result)
    }

    const deleteProduct = async (id)=>{
    let result = await fetch(`http://localhost:5000/product/${id}` , {
      method:"DELETE",
      headers:{
        authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json()
    if(result)
    {
      alert('record is delete')
      getProducts()
    }

    }

    const updateProduct = async ()=>{
      let result = await fetch(``)
    }

    const searchHandle = async(event)=>{
      let key  = event.target.value;
      if(key) {
        let result = await fetch(`http://localhost:5000/search/${key}`, {
          headers:{
            authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        })
        result =  await result.json()
        if(result) {
          setProducts(result)
        }

      }else {
        getProducts()
      }
    
    }
   
  return (
    <>
     <h1>product list</h1>
     <div className='product_list'>
     <input type="text" name="" id="box" placeholder='search product' onChange={searchHandle} />
     <ul >
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
     </ul>  

    {
     products.length>0 ?  products.map((item , index)=>
        <ul >
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.category}</li>
        <li>{item.company}</li>
        <li >

        <NavLink to='/' onClick={()=>deleteProduct(item._id)} style={{color:"red"}}><DeleteIcon/></NavLink>
        <NavLink to={'/update/'+item._id} onClick={()=>updateProduct(item._id)} style={{color:"blue"}}><EditIcon/></NavLink>
        </li>
       
     </ul> 
        )
        : <h1 style={{fontFamily:"cursive" , color:"red"}}>No Result Found</h1>
    }

     </div> 


 

    </>
  )
}

export default ProductList