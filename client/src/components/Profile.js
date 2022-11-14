import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import imgpic from '../components/image/download.png'
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const Profile = () => {
 
  return (
    <>
      <div className="container mt-3">
     <h1 style={{fontWeight:400}}>Welcome Hamid Ali</h1>


     <Card sx={{ maxWidth: 600 }}>
      <CardContent>
      <div className="add_btn">
      <NavLink to={"/"}> <button className='btn btn-primary mx-2'><EditIcon/> </button> </NavLink>
     
        <button className='btn btn-danger'><DeleteIcon/> </button>
      </div>
      <div className="row">

      <div className="left_view col-lg-6 col-md-6 col-12">
      <img src={imgpic} alt="" />
        <h5 className='mt-3'>Name: <span >Hamid Ali</span></h5>
        
        <h5 className='mt-3'>Age: <span >24</span></h5>
        <p className='mt-3'> <MailOutlineIcon/> Email <span>ali.hamid@786gmail.com</span></p>
        <p className='mt-3'> <WorkIcon/> Employee <span>PHP Devloper</span></p>
      </div>
      <div className="right_view col-lg-6 col-md-6 col-12">
      
      <p className='mt-4'><SendToMobileIcon/>Mobile: <span>+91 989898983 </span> </p>
      <p className='mt-3'><FmdGoodIcon/>Location: <span> jalandhar </span> </p>

      </div>
      </div>
      
        
      </CardContent>
      </Card>

     </div>
    </>
    
  )
}

export default Profile