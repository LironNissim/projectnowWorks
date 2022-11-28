import React from 'react';
import logotwo from '../Photos/logotwo.JPG';
import dogs from '../Photos/dogs.jpg'
import { TextField } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const Home = () => {
  return (
    <div>
      <div className="animate__animated animate__pulse"><img
        src={logotwo} className="center" alt="not found" /></div>

<div className="animate__animated animate__pulse"><img
        src={dogs} className="center" alt="not found" /></div>
        
      <Typography color="text.secondary" align="center"><h7>
        <LocationOnIcon />IBEN GABIROL ST. 165 TEL-AVIV  | 054-40440420 <WhatsAppIcon />| FREE SHIPPING</h7>
      </Typography>

      <br /><br /><br />


      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Dress Code by Liron Nissim
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>

  )
}
export default Home