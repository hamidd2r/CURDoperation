import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
const Home = () => {

  const [getuserdata , setUserData] = useState([]);
  console.log(getuserdata)

  const getdata = async(e)=>{
    const res = await fetch('/getdata' ,{
      method:"GET",
      headers:{
    "Content-Type":"application/json"
      }
    });

    const data = await res.json()
    console.log(data)

    if(res.status === 422 || !data){
    
     console.log("error") 
    }
    else{
      setUserData(data)
      console.log("get data")
    }
  }

  useEffect(()=>{
    getdata()
  },[])


  const deleteuser = async(id)=>{
    const res2 = await fetch(`/deleteuser/${id}`, {
      method:"DELETE",
      headers:{
    "Content-Type":"application/json"
      }

    })

    const deletedata = await res2.json()
    console.log(deletedata)

    if(res2.status === 422 || !deletedata){
      console.log("error")

    } else {
      console.log("user delete")
      getdata();
    }
  }


  return (
    <>
    {/* <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Success!</strong> Employee added successful...
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> */}

     <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
    <NavLink  to="/addemployee"><button class="btn btn-outline-secondary">Add Employee</button></NavLink> 
        </div>


        <table class="table mt-5">
  <thead>
    <tr className='table-dark'>
      <th scope="col">Id</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Job Profile</th>
      <th scope="col">Phone</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>hamid</td>
      {/* <td>{getdata.name}</td> */}
      <td>hamid@gmail.com</td>
      <td>web devloper</td>
      <td>78665554433</td>
      <td className= "d-flex justify-content-between" >
      <NavLink to={"/view/:id"}><button className='btn btn-success'><RemoveRedEyeIcon/></button></NavLink>
      <NavLink to={"/edit/:id"}><button className='btn btn-primary'><EditIcon/> </button></NavLink>  
      {/* `edit/${element._id}` */}
        
        <button className='btn btn-danger' onClick={()=>deleteuser(Element._id)}><DeleteIcon/> </button>
      </td>
    </tr>
  </tbody>
</table>

      </div>
     </div>
    </>
  )
}

export default Home